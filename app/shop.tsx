'use client';
import { useEffect, useRef, useState } from 'react';
import { shopJourney } from './content';

/**
 * Jornada de compra da loja Vértice, tela por tela.
 * Telas largas: cada etapa ocupa uma faixa da rolagem e a tela ao lado troca sozinha (palco fixo).
 * Celular: as etapas viram abas. Sem JavaScript, a primeira tela e todos os textos aparecem.
 */
export default function Shop() {
  const [ativo, setAtivo] = useState(0);
  const lista = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const ol = lista.current;
    if (!ol || !window.matchMedia('(min-width: 901px)').matches) return;
    const itens = Array.from(ol.querySelectorAll<HTMLElement>('[data-step]'));
    const io = new IntersectionObserver(entradas => {
      entradas.forEach(e => { if (e.isIntersecting) setAtivo(Number((e.target as HTMLElement).dataset.step)); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    itens.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  function escolher(i: number) {
    setAtivo(i);
    // Em telas largas, leva a rolagem até a etapa escolhida
    if (window.matchMedia('(min-width: 901px)').matches) {
      const el = lista.current?.querySelector<HTMLElement>(`[data-step="${i}"]`);
      if (!el) return;
      const r = el.getBoundingClientRect();
      const y = window.scrollY + r.top - (window.innerHeight - r.height) / 2;
      const lenis = (window as unknown as { __lenis?: { scrollTo: (y: number, o?: { duration?: number }) => void } }).__lenis;
      if (lenis) lenis.scrollTo(y, { duration: 0.8 }); else window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  const etapa = shopJourney[ativo];

  return (
    <div className="shop-journey">
      <div className="shop-stage" aria-live="polite">
        <div className="shop-browser">
          <div className="h-bar frost"><span className="dots"><i /><i /><i /></span><span>vértice · {etapa.title.toLowerCase()}</span></div>
          <div className="shop-screen">
            {shopJourney.map((s, i) => (
              <img key={s.image} src={s.image} width={1200} height={750} loading={i === 0 ? 'eager' : 'lazy'} decoding="async"
                alt={i === ativo ? s.alt : ''} aria-hidden={i !== ativo} className={i === ativo ? 'is-active' : ''} />
            ))}
          </div>
        </div>
        <figure className="shop-phone" aria-hidden="true"><img src="/projetos/loja-celular.webp" alt="" width={780} height={1328} loading="lazy" /></figure>
        <div className="shop-dots" aria-hidden="true">{shopJourney.map((s, i) => <i key={s.title} className={i === ativo ? 'is-on' : ''} />)}</div>
      </div>

      <ol className="shop-steps" ref={lista} aria-label="Etapas de uma compra na loja">
        {shopJourney.map((s, i) => (
          <li key={s.title} data-step={i} className={i === ativo ? 'is-active' : ''}>
            <button type="button" aria-pressed={i === ativo} onClick={() => escolher(i)}>
              <span className="mono">0{i + 1}</span>
              <span className="shop-step-title">{s.title}</span>
            </button>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
