import { Metadata, Viewport } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, Star } from "lucide-react"
import { QuizForm } from "@/components/inscripcion/QuizForm"
import { StickyCtaBar } from "@/components/inscripcion/StickyCtaBar"
import { LazyTestimonials } from "@/components/inscripcion/LazyTestimonials"
import { FacilitiesSection } from "@/components/FacilitiesSection"
import { FAQ } from "@/components/FAQ"
import { testimonialsData } from "@/lib/testimonials"

export const metadata: Metadata = {
  title: "Aprende Inglés en Zaragoza | English World",
  description:
    "Centro Oficial Cambridge en Zaragoza. Solicita información sobre nuestros cursos de inglés. Profesores nativos, grupos reducidos y horarios flexibles.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Aprende Inglés en Zaragoza | English World",
    description:
      "Centro Oficial Cambridge. Solicita información y empieza tu camino hacia el inglés.",
    locale: "es_ES",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#FBF5E6",
  width: "device-width",
  initialScale: 1,
}

const heroTestimonial = testimonialsData[0]

export default function LeadPage() {
  return (
    <main className="min-h-screen bg-cream relative overflow-hidden pb-24">
      {/* Subtle background texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-navy via-red to-sky" />

      {/* Minimal branded header — logo only, no site nav, to keep the page focused for ad traffic */}
      <div className="relative z-10 flex justify-center pt-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-7 h-7 shrink-0">
            <Image src="/logo-transparent.png" alt="English World" fill sizes="28px" className="object-contain" priority />
          </div>
          <span className="font-satoshi font-semibold text-base text-navy tracking-tight-apple">
            English World
          </span>
        </Link>
      </div>

      {/* Header - minimal, mobile-focused */}
      <header className="relative z-10 pt-6 pb-6 px-6 text-center">
        <h1
          className="font-satoshi font-bold text-navy tracking-tight leading-[1.1]"
          style={{ fontSize: "clamp(1.75rem, 7vw, 2.75rem)" }}
        >
          Tu futuro en inglés
          <br />
          <span className="text-red">empieza aquí.</span>
        </h1>

        <p className="mt-3 font-dm-sans text-navy/55 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          ¿Llevas tiempo queriendo aprender inglés en serio, pero nunca
          encuentras el momento? Empieza en 2 minutos.
        </p>

        {/* Trust badges */}
        <div className="mt-5 flex flex-wrap justify-center gap-3 sm:gap-5">
          {[
            { emoji: "🎓", text: "Cambridge Oficial" },
            { emoji: "👨‍🏫", text: "Profesores nativos" },
            { emoji: "👥", text: "Grupos reducidos" },
          ].map((badge) => (
            <span
              key={badge.text}
              className="inline-flex items-center gap-1.5 bg-white/70 backdrop-blur-sm border border-sand px-3 py-1.5 rounded-full font-dm-sans text-xs text-navy/60"
            >
              <span>{badge.emoji}</span>
              {badge.text}
            </span>
          ))}
        </div>

        {/* Inline social proof — visible without scrolling past the quiz */}
        <div className="mt-6 max-w-sm mx-auto bg-white/70 backdrop-blur-sm border border-sand rounded-2xl px-4 py-3 text-left">
          <div className="flex items-center gap-1 mb-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
            ))}
          </div>
          <p className="font-dm-sans text-xs text-navy/60 leading-relaxed line-clamp-2">
            &ldquo;{heroTestimonial.quote}&rdquo;
          </p>
          <p className="mt-1 font-dm-mono text-[10px] text-navy/35">
            {heroTestimonial.name} · Reseña en Google
          </p>
        </div>
      </header>

      {/* Quiz form */}
      <section className="relative z-10 pb-4">
        <QuizForm />
      </section>

      {/* Below-the-fold trust content for scroll-first visitors */}
      <FacilitiesSection />
      <LazyTestimonials />
      <FAQ />

      {/* Minimal footer — legal links + contact only, no site nav, same reasoning as the header */}
      <footer className="relative z-10 border-t border-navy/10 px-6 py-6">
        <div className="max-w-md mx-auto flex flex-col items-center gap-3 text-center">
          <a
            href="tel:+34651859939"
            className="flex items-center gap-2 font-dm-sans text-sm text-navy/60 hover:text-navy transition-colors"
          >
            <Phone className="w-4 h-4" />
            651 85 99 39
          </a>
          <nav className="flex items-center gap-4 font-dm-sans text-xs text-navy/40">
            <Link href="/aviso-legal" className="hover:text-navy/70 transition-colors">
              Aviso legal
            </Link>
            <Link href="/privacidad" className="hover:text-navy/70 transition-colors">
              Privacidad
            </Link>
            <Link href="/cookies" className="hover:text-navy/70 transition-colors">
              Cookies
            </Link>
          </nav>
          <p className="font-dm-sans text-[11px] text-navy/30">
            © {new Date().getFullYear()} English World
          </p>
        </div>
      </footer>

      <StickyCtaBar />
    </main>
  )
}
