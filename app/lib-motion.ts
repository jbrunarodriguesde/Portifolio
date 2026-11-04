
/**
 * Animações com GSAP + ScrollTrigger.
 * Regra de ouro: o HTML já nasce visível. As animações só começam quando o script carrega,
 * e nada roda para quem pediu menos movimento no sistema.
 */
export function initMotion(): () => void {
  {
    const root = document.documentElement;
    // Liquid Glass com refração só onde o navegador aplica filtros SVG no backdrop (Chromium).
    const ua = navigator.userAgent;
    if (/Chrome|Chromium|Edg\//.test(ua) && !/Firefox/.test(ua)) root.classList.add('refraction');

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return () => {};

    let cleanup = () => {};
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      root.classList.add('motion');

      const ctx = gsap.context(() => {
        // 1. Entrada do topo: linhas do título sobem por trás de uma máscara
        gsap.timeline({ defaults: { ease: 'power4.out' } })
          .from('.hero-line > span', { yPercent: 110, duration: 1.1, stagger: 0.09 })
          .from('.hero-meta > *', { y: 18, opacity: 0, duration: 0.8, stagger: 0.06 }, '-=0.7')
          .from('.hero-shots .shot', { y: 60, opacity: 0, duration: 1.1, stagger: 0.12 }, '-=0.9');

        // 2. Lente de vidro que segue o cursor sobre o título
        const lens = document.querySelector<HTMLElement>('.lens');
        const hero = document.querySelector<HTMLElement>('.hero');
        if (lens && hero && window.matchMedia('(pointer: fine)').matches) {
          const qx = gsap.quickTo(lens, 'x', { duration: 0.8, ease: 'power3' });
          const qy = gsap.quickTo(lens, 'y', { duration: 0.8, ease: 'power3' });
          hero.addEventListener('pointermove', (e: PointerEvent) => {
            const r = hero.getBoundingClientRect();
            qx(e.clientX - r.left - lens.offsetWidth / 2);
            qy(e.clientY - r.top - lens.offsetHeight / 2);
          });
        } else if (lens) {
          gsap.to(lens, { x: '+=140', y: '+=50', duration: 6, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        }

        // 3. Capturas do topo em paralaxe
        gsap.utils.toArray<HTMLElement>('.hero-shots .shot').forEach((el, i) => {
          gsap.to(el, { yPercent: -16 - i * 14, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
        });

        // 4. Letreiro: a velocidade acompanha a rolagem
        const marquee = gsap.to('.marquee-track', { xPercent: -50, duration: 30, ease: 'none', repeat: -1 });
        ScrollTrigger.create({
          onUpdate: self => {
            const v = Math.min(Math.abs(self.getVelocity()) / 400, 4);
            gsap.to(marquee, { timeScale: (self.direction === 1 ? 1 : -1) * (1 + v), duration: 0.3, overwrite: true });
          },
        });

        // 5. Blocos que entram ao rolar
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
          gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } });
        });

        // 6. Benefícios: cada frase acende conforme a rolagem
        gsap.utils.toArray<HTMLElement>('.benefit').forEach(el => {
          gsap.fromTo(el, { opacity: 0.22 }, { opacity: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 78%', end: 'top 48%', scrub: true } });
        });

        // 7. Galeria horizontal fixada (telas largas)
        const mm = gsap.matchMedia();
        mm.add('(min-width: 900px)', () => {
          const track = document.querySelector<HTMLElement>('.h-track');
          const wrap = document.querySelector<HTMLElement>('.h-gallery');
          if (!track || !wrap) return;
          root.classList.add('h-pinned');
          const dist = () => track.scrollWidth - wrap.clientWidth;
          const tween = gsap.to(track, {
            x: () => -dist(), ease: 'none',
            scrollTrigger: { trigger: wrap, start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true },
          });
          gsap.utils.toArray<HTMLElement>('.h-card .h-shot img').forEach(img => {
            gsap.fromTo(img, { scale: 1.15 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: img, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
          });
          return () => root.classList.remove('h-pinned');
        });

        // 8. Grade 3D das landing pages: deitada, se endireita ao rolar (ideia das grades da Codrops)
        mm.add('(min-width: 900px)', () => {
        gsap.fromTo('.grid3d', { rotateX: 40, scale: 0.84, yPercent: 8 }, {
          rotateX: 0, scale: 1, yPercent: 0, ease: 'none',
          scrollTrigger: { trigger: '.grid3d-wrap', start: 'top bottom', end: 'center 55%', scrub: true },
        });
        gsap.utils.toArray<HTMLElement>('.grid3d .tile').forEach((t, i) => {
          gsap.fromTo(t, { z: -260 - (i % 2) * 180, opacity: 0.25 }, { z: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: '.grid3d-wrap', start: 'top bottom', end: 'center 55%', scrub: true } });
        });
        });

        // 9. Números contando
        gsap.utils.toArray<HTMLElement>('[data-count]').forEach(el => {
          const final = Number(el.dataset.count);
          const obj = { v: 0 };
          gsap.to(obj, { v: final, duration: 1.6, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' }, onUpdate: () => { el.textContent = String(Math.round(obj.v)); } });
        });

        // 10. Etapas: a linha do processo se preenche e a etapa atual acende
        gsap.fromTo('.steps-progress span', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 65%', end: 'bottom 60%', scrub: true } });
        gsap.utils.toArray<HTMLElement>('.step').forEach(s => {
          ScrollTrigger.create({ trigger: s, start: 'top 62%', end: 'bottom 62%', toggleClass: 'is-on' });
        });
      });

      cleanup = () => ctx.revert();
    })();

    return () => cleanup();
  }
}
