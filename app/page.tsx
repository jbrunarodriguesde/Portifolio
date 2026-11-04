import { profile, hero, benefits, services, projects, landingPages, proofStats, testimonials, steps, facts, skills, faq, whatsapp } from './content';
import Motion from './motion';
import Glass from './glass';
import CopyEmail from './copy-email';

const Arrow = ({ diagonal = true }: { diagonal?: boolean }) => <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={diagonal ? 'M5 19 19 5M5 5h14v14' : 'M4 12h16m-6-6 6 6-6 6'} /></svg>;
const Wa = () => <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.8-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3Z" /></svg>;

function Ext({ href, children, className = '', arrow = true }: { href: string; children: React.ReactNode; className?: string; arrow?: boolean }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}{arrow && <Arrow />}<span className="sr-only"> (abre em nova aba)</span></a>;
}

function Label({ n, children }: { n: string; children: React.ReactNode }) {
  return <p className="label"><span className="label-n">{n} /</span> {children}</p>;
}

export default function Home() {
  const [ovo, find, brain] = projects;
  const gallery = [
    { p: ovo, img: '/projetos/ovodionca.webp', w: 799, h: 609, alt: 'Site oficial do Ovo di Onça com galinhas soltas ao fundo e o título Ovos caipiras fresquinhos, com sabor de verdade', tone: 'warm' },
    { p: find, img: '/projetos/findofertas.webp', w: 1200, h: 833, alt: 'Tela de acesso do FindOfertas com login pelo Google ou por e-mail', tone: 'cool' },
    { p: brain, img: '/projetos/second-brain.webp', w: 480, h: 360, alt: 'Tela de entrada do Second Brain com login pelo Google', tone: 'violet' },
  ];

  return <>
    <Glass />
    <Motion />
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>

    <header className="nav-wrap">
      <nav className="nav liquid" data-glass="0.8" aria-label="Navegação principal">
        <a className="signature" href="#inicio" aria-label="Bruna Rodrigues, início">br<span className="accent">.</span><span className="nav-name">Bruna Rodrigues</span></a>
        <div className="nav-links"><a href="#servicos">Serviços</a><a href="#projetos">Projetos</a><a href="#processo">Processo</a><a href="#contato">Contato</a></div>
        <Ext href={whatsapp('Olá, Bruna! Gostaria de pedir um orçamento.')} className="nav-cta">Pedir orçamento</Ext>
      </nav>
    </header>

    <main id="conteudo">
      {/* Promessa clara + lente de vidro */}
      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
        <div className="lens liquid" data-glass="1.6" aria-hidden="true" />
        <div className="container hero-inner">
          <p className="label hero-top"><span className="dot" /> {profile.role} · {profile.name}</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hero-line"><span>Seu site,</span></span>
            <span className="hero-line"><span>pronto para</span></span>
            <span className="hero-line"><span className="serif accent">vender.</span></span>
          </h1>
          <div className="hero-bottom">
            <div className="hero-meta">
              <p className="hero-description">{hero.description}</p>
              <div className="hero-actions">
                <Ext href={whatsapp('Olá, Bruna! Gostaria de pedir um orçamento.')} className="button primary" arrow={false}><Wa /> Pedir orçamento no WhatsApp</Ext>
                <a className="button glass-btn liquid" data-glass="1" href="#projetos">Ver projetos <Arrow diagonal={false} /></a>
              </div>
              <ul className="hero-checks">{hero.checks.map(c => <li key={c}><span className="dot" />{c}</li>)}</ul>
            </div>
            <div className="hero-shots" aria-hidden="true">
              <figure className="shot shot-a"><img src="/projetos/barbearia.webp" alt="" width={799} height={609} /></figure>
              <figure className="shot shot-b"><img src="/projetos/buffet-infantil.webp" alt="" width={800} height={600} /></figure>
              <figure className="shot shot-c"><img src="/projetos/ovodionca.webp" alt="" width={799} height={609} fetchPriority="high" /></figure>
            </div>
          </div>
        </div>
      </section>

      {/* Letreiro de serviços */}
      <div className="marquee" aria-label="Serviços: landing pages, sites institucionais, redesign e sistemas web">
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map(k => <span key={k}>{services.map(s => <span key={s.title + k}>{s.title}<i className="serif accent"> ✦ </i></span>)}<span>WhatsApp em um clique<i className="serif accent"> ✦ </i></span></span>)}
        </div>
      </div>

      {/* 01 Benefícios + serviços */}
      <section className="container section" id="servicos" aria-labelledby="t-servicos">
        <div className="split">
          <div className="split-side">
            <Label n="01">SERVIÇOS</Label>
            <h2 id="t-servicos" className="h2">O que um bom site<br /><span className="muted">faz pelo seu negócio.</span></h2>
          </div>
          <ol className="benefits">
            {benefits.map((b, i) => <li key={b.title} className="benefit"><span className="mono">0{i + 1}</span><div><h3>{b.title}<span className="serif accent">.</span></h3><p>{b.text}</p></div></li>)}
          </ol>
        </div>
        <div className="services">
          {services.map(s => (
            <article key={s.title} className="service" data-reveal>
              <span className="chip">{s.ideal}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Ext href={whatsapp(`Olá, Bruna! Gostaria de um orçamento para ${s.title.toLowerCase()}.`)} className="text-link">Pedir orçamento</Ext>
            </article>
          ))}
        </div>
      </section>

      {/* 02 Galeria horizontal de projetos */}
      <section className="h-gallery" id="projetos" aria-labelledby="t-projetos">
        <div className="h-track">
          <div className="h-intro">
            <Label n="02">PROJETOS</Label>
            <h2 id="t-projetos" className="h2">Sites no ar.<br /><span className="muted">Possibilidades reais.</span></h2>
            <p className="muted-p">Role para o lado e abra cada um. Tudo o que está aqui foi publicado.</p>
            <span className="scroll-hint mono" aria-hidden="true">ROLE PARA EXPLORAR →</span>
          </div>
          {gallery.map(({ p, img, w, h, alt, tone }) => (
            <article key={p.id} className={`h-card tone-${tone}`}>
              <div className="h-shot">
                <div className="h-bar frost"><span className="dots"><i /><i /><i /></span><span>{p.demoLabel}</span></div>
                <img src={img} alt={alt} width={w} height={h} loading="lazy" decoding="async" />
              </div>
              <div className="h-info">
                <div className="kicker mono"><span>{p.number} / {p.category}</span><span className="status">{p.status}</span></div>
                <h3>{p.name}</h3>
                <p className="headline">{p.headline}</p>
                <p className="desc">{p.description}</p>
                <details className="details"><summary>O problema e a construção <span aria-hidden="true">+</span></summary><div><p>{p.problem}</p><ul>{p.features.map(f => <li key={f}>{f}</li>)}</ul><p className="note">{p.note}</p></div></details>
                <ul className="tags">{p.technologies.map(t => <li key={t}>{t}</li>)}</ul>
                <div className="links"><Ext href={p.demo}>Ver site</Ext>{p.extra?.map(l => <Ext key={l.href} href={l.href}>{l.label}</Ext>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 03 Grade 3D das landing pages */}
      <section className="container section grid3d-wrap" aria-labelledby="t-lp">
        <div className="section-head" data-reveal>
          <div><Label n="03">LANDING PAGES</Label><h2 id="t-lp" className="h2">Leves, rápidas<br /><span className="muted">e feitas para gerar contato.</span></h2></div>
          <p className="muted-p">{projects[3].description}</p>
        </div>
        <div className="grid3d-stage">
          <ul className="grid3d">
            {landingPages.map(l => (
              <li key={l.name} className="tile">
                <Ext href={l.demo} className="tile-link" arrow={false}>
                  <img src={l.image} alt={l.alt} width={800} height={600} loading="lazy" />
                  <span className="tile-label frost"><b>{l.name}</b><span>Ver site <Arrow /></span></span>
                </Ext>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 04 Resultados (provas sociais) */}
      <section className="proof" aria-labelledby="t-proof">
        <div className="container">
          <div className="section-head" data-reveal>
            <div><Label n="04">RESULTADOS</Label><h2 id="t-proof" className="h2">Trabalho que<br /><span className="muted">já está no ar.</span></h2></div>
            <p className="muted-p">Números contados a partir dos projetos publicados.</p>
          </div>
          <dl className="stats">
            {proofStats.map(s => <div key={s.label}><dd data-count={s.value}>{s.value}</dd><dt>{s.label}</dt></div>)}
          </dl>
          {testimonials.length > 0 && (
            <div className="quotes">{testimonials.map(t => (
              <figure key={t.name} className="quote liquid-card" data-reveal><blockquote><span className="serif accent">“</span>{t.quote}</blockquote><figcaption><b>{t.name}</b> · {t.role}</figcaption></figure>
            ))}</div>
          )}
        </div>
      </section>

      {/* 05 Como funciona */}
      <section className="container section" id="processo" aria-labelledby="t-proc">
        <div className="split">
          <div className="split-side sticky">
            <Label n="05">COMO FUNCIONA</Label>
            <h2 id="t-proc" className="h2">Do primeiro contato<br /><span className="serif accent">ao site no ar.</span></h2>
            <Ext href={whatsapp('Olá, Bruna! Quero começar pela conversa inicial.')} className="button primary">Começar pela conversa</Ext>
          </div>
          <div className="steps">
            <div className="steps-progress" aria-hidden="true"><span /></div>
            <ol>{steps.map((s, i) => <li key={s.title} className="step"><span className="mono">0{i + 1}</span><div><h3>{s.title}</h3><p>{s.text}</p></div></li>)}</ol>
          </div>
        </div>
      </section>

      {/* 06 Sobre + ferramentas */}
      <section className="about" id="sobre" aria-labelledby="t-sobre">
        <div className="container about-grid">
          <div data-reveal>
            <Label n="06">SOBRE MIM</Label>
            <h2 id="t-sobre" className="h2">O contexto vem<br /><span className="serif accent">antes do código.</span></h2>
            <p className="lead">Sou Bruna Rodrigues de Jesus, desenvolvedora full stack.</p>
            <p className="muted-p">Sou técnica em Informática pela UFV Campus Florestal. No TCC criei o Educash, uma plataforma web de educação financeira para crianças, e foi ali que gostei de levar uma ideia do rascunho até algo que as pessoas usam.</p>
            <p className="muted-p">Hoje cuido de cada projeto de ponta a ponta: do visual da página até o banco de dados que guarda as regras do negócio.</p>
            <dl className="facts">{facts.map(f => <div key={f.term}><dt>{f.term}</dt><dd>{f.value}</dd></div>)}</dl>
            <Ext className="text-link" href={profile.linkedin}>Vamos nos conectar no LinkedIn</Ext>
          </div>
          <div className="skills">
            {skills.map(s => (
              <article key={s.number} className="liquid-card skill" data-reveal>
                <span className="mono">{'{ '}{s.number}{' }'}</span>
                <h3>{s.title}</h3>
                <ul>{s.items.map(x => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Dúvidas */}
      <section className="container section" id="duvidas" aria-labelledby="t-faq">
        <div className="split">
          <div className="split-side"><Label n="07">DÚVIDAS</Label><h2 id="t-faq" className="h2">Antes de começar,<br /><span className="muted">o que mais perguntam.</span></h2></div>
          <div className="faq">{faq.map((f, i) => <details key={f.q} className="details" open={i === 0}><summary>{f.q} <span aria-hidden="true">+</span></summary><div><p>{f.a}</p></div></details>)}</div>
        </div>
      </section>

      {/* Contato */}
      <section className="contact" id="contato" aria-labelledby="t-contato">
        <div className="aurora aurora-low" aria-hidden="true"><i /><i /><i /></div>
        <div className="container">
          <div className="contact-card liquid-card" data-reveal>
            <p className="label"><span className="dot" /> VAMOS CONVERSAR</p>
            <h2 id="t-contato" className="contact-title">Seu próximo cliente<br />pode chegar <span className="serif accent">por aqui.</span></h2>
            <p className="muted-p">Conte sobre o seu negócio. Respondo com perguntas sobre o que você precisa e uma proposta sem compromisso.</p>
            <div className="contact-actions">
              <Ext href={whatsapp()} className="button primary" arrow={false}><Wa /> Chamar no WhatsApp</Ext>
              <CopyEmail email={profile.email} className="button glass-btn liquid copy-email" />
            </div>
            <div className="contact-links">
              <span id="email-contato" className="contact-email">{profile.email}</span>
              <Ext href={whatsapp()}>WhatsApp {profile.whatsappDisplay}</Ext>
              <Ext href={profile.linkedin}>LinkedIn</Ext>
              <Ext href={profile.github}>GitHub</Ext>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="container footer"><a className="signature" href="#inicio" aria-label="Bruna Rodrigues, voltar ao início">br<span className="accent">.</span></a><p>© {new Date().getFullYear()} {profile.name} · {profile.location}</p><a href="#inicio">Voltar ao topo ↑</a></footer>

    <a href={whatsapp()} target="_blank" rel="noopener noreferrer" className="wa-float liquid" data-glass="1"><Wa /><span className="wa-label">Falar no WhatsApp</span><span className="sr-only"> (abre em nova aba)</span></a>
  </>;
}
