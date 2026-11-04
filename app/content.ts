// Todo o conteúdo do site mora aqui. Para atualizar textos, projetos ou links, edite só este arquivo.
// Origem das informações: FONTES.md.

const numero = '5537933001940';
/** Link do WhatsApp com mensagem pronta. */
export const whatsapp = (mensagem = 'Olá, Bruna! Vi seu portfólio e gostaria de conversar sobre um projeto.') =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

export const profile = {
  name: 'Bruna Rodrigues de Jesus',
  role: 'Desenvolvedora Full Stack',
  email: 'brunarj51@gmail.com',
  whatsappDisplay: '+55 37 93300-1940',
  linkedin: 'https://www.linkedin.com/in/brunarodrigues08',
  github: 'https://github.com/jbrunarodriguesde',
  location: 'Pará de Minas, MG',
};

/* Promessa clara no topo */
export const hero = {
  description:
    'Crio sites, landing pages e sistemas web que fazem o seu negócio ser encontrado, escolhido e chamado no WhatsApp. Leves no celular e feitos sob medida.',
  checks: ['Design sob medida', 'Pensado para celular', 'WhatsApp em um clique'],
};

/* Benefícios: o que um bom site faz pelo negócio */
export const benefits = [
  { title: 'Ser encontrado', text: 'Título, descrição e informações certas para aparecer quando alguém procura pelo seu serviço.' },
  { title: 'Ser escolhido', text: 'Fotos do trabalho, diferenciais e informações claras passam segurança para quem está decidindo.' },
  { title: 'Ser chamado', text: 'Botões com mensagem pronta levam o visitante direto para uma conversa com você no WhatsApp.' },
  { title: 'Abrir rápido', text: 'Páginas leves, pensadas primeiro para a tela do celular, onde a maioria das visitas acontece.' },
];

export const services = [
  { title: 'Landing pages', text: 'Uma página direta para divulgar um serviço, uma campanha ou uma oferta.', ideal: 'Para quem quer começar rápido' },
  { title: 'Sites institucionais', text: 'Um site completo com sua história, seus serviços, galeria e formas de contato.', ideal: 'Para apresentar a empresa inteira' },
  { title: 'Redesign', text: 'Uma nova apresentação para sites que ficaram antigos ou não representam mais a marca.', ideal: 'Para quem já tem site' },
  { title: 'Sistemas web', text: 'Áreas com login, painéis de gestão e cadastros com banco de dados.', ideal: 'Para organizar a rotina do negócio' },
];

/* Projetos (prova do trabalho) */
export type Project = {
  id: string; number: string; name: string; category: string; status: string;
  headline: string; description: string; problem: string; features: string[];
  technologies: string[]; demo: string; demoLabel: string; extra?: { label: string; href: string }[]; note: string;
};

export const projects: Project[] = [
  { id: 'ovo', number: '01', name: 'Ovo di Onça', category: 'SITE OFICIAL + SISTEMA', status: 'No ar',
    headline: 'Da assinatura à operação.',
    description: 'Clube de assinatura de ovos caipiras de Onça de Pitangui, MG, com entrega em BH e região. Um site para vender e um sistema para organizar a rotina.',
    problem: 'Apresentar a marca e os planos para quem quer assinar, e organizar clientes, entregas e cobranças sem que um assinante veja os dados de outro.',
    features: [
      'Site oficial com história da marca, galeria, planos e assinatura pelo WhatsApp',
      'Página de receitas com busca por nome ou ingrediente e filtros',
      'Sistema de gestão com clientes, assinaturas, entregas, faturas e histórico (em desenvolvimento)',
      'Permissões de acesso no próprio banco de dados (PostgreSQL), testadas antes de cada publicação',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Better Auth', 'Tailwind CSS'],
    demo: 'https://ovodionca.com.br', demoLabel: 'ovodionca.com.br',
    extra: [{ label: 'Ver receitas', href: 'https://ovodionca.com.br/Receitas.html' }],
    note: 'Site oficial no ar. O painel de gestão ainda não está publicado.' },
  { id: 'findofertas', number: '02', name: 'FindOfertas', category: 'APLICAÇÃO WEB', status: 'Demonstração',
    headline: 'Além do preço na etiqueta.',
    description: 'Comparador que calcula o custo real de uma compra considerando frete, cupons, cashback, pontos e milhas.',
    problem: 'O menor preço da vitrine nem sempre é o mais barato. O app mostra onde a compra realmente sai melhor para os cartões de cada pessoa.',
    features: ['Cálculo de custo efetivo com frete, descontos, cashback e pontos', 'Carteira de cartões, favoritos, alertas e histórico de preço', 'Login com e-mail ou Google e dados de cada usuário separados'],
    technologies: ['React', 'TypeScript', 'Vite', 'Supabase'],
    demo: 'https://find-ofertas.vercel.app', demoLabel: 'find-ofertas.vercel.app',
    note: 'Os produtos da demonstração são dados de exemplo.' },
  { id: 'secondbrain', number: '03', name: 'Second Brain', category: 'APLICATIVO WEB', status: 'No ar',
    headline: 'Capture rápido. Recupere tudo.',
    description: 'Aplicativo pessoal para capturar e organizar anotações, com login pelo Google e dados sincronizados na nuvem.',
    problem: 'Juntar ideias e anotações soltas em um só lugar, acessível de qualquer aparelho.',
    features: ['Entrada com conta Google', 'Dados sincronizados na nuvem, visíveis só para a dona da conta', 'Busca e modo escuro'],
    technologies: ['JavaScript', 'Login Google', 'Vercel'],
    demo: 'https://second-brain-lovat-psi.vercel.app', demoLabel: 'second-brain-lovat-psi.vercel.app',
    note: 'A tela inicial pede login com Google.' },
  { id: 'landings', number: '04', name: 'Landing pages locais', category: 'HTML, CSS & JS', status: 'Sites no ar',
    headline: 'Leves, rápidas e feitas para gerar contato.',
    description: 'Uma série de páginas para negócios locais, sem dependências, com foco em levar o visitante até o WhatsApp.',
    problem: 'Dar presença na web a pequenos negócios com páginas que abrem rápido e funcionam bem no celular.',
    features: ['Menu responsivo e botão flutuante de WhatsApp', 'Revelação ao rolar e galeria com ampliação de fotos', 'SEO com Open Graph e Schema.org'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Schema.org'],
    demo: '', demoLabel: '',
    note: 'Modelos com textos e dados de exemplo, prontos para personalizar.' },
];

export const landingPages = [
  { name: 'Barbearia Premium', demo: 'https://l-pbarbearia.vercel.app', image: '/projetos/barbearia.webp', alt: 'Landing page de barbearia em preto e dourado com o título Cortes que valorizam seu estilo' },
  { name: 'Buffet Kids', demo: 'https://l-pbuffet-infantil.vercel.app', image: '/projetos/buffet-infantil.webp', alt: 'Landing page de buffet infantil com o título Transformamos aniversários em memórias inesquecíveis' },
  { name: 'OdontoSorriso', demo: 'https://l-podontologia-prof.vercel.app', image: '/projetos/odontosorriso.webp', alt: 'Landing page da clínica OdontoSorriso em azul com o título Cuidamos do seu sorriso com excelência' },
  { name: 'Clínica Sorridentes', demo: 'https://l-podontologia.vercel.app', image: '/projetos/sorridentes.webp', alt: 'Landing page da Clínica Sorridentes com foto de consultório' },
];

/* Provas sociais: números contados a partir dos projetos acima */
export const proofStats = [
  { value: '7', label: 'sites e aplicações publicados' },
  { value: '5', label: 'segmentos: alimentação, eventos, saúde, beleza e tecnologia' },
  { value: '1', label: 'negócio real em funcionamento com site oficial: o Ovo di Onça' },
];

/* Depoimentos: cole aqui depoimentos REAIS, com autorização do cliente.
   Enquanto a lista estiver vazia, a seção não mostra depoimentos. Exemplo:
   { quote: 'Texto do cliente.', name: 'Nome', role: 'Negócio, cidade' }, */
export const testimonials: { quote: string; name: string; role: string }[] = [];

/* Como funciona */
export const steps = [
  { title: 'Conversa inicial.', text: 'Você conta sobre o seu negócio e o seu objetivo. Entendo o público e o que precisa ser destacado.' },
  { title: 'Estrutura e visual.', text: 'Organizo as seções, a ordem das informações e o visual, com foco na clareza.' },
  { title: 'Desenvolvimento e ajustes.', text: 'Escrevo o código, ajusto para celular e computador e reviso tudo com você.' },
  { title: 'Publicação.', text: 'Com a sua aprovação, configuro domínio e HTTPS e coloco o site no ar.' },
];

export const facts = [
  { term: 'Formação técnica', value: 'Técnico em Informática, UFV Campus Florestal' },
  { term: 'TCC', value: 'Educash, plataforma web de educação financeira para crianças' },
  { term: 'Graduação', value: 'Matemática Aplicada e Computacional (em curso)' },
  { term: 'Onde estou', value: 'Pará de Minas, MG, com atendimento online' },
];

export const skills = [
  { number: '01', title: 'Interfaces', description: 'Da landing page às áreas com login.', items: ['React', 'Next.js · App Router', 'TypeScript', 'Tailwind CSS', 'HTML, CSS & JavaScript'], source: 'Ovo di Onça, FindOfertas e landing pages' },
  { number: '02', title: 'Dados & regras', description: 'Estrutura, autenticação e acesso aos dados.', items: ['PostgreSQL', 'Row Level Security', 'Supabase', 'Better Auth', 'Node.js'], source: 'Ovo di Onça e FindOfertas' },
  { number: '03', title: 'Entrega & presença', description: 'O que coloca o site no ar e no Google.', items: ['Vercel', 'Git & GitHub', 'Domínio & HTTPS', 'SEO · Open Graph', 'Schema.org'], source: 'Todos os sites publicados' },
];

export const faq = [
  { q: 'Quanto custa criar um site?', a: 'Depende do tipo de projeto, da quantidade de páginas e dos recursos, como WhatsApp, formulários ou sistemas. Cada proposta é feita sob medida e sem compromisso: é só chamar no WhatsApp.' },
  { q: 'Em quanto tempo fica pronto?', a: 'Varia com o escopo e com o envio dos materiais (textos, fotos e logo). Em média, uma landing page fica pronta entre 7 e 15 dias úteis. Sites maiores têm o prazo definido no planejamento.' },
  { q: 'O site funciona no celular?', a: 'Sim. Todo projeto é pensado primeiro para o celular, com botões, textos e imagens ajustados para qualquer tela.' },
  { q: 'Posso atualizar depois?', a: 'Sim. O código é organizado para facilitar mudanças, e há opção de manutenção para trocar fotos, textos ou produtos.' },
  { q: 'Você cuida do domínio e da publicação?', a: 'Sim. Oriento a escolha e o registro do domínio (seunegocio.com.br), configuro o HTTPS e publico o site.' },
  { q: 'Vai ter botão de WhatsApp?', a: 'Sim. Todos os projetos têm botões com mensagem pronta, para o visitante falar com você em um clique.' },
];
