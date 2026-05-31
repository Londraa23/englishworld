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
}
