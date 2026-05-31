import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { NosotrosHero } from "@/components/NosotrosHero"
import { StorySection } from "@/components/StorySection"
import { TeamSection } from "@/components/TeamSection"
import { ValuesSection } from "@/components/ValuesSection"
import { NosotrosCTA } from "@/components/NosotrosCTA"

export const metadata = {
  title: "Quiénes Somos | English World Zaragoza",
  description: "Conoce a nuestro equipo de profesores nativos. Más de 10 años formando a las nuevas generaciones de Zaragoza con pasión y compromiso.",
  alternates: {
    canonical: "https://academiaenglishworld.com/nosotros",
  },
  openGraph: {
    title: "Quiénes Somos | English World Zaragoza",
    description: "Conoce a nuestro equipo de profesores nativos y nuestra historia en Zaragoza.",
    url: "https://academiaenglishworld.com/nosotros",
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
  return (
    <main className="bg-night">
      <Navbar />
      <PageTransition>
        <NosotrosHero />
        <StorySection />
        <TeamSection />
        <ValuesSection />
        <NosotrosCTA />
      </PageTransition>
      <Footer />
    </main>
  )
}
