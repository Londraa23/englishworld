import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { NinosHero } from "@/components/NinosHero"
import { NinosLevels } from "@/components/NinosLevels"
import { NinosWhy } from "@/components/NinosWhy"
import { NinosCTA } from "@/components/NinosCTA"
import { organizationJsonLd } from "@/lib/organization"

const yleCourses = [
  { level: "Starters", age: "6-7", desc: "El primer contacto con el inglés en formato de examen: vocabulario básico y familiarización con el idioma de forma lúdica." },
  { level: "Movers", age: "8-9", desc: "Comunicación en situaciones cotidianas sencillas: presentarse, hablar de la familia, describir imágenes." },
  { level: "Flyers", age: "10-12", desc: "El nivel más alto de los Young Learners English de Cambridge, la antesala del A2 Key." },
]

const yleJsonLd = yleCourses.map((c) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: `Cambridge English ${c.level} (Young Learners)`,
  description: c.desc,
  inLanguage: "en",
  typicalAgeRange: c.age,
  provider: organizationJsonLd,
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    location: {
      "@type": "Place",
      name: "English World",
      address: organizationJsonLd.address,
    },
  },
}))

export const metadata = {
  title: "Inglés para Niños en Zaragoza | English World",
  description: "Clases de inglés para niños desde los 4 años y adolescentes en Zaragoza. Grupos reducidos, profesores nativos y preparación oficial Cambridge Starters, Movers y Flyers.",
  alternates: {
    canonical: "https://www.academiaenglishworld.com/ingles-para-ninos",
  },
  openGraph: {
    title: "Inglés para Niños en Zaragoza | English World",
    description: "Clases de inglés para niños desde los 4 años y adolescentes en Zaragoza. Centro Oficial Cambridge.",
    url: "https://www.academiaenglishworld.com/ingles-para-ninos",
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

export default function InglesParaNinosPage() {
  return (
    <main className="bg-night">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(yleJsonLd) }}
      />
      <Navbar />
      <PageTransition>
        <NinosHero />
        <NinosLevels />
        <NinosWhy />
        <NinosCTA />
      </PageTransition>
      <Footer />
    </main>
  )
}
