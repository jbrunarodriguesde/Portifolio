'use client';
import { useState } from 'react';
import { segments, whatsapp } from './content';

const temHoje = ['Só Instagram', 'Instagram e Facebook', 'Linktree', 'Um site antigo', 'Nada ainda'];
const objetivos = ['Receber agendamentos', 'Receber pedidos de orçamento', 'Mostrar meus serviços e preços', 'Aparecer no Google'];

/**
 * Briefing rápido: o visitante responde 4 perguntas e a conversa no WhatsApp já começa organizada.
 * Nada é enviado pelo site: o botão só abre o WhatsApp com a mensagem pronta.
 */
export default function Briefing() {
  const [negocio, setNegocio] = useState('');
  const [hoje, setHoje] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [cidade, setCidade] = useState('');

  const linhas = [
    'Olá, Bruna! Quero um site para o meu negócio.',
    negocio && `• Negócio: ${negocio}`,
    hoje && `• Hoje eu tenho: ${hoje}`,
    objetivo && `• Quero que o site ajude a: ${objetivo.toLowerCase()}`,
    cidade.trim() && `• Cidade: ${cidade.trim()}`,
  ].filter(Boolean).join('\n');

  return (
    <form className="brief liquid-card" onSubmit={e => { e.preventDefault(); window.open(whatsapp(linhas), '_blank', 'noopener'); }}>
      <fieldset>
        <legend>Qual é o seu negócio?</legend>
        <div className="brief-options">
          {segments.map(s => (
            <label key={s.id} className={negocio === s.name ? 'opt is-on' : 'opt'}>
              <input type="radio" name="negocio" value={s.name} checked={negocio === s.name} onChange={() => setNegocio(s.name)} />{s.name}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>O que você tem hoje?</legend>
        <div className="brief-options">
          {temHoje.map(t => (
            <label key={t} className={hoje === t ? 'opt is-on' : 'opt'}>
              <input type="radio" name="hoje" value={t} checked={hoje === t} onChange={() => setHoje(t)} />{t}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset>
        <legend>O que o site precisa fazer por você?</legend>
        <div className="brief-options">
          {objetivos.map(o => (
            <label key={o} className={objetivo === o ? 'opt is-on' : 'opt'}>
              <input type="radio" name="objetivo" value={o} checked={objetivo === o} onChange={() => setObjetivo(o)} />{o}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="brief-city">
        <label htmlFor="brief-cidade">Cidade</label>
        <input id="brief-cidade" type="text" autoComplete="address-level2" placeholder="Ex.: Pará de Minas" value={cidade} onChange={e => setCidade(e.target.value)} />
      </div>
      <div className="brief-preview" aria-live="polite">
        <span className="mono">PRÉVIA DA MENSAGEM</span>
        <pre>{linhas}</pre>
      </div>
      <button type="submit" className="button primary brief-send">Enviar pelo WhatsApp</button>
      <p className="brief-note">Abre o WhatsApp com a mensagem pronta. Você revisa antes de enviar.</p>
    </form>
  );
}
