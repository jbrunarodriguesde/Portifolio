import { profile, hero, benefits, services, projects, heroProjects, proofStats, testimonials, steps, about, faq, nav, whatsapp } from './content';
import { Icon, WhatsAppIcon } from './icons';
import HeroShowcase from './hero-showcase';
import Nav from './nav';
import Motion from './motion';
import CopyEmail from './copy-email';

function Ext({ href, className = '', children }: { href: string; className?: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<span className="sr-only"> (abre em nova aba)</span></a>;
}

function SectionHead({ pill, title, text, id }: { pill: string; title: string; text?: string; id: string }) {
  return (
    <div className="section-head" data-reveal>
      <span className="pill">{pill}</span>
      <h2 id={id}>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

/** Faixa de chamada para o WhatsApp, repetida entre as seções. */
function CtaBand({ title, text, label, message }: { title: string; text: string; label: string; message: string }) {
  return (
    <div className="cta-band" data-reveal>
      <div><h3>{title}</h3><p>{text}</p></div>
      <Ext href={whatsapp(message)} className="btn btn-primary">{label} <Icon name="arrow" size={16} /></Ext>
    </div>
  );
}

export default function Home() {
  const vitrine = heroProjects.map(id => projects.find(p => p.id === id)!).filter(Boolean);
  const ovo = projects.find(p => p.id === 'ovo')!;

  return <>
    <Motion />
    <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
    <Nav />

    <main id="conteudo">
      {/* 1. Promessa clara */}
      <section id="inicio" className="hero band-soft" aria-labelledby="hero-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="pill"><i className="dot" /> {hero.badge}</span>
            <h1 id="hero-title">{hero.title}</h1>
            <p className="lead">{hero.subtitle}</p>
            <div className="hero-actions">
              <Ext href={whatsapp()} className="btn btn-primary btn-lg"><WhatsAppIcon /> Pedir orçamento no WhatsApp</Ext>
              <a href="#projetos" className="btn btn-outline btn-lg">Ver projetos</a>
            </div>
            <ul className="checks">
              {hero.checks.map(c => <li key={c}><Icon name="check" size={16} />{c}</li>)}
            </ul>
          </div>
          <HeroShowcase items={vitrine} />
        </div>
      </section>

      {/* 2. Benefícios */}
      <section id="beneficios" className="section band-white" aria-labelledby="t-beneficios">
        <div className="container">
          <SectionHead id="t-beneficios" pill="Benefícios" title={benefits.title} text={benefits.subtitle} />
          <div className="grid grid-4">
            {benefits.items.map(b => (
              <article key={b.title} className="card" data-reveal>
                <span className="icon-tile"><Icon name={b.icon} /></span>
                <h3>{b.title}</h3><p>{b.text}</p>
              </article>
            ))}
          </div>
          <div className="note-band" data-reveal>
            <span><Icon name="phone" size={18} /> Todos os projetos são pensados para celular e computador, com carregamento rápido.</span>
            <Ext href={whatsapp()} className="text-link">Conversar agora <Icon name="arrow" size={15} /></Ext>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="section band-soft" aria-labelledby="t-servicos">
        <div className="container">
          <SectionHead id="t-servicos" pill="Serviços" title="O que a Kroma pode criar para você" text="Soluções pensadas para valorizar o seu negócio e facilitar o contato com seus clientes." />
          <div className="grid grid-2">
            {services.map(s => (
              <article key={s.title} className="card service-card" data-reveal>
                <span className="icon-tile"><Icon name={s.icon} /></span>
                <h3>{s.title}</h3><p>{s.text}</p>
                <Ext href={whatsapp(`Olá, Bruna! Gostaria de um orçamento para ${s.title.toLowerCase()}.`)} className="service-link">
                  Pedir orçamento para {s.title.toLowerCase()} <Icon name="arrow" size={16} />
                </Ext>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projetos (prova do trabalho) */}
      <section id="projetos" className="section band-white" aria-labelledby="t-projetos">
        <div className="container">
          <SectionHead id="t-projetos" pill="Portfólio" title="Sites já desenvolvidos" text="Projetos publicados para apresentar serviços, gerar contatos e dar mais presença digital a cada negócio." />
          <div className="grid grid-3">
            {projects.map(p => (
              <article key={p.id} className="card project-card" data-reveal>
                <div className="project-thumb">
                  <img src={p.image} alt={p.alt} width={800} height={600} loading="lazy" decoding="async" />
                  <span className="pill pill-white">{p.tag}</span>
                </div>
                <div className="project-body">
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <ul className="tech" aria-label="Tecnologias">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
                  <div className="project-foot">
                    {p.extra ? <Ext href={p.extra.url} className="text-link">{p.extra.label}</Ext> : <span>{p.urlLabel}</span>}
                    <Ext href={p.url} className="btn btn-primary btn-sm">Acessar projeto <Icon name="external" size={14} /></Ext>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <CtaBand title="Gostou dos projetos?" text="Posso criar uma estrutura sob medida para o seu segmento e o seu momento." label="Pedir orçamento" message="Olá, Bruna! Vi seus projetos e gostaria de um orçamento." />
        </div>
      </section>

      {/* 4. Provas sociais */}
      <section id="depoimentos" className="section band-ink" aria-labelledby="t-provas">
        <div className="container">
          <SectionHead id="t-provas" pill="Resultados reais" title="Negócios que já estão no ar com a Kroma" text="Cada número abaixo vem dos projetos publicados, que você pode abrir agora mesmo." />
          <dl className="stats" data-reveal>
            {proofStats.map(s => <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>)}
          </dl>
          {testimonials.length > 0 ? (
            <div className="grid grid-3 testimonials">
              {testimonials.map(t => (
                <figure key={t.name} className="quote-card" data-reveal>
                  <Icon name="quote" size={26} />
                  <blockquote>{t.quote}</blockquote>
                  <figcaption><b>{t.name}</b><span>{t.role}</span></figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <article className="case" data-reveal>
              <img src={ovo.image} alt={ovo.alt} width={800} height={600} loading="lazy" />
              <div>
                <span className="pill pill-dark">Caso em produção</span>
                <h3>Ovo di Onça</h3>
                <p>Um clube de assinatura de ovos caipiras de Onça de Pitangui, MG, que vende para BH e região. O site oficial apresenta a história da marca, os planos e a assinatura pelo WhatsApp, e ganhou uma página de receitas com busca e filtros.</p>
                <div className="case-links">
                  <Ext href={ovo.url} className="btn btn-primary btn-sm">Ver o site no ar <Icon name="external" size={14} /></Ext>
                  {ovo.extra && <Ext href={ovo.extra.url} className="text-link text-link-light">{ovo.extra.label}</Ext>}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>

      {/* Etapas */}
      <section id="processo" className="section band-soft" aria-labelledby="t-processo">
        <div className="container">
          <SectionHead id="t-processo" pill="Passo a passo" title="Como funciona" text="Um processo direto e sem complicação para tirar sua ideia do papel com qualidade." />
          <ol className="grid grid-4 steps">
            {steps.map((s, i) => (
              <li key={s.title} className="card step" data-reveal>
                <div className="step-top"><span className="icon-tile"><Icon name={s.icon} /></span><span className="step-num">0{i + 1}</span></div>
                <h3>{s.title}</h3>
                <p className="step-lead">{s.lead}</p>
                <p>{s.text}</p>
                <span className="step-foot">Etapa {i + 1} de {steps.length}</span>
              </li>
            ))}
          </ol>
          <CtaBand title="Pronto para dar o primeiro passo?" text="Converse direto no WhatsApp para tirar dúvidas e receber um direcionamento para o seu caso." label="Falar no WhatsApp" message="Olá, Bruna! Quero dar o primeiro passo no meu site." />
        </div>
      </section>

      {/* Quem faz */}
      <section id="sobre" className="section band-white" aria-labelledby="t-sobre">
        <div className="container about-grid">
          <div data-reveal>
            <span className="pill">Sobre</span>
            <h2 id="t-sobre">{about.title}</h2>
            {about.paragraphs.map(p => <p key={p.slice(0, 20)} className="about-text">{p}</p>)}
            <dl className="facts">
              {about.facts.map(f => <div key={f.term}><dt>{f.term}</dt><dd>{f.value}</dd></div>)}
            </dl>
            <Ext href={profile.linkedin} className="text-link">Ver meu LinkedIn <Icon name="external" size={14} /></Ext>
          </div>
          <div className="skills" data-reveal>
            {about.skills.map(g => (
              <div key={g.group} className="card skill-card">
                <h3>{g.group}</h3>
                <ul>{g.items.map(i => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dúvidas */}
      <section id="faq" className="section band-soft" aria-labelledby="t-faq">
        <div className="container faq-wrap">
          <SectionHead id="t-faq" pill="Dúvidas comuns" title="Tire suas dúvidas antes de começar" />
          <div className="faq" data-reveal>
            {faq.map((f, i) => (
              <details key={f.q} open={i === 0}>
                <summary>{f.q}<Icon name="plus" size={18} /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final + contato */}
      <section id="contato" className="section band-white" aria-labelledby="t-contato">
        <div className="container">
          <div className="contact-card" data-reveal>
            <span className="pill">Contato</span>
            <h2 id="t-contato">Vamos conversar sobre o seu site?</h2>
            <p className="lead">Conte um pouco sobre o seu negócio. Respondo com perguntas sobre o que você precisa e uma proposta sem compromisso.</p>
            <ul className="checks">
              <li><Icon name="check" size={16} />Resposta ágil</li>
              <li><Icon name="check" size={16} />Proposta sem compromisso</li>
              <li><Icon name="check" size={16} />Atendimento online em todo o Brasil</li>
            </ul>
            <div className="contact-actions">
              <Ext href={whatsapp()} className="btn btn-primary btn-lg"><WhatsAppIcon /> Chamar no WhatsApp</Ext>
              <CopyEmail email={profile.email} className="btn btn-outline btn-lg copy-email" />
            </div>
            <ul className="channels">
              <li><Ext href={whatsapp()} className="channel"><span className="icon-tile"><Icon name="chat" /></span><span><small>WhatsApp</small><b>{profile.whatsappDisplay}</b></span></Ext></li>
              <li><div className="channel"><span className="icon-tile"><Icon name="mail" /></span><span><small>E-mail</small><b id="email-contato">{profile.email}</b></span></div></li>
              <li><Ext href={profile.instagram.url} className="channel"><span className="icon-tile"><Icon name="instagram" /></span><span><small>Instagram</small><b>{profile.instagram.handle}</b></span></Ext></li>
              <li><Ext href={profile.linkedin} className="channel"><span className="icon-tile"><Icon name="linkedin" /></span><span><small>LinkedIn</small><b>brunarodrigues08</b></span></Ext></li>
            </ul>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <a href="#inicio" className="brand"><img src="/kroma-logo.png" width={40} height={40} alt="" /><span><b>{profile.companyShort}</b><small>{profile.tagline}</small></span></a>
          <p className="footer-name">{profile.company}</p>
          <p>Sites, landing pages e sistemas web para negócios que querem crescer. Por {profile.name}.</p>
        </div>
        <nav aria-label="Rodapé">
          <h2>Navegação</h2>
          <ul>{nav.map(n => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}</ul>
        </nav>
        <div>
          <h2>Canais oficiais</h2>
          <div className="footer-icons">
            <Ext href={whatsapp()} className="icon-btn"><Icon name="chat" /><span className="sr-only">WhatsApp</span></Ext>
            <Ext href={profile.instagram.url} className="icon-btn"><Icon name="instagram" /><span className="sr-only">Instagram</span></Ext>
            <Ext href={profile.linkedin} className="icon-btn"><Icon name="linkedin" /><span className="sr-only">LinkedIn</span></Ext>
          </div>
          <p>{profile.hours}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.company}. Todos os direitos reservados.</span>
        <span>{profile.location}</span>
      </div>
    </footer>

    <a href="#inicio" className="to-top" aria-label="Voltar ao topo"><Icon name="up" /></a>
    <Ext href={whatsapp()} className="wa-float"><WhatsAppIcon size={20} /> Falar no WhatsApp</Ext>
  </>;
}
