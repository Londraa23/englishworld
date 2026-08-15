import { Navbar } from "@/components/Navbar"
import { PageTransition } from "@/components/PageTransition"
import { Footer } from "@/components/Footer"
import { ContactoHero } from "@/components/ContactoHero"
import { ContactSection } from "@/components/ContactSection"
import { MapSection } from "@/components/MapSection"
import { organizationJsonLd } from "@/lib/organization"

export const metadata = {
  title: "Contacto | English World Academia de Inglés Zaragoza",
  description: "Contacta con English World en Zaragoza. Estamos en Calle Celso Emilio Ferreiro 17. Escríbenos o llámanos para resolver tus dudas sobre cursos de inglés y exámenes Cambridge.",
  alternates: {
    canonical: "https://academiaenglishworld.com/contacto",
  },
  openGraph: {
    title: "Contacto | English World Academia de Inglés Zaragoza",
    description: "Contacta con English World en Zaragoza. Resolvemos tus dudas en menos de 24h.",
    url: "https://academiaenglishworld.com/contacto",
    siteName: "English World",
    images: [
      {
        url: "/og-contacto.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
}

export default function ContactoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    ...organizationJsonLd,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: organizationJsonLd.telephone,
      email: organizationJsonLd.email,
      contactType: "customer service",
      areaServed: "ES",
      availableLanguage: ["Spanish", "English"],
    },
  }

  return (
    <main className="bg-night">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <PageTransition>
        <ContactoHero />
        <ContactSection />
        <MapSection />
      </PageTransition>
      <Footer />
    </main>
  )
}
