import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ADS_ID, CONVERSION_LABEL } from './ads';

// Troque pelo endereço final do site (usado nas prévias de compartilhamento).
const origin = 'https://portifolio-tan-delta.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Bruna Rodrigues de Jesus — Sites, lojas virtuais e sistemas web',
  description: 'Crio sites, lojas virtuais, landing pages e sistemas web que fazem o seu negócio ser encontrado, escolhido e chamado no WhatsApp. Por Bruna Rodrigues de Jesus, desenvolvedora full stack.',
  openGraph: { title: 'Bruna Rodrigues — Seu site, pronto para vender.', description: 'Sites, lojas virtuais e sistemas web sob medida, com contato direto pelo WhatsApp.', url: origin, siteName: 'Bruna Rodrigues · Portfólio', locale: 'pt_BR', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Bruna Rodrigues — Desenvolvedora Full Stack' }] },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#eef4f2' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0c0d' },
  ],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Cada clique em um link do WhatsApp (botões, pedido guiado, botão flutuante) conta como contato.
  const rastreio = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${ADS_ID}');
    document.addEventListener('click', function (e) {
      var a = e.target && e.target.closest && e.target.closest('a[href*="wa.me/"]');
      if (!a) return;
      ${CONVERSION_LABEL ? `gtag('event', 'conversion', { send_to: '${ADS_ID}/${CONVERSION_LABEL}' });` : ''}
      gtag('event', 'contato_whatsapp', { link_url: a.href.split('?')[0] });
    }, true);
  `;
  return (
    <html lang="pt-BR">
      <head>
        {/* Banner de cookies (Secure Privacy): carrega antes da tag do Google */}
        <script src="https://app.secureprivacy.ai/script/6aeb4c8a5c28664dc3928c6c.js" />
        {/* Google tag (gtag.js) */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`} />
        <script dangerouslySetInnerHTML={{ __html: rastreio }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
