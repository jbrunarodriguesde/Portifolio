import type { Metadata, Viewport } from 'next';
import './globals.css';
const origin = 'https://bruna-rodrigues-portfolio.woodsy-lemon-5535.chatgpt.site';
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: 'Bruna Rodrigues de Jesus — Kroma Sistemas e Desenvolvimento Web',
  description: 'Portfólio de Bruna Rodrigues de Jesus. Explore projetos de interfaces, aplicações web e sistemas com React, Next.js, TypeScript e PostgreSQL.',
  openGraph: { title: 'Bruna Rodrigues — Código com contexto.', description: 'Interfaces, dados e ideias que ganham forma. Conheça meus projetos de desenvolvimento full stack.', url: origin, siteName: 'Kroma Sistemas e Desenvolvimento Web', locale: 'pt_BR', type: 'website', images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Bruna Rodrigues — Desenvolvedora Full Stack' }] },
  twitter: { card: 'summary_large_image', images: ['/og.png'] },
  icons: { icon: '/icon.svg' },
};
export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f4ee' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0d0b' },
  ],
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
