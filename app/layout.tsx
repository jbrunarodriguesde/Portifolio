import type { Metadata, Viewport } from 'next';
import './globals.css';

// Troque pelo endereço final do site (usado nas prévias de compartilhamento).
const origin = 'https://portifolio-tan-delta.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Bruna Rodrigues de Jesus — Sites, landing pages e sistemas web',
  description: 'Crio sites, landing pages e sistemas web que fazem o seu negócio ser encontrado, escolhido e chamado no WhatsApp. Por Bruna Rodrigues de Jesus, desenvolvedora full stack.',
  openGraph: { title: 'Bruna Rodrigues — Seu site, pronto para vender.', description: 'Sites, landing pages e sistemas web sob medida, com contato direto pelo WhatsApp.', url: origin, siteName: 'Bruna Rodrigues · Portfólio', locale: 'pt_BR', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Bruna Rodrigues — Desenvolvedora Full Stack' }] },
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
  return <html lang="pt-BR"><body>{children}</body></html>;
}
