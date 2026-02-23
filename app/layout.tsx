import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import Script from 'next/script';

const ubuntu = Ubuntu({
  weight: ['300', '500'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  metadataBase: new URL('https://playgroundsmagia.com.br'),
  title: "Play Magia | Playgrounds de Madeira Personalizados",
  description: "Play Magia - Especialistas em playgrounds de madeira sob medida. Projetos personalizados para escolas, condomínios e residências. Segurança, durabilidade e diversão garantida.",
  keywords: "playgrounds de madeira, playground sob medida, playground para escolas, playground para condomínios, brinquedos de madeira, parquinho de madeira",
  openGraph: {
    title: "Play Magia | Playgrounds de Madeira Personalizados",
    description: "Transforme qualquer espaço em um universo de diversão com nossos playgrounds de madeira personalizados. Qualidade, segurança e design exclusivo.",
    images: [{
      url: "/images/play-magia-logo.png",
      width: 100,
      height: 100,
      alt: "Logo Play Magia"
    }],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17933599319"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-17933599319');
`}
      </Script>
      <body
        className={`${ubuntu.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
