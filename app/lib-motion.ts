/**
 * Motor de animação "slow motion": GSAP + ScrollTrigger + SplitText + Lenis.
 *
 * Regras:
 * - O HTML nasce visível. Estados iniciais são aplicados só pelo GSAP, depois que o script carrega.
 * - Quem pede "reduzir movimento" no sistema não recebe nenhuma animação.
 * - Efeitos de mouse (cursor, ímã, lente) só em telas com ponteiro fino.
 */
const SLOW = 'expo.out';

export function initMotion(): () => void {
  const root = document.documentElement;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return () => {};

  let cleanup = () => {};
  (async () => {
    const [{ gsap }, { ScrollTrigger }, { SplitText }, { default: Lenis }] = await Promise.all([
      import('gsap'), import('gsap/ScrollTrigger'), import('gsap/SplitText'), import('lenis'),
    ]);
    gsap.registerPlugin(ScrollTrigger, SplitText);
    root.classList.add('motion');
    const fine = window.matchMedia('(pointer: fine)').matches;
    const wide = window.matchMedia('(min-width: 900px)').matches;

    // ---------- Rolagem com inércia (a sensação de câmera lenta) ----------
    const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1, smoothWheel: true });
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
    // Âncoras internas também deslizam devagar
    const onAnchor = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute('href')!;
      const el = id === '#' ? null : document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el as HTMLElement, { offset: -90, duration: 0.8, easing: (t: number) => 1 - Math.pow(1 - t, 4) });
    };
    document.addEventListener('click', onAnchor);

    const ctx = gsap.context(() => {
      // ---------- 1. Abertura: cortina sobe e o título nasce letra por letra ----------
      const curtain = document.createElement('div');
      curtain.className = 'curtain';
      curtain.innerHTML = '<span>br<i>.</i></span>';
      document.body.appendChild(curtain);

      const title = new SplitText('.hero-title .hero-line > span', { type: 'chars', charsClass: 'char' });
      const intro = gsap.timeline({ defaults: { ease: SLOW } });
      intro
        .from(curtain.querySelector('span'), { yPercent: 120, duration: 0.55, ease: 'power3.out' })
        .to(curtain.querySelector('span'), { yPercent: -120, duration: 0.45, ease: 'power3.in' }, '+=0.05')
        .to(curtain, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' }, '-=0.2')
        .from(title.chars, { yPercent: 115, rotate: 6, duration: 0.8, stagger: 0.022 }, '-=0.55')
        .from('.hero-top', { y: 20, opacity: 0, duration: 0.9 }, '<0.2')
        .from('.hero-meta > *', { y: 36, opacity: 0, duration: 1.0, stagger: 0.12 }, '<0.35')
        .from('.hero-shots .shot', { y: 140, opacity: 0, rotate: 0, scale: 0.9, duration: 0.9, stagger: 0.1 }, '<')
        .from('.nav', { y: -40, opacity: 0, duration: 0.9 }, '<0.2')
        .add(() => curtain.remove());

      // Título se afasta devagar ao rolar
      gsap.to('.hero-title', { yPercent: -18, scale: 0.94, opacity: 0.35, ease: 'none', transformOrigin: '0% 100%',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.7 } });
      gsap.utils.toArray<HTMLElement>('.hero-shots .shot').forEach((el, i) => {
        gsap.to(el, { yPercent: -30 - i * 22, rotate: (i - 1) * 6, ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.8 } });
      });

      // Aurora acompanha o mouse em câmera lenta
      if (fine) {
        const blobs = gsap.utils.toArray<HTMLElement>('.hero .aurora i');
        const movers = blobs.map((b, i) => ({
          x: gsap.quickTo(b, 'x', { duration: 3 + i, ease: 'power2.out' }),
          y: gsap.quickTo(b, 'y', { duration: 3 + i, ease: 'power2.out' }),
        }));
        window.addEventListener('pointermove', e => {
          const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
          movers.forEach((m, i) => { m.x(nx * (120 + i * 60)); m.y(ny * (90 + i * 40)); });
        });
      }

      // ---------- 2. Lente de vidro ----------
      const lens = document.querySelector<HTMLElement>('.lens');
      const hero = document.querySelector<HTMLElement>('.hero');
      if (lens && hero && fine) {
        const qx = gsap.quickTo(lens, 'x', { duration: 0.9, ease: 'power3' });
        const qy = gsap.quickTo(lens, 'y', { duration: 0.9, ease: 'power3' });
        hero.addEventListener('pointermove', e => {
          const r = hero.getBoundingClientRect();
          qx(e.clientX - r.left - lens.offsetWidth / 2);
          qy(e.clientY - r.top - lens.offsetHeight / 2);
        });
      }

      // ---------- 3. Cursor de vidro e botões magnéticos ----------
      const cursor = document.querySelector<HTMLElement>('.cursor');
      if (cursor && fine) {
        root.classList.add('has-cursor');
        const cx = gsap.quickTo(cursor, 'x', { duration: 0.7, ease: 'power3' });
        const cy = gsap.quickTo(cursor, 'y', { duration: 0.7, ease: 'power3' });
        window.addEventListener('pointermove', e => { cx(e.clientX); cy(e.clientY); });
        const label = cursor.querySelector('.cursor-label') as HTMLElement;
        document.querySelectorAll<HTMLElement>('a, button, label.opt, summary').forEach(el => {
          el.addEventListener('pointerenter', () => cursor.classList.add('is-link'));
          el.addEventListener('pointerleave', () => cursor.classList.remove('is-link'));
        });
        document.querySelectorAll<HTMLElement>('.h-shot, .seg-visual, .shot').forEach(el => {
          el.addEventListener('pointerenter', () => { label.textContent = 'Ver'; cursor.classList.add('is-view'); });
          el.addEventListener('pointerleave', () => cursor.classList.remove('is-view'));
        });
      }
      if (fine) {
        document.querySelectorAll<HTMLElement>('.button.primary, .nav-cta, .wa-float, .glass-btn').forEach(btn => {
          const mx = gsap.quickTo(btn, 'x', { duration: 1.1, ease: 'elastic.out(1, 0.4)' });
          const my = gsap.quickTo(btn, 'y', { duration: 1.1, ease: 'elastic.out(1, 0.4)' });
          btn.addEventListener('pointermove', e => {
            const r = btn.getBoundingClientRect();
            mx((e.clientX - r.left - r.width / 2) * 0.28);
            my((e.clientY - r.top - r.height / 2) * 0.4);
          });
          btn.addEventListener('pointerleave', () => { mx(0); my(0); });
        });
      }

      // ---------- 4. Letreiro com inércia e inclinação pela velocidade ----------
      const marquee = gsap.to('.marquee-track', { xPercent: -50, duration: 42, ease: 'none', repeat: -1 });
      const skew = gsap.quickTo('.marquee-track', 'skewX', { duration: 0.8, ease: 'power3' });
      ScrollTrigger.create({
        onUpdate: self => {
          const v = self.getVelocity();
          gsap.to(marquee, { timeScale: (self.direction === 1 ? 1 : -1) * (1 + Math.min(Math.abs(v) / 500, 3)), duration: 0.6, overwrite: true });
          skew(gsap.utils.clamp(-10, 10, v / -180));
        },
      });

      // ---------- 5. Manifesto: cada palavra acende devagar ----------
      const mani = new SplitText('.manifesto-text', { type: 'words', wordsClass: 'word' });
      gsap.fromTo(mani.words, { opacity: 0.12, y: 12 }, {
        opacity: 1, y: 0, stagger: 0.08, ease: 'none',
        scrollTrigger: { trigger: '.manifesto', start: 'top 80%', end: 'bottom 45%', scrub: 0.8 },
      });

      // ---------- 6. Títulos de seção: linhas sobem por trás de máscaras ----------
      gsap.utils.toArray<HTMLElement>('.h2, .contact-title').forEach(h => {
        const st = new SplitText(h, { type: 'lines', linesClass: 'line', mask: 'lines' });
        gsap.from(st.lines, { yPercent: 110, duration: 1.1, stagger: 0.09, ease: SLOW, scrollTrigger: { trigger: h, start: 'top 85%' } });
      });
      gsap.utils.toArray<HTMLElement>('.label:not(.hero-top)').forEach(l => {
        gsap.from(l, { x: -30, opacity: 0, duration: 0.9, ease: SLOW, scrollTrigger: { trigger: l, start: 'top 90%' } });
      });
      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach(el => {
        gsap.from(el, { y: 70, opacity: 0, duration: 1.1, ease: SLOW, scrollTrigger: { trigger: el, start: 'top 88%' } });
      });

      // ---------- 7. Problemas: cartões que se empilham ----------
      const problems = document.querySelector<HTMLElement>('.problems');
      if (problems && wide) {
        problems.classList.add('stack');
        gsap.utils.toArray<HTMLElement>('.problems li').forEach(c => gsap.from(c, { y: 120, opacity: 0, duration: 1.1, ease: SLOW, scrollTrigger: { trigger: c, start: 'top 92%' } }));
        const cards = gsap.utils.toArray<HTMLElement>('.problems li');
        cards.forEach((c, i) => {
          c.style.setProperty('--i', String(i));
          if (i < cards.length - 1) {
            gsap.to(c, { scale: 0.9 - (cards.length - i) * 0.01, opacity: 0.45, ease: 'none',
              scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 30%', scrub: 0.7 } });
          }
        });
        ScrollTrigger.refresh();
      }

      // ---------- 8. Benefícios: acendem em sequência lenta ----------
      gsap.utils.toArray<HTMLElement>('.benefit').forEach(el => {
        gsap.fromTo(el, { opacity: 0.15, x: 60 }, { opacity: 1, x: 0, ease: 'none',
          scrollTrigger: { trigger: el, start: 'top 85%', end: 'top 50%', scrub: 0.8 } });
      });

      // ---------- 9. Imagens reveladas por cortina, com zoom lento ----------
      gsap.utils.toArray<HTMLElement>('.seg-visual, .facts-card').forEach(el => {
        gsap.fromTo(el, { clipPath: 'inset(18% 12% 18% 12% round 26px)' }, { clipPath: 'inset(0% 0% 0% 0% round 0px)', duration: 0.9, ease: 'expo.inOut',
          scrollTrigger: { trigger: el, start: 'top 80%' } });
      });
      gsap.utils.toArray<HTMLElement>('.seg-visual img').forEach(img => {
        gsap.fromTo(img, { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '.seg-visual', start: 'top bottom', end: 'bottom top', scrub: 0.8 } });
      });
      gsap.from('.seg-tab', { y: 30, opacity: 0, duration: 0.9, stagger: 0.07, ease: SLOW, scrollTrigger: { trigger: '.seg-tabs', start: 'top 88%' } });

      // ---------- 10. Itens inclusos: o "check" se desenha ----------
      gsap.utils.toArray<HTMLElement>('.included li').forEach((li, i) => {
        const path = li.querySelector('path');
        const tl = gsap.timeline({ scrollTrigger: { trigger: li, start: 'top 90%' } });
        tl.from(li, { y: 50, opacity: 0, duration: 1.0, ease: SLOW, delay: (i % 4) * 0.12 });
        if (path) {
          const len = (path as SVGPathElement).getTotalLength();
          tl.fromTo(path, { strokeDasharray: len, strokeDashoffset: len }, { strokeDashoffset: 0, duration: 0.8, ease: 'power2.inOut' }, '-=0.6');
        }
      });

      // ---------- 11. Galeria horizontal, mais lenta e com leve inclinação ----------
      const mm = gsap.matchMedia();
      mm.add('(min-width: 900px)', () => {
        const track = document.querySelector<HTMLElement>('.h-track');
        const wrap = document.querySelector<HTMLElement>('.h-gallery');
        if (!track || !wrap) return;
        root.classList.add('h-pinned');
        const dist = () => track.scrollWidth - wrap.clientWidth;
        const tween = gsap.to(track, {
          x: () => -dist(), ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top top', end: () => '+=' + dist() * 1.1, pin: true, scrub: 1, invalidateOnRefresh: true },
        });
        gsap.utils.toArray<HTMLElement>('.h-card').forEach(card => {
          gsap.fromTo(card, { rotateY: -14, z: -120, opacity: 0.4 }, { rotateY: 0, z: 0, opacity: 1, ease: 'none',
            scrollTrigger: { trigger: card, containerAnimation: tween, start: 'left 95%', end: 'left 35%', scrub: true } });
        });
        gsap.utils.toArray<HTMLElement>('.h-card .h-shot img').forEach(img => {
          gsap.fromTo(img, { scale: 1.3, xPercent: -6 }, { scale: 1, xPercent: 6, ease: 'none',
            scrollTrigger: { trigger: img, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } });
        });
        return () => root.classList.remove('h-pinned');
      });

      // ---------- 12. Números contando devagar ----------
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach(el => {
        const final = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.from(el, { yPercent: 60, opacity: 0, duration: 1.4, ease: SLOW, scrollTrigger: { trigger: el, start: 'top 88%' } });
        gsap.to(obj, { v: final, duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)); } });
      });

      // ---------- 13. Etapas ----------
      gsap.fromTo('.steps-progress span', { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.steps', start: 'top 65%', end: 'bottom 60%', scrub: 0.8 } });
      gsap.utils.toArray<HTMLElement>('.step').forEach(s => {
        ScrollTrigger.create({ trigger: s, start: 'top 62%', end: 'bottom 62%', toggleClass: 'is-on' });
      });

      // ---------- 14. Pedido guiado: opções entram em cascata ----------
      gsap.from('.cities li', { scale: 0.6, opacity: 0, duration: 0.8, stagger: 0.05, ease: 'back.out(1.6)', scrollTrigger: { trigger: '.cities', start: 'top 85%' } });

      // ---------- 15. Chamada final e assinatura ----------
      gsap.fromTo('.contact-card', { scale: 0.86, yPercent: 10 }, { scale: 1, yPercent: 0, ease: 'none', scrollTrigger: { trigger: '.contact', start: 'top bottom', end: 'center center', scrub: 0.8 } });
      gsap.fromTo('.wordmark span', { yPercent: 100 }, { yPercent: 0, stagger: 0.12, ease: 'none', scrollTrigger: { trigger: '.wordmark', start: 'top bottom', end: 'bottom bottom', scrub: 0.8 } });

      // Barra de progresso da rolagem
      const bar = document.createElement('div');
      bar.className = 'progress';
      document.body.appendChild(bar);
      gsap.to(bar, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.4 } });
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);
    document.fonts?.ready.then(refresh);
    window.setTimeout(refresh, 1500);

    cleanup = () => {
      window.removeEventListener('load', refresh);
      ctx.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      document.removeEventListener('click', onAnchor);
      document.querySelectorAll('.curtain, .progress').forEach(n => n.remove());
    };
  })();

  return () => cleanup();
}
