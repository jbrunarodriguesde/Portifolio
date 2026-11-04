'use client';
import { useState } from 'react';
import { segments, whatsapp } from './content';

/** "Qual é o seu negócio?": o visitante escolhe o segmento e vê um exemplo real e o botão certo. */
export default function Segments() {
  const [ativo, setAtivo] = useState(0);
  const s = segments[ativo];

  function teclas(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const n = (ativo + (e.key === 'ArrowRight' ? 1 : -1) + segments.length) % segments.length;
    setAtivo(n);
    document.getElementById(`seg-${segments[n].id}`)?.focus();
  }

  return (
    <div className="seg">
      <div className="seg-tabs" role="tablist" aria-label="Tipo de negócio" onKeyDown={teclas}>
        {segments.map((sg, i) => (
          <button key={sg.id} id={`seg-${sg.id}`} type="button" role="tab" aria-selected={i === ativo} aria-controls="seg-painel"
            tabIndex={i === ativo ? 0 : -1} className={i === ativo ? 'seg-tab is-active' : 'seg-tab'} onClick={() => setAtivo(i)}>
            {sg.name}
          </button>
        ))}
      </div>
      <div className="seg-panel" id="seg-painel" role="tabpanel" aria-labelledby={`seg-${s.id}`}>
        <div className="seg-copy">
          <p className="mono">PARA {s.name.toUpperCase()}</p>
          <h3>{s.pitch}</h3>
          {s.example
            ? <p className="muted-p">Veja um modelo publicado para este segmento e imagine o seu negócio nele.</p>
            : <p className="muted-p">Ainda não tenho um modelo publicado para este segmento. O seu pode ser o primeiro, feito do zero para a sua marca.</p>}
          <div className="seg-actions">
            <a className="button primary" href={whatsapp(`Olá, Bruna! Tenho um negócio de ${s.name.toLowerCase()} e quero um site.`)} target="_blank" rel="noopener noreferrer">
              Quero um site para {s.id === 'outro' ? 'o meu negócio' : s.name.toLowerCase()}<span className="sr-only"> (abre o WhatsApp)</span>
            </a>
            {s.example && <a className="text-link" href={s.example.url} target="_blank" rel="noopener noreferrer">Ver o modelo {s.example.name}<span className="sr-only"> (abre em nova aba)</span></a>}
          </div>
        </div>
        <div className="seg-visual">
          {segments.map((sg, i) => sg.example && (
            <img key={sg.id} src={sg.example.image} width={800} height={600} loading="lazy"
              alt={i === ativo ? `Modelo de site ${sg.example.name}` : ''} aria-hidden={i !== ativo}
              className={i === ativo ? 'is-active' : ''} />
          ))}
          {!s.example && <div className="seg-empty"><span className="serif accent">Seu negócio</span><span>aqui.</span></div>}
        </div>
      </div>
    </div>
  );
}
