import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { NivelesHero } from "@/components/NivelesHero"
import { LevelsGrid } from "@/components/LevelsGrid"
import { MethodologySection } from "@/components/MethodologySection"
import { NivelesCTA } from "@/components/NivelesCTA"
import { organizationJsonLd } from "@/lib/organization"

const levels = [
  { level: "A2", name: "Key English Test (KET)", desc: "Aprende a presentarte, hablar de tu día a día y entender conversaciones simples." },
  { level: "B1", name: "Preliminary English Test (PET)", desc: "Habla de experiencias, planes y opiniones con confianza creciente." },
  { level: "B2", name: "First Certificate in English (FCE)", desc: "Debatir, opinar, escribir ensayos y moverte en entornos internacionales." },
  { level: "C1", name: "Certificate in Advanced English (CAE)", desc: "Comunicación fluida en entornos académicos y profesionales de alto nivel." },
  { level: "C2", name: "Certificate of Proficiency in English (CPE)", desc: "Dominio total del idioma en cualquier contexto." },
]

const coursesJsonLd = levels.map((l) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: `Inglés ${l.level} — ${l.name}`,
  description: l.desc,
  inLanguage: "en",
  educationalLevel: l.level,
  provider: organizationJsonLd,
}))

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />
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
