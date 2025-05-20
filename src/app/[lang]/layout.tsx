import type { Metadata } from "next";
/* Importación de las fuentes */
import { bebasNeue, poppins } from './fonts';

/* Importación de la configuración de idiomas */
import { i18n } from "@/i18n/config";
/* Importación del tipo de idioma */
import type { Locale } from "@/i18n/config";

/* Importación de los componentes Header y Footer */
import Header from "@/components/Header";
import Footer from "@/components/Footer";

/* Importación de los estilos globales */
import "./globals.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export const metadata: Metadata = {
  title: "WaveFit",
  description: "WaveFit ofrece planes de entrenamiento personalizados para ayudarte a alcanzar tus objetivos fitness.",
  keywords: ["wavefit", "fitness", "entrenamiento", "personalizados", "bienestar", "planes", "nutrición", "salud", "comunidad"],
  authors: [{ name: "WaveFit", url: "https://wavefit.com" }],
  creator: "WaveFit",
  icons: {
    icon: [
      { url: '/Logo2.png', sizes: '32x32', type: 'image/png' },
      { url: '/Logo2.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/Logo2.png',
    apple: '/Logo2.png',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'standard',
    'max-video-preview': 0,
  },
  category: "fitness",
  alternates: {
    canonical: "https://wavefit.com",
    languages: {
      'es': "https://wavefit.com/es",
      'en': "https://wavefit.com/en",
    },
  },
  openGraph: {
    title: "WaveFit",
    description: "WaveFit ofrece planes de entrenamiento personalizados para ayudarte a alcanzar tus objetivos fitness.",
    url: "https://wavefit.com",
    siteName: "WaveFit",
    images: [
      {
        url: "https://wavefit.com/og-image.png",
        width: 800,
        height: 600,
        alt: "WaveFit",
      },
    ],
    locale: "es",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${bebasNeue.variable} ${poppins.variable} antialiased`}>
      <head>
        <link rel="icon" href="/Logo2.png" />
        <link rel="apple-touch-icon" href="/Logo2.png" />
      </head>
      <body>
        <Header lang={lang} />
        <main>{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}