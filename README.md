# Kroma Sistemas e Desenvolvimento Web — site e portfólio

Página de vendas de serviços da Kroma, com o portfólio de Bruna Rodrigues de Jesus.
Next.js + TypeScript, exportado como site estático (pasta `out/`).

## Organização (inspirada em kromasisweb.vercel.app)
1. **Início**: promessa clara, botão de orçamento no WhatsApp e vitrine com abas de projetos reais.
2. **Benefícios**: o que um bom site faz pelo negócio.
3. **Serviços**: landing pages, sites institucionais, redesign e sistemas web, cada um com seu botão de orçamento.
4. **Projetos**: sites publicados, com captura real e link "Acessar projeto".
5. **Resultados reais**: números tirados dos projetos e o caso Ovo di Onça. Vira grade de depoimentos quando houver depoimentos.
6. **Como funciona**: as 4 etapas do serviço.
7. **Sobre**: quem faz, formação e ferramentas.
8. **Dúvidas** e **Contato**, com WhatsApp, e-mail, Instagram e LinkedIn.

Botão flutuante de WhatsApp em todas as telas. Modo claro ou escuro automático, conforme o sistema de quem visita.

## Atualizar
- Todo o conteúdo: `app/content.ts` (textos, projetos, número do WhatsApp, FAQ).
- **Depoimentos**: preencha a lista `testimonials` em `app/content.ts` com depoimentos reais e autorizados.
- Imagens dos projetos: `public/projetos/`. Logo: `public/kroma-logo.png`. Imagem de compartilhamento: `public/og.png`.
- Visual: `app/globals.css` (cores no topo, em `:root`).
- Título e descrição para Google e WhatsApp: `app/layout.tsx` (troque `origin` pelo endereço final do site).

## Rodar
    npm ci
    npm run dev
    npm run build
