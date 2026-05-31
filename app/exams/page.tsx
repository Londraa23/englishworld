import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { ExamsHero } from "@/components/ExamsHero"
import { ExamsGrid } from "@/components/ExamsGrid"
import { PreparationSection } from "@/components/PreparationSection"
import { CalendarSection } from "@/components/CalendarSection"

export const metadata = {
  title: "Exámenes Cambridge | Centro Oficial | English World",
  description: "Prepara tus exámenes oficiales Cambridge (A2, B1, B2, C1, C2) con English World. Somos Centro Preparador Oficial en Zaragoza con examinadores nativos.",
  alternates: {
    canonical: "https://academiaenglishworld.com/exams",
  },
  openGraph: {
    title: "Exámenes Cambridge | Centro Oficial | English World",
    description: "Prepara tus exámenes oficiales Cambridge en Zaragoza. Centro Preparador Oficial.",
    url: "https://academiaenglishworld.com/exams",
    siteName: "English World",
    images: [
      {
        url: "/og-exams.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function ExamsPage() {
  return (
    <main className="bg-night">
      <Navbar />
      <PageTransition>
        <ExamsHero />
        <ExamsGrid />
        <PreparationSection />
        <CalendarSection />
      </PageTransition>
      <Footer />
    </main>
  )
}
