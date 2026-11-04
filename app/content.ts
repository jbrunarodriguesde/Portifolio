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
    'Seu negócio já está no Instagram. Eu crio o site ou a loja virtual que faz você aparecer no Google, mostra o que você oferece e leva o cliente direto para a compra ou para o seu WhatsApp.',
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
  { id: 'loja', name: 'Loja e comércio', pitch: 'Seus produtos com foto, preço e variações, sacola, cupom e um painel para acompanhar pedidos e estoque.', example: { name: 'ORLA Objects', url: 'https://orla-objects.vercel.app', image: '/projetos/orla.webp' } },
  { id: 'cafe', name: 'Cafeteria e restaurante', pitch: 'Cardápio com fotos, tamanhos e adicionais, e pedido para retirar no horário certo.', example: { name: 'Bruma Café', url: 'https://bruma-cafe-omega.vercel.app', image: '/projetos/bruma.webp' } },
  { id: 'barbearia', name: 'Barbearia', pitch: 'Cortes, preços, horários e agendamento em um toque.', example: { name: 'Barbearia Premium', url: 'https://l-pbarbearia.vercel.app', image: '/projetos/barbearia.webp' } },
  { id: 'odonto', name: 'Odontologia', pitch: 'Tratamentos explicados com clareza e agendamento de consulta pelo WhatsApp.', example: { name: 'Clínica Sorridentes', url: 'https://l-podontologia.vercel.app', image: '/projetos/sorridentes.webp' } },
  { id: 'buffet', name: 'Buffet e eventos', pitch: 'Fotos que dão vontade, tipos de evento e pedido de orçamento sem enrolação.', example: { name: 'Buffet Kids', url: 'https://l-pbuffet-infantil.vercel.app', image: '/projetos/buffet-infantil.webp' } },
  { id: 'estetica', name: 'Salão e estética', pitch: 'Menu de cuidados, equipe e agendamento de horário direto pelo celular.', example: { name: 'Vetra Studio', url: 'https://vetra-studio.vercel.app', image: '/projetos/vetra.webp' } },
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
  { title: 'Lojas virtuais', text: 'Vitrine, sacola, cupons, checkout e painel para cuidar de pedidos e estoque.', ideal: 'Para vender online' },
  { title: 'Landing pages', text: 'Uma página direta para divulgar um serviço, uma campanha ou uma oferta.', ideal: 'Para quem quer começar rápido' },
  { title: 'Sites institucionais', text: 'Um site completo com sua história, seus serviços, galeria e formas de contato.', ideal: 'Para apresentar a empresa inteira' },
  { title: 'Redesign', text: 'Uma nova apresentação para sites que ficaram antigos ou não representam mais a marca.', ideal: 'Para quem já tem site' },
  { title: 'Sistemas web', text: 'Áreas com login, painéis de gestão e cadastros com banco de dados.', ideal: 'Para organizar a rotina do negócio' },
];

/* Projetos em destaque (prova do trabalho). Para mostrar um projeto, ele precisa de link público e foto real.
   ready: false = ainda não abre publicamente; fica fora da galeria até o link funcionar. */
export type Project = {
  id: string; name: string; category: string; status: string;
  headline: string; description: string; problem: string; features: string[];
  technologies: string[]; demo: string; demoLabel: string; extra?: { label: string; href: string }[]; note: string;
  image: string; w: number; h: number; alt: string; tone: string; ready: boolean;
};

export const projects: Project[] = [
  { id: 'bruma', name: 'Bruma Café', category: 'SITE + PEDIDOS', status: 'No ar · demonstração',
    headline: 'Do cardápio à retirada no balcão.',
    description: 'Cafeteria de cafés especiais com cardápio por categoria, tamanhos e adicionais, e pedido para retirar no horário escolhido.',
    problem: 'Tornar simples no celular a compra de cafés com tamanhos e adicionais, sem prometer horários que a cozinha não consegue atender.',
    features: [
      'Cardápio por categoria com ingredientes, alergênicos, tamanhos e adicionais',
      'Pedido para retirada em faixas de horário com capacidade limitada',
      'Acompanhamento privado do pedido: recebido, aceito, em preparo, pronto e retirado',
      'Painel da equipe para avançar pedidos, preços, disponibilidade, horários e eventos',
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Zod'],
    demo: 'https://bruma-cafe-omega.vercel.app', demoLabel: 'bruma-cafe-omega.vercel.app',
    note: 'Cafeteria, cardápio e eventos fictícios. Pagamento na retirada; nenhuma cobrança online.',
    image: '/projetos/bruma.webp', w: 1200, h: 750, alt: 'Página inicial da Bruma Café com café coado na Chemex e o título Uma pausa com mais sabor', tone: 'warm', ready: true },
  { id: 'orla', name: 'ORLA Objects', category: 'LOJA EDITORIAL', status: 'No ar · demonstração',
    headline: 'Objetos que dão presença à casa.',
    description: 'Loja de objetos de design para casa, com fotos amplas, coleções e uma vitrine que valoriza cada peça.',
    problem: 'Vender produtos de design autoral com a clareza de uma revista: a imagem conta a história e os controles de compra ficam simples.',
    features: [
      'Catálogo com 24 produtos, busca, filtros e ordenação',
      'Quatro coleções e página de detalhe para cada produto',
      'Favoritos e sacola guardados no navegador',
      'Checkout ilustrativo, sem cobrança',
    ],
    technologies: ['Next.js', 'React', 'TypeScript'],
    demo: 'https://orla-objects.vercel.app', demoLabel: 'orla-objects.vercel.app',
    note: 'Marca, produtos e valores fictícios. Fotos de ambiente do Unsplash. Ainda sem pagamento, login ou painel.',
    image: '/projetos/orla.webp', w: 1200, h: 750, alt: 'Página inicial da ORLA Objects com sala iluminada e o título Objetos que dão presença à casa', tone: 'sand', ready: true },
  { id: 'vetra', name: 'Vetra Studio', category: 'SITE + AGENDAMENTO', status: 'No ar · demonstração',
    headline: 'Seu tempo de cuidado começa aqui.',
    description: 'Estúdio de beleza e bem-estar com menu de cuidados, equipe e reserva de horário pelo celular.',
    problem: 'Transformar a descoberta de um cuidado em uma reserva clara no celular, sem dois clientes no mesmo horário.',
    features: [
      'Menu de cuidados com duração e preço de cada serviço',
      'Escolha de profissional e horários em botões, com resumo sempre à vista',
      'Contas de cliente, profissional e administração com permissões no servidor',
      'Reservas protegidas contra conflito de horário, com pausa de almoço e intervalo entre atendimentos',
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    demo: 'https://vetra-studio.vercel.app', demoLabel: 'vetra-studio.vercel.app',
    note: 'Estúdio, equipe e preços fictícios. Projeto em desenvolvimento: gestão de serviços e remarcação ainda vão entrar.',
    image: '/projetos/vetra.webp', w: 1200, h: 750, alt: 'Página inicial do Vetra Studio com o título Seu tempo de cuidado começa aqui e botão Agendar horário', tone: 'sage', ready: true },
  { id: 'nimbo', name: 'Nimbo', category: 'APLICATIVO DE FINANÇAS', status: 'No ar · demonstração',
    headline: 'Suas finanças, legíveis.',
    description: 'Aplicativo de organização financeira pessoal com contas, categorias, limites e metas.',
    problem: 'Movimentos espalhados dificultam entender para onde vai o dinheiro. O Nimbo junta tudo em uma interface clara.',
    features: [
      'Contas, categorias, limites de gasto e metas',
      'Transferências entre contas sem distorcer receitas e despesas',
      'Login com sessão segura e dados de cada pessoa separados no servidor',
      'Modo de demonstração com dados fictícios, sem precisar de cadastro',
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    demo: 'https://nimbo-lilac.vercel.app/visao-geral?demo=1', demoLabel: 'nimbo-lilac.vercel.app',
    extra: [{ label: 'Página inicial', href: 'https://nimbo-lilac.vercel.app' }],
    note: 'Dados inteiramente fictícios. Importação de extrato e recorrências ainda vão entrar.',
    image: '/projetos/nimbo.webp', w: 1200, h: 750, alt: 'Painel Visão geral do Nimbo com saldo total, receitas e despesas do período e gastos por categoria', tone: 'cool', ready: true },
  { id: 'ovo', name: 'Ovo di Onça', category: 'SITE OFICIAL', status: 'No ar · negócio real',
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
    note: 'Site oficial no ar. O painel de gestão ainda não está publicado.',
    image: '/projetos/ovodionca.webp', w: 799, h: 609, alt: 'Site oficial do Ovo di Onça com galinhas soltas ao fundo e o título Ovos caipiras fresquinhos, com sabor de verdade', tone: 'warm', ready: true },
  { id: 'vertice', name: 'Vértice', category: 'LOJA VIRTUAL', status: 'Demonstração',
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
    note: 'Pagamentos, fretes e produtos são de teste; nenhuma cobrança é feita. Layout inspirado no projeto aberto Loja Virtual, de Ryan Menezes (licença MIT). A demonstração é privada: peça o acesso pelo WhatsApp.',
    image: '/projetos/vertice.webp', w: 1200, h: 750, alt: 'Página inicial da loja Vértice com headphone em destaque e vitrine de notebook', tone: 'lilac', ready: true },
];

/* Outros trabalhos, em lista compacta */
export const moreProjects = [
  { name: 'FindOfertas', text: 'Comparador do custo real de uma compra, com frete, cupons, cashback e pontos.', demo: 'https://find-ofertas.vercel.app' },
  { name: 'Second Brain', text: 'Aplicativo pessoal de anotações com login Google e dados na nuvem.', demo: 'https://second-brain-lovat-psi.vercel.app' },
  { name: 'Landing pages locais', text: 'Modelos para barbearia, buffet infantil e clínicas odontológicas.', demo: 'https://l-pbarbearia.vercel.app' },
];

export const landingPages = [
  { name: 'Barbearia Premium', demo: 'https://l-pbarbearia.vercel.app', image: '/projetos/barbearia.webp', alt: 'Landing page de barbearia em preto e dourado com o título Cortes que valorizam seu estilo' },
  { name: 'Buffet Kids', demo: 'https://l-pbuffet-infantil.vercel.app', image: '/projetos/buffet-infantil.webp', alt: 'Landing page de buffet infantil com o título Transformamos aniversários em memórias inesquecíveis' },
  { name: 'OdontoSorriso', demo: 'https://l-podontologia-prof.vercel.app', image: '/projetos/odontosorriso.webp', alt: 'Landing page da clínica OdontoSorriso em azul com o título Cuidamos do seu sorriso com excelência' },
  { name: 'Clínica Sorridentes', demo: 'https://l-podontologia.vercel.app', image: '/projetos/sorridentes.webp', alt: 'Landing page da Clínica Sorridentes com foto de consultório' },
];

/* Provas sociais: números contados a partir dos projetos acima */
export const proofStats = [
  { value: '11', label: 'sites e aplicações publicados' },
  { value: '6', label: 'segmentos: alimentação, eventos, saúde, beleza, casa e decoração, tecnologia' },
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
  { q: 'Você faz loja virtual?', a: 'Sim. A Vértice, minha loja demonstrativa, mostra o caminho inteiro: vitrine, sacola, cupom, checkout e painel de pedidos, produtos e estoque. Para vender de verdade, a loja é ligada a um serviço de pagamento (Pix e cartão) e de frete, escolhidos e combinados no orçamento.' },
  { q: 'Quanto custa criar um site?', a: 'Depende do tipo de projeto, da quantidade de páginas e dos recursos, como WhatsApp, formulários ou sistemas. Cada proposta é feita sob medida e sem compromisso: é só chamar no WhatsApp.' },
  { q: 'Em quanto tempo fica pronto?', a: 'Varia com o escopo e com o envio dos materiais (textos, fotos e logo). Em média, uma landing page fica pronta entre 7 e 15 dias úteis. Sites maiores têm o prazo definido no planejamento.' },
  { q: 'O site funciona no celular?', a: 'Sim. Todo projeto é pensado primeiro para o celular, com botões, textos e imagens ajustados para qualquer tela.' },
  { q: 'Posso atualizar depois?', a: 'Sim. O código é organizado para facilitar mudanças, e há opção de manutenção para trocar fotos, textos ou produtos.' },
  { q: 'Você cuida do domínio e da publicação?', a: 'Sim. Oriento a escolha e o registro do domínio (seunegocio.com.br), configuro o HTTPS e publico o site.' },
  { q: 'Vai ter botão de WhatsApp?', a: 'Sim. Todos os projetos têm botões com mensagem pronta, para o visitante falar com você em um clique.' },
];

/* Loja virtual: a jornada de compra da Vértice, tela por tela (capturas reais da loja demonstrativa) */
export const shopJourney = [
  { title: 'Vitrine', text: 'Categorias, busca, ofertas e favoritos. O cliente encontra o produto em poucos toques.', image: '/projetos/loja-vitrine.webp', alt: 'Página inicial da Vértice com destaque de headphone e vitrine de notebook' },
  { title: 'Produto', text: 'Foto, preço com desconto, parcelas e variações com estoque de cada uma.', image: '/projetos/loja-produto.webp', alt: 'Detalhe do Headphone Wireless Studio com preço, variação Preto e botão Adicionar à sacola' },
  { title: 'Sacola', text: 'Quantidades ajustáveis e cupom de desconto aplicado na hora.', image: '/projetos/loja-sacola.webp', alt: 'Sacola lateral com dois produtos, campo de cupom e total' },
  { title: 'Checkout', text: 'Dados, endereço, opções de entrega e pagamento por Pix ou cartão, com o resumo sempre à vista.', image: '/projetos/loja-checkout.webp', alt: 'Página Finalizar compra com formulário de dados e resumo da sacola com desconto do cupom' },
  { title: 'Pedido criado', text: 'Confirmação com número do pedido e acompanhamento pelo cliente.', image: '/projetos/loja-pedido.webp', alt: 'Tela de confirmação Pedido criado com número e valor do pedido' },
  { title: 'Painel da loja', text: 'Pedidos, produtos, estoque, cupons e vitrine em um só lugar para quem vende.', image: '/projetos/loja-painel.webp', alt: 'Painel administrativo com contagem de pedidos, catálogo e estoque e um pedido aguardando pagamento' },
];

/* Regras que a loja segue no servidor (README e BACKEND.md do projeto) */
export const shopRules = [
  { title: 'Preço conferido no servidor', text: 'Total, cupom e frete são recalculados antes de criar o pedido. O valor do navegador não vale sozinho.' },
  { title: 'Estoque reservado', text: 'O pedido pendente segura o produto por 30 minutos. Recusa ou expiração devolvem ao estoque.' },
  { title: 'Sem pedido duplicado', text: 'Cliques repetidos ou simultâneos geram um único pedido.' },
  { title: 'Testado de ponta a ponta', text: 'Testes automáticos de preços, cupom, concorrência, permissões e estorno.' },
];
