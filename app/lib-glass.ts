
/**
 * Liquid Glass com refração (técnica do Kube.io e do tutorial do dev.to).
 *
 * Para cada elemento com `data-glass`, gera um mapa de deslocamento sob medida para o
 * tamanho e o arredondamento dele: perto das bordas, o que está atrás do vidro é desviado
 * para dentro, como numa lente. O mapa vira um filtro SVG aplicado com
 * `backdrop-filter: url(#...)`.
 *
 * Só ativa em navegadores baseados em Chromium, que aplicam filtros SVG no backdrop.
 * Nos demais, fica o vidro fosco do CSS (desfoque + brilho na borda).
 */
const SVGNS = 'http://www.w3.org/2000/svg';

function makeMap(w: number, h: number, radius: number, band: number) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const ctx = c.getContext('2d')!;
  const img = ctx.createImageData(w, h);
  const r = Math.min(radius, h / 2, w / 2);
  // Distância até a borda de um retângulo arredondado (negativa dentro)
  const sd = (x: number, y: number) => {
    const qx = Math.abs(x - w / 2) - (w / 2 - r), qy = Math.abs(y - h / 2) - (h / 2 - r);
    return Math.min(Math.max(qx, qy), 0) + Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) - r;
  };
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const d = -sd(x + 0.5, y + 0.5);
    let dx = 0, dy = 0;
    if (d > 0 && d < band) {
      const t = 1 - d / band;
      const m = t * t * (3 - 2 * t);
      const gx = sd(x + 1.5, y + 0.5) - sd(x - 0.5, y + 0.5);
      const gy = sd(x + 0.5, y + 1.5) - sd(x + 0.5, y - 0.5);
      const l = Math.hypot(gx, gy) || 1;
      dx = (-gx / l) * m; dy = (-gy / l) * m;
    }
    const i = (y * w + x) * 4;
    img.data[i] = 128 + dx * 127; img.data[i + 1] = 128 + dy * 127; img.data[i + 2] = 128; img.data[i + 3] = 255;
  }
  ctx.putImageData(img, 0, 0);
  return c.toDataURL();
}

export function initGlass(): () => void {
  {
    const ua = navigator.userAgent;
    if (!(/Chrome|Chromium|Edg\//.test(ua)) || /Firefox/.test(ua)) return () => {};

    const svg = document.createElementNS(SVGNS, 'svg');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('width', '0'); svg.setAttribute('height', '0');
    svg.style.position = 'absolute';
    const defs = document.createElementNS(SVGNS, 'defs');
    svg.appendChild(defs);
    document.body.appendChild(svg);

    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-glass]'));
    const build = () => {
      defs.innerHTML = '';
      els.forEach((el, n) => {
        const w = Math.round(el.offsetWidth), h = Math.round(el.offsetHeight);
        if (!w || !h) return;
        const radius = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
        const band = Math.min(h / 2, w / 2, 44);
        const strength = Number(el.dataset.glass) || 1;
        const id = `glass-${n}`;
        const f = document.createElementNS(SVGNS, 'filter');
        f.setAttribute('id', id);
        f.setAttribute('x', '0'); f.setAttribute('y', '0');
        f.setAttribute('width', String(w)); f.setAttribute('height', String(h));
        f.setAttribute('filterUnits', 'userSpaceOnUse');
        f.setAttribute('color-interpolation-filters', 'sRGB');
        f.innerHTML =
          `<feImage href="${makeMap(w, h, radius, band)}" x="0" y="0" width="${w}" height="${h}" preserveAspectRatio="none" result="map"/>` +
          `<feGaussianBlur in="SourceGraphic" stdDeviation="${1.2 * strength}" result="soft"/>` +
          `<feDisplacementMap in="soft" in2="map" scale="${band * 0.9 * strength}" xChannelSelector="R" yChannelSelector="G" result="bent"/>` +
          `<feColorMatrix in="bent" type="saturate" values="1.6"/>`;
        defs.appendChild(f);
        el.style.setProperty('backdrop-filter', `url(#${id})`);
        el.style.setProperty('-webkit-backdrop-filter', `url(#${id})`);
      });
      document.documentElement.classList.add('refraction');
    };
    build();
    let t: number | undefined;
    const onResize = () => { window.clearTimeout(t); t = window.setTimeout(build, 200); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('resize', onResize); svg.remove(); };
  }
}
