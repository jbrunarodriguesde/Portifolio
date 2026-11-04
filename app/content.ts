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
    'Seu negócio já está no Instagram. Eu crio o site que faz você aparecer no Google, explica o que você oferece e leva o cliente direto para o seu WhatsApp.',
  checks: ['Proposta sem compromisso', 'Você aprova antes de publicar', 'Atendimento em Pará de Minas e região'],
};

/* O problema de quem só tem rede social (tirado da pesquisa de lojas sem site) */
export const problems = [
  { title: 'Quem procura no Google não te encontra.', text: 'Sem um site, o seu negócio fica de fora quando alguém pesquisa pelo serviço na sua cidade.' },
  { title: 'O Linktree só manda para o WhatsApp.', text: 'O cliente chega sem saber preços, serviços ou horários, e a conversa começa do zero.' },
  { title: 'A informação fica espalhada.', text: 'Posts, destaques e stories somem no feed. Quem chega agora não acha o que precisa.' },
];

/* Segmentos que mais aparecem na prospecção, com exemplo publicado quando existe */
export const segments = [
  { id: 'barbearia', name: 'Barbearia', pitch: 'Cortes, preços, horários e agendamento em um toque.', example: { name: 'Barbearia Premium', url: 'https://l-pbarbearia.vercel.app', image: '/projetos/barbearia.webp' } },
  { id: 'odonto', name: 'Odontologia', pitch: 'Tratamentos explicados com clareza e agendamento de consulta pelo WhatsApp.', example: { name: 'Clínica Sorridentes', url: 'https://l-podontologia.vercel.app', image: '/projetos/sorridentes.webp' } },
  { id: 'buffet', name: 'Buffet e eventos', pitch: 'Fotos que dão vontade, tipos de evento e pedido de orçamento sem enrolação.', example: { name: 'Buffet Kids', url: 'https://l-pbuffet-infantil.vercel.app', image: '/projetos/buffet-infantil.webp' } },
  { id: 'estetica', name: 'Salão e estética', pitch: 'Serviços, antes e depois e agenda organizada, para a cliente escolher e marcar.', example: null },
  { id: 'pet', name: 'Pet shop', pitch: 'Banho, tosa e produtos em uma página, com agendamento direto.', example: null },
  { id: 'outro', name: 'Outro negócio', pitch: 'Me conte o que você faz. Cada site é feito sob medida para o seu segmento.', example: null },
];

/* O que está incluso (a partir das etapas da proposta de orçamento) */
export const included = [
  { title: 'Planejamento', text: 'Conversa sobre o negócio, o público e o que precisa aparecer primeiro.' },
  { title: 'Design sob medida', text: 'Visual criado a partir da sua marca e das suas fotos, sem cara de modelo pronto.' },
  { title: 'Feito para o celular', text: 'Responsivo, leve e com botões grandes para quem chega pelo Instagram.' },
  { title: 'Google e compartilhamento', text: 'Título, descrição e prévia bonita quando o link for enviado no WhatsApp.' },
  { title: 'WhatsApp com mensagem pronta', text: 'Botões em pontos estratégicos que já abrem a conversa com o assunto certo.' },
  { title: 'Domínio e publicação', text: 'Ajuda com o seunegocio.com.br, HTTPS e o site no ar.' },
  { title: 'Ajustes depois do lançamento', text: 'Correções finas nos primeiros dias, com o site já funcionando.' },
  { title: 'Orientação de uso', text: 'Explicação de como pedir mudanças e manter as informações atualizadas.' },
];

/* Cidades atendidas (atendimento online para o restante do Brasil) */
export const cities = ['Pará de Minas', 'Itaúna', 'Divinópolis', 'Nova Serrana', 'Pitangui', 'Florestal', 'Igaratinga', 'Mateus Leme', 'Juatuba', 'São Gonçalo do Pará', 'Betim', 'Belo Horizonte'];

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
  { id: 'vertice', number: '04', name: 'Vértice', category: 'LOJA VIRTUAL', status: 'Demonstração',
    headline: 'Da vitrine ao pedido aprovado.',
    description: 'Loja de eletrônicos completa: vitrine, sacola, cupom, checkout com Pix ou cartão de teste, acompanhamento de pedidos e painel administrativo.',
    problem: 'Mostrar o caminho inteiro de uma compra online com regras de verdade no servidor: preço, cupom e estoque conferidos antes de criar o pedido, sem confiar no total do navegador.',
    features: [
      'Vitrine com categorias, busca, favoritos e variações de produto',
      'Checkout com entrega, cupom e pagamento simulado (Pix ou cartão de teste)',
      'Estoque reservado por 30 minutos e liberado em caso de recusa ou expiração',
      'Painel com pedidos, etapas de atendimento, produtos, estoque, cupons e banner',
      'Testes automatizados de preços, cupom, concorrência, permissões e estorno',
    ],
    technologies: ['React', 'Next.js (Vinext)', 'TypeScript', 'Cloudflare D1', 'Drizzle', 'Tailwind CSS'],
    demo: '', demoLabel: 'loja demonstrativa',
    note: 'Pagamentos, fretes e produtos são de teste; nenhuma cobrança é feita. Layout inspirado no projeto aberto Loja Virtual, de Ryan Menezes (licença MIT). A demonstração é privada: peça o acesso pelo WhatsApp.' },
  { id: 'landings', number: '05', name: 'Landing pages locais', category: 'HTML, CSS & JS', status: 'Sites no ar',
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
  { title: 'Você conta.', text: 'Pelo WhatsApp, você fala do seu negócio, do seu público e do que quer que o cliente faça no site.' },
  { title: 'Eu planejo e crio.', text: 'Organizo as informações, crio o visual e mostro a página para você aprovar antes de qualquer publicação.' },
  { title: 'Seu site no ar.', text: 'Configuro domínio e HTTPS, publico e acompanho os primeiros ajustes com o site funcionando.' },
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
