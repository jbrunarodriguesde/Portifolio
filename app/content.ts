// Todo o conteúdo do site mora aqui. Para atualizar textos, projetos ou links, edite só este arquivo.
// Origem das informações: FONTES.md.

const numero = '5537933001940';
/** Link do WhatsApp com mensagem pronta. */
export const whatsapp = (mensagem = 'Olá, Bruna! Vi o site da Kroma e gostaria de conversar sobre um projeto.') =>
  `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

export const profile = {
  name: 'Bruna Rodrigues de Jesus',
  role: 'Desenvolvedora Full Stack',
  company: 'Kroma Sistemas e Desenvolvimento Web',
  companyShort: 'Kroma',
  tagline: 'Sistemas & soluções digitais',
  email: 'brunarj51@gmail.com',
  whatsappDisplay: '+55 (37) 93300-1940',
  instagram: { handle: '@kroma.sisweb', url: 'https://www.instagram.com/kroma.sisweb' },
  linkedin: 'https://www.linkedin.com/in/brunarodrigues08',
  github: 'https://github.com/jbrunarodriguesde',
  location: 'Pará de Minas, MG',
  hours: 'Segunda a sexta, das 9h às 18h',
};

/* 1. Promessa clara no topo */
export const hero = {
  badge: 'Kroma Sistemas e Desenvolvimento Web',
  title: 'Sites que fazem o seu negócio ser encontrado, escolhido e chamado no WhatsApp.',
  subtitle:
    'Sou Bruna Rodrigues, desenvolvedora full stack à frente da Kroma. Crio landing pages, sites institucionais e sistemas web sob medida, rápidos no celular e prontos para receber novos contatos.',
  checks: ['Design sob medida', 'Funciona em qualquer tela', 'WhatsApp em todas as páginas'],
};

/* 2. Benefícios */
export const benefits = {
  title: 'Um bom site deixa seu negócio mais fácil de encontrar e de escolher.',
  subtitle:
    'Mais do que uma vitrine, o site é o lugar para explicar o que você faz, mostrar seus diferenciais e facilitar o contato de quem já está procurando pelo seu serviço.',
  items: [
    { icon: 'search', title: 'Mais fácil de encontrar', text: 'Quem precisa de um serviço pesquisa antes de fechar. Um site com título, descrição e informações certas coloca sua marca nessa busca.' },
    { icon: 'check', title: 'Mais fácil de escolher', text: 'Fotos do seu trabalho, diferenciais e informações claras passam segurança para quem ainda está decidindo.' },
    { icon: 'chat', title: 'Contato rápido no WhatsApp', text: 'Botões e mensagens prontas encurtam o caminho entre o interesse do cliente e a conversa com você.' },
    { icon: 'phone', title: 'Leve no celular', text: 'Páginas pensadas primeiro para a tela do celular, com imagens otimizadas para abrir rápido.' },
  ],
};

export const services = [
  { icon: 'rocket', title: 'Landing pages', text: 'Páginas diretas para divulgar um serviço, uma campanha ou uma oferta e levar o visitante até o WhatsApp.' },
  { icon: 'layout', title: 'Sites institucionais', text: 'Sites completos para apresentar sua empresa, seus serviços, sua história e suas formas de contato.' },
  { icon: 'sparkle', title: 'Redesign de sites', text: 'Uma nova apresentação para sites que ficaram antigos ou não representam mais a sua marca.' },
  { icon: 'database', title: 'Sistemas web', text: 'Áreas com login, painéis de gestão e cadastros com banco de dados, para organizar a rotina do seu negócio.' },
];

/* 3. Prova: projetos reais publicados */
export type Project = {
  id: string; name: string; tag: string; description: string; image: string; alt: string;
  url: string; urlLabel: string; extra?: { label: string; url: string }; tech: string[];
};

export const projects: Project[] = [
  { id: 'ovo', name: 'Ovo di Onça', tag: 'Site oficial + sistema', image: '/projetos/ovodionca.webp',
    alt: 'Site oficial do Ovo di Onça com galinhas soltas ao fundo e o título Ovos caipiras fresquinhos, com sabor de verdade',
    description: 'Clube de assinatura de ovos caipiras com entrega em BH e região. Site oficial com planos, galeria e página de receitas, além de um sistema de gestão de assinaturas em desenvolvimento.',
    url: 'https://ovodionca.com.br', urlLabel: 'ovodionca.com.br',
    extra: { label: 'Ver receitas', url: 'https://ovodionca.com.br/Receitas.html' },
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'] },
  { id: 'kroma', name: 'Kroma', tag: 'Site institucional', image: '/projetos/kroma.webp',
    alt: 'Site da Kroma com o título Sites profissionais para negócios que querem crescer',
    description: 'O site da própria Kroma: serviços, portfólio, processo de trabalho, dúvidas frequentes e contato direto pelo WhatsApp.',
    url: 'https://kromasisweb.vercel.app', urlLabel: 'kromasisweb.vercel.app', tech: ['React', 'Vite', 'Tailwind CSS'] },
  { id: 'findofertas', name: 'FindOfertas', tag: 'Aplicação web', image: '/projetos/findofertas.webp',
    alt: 'Tela de acesso do FindOfertas com login pelo Google ou por e-mail',
    description: 'Comparador que calcula o custo real de uma compra considerando frete, cupons, cashback, pontos e milhas. Login com Google e dados de cada usuário separados.',
    url: 'https://find-ofertas.vercel.app', urlLabel: 'find-ofertas.vercel.app', tech: ['React', 'TypeScript', 'Supabase'] },
  { id: 'buffet', name: 'Buffet Kids', tag: 'Landing page', image: '/projetos/buffet-infantil.webp',
    alt: 'Landing page de buffet infantil com o título Transformamos aniversários em memórias inesquecíveis',
    description: 'Modelo de página para buffet infantil, com serviços, espaço, galeria e pedido de orçamento pelo WhatsApp.',
    url: 'https://l-pbuffet-infantil.vercel.app', urlLabel: 'l-pbuffet-infantil.vercel.app', tech: ['HTML', 'CSS', 'JavaScript'] },
  { id: 'barbearia', name: 'Barbearia Premium', tag: 'Landing page', image: '/projetos/barbearia.webp',
    alt: 'Landing page de barbearia em preto e dourado com o título Cortes que valorizam seu estilo',
    description: 'Modelo de página para barbearia, valorizando serviços, horários e agendamento pelo WhatsApp.',
    url: 'https://l-pbarbearia.vercel.app', urlLabel: 'l-pbarbearia.vercel.app', tech: ['HTML', 'CSS', 'JavaScript'] },
  { id: 'odontosorriso', name: 'OdontoSorriso', tag: 'Landing page', image: '/projetos/odontosorriso.webp',
    alt: 'Landing page da clínica OdontoSorriso em azul com o título Cuidamos do seu sorriso com excelência',
    description: 'Modelo de página para clínica odontológica, com tratamentos, galeria e agendamento de consultas.',
    url: 'https://l-podontologia-prof.vercel.app', urlLabel: 'l-podontologia-prof.vercel.app', tech: ['HTML', 'CSS', 'JavaScript'] },
  { id: 'sorridentes', name: 'Clínica Sorridentes', tag: 'Landing page', image: '/projetos/sorridentes.webp',
    alt: 'Landing page da Clínica Sorridentes com foto de consultório e o título Seu sorriso merece os melhores cuidados',
    description: 'Outra proposta visual para clínica odontológica, com fotos do consultório e foco em agendamento.',
    url: 'https://l-podontologia.vercel.app', urlLabel: 'l-podontologia.vercel.app', tech: ['HTML', 'CSS', 'JavaScript'] },
  { id: 'secondbrain', name: 'Second Brain', tag: 'Aplicativo web', image: '/projetos/second-brain.webp',
    alt: 'Tela de entrada do Second Brain com login pelo Google',
    description: 'Aplicativo para capturar e organizar anotações, com login pelo Google e dados sincronizados na nuvem.',
    url: 'https://second-brain-lovat-psi.vercel.app', urlLabel: 'second-brain-lovat-psi.vercel.app', tech: ['JavaScript', 'Login Google'] },
];

/** Projetos que aparecem nas abas do topo (ids da lista acima). */
export const heroProjects = ['ovo', 'kroma', 'findofertas', 'buffet', 'barbearia', 'odontosorriso'];

/* 4. Provas sociais
   Números contados a partir dos projetos acima. */
export const proofStats = [
  { value: String(projects.length), label: 'projetos publicados e no ar' },
  { value: '5', label: 'segmentos: alimentação, eventos, saúde, beleza e tecnologia' },
  { value: 'Real', label: 'o Ovo di Onça é um negócio em funcionamento, com site oficial no ar' },
];

/* Depoimentos: cole aqui depoimentos REAIS de clientes, com autorização.
   Enquanto a lista estiver vazia, a seção mostra só os projetos reais como prova. Exemplo:
   { quote: 'Texto do cliente.', name: 'Nome do cliente', role: 'Negócio, cidade' }, */
export const testimonials: { quote: string; name: string; role: string }[] = [];

/* Etapas de como o serviço funciona */
export const steps = [
  { icon: 'chat', title: 'Conversa inicial', lead: 'Você conta sobre o seu negócio e o seu objetivo.', text: 'Entendo o perfil da empresa, os serviços que você quer destacar e o público que quer alcançar.' },
  { icon: 'compass', title: 'Estrutura e visual', lead: 'Organizo a estrutura e crio o visual.', text: 'Defino as seções, a ordem das informações, a paleta e a disposição dos conteúdos, com foco na clareza.' },
  { icon: 'code', title: 'Desenvolvimento e ajustes', lead: 'O site é feito e ajustado para celular e computador.', text: 'Escrevo o código, otimizo as imagens e reviso tudo com você até ficar como combinamos.' },
  { icon: 'send', title: 'Publicação', lead: 'Depois da sua aprovação, o site vai ao ar.', text: 'Configuro domínio, HTTPS e publicação, e entrego o site pronto para receber clientes.' },
];

/* Quem faz */
export const about = {
  title: 'Quem está por trás da Kroma',
  paragraphs: [
    'Sou Bruna Rodrigues de Jesus, técnica em Informática pela UFV Campus Florestal. No TCC criei o Educash, uma plataforma web de educação financeira para crianças, e foi ali que gostei de levar uma ideia do rascunho até algo que as pessoas usam.',
    'Hoje cuido de cada projeto da Kroma de ponta a ponta: do visual da página até o banco de dados que guarda as regras do negócio. Gosto de entender como o cliente trabalha antes de abrir o editor.',
  ],
  facts: [
    { term: 'Formação técnica', value: 'Técnico em Informática, UFV Campus Florestal' },
    { term: 'Graduação', value: 'Matemática Aplicada e Computacional (em curso)' },
    { term: 'Onde estou', value: 'Pará de Minas, MG, com atendimento online' },
  ],
  skills: [
    { group: 'Interfaces', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML, CSS e JavaScript'] },
    { group: 'Dados e servidor', items: ['PostgreSQL', 'Supabase', 'Row Level Security', 'Better Auth', 'Node.js'] },
    { group: 'Entrega', items: ['Vercel', 'Git e GitHub', 'SEO e Open Graph', 'Domínio e HTTPS'] },
  ],
};

/* Dúvidas frequentes (adaptadas do site da Kroma) */
export const faq = [
  { q: 'Quanto custa criar um site?', a: 'Depende do tipo de projeto, da quantidade de páginas e dos recursos que você precisa, como botões de WhatsApp, formulários ou sistemas. Cada proposta é feita sob medida. Chame no WhatsApp para receber um orçamento sem compromisso.' },
  { q: 'Em quanto tempo meu site fica pronto?', a: 'Varia com o escopo e com a rapidez no envio dos materiais (textos, fotos e logo). Em média, landing pages ficam prontas entre 7 e 15 dias úteis. Sites maiores têm o prazo definido na etapa de planejamento.' },
  { q: 'O site funciona no celular?', a: 'Sim. A maioria das pessoas acessa pelo celular, por isso todo projeto é pensado primeiro para telas pequenas, com botões, textos e imagens ajustados para qualquer tamanho.' },
  { q: 'Posso atualizar o site depois?', a: 'Sim. O código é organizado para facilitar mudanças, e há opções de manutenção para trocar informações, fotos ou produtos sempre que precisar.' },
  { q: 'Você ajuda com domínio e publicação?', a: 'Sim. Oriento em todas as etapas técnicas: escolha e registro do domínio (seunegocio.com.br), certificado de segurança (HTTPS) e publicação do site.' },
  { q: 'O site terá botão para WhatsApp?', a: 'Sim. Todos os projetos têm botões para o WhatsApp com mensagem pronta, para que o visitante fale com você em um clique.' },
];

export const nav = [
  { href: '#inicio', label: 'Início' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#processo', label: 'Processo' },
  { href: '#contato', label: 'Contato' },
];
