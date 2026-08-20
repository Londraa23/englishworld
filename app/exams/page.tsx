import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { ExamsHero } from "@/components/ExamsHero"
import { ExamsGrid } from "@/components/ExamsGrid"
import { PreparationSection } from "@/components/PreparationSection"
import { CalendarSection } from "@/components/CalendarSection"
import { organizationJsonLd } from "@/lib/organization"

const exams = [
  { level: "A2", name: "A2 Key", desc: "El primer paso oficial. Reconocido internacionalmente para demostrar habilidades en inglés básico." },
  { level: "B1", name: "B1 Preliminary", desc: "Demuestra que puedes usar inglés en situaciones cotidianas y laborales simples." },
  { level: "B2", name: "B2 First (FCE)", desc: "El más demandado. Requerido por cientos de universidades y empresas en todo el mundo." },
  { level: "C1", name: "C1 Advanced (CAE)", desc: "Para quienes necesitan demostrar un dominio avanzado en contextos académicos o profesionales." },
  { level: "C2", name: "C2 Proficiency (CPE)", desc: "La certificación más prestigiosa de Cambridge. Equivalente al nivel nativo." },
]

const examsJsonLd = exams.map((e) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: `Preparación Cambridge ${e.name}`,
  description: e.desc,
  inLanguage: "en",
  educationalLevel: e.level,
  provider: organizationJsonLd,
}))

export const metadata = {
  title: "Exámenes Cambridge | Centro Oficial | English World",
  description: "Prepara tus exámenes oficiales Cambridge (A2, B1, B2, C1, C2) con English World. Somos Centro Preparador Oficial en Zaragoza con examinadores nativos.",
  alternates: {
    canonical: "https://www.academiaenglishworld.com/exams",
  },
  openGraph: {
    title: "Exámenes Cambridge | Centro Oficial | English World",
    description: "Prepara tus exámenes oficiales Cambridge en Zaragoza. Centro Preparador Oficial.",
    url: "https://www.academiaenglishworld.com/exams",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examsJsonLd) }}
      />
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
