# Portfólio — Bruna Rodrigues de Jesus

Página em português brasileiro com Next.js, TypeScript e Tailwind CSS. Exportação estática, sem formulário ou dependência de serviços para renderizar o conteúdo.

## Atualizar
- Textos, tecnologias, links e canais: app/content.ts.
- Composição e seções: app/page.tsx.
- Identidade visual e responsividade: app/globals.css.
- Título, descrição e compartilhamento: app/layout.tsx.
- Fotos, capturas, fonte local e imagem social: public/.
- Origem e limites das informações: FONTES.md.

Campo opcional: availability (em app/content.ts). Formação aparece na seção Sobre a partir de `facts`. Preencha somente com informações confirmadas. Para incluir currículo, adicione o arquivo e um link real; nenhum botão fictício foi incluído.

## Executar
Requer Node.js 20.9 ou superior.

    npm ci
    npm run dev

Endereço local: http://127.0.0.1:3027

    npm run typecheck
    npm run build

A pasta out/ contém o site estático pronto para hospedagem. Não abra index.html diretamente: sirva out/ por HTTP para que fontes, imagens e scripts tenham os endereços corretos.

## Decisões
Fundo grafite e verde-lima, tipografia Manrope hospedada localmente e detalhes em serifada do sistema. Vidro na navegação e no elemento flutuante, com alternativa opaca sem suporte a desfoque. Animações usam CSS e a API nativa do navegador; conteúdo continua acessível sem JavaScript e respeita redução de movimento.

## Publicação e acesso
A publicação inicial no Sites é privada para revisão. A audiência não é alterada automaticamente para pública. Para compartilhar com recrutadores sem login, configure o acesso público quando desejar.
