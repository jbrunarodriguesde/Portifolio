import type { Metadata, Viewport } from 'next';
import './globals.css';
const origin = 'https://bruna-rodrigues-portfolio.woodsy-lemon-5535.chatgpt.site';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Kroma Sistemas e Desenvolvimento Web | Sites, landing pages e sistemas',
  description: 'Sites, landing pages e sistemas web sob medida, rápidos no celular e com contato direto pelo WhatsApp. Por Bruna Rodrigues de Jesus.',
  openGraph: { title: 'Kroma Sistemas e Desenvolvimento Web', description: 'Sites que fazem o seu negócio ser encontrado, escolhido e chamado no WhatsApp.', url: origin, siteName: 'Kroma Sistemas e Desenvolvimento Web', locale: 'pt_BR', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Kroma Sistemas e Desenvolvimento Web' }] },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  icons: { icon: '/kroma-logo.png' },
};
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafc' },
    { media: '(prefers-color-scheme: dark)', color: '#0f0c1a' },
  ],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" /><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" /></head><body>{children}</body></html>;
}
