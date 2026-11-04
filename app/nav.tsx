'use client';
import { useEffect, useState } from 'react';
import { nav, profile, whatsapp } from './content';
import { Icon } from './icons';

/** Cabeçalho fixo: logo, menu em pílula com a seção atual destacada e botão de orçamento. */
export default function Nav() {
  const [atual, setAtual] = useState('#inicio');
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const secoes = nav.map(n => document.querySelector(n.href)).filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      entradas => entradas.forEach(e => e.isIntersecting && setAtual('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    secoes.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const fechar = (e: KeyboardEvent) => e.key === 'Escape' && setAberto(false);
    window.addEventListener('keydown', fechar);
    return () => window.removeEventListener('keydown', fechar);
  }, [aberto]);

  return (
    <header className="site-header">
      <div className="container header-row">
        <a href="#inicio" className="brand" aria-label={`${profile.companyShort}, início`}>
          <img src="/kroma-logo.png" width={40} height={40} alt="" />
          <span><b>{profile.companyShort}</b><small>{profile.tagline}</small></span>
        </a>
        <nav aria-label="Principal" className="nav-pill">
          {nav.map(n => (
            <a key={n.href} href={n.href} className={atual === n.href ? 'is-active' : ''} aria-current={atual === n.href ? 'true' : undefined}>
              {n.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary header-cta" href={whatsapp('Olá, Bruna! Gostaria de pedir um orçamento.')} target="_blank" rel="noopener noreferrer">
          Pedir orçamento <Icon name="arrow" size={16} /><span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
        </a>
        <button type="button" className="menu-btn" aria-expanded={aberto} aria-controls="menu-movel"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => setAberto(v => !v)}>
          <Icon name={aberto ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      <div id="menu-movel" className="mobile-menu" hidden={!aberto}>
        <div className="container">
          {nav.map(n => <a key={n.href} href={n.href} onClick={() => setAberto(false)}>{n.label}</a>)}
          <a className="btn btn-primary" href={whatsapp('Olá, Bruna! Gostaria de pedir um orçamento.')} target="_blank" rel="noopener noreferrer">
            Pedir orçamento no WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
