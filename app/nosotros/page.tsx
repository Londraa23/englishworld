import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { NosotrosHero } from "@/components/NosotrosHero"
import { StorySection } from "@/components/StorySection"
import { TeamSection } from "@/components/TeamSection"
import { FacilitiesSection } from "@/components/FacilitiesSection"
import { ValuesSection } from "@/components/ValuesSection"
import { NosotrosCTA } from "@/components/NosotrosCTA"
import { organizationJsonLd } from "@/lib/organization"

export const metadata = {
  title: "Quiénes Somos | English World Zaragoza",
  description: "Conoce a nuestro equipo de profesores nativos. Más de 10 años formando a las nuevas generaciones de Zaragoza con pasión y compromiso.",
  alternates: {
    canonical: "https://www.academiaenglishworld.com/nosotros",
  },
  openGraph: {
    title: "Quiénes Somos | English World Zaragoza",
    description: "Conoce a nuestro equipo de profesores nativos y nuestra historia en Zaragoza.",
    url: "https://www.academiaenglishworld.com/nosotros",
    siteName: "English World",
    images: [
      {
        url: "/og-nosotros.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function NosotrosPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...organizationJsonLd,
    description:
      "Academia de inglés y Centro Preparador Oficial Cambridge en Zaragoza, con profesores nativos y grupos reducidos.",
  }

  return (
    <main className="bg-night">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PageTransition>
        <NosotrosHero />
        <StorySection />
        <TeamSection />
        <FacilitiesSection />
        <ValuesSection />
        <NosotrosCTA />
      </PageTransition>
      <Footer />
    </main>
  )
}
