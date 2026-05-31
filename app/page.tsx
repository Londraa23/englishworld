import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Hero } from "@/components/Hero"
import { Features } from "@/components/Features"
import { LevelJourney } from "@/components/LevelJourney"
import { CambridgeBanner } from "@/components/CambridgeBanner"
import { Testimonials } from "@/components/Testimonials"
import { FAQ } from "@/components/FAQ"
import { FinalCTA } from "@/components/FinalCTA"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "English World | Academia de Inglés en Zaragoza",
  description: "Centro Oficial Cambridge en Zaragoza. Aprende inglés con profesores nativos y certificados. Grupos reducidos, horarios flexibles y preparación oficial Cambridge desde A2 hasta C2.",
  alternates: {
    canonical: "https://academiaenglishworld.com",
  },
  openGraph: {
    title: "English World | Academia de Inglés en Zaragoza",
    description: "Centro Oficial Cambridge en Zaragoza. Profesores nativos, grupos reducidos y certificación oficial.",
    url: "https://academiaenglishworld.com",
    siteName: "English World",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "English World",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Celso Emilio Ferreiro 17",
      "addressLocality": "Zaragoza",
      "postalCode": "50017",
      "addressCountry": "ES"
    },
    "telephone": "+34 651 85 99 39",
    "url": "https://academiaenglishworld.com",
    "openingHours": "Mo-Fr 09:00-21:00",
    "image": "https://academiaenglishworld.com/logo.png"
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <PageTransition>
          <Hero />
          <Features />
          <LevelJourney />
          <CambridgeBanner />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </PageTransition>
        <Footer />
      </main>
    </>
  )
}
