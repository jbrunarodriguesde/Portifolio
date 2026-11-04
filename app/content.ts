// Conteúdo centralizado. Evidências e limites de cada projeto em FONTES.md.
export const profile = {
  name: 'Bruna Rodrigues de Jesus',
  role: 'Desenvolvedora Full Stack',
  company: 'Kroma Sistemas e Desenvolvimento Web',
  email: 'brunarj51@gmail.com',
  whatsappDisplay: '+55 37 93300-1940',
  // Link do WhatsApp com mensagem inicial já preenchida.
  whatsapp: 'https://wa.me/5537933001940?text=' + encodeURIComponent('Olá, Bruna! Vi seu portfólio e gostaria de conversar.'),
  linkedin: 'https://www.linkedin.com/in/brunarodrigues08',
  github: 'https://github.com/jbrunarodriguesde',
  githubBusiness: 'https://github.com/ovodioncadev-ux',
  location: 'Pará de Minas, MG',
  // Preencha quando desejar exibir (ex.: "Disponível para projetos freelance e estágio").
  availability: '',
};

export type ProjectLink = { label: string; href: string };
export type Project = {
  id: string; number: string; name: string; category: string; status: string;
  headline: string; description: string; problem: string; features: string[];
  technologies: string[]; code: string; demo: string; extra?: ProjectLink[]; note: string;
};

export const projects: Project[] = [
  { id: 'gestao', number: '01', name: 'Ovo di Onça', category: 'SITE + SISTEMA DE GESTÃO', status: 'Em desenvolvimento',
    headline: 'Da assinatura à operação.',
    description: 'Clube de assinatura de ovos caipiras com entrega em BH e região: um site para vender e um sistema que conecta a área do assinante à rotina de gestão.',
    problem: 'Organizar clientes, planos, entregas semanais e cobranças em um mesmo contexto, sem que um assinante consiga ver os dados de outro.',
    features: [
      'Site oficial com história da marca, galeria, planos e assinatura pelo WhatsApp',
      'Página de receitas com busca por nome ou ingrediente e filtros (café, almoço, sobremesa, sem glúten, rápidas)',
      'Painel de clientes, assinaturas, entregas, faturas, pausas e histórico de alterações',
      'Área autenticada para o assinante',
      'Papéis e políticas de acesso (Row Level Security) no PostgreSQL',
      'Testes SQL que tentam quebrar as permissões antes do deploy',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Better Auth', 'Tailwind CSS', 'React + Vite'],
    code: 'https://github.com/ovodioncadev-ux/sitegestao', demo: 'https://ovodionca.com.br',
    extra: [{ label: 'Ver receitas', href: 'https://ovodionca.com.br/Receitas.html' }],
    note: 'Funcionalidades do sistema identificadas no código e na documentação do repositório. O site oficial está em ovodionca.com.br; o painel de gestão não tem implantação em produção verificada.' },
  { id: 'findofertas', number: '02', name: 'FindOfertas', category: 'APLICAÇÃO WEB', status: 'Dados demonstrativos',
    headline: 'Além do preço na etiqueta.',
    description: 'Comparação de ofertas com cálculo de custo efetivo, considerando frete, descontos, cashback, pontos e milhas.',
    problem: 'Reunir os componentes de uma oferta para mostrar onde a compra realmente sai mais barata.',
    features: ['Busca e filtros de produtos', 'Detalhamento do cálculo de custo efetivo', 'Carteira de cartões, favoritos, alertas e histórico de preço', 'Login com e-mail ou Google via Supabase'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase'],
    code: 'https://github.com/jbrunarodriguesde/FindOfertas', demo: 'https://find-ofertas.vercel.app',
    note: 'Catálogo servido por dados mockados no código analisado; não representa ofertas em tempo real. A demonstração abre na tela de login.' },
  { id: 'varodrigues', number: '03', name: 'V. A. Rodrigues', category: 'SITE INSTITUCIONAL', status: 'Código disponível',
    headline: 'Seis serviços, um pedido de orçamento.',
    description: 'Site para empresa de iluminação pública, automação, poda de árvores e locação de máquinas.',
    problem: 'Apresentar linhas de serviço diferentes com clareza e receber pedidos de orçamento sem precisar de servidor.',
    features: ['Formulário de orçamento que abre o WhatsApp com a mensagem pronta', 'Contatos, cidades e mapa centralizados em um arquivo de configuração', 'Layout responsivo com animações ao rolar e SEO básico'],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    code: 'https://github.com/jbrunarodriguesde/varodrigues', demo: '',
    note: 'Sem demonstração publicada. As fotos do site ainda são marcadores para substituição, conforme o README.' },
  { id: 'landings', number: '04', name: 'Landing pages locais', category: 'HTML, CSS & JS', status: 'Demonstrações disponíveis',
    headline: 'Leves, rápidas e feitas para gerar contato.',
    description: 'Uma série de páginas para negócios locais, sem dependências, com foco em levar o visitante até o WhatsApp.',
    problem: 'Dar presença na web a pequenos negócios com páginas que carregam rápido e funcionam bem no celular.',
    features: ['Menu responsivo e botão flutuante de WhatsApp', 'Revelação ao rolar com IntersectionObserver e galeria com lightbox', 'Lazy loading de imagens', 'SEO com Open Graph e Schema.org'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Schema.org'],
    code: 'https://github.com/jbrunarodriguesde/LPbarbearia', demo: 'https://l-pbarbearia.vercel.app',
    note: 'Modelos com textos e dados de exemplo (como nome da cidade), prontos para personalização. Não representam clientes reais.' },
];

export const landingPages = [
  { name: 'Barbearia', demo: 'https://l-pbarbearia.vercel.app', code: 'https://github.com/jbrunarodriguesde/LPbarbearia' },
  { name: 'Clínica odontológica', demo: 'https://l-podontologia-prof.vercel.app', code: 'https://github.com/jbrunarodriguesde/LPodontologiaProf' },
  { name: 'Buffet infantil', demo: 'https://l-pbuffet-infantil.vercel.app', code: 'https://github.com/jbrunarodriguesde/LPbuffetInfantil' },
];

export const skills = [
  { number: '01', title: 'Interfaces', description: 'Da página institucional às áreas autenticadas.', items: ['React', 'Next.js · App Router', 'TypeScript', 'Tailwind CSS', 'Motion / Framer Motion', 'HTML, CSS & JavaScript'], source: 'Ovo di Onça, FindOfertas, V. A. Rodrigues e landing pages' },
  { number: '02', title: 'Dados & regras', description: 'Estrutura, autenticação e acesso aos dados.', items: ['PostgreSQL & PL/pgSQL', 'SQL & migrations', 'Row Level Security', 'Better Auth', 'Supabase', 'Server Actions'], source: 'sitegestao e FindOfertas' },
  { number: '03', title: 'Construção & qualidade', description: 'Organização e verificações junto ao código.', items: ['Git & GitHub', 'Monorepo · pnpm', 'Vite', 'Testes SQL', 'Vercel', 'SEO · Open Graph · Schema.org'], source: 'sitegestao, FindOfertas e landing pages' },
];

export const facts = [
  { term: 'Formação técnica', value: 'Técnico em Informática, UFV Campus Florestal' },
  { term: 'TCC', value: 'Educash, plataforma web de educação financeira para crianças' },
  { term: 'Graduação', value: 'Matemática Aplicada e Computacional (em curso)' },
];
