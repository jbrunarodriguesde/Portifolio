'use client';
import { useState } from 'react';
import type { Project } from './content';
import { Icon } from './icons';

/** Vitrine do topo: abas com projetos reais e uma janela de navegador com a captura de cada um. */
export default function HeroShowcase({ items }: { items: Project[] }) {
  const [ativo, setAtivo] = useState(0);
  const p = items[ativo];

  function teclas(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const prox = (ativo + (e.key === 'ArrowRight' ? 1 : -1) + items.length) % items.length;
    setAtivo(prox);
    document.getElementById(`aba-${items[prox].id}`)?.focus();
  }

  return (
    <div className="showcase">
      <div className="showcase-head">
        <span>Projetos desenvolvidos</span>
        <a href={p.url} target="_blank" rel="noopener noreferrer">
          Acessar projeto <Icon name="external" size={14} /><span className="sr-only"> {p.name} (abre em nova aba)</span>
        </a>
      </div>
      <div className="tabs" role="tablist" aria-label="Projetos desenvolvidos" onKeyDown={teclas}>
        {items.map((it, i) => (
          <button key={it.id} id={`aba-${it.id}`} role="tab" type="button" aria-selected={i === ativo}
            aria-controls="vitrine" tabIndex={i === ativo ? 0 : -1} onClick={() => setAtivo(i)}
            className={i === ativo ? 'tab is-active' : 'tab'}>
            {it.name}
          </button>
        ))}
      </div>
      <figure className="browser" id="vitrine" role="tabpanel" aria-labelledby={`aba-${p.id}`}>
        <div className="browser-bar">
          <span className="dots" aria-hidden="true"><i /><i /><i /></span>
          <span className="address"><Icon name="search" size={12} /> {p.urlLabel}</span>
        </div>
        <div className="browser-view">
          {/* Todas as imagens ficam no DOM para a troca de aba ser instantânea */}
          {items.map((it, i) => (
            <img key={it.id} src={it.image} alt={i === ativo ? it.alt : ''} aria-hidden={i !== ativo}
              width={800} height={600} loading={i === 0 ? 'eager' : 'lazy'} className={i === ativo ? 'is-active' : ''} />
          ))}
          <figcaption className="browser-caption">
            <span className="pill pill-dark">{p.tag}</span>
            <strong>{p.name}</strong>
            <a className="btn btn-primary btn-sm" href={p.url} target="_blank" rel="noopener noreferrer">
              Acessar <Icon name="external" size={14} /><span className="sr-only"> {p.name} (abre em nova aba)</span>
            </a>
          </figcaption>
        </div>
      </figure>
      <div className="showcase-foot">
        <span><Icon name="phone" size={14} /> Ajustado para celular e computador</span>
        <span>Projeto real publicado</span>
      </div>
    </div>
  );
}
