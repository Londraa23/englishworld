import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { NivelesHero } from "@/components/NivelesHero"
import { LevelsGrid } from "@/components/LevelsGrid"
import { MethodologySection } from "@/components/MethodologySection"
import { NivelesCTA } from "@/components/NivelesCTA"

export const metadata = {
  title: "Niveles de Inglés A2–C2 | English World",
  description: "Cursos de inglés para todos los niveles: A2, B1, B2, C1 y C2. Encuentra tu grupo perfecto y mejora tu fluidez con profesores nativos.",
  alternates: {
    canonical: "https://academiaenglishworld.com/niveles",
  },
  openGraph: {
    title: "Niveles de Inglés A2–C2 | English World",
    description: "Cursos de inglés para todos los niveles en Zaragoza. A2, B1, B2, C1 y C2.",
    url: "https://academiaenglishworld.com/niveles",
    siteName: "English World",
    images: [
      {
        url: "/og-niveles.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function NivelesPage() {
  return (
    <main className="bg-night">
      <Navbar />
      <PageTransition>
        <NivelesHero />
        <LevelsGrid />
        <MethodologySection />
        <NivelesCTA />
      </PageTransition>
      <Footer />
    </main>
  )
}
