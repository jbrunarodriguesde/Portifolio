'use client';
import { useEffect, useRef } from 'react';
import { segments } from './content';
import { initBriefing } from './lib-briefing';

const perguntas = [
  { name: 'negocio', titulo: 'Qual é o seu negócio?', dica: 'Escolha o que mais se parece com o seu.', opcoes: segments.map(s => s.name) },
  { name: 'hoje', titulo: 'O que você tem hoje?', dica: 'Assim eu sei de onde partimos.', opcoes: ['Só Instagram', 'Instagram e Facebook', 'Linktree', 'Um site antigo', 'Nada ainda'] },
  { name: 'objetivo', titulo: 'O que o site precisa fazer por você?', dica: 'Escolha o principal. O resto a gente conversa.', opcoes: ['Receber agendamentos', 'Receber pedidos de orçamento', 'Mostrar meus serviços e preços', 'Aparecer no Google'] },
];

/** Pedido guiado em etapas. A lógica fica em lib-briefing.ts. */
export default function Briefing() {
  const ref = useRef<HTMLFormElement>(null);
  useEffect(() => (ref.current ? initBriefing(ref.current) : undefined), []);

  return (
    <form ref={ref} className="brief liquid-card" aria-labelledby="t-pedido" noValidate>
      <div className="brief-head">
        <span className="mono">PERGUNTA <b className="brief-count">1 de 4</b></span>
        <div className="brief-bar" aria-hidden="true"><span /></div>
      </div>

      {perguntas.map((p, n) => (
        <fieldset key={p.name} className="brief-q" data-name={p.name}>
          <legend><span className="brief-n">0{n + 1}</span>{p.titulo}</legend>
          <p className="brief-tip">{p.dica}</p>
          <div className="brief-grid">
            {p.opcoes.map(o => (
              <label key={o} className="opt">
                <input type="radio" name={p.name} value={o} />
                <span className="opt-dot" aria-hidden="true" />
                <span>{o}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}

      <fieldset className="brief-q" data-name="">
        <legend><span className="brief-n">04</span>Onde fica o seu negócio?</legend>
        <p className="brief-tip">Opcional. Ajuda a pensar no público da sua cidade.</p>
        <label htmlFor="brief-cidade" className="sr-only">Cidade</label>
        <input id="brief-cidade" className="brief-input" type="text" autoComplete="address-level2" placeholder="Ex.: Pará de Minas" />
        <div className="brief-preview" aria-live="polite">
          <span className="mono">SUA MENSAGEM</span>
          <pre>Olá, Bruna! Quero um site para o meu negócio.</pre>
        </div>
        <button type="submit" className="button primary brief-send">Enviar pelo WhatsApp</button>
        <p className="brief-note">Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.</p>
      </fieldset>

      <div className="brief-nav">
        <button type="button" className="brief-back">← Voltar</button>
        <button type="button" className="brief-next">Continuar →</button>
      </div>
    </form>
  );
}
