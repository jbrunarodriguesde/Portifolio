# Portfólio — Bruna Rodrigues de Jesus

Portfólio e página de vendas de serviços (sites, landing pages e sistemas web).
Next.js + TypeScript, exportado como site estático (pasta `out/`).

## Organização
- **Topo**: promessa clara ("Seu site, pronto para vender."), botão de orçamento no WhatsApp e captura de um site real.
- **01 Serviços**: os benefícios de um bom site e os quatro serviços, cada um com botão de orçamento.
- **02 Projetos**: Ovo di Onça em destaque, FindOfertas, Second Brain e as landing pages (a lista troca a captura).
- **03 Resultados**: números tirados dos projetos publicados. Depoimentos aparecem quando forem cadastrados.
- **04 Sobre**: quem faz e como funciona, em quatro etapas.
- **05 Habilidades**, **06 Dúvidas** e **Contato**.
- Botão flutuante de WhatsApp em todas as telas. Modo claro ou escuro automático, conforme o sistema de quem visita.

## Atualizar
- Todo o conteúdo: `app/content.ts` (textos, projetos, WhatsApp, dúvidas).
- **Depoimentos**: preencha `testimonials` em `app/content.ts` com depoimentos reais e autorizados.
- Imagens: `public/projetos/`. Imagem de compartilhamento: `public/og.png`.
- Cores: `app/globals.css` (`--accent` no topo para o modo escuro; bloco `prefers-color-scheme: light` para o claro).
- Título e descrição para Google e WhatsApp: `app/layout.tsx` (confira o `origin`).

## Rodar
    npm ci
    npm run dev
    npm run build
