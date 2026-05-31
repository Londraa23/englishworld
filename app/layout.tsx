<<<<<<< HEAD
import type { Metadata, Viewport } from 'next'
import { DM_Sans, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ScrollToTop } from '@/components/ScrollToTop'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
})

const dmMono = DM_Mono({ 
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: 'English World | Academia de Inglés en Zaragoza',
  description: 'Centro Oficial Cambridge en Zaragoza. Aprende inglés con profesores nativos y certificados. Grupos reducidos, horarios flexibles y preparación oficial Cambridge desde A2 hasta C2.',
  keywords: ['academia inglés zaragoza', 'cambridge zaragoza', 'cursos inglés', 'profesores nativos', 'exámenes cambridge'],
  authors: [{ name: 'English World' }],
  openGraph: {
    title: 'English World | Tu futuro comienza aquí',
    description: 'Centro Oficial Cambridge en Zaragoza. Profesores nativos, grupos reducidos y certificación oficial.',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#002868',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@600,700&display=swap" 
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-dm-sans antialiased">
        <ScrollToTop />
        {children}
        <Analytics />
      </body>
    </html>
  )
=======
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "English World - Academia de Inglés en Zaragoza",
  description:
    "Academia de inglés en Zaragoza. Preparación de exámenes Cambridge desde A2 hasta C2.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Script principal de Plausible */}
        <script
          defer
          data-domain="academiaenglishworld.com"
          src="https://plausible.io/js/script.file-downloads.outbound-links.pageview-props.revenue.tagged-events.js"
        ></script>

        {/* Script para enviar eventos a Plausible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.plausible = window.plausible || function() { 
                (window.plausible.q = window.plausible.q || []).push(arguments) 
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
>>>>>>> b4879b962bb657922e8ed398700147642d303a33
}
