import { LeadForm } from "@/components/LeadForm"
import { Metadata, Viewport } from "next"

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

export default function LeadPage() {
  return (
    <main className="min-h-screen bg-cream relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-navy via-red to-sky" />

      {/* Header - minimal, mobile-focused */}
      <header className="relative z-10 pt-8 pb-6 px-6 text-center">
        {/* Logo mark */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 text-white"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <span className="font-satoshi font-bold text-lg text-navy tracking-tight">
            English World
          </span>
        </div>

        <h1
          className="font-satoshi font-bold text-navy tracking-tight leading-[1.1]"
          style={{ fontSize: "clamp(1.75rem, 7vw, 2.75rem)" }}
        >
          Tu futuro en inglés
          <br />
          <span className="text-red">empieza aquí.</span>
        </h1>

        <p className="mt-3 font-dm-sans text-navy/55 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Centro Oficial Cambridge en Zaragoza.
          <br className="sm:hidden" /> Rellena el formulario y te contactamos.
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
      </header>

      {/* Form */}
      <section className="relative z-10 pb-12">
        <LeadForm />
      </section>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sand/30 to-transparent pointer-events-none" />
    </main>
  )
}
