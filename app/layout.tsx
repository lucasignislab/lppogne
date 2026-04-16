import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Parceria Ratoeira Ads × Michael Pogne | Blindagem de Google Ads',
  description: 'A união entre o método PNG do Michael Pogne e a tecnologia Ratoeira Ads para proteger seus anúncios e multiplicar seus lucros no mercado internacional. Teste grátis por 14 dias.',
  keywords: 'Google Ads, blindagem, rastreamento, Michael Pogne, PNG, afiliados, tráfego pago, marketing digital',
  openGraph: {
    title: 'Parceria Ratoeira Ads × Michael Pogne | Blindagem de Google Ads',
    description: 'A união entre o método PNG do Michael Pogne e a tecnologia Ratoeira Ads para proteger seus anúncios e multiplicar seus lucros no mercado internacional.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parceria Ratoeira Ads × Michael Pogne | Blindagem de Google Ads',
    description: 'A união entre o método PNG do Michael Pogne e a tecnologia Ratoeira Ads para proteger seus anúncios e multiplicar seus lucros no mercado internacional.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
