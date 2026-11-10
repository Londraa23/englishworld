import { Metadata, Viewport } from "next"
import Link from "next/link"
import Image from "next/image"
import { Phone, MapPin } from "lucide-react"
import { TeacherForm } from "@/components/profesores/TeacherForm"
import { RingShape, SquareShape, DotCluster } from "@/components/inscripcion/DecorativeShapes"

export const metadata: Metadata = {
  title: "Native English Teacher Wanted in Zaragoza | English World",
  description:
    "English World, Cambridge Official Centre in Zaragoza, is hiring native English teachers. Apply in 2 minutes and upload your CV.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "We're hiring: Native English Teacher in Zaragoza",
    description: "Join English World, Cambridge Official Centre in Zaragoza. Apply in 2 minutes.",
    locale: "en_GB",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#FBF5E6",
  width: "device-width",
  initialScale: 1,
}

const perks = [
  { emoji: "🎓", title: "Cambridge Official Centre", text: "Prepare students for official Cambridge exams, from A2 to C2." },
  { emoji: "👥", title: "Small groups", text: "Classes with few students, so you can really get to know each one." },
  { emoji: "🧒", title: "All ages", text: "Kids, teenagers and adults — tell us who you enjoy teaching most." },
]

export default function TeachersPage() {
  return (
    <main className="min-h-screen bg-cream relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      {/* Decorative color blobs */}
      <div className="absolute -top-16 -right-16 w-64 h-64 bg-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-52 -left-20 w-56 h-56 bg-sky/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-24 w-32 h-32 bg-gold/15 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative shapes */}
      <RingShape color="red" size={90} className="absolute top-16 right-6" />
      <SquareShape color="gold" size={40} className="absolute top-8 left-8" />
      <DotCluster color="sky" className="absolute top-64 right-10" />

      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-navy via-red to-sky" />

      {/* Logo only, no site nav, to keep ad traffic focused on the form */}
      <div className="relative z-10 flex justify-center pt-6">
        <Link href="/" prefetch={false} className="flex items-center gap-2">
          <div className="relative w-7 h-7 shrink-0">
            <Image src="/logo-transparent.png" alt="English World" fill sizes="28px" className="object-contain" priority />
          </div>
          <span className="font-satoshi font-semibold text-base text-navy tracking-tight-apple">
            English World
          </span>
        </Link>
      </div>

      <header className="relative z-10 pt-6 pb-6 px-6 text-center">
        <span className="inline-flex items-center gap-2 bg-red/10 border border-red/20 rounded-full px-3 py-1 font-satoshi font-bold text-[11px] tracking-widest text-red">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red" />
          </span>
          WE&apos;RE HIRING
        </span>

        <h1
          className="mt-4 font-satoshi font-bold text-navy tracking-tight leading-[1.1]"
          style={{ fontSize: "clamp(1.75rem, 7vw, 2.75rem)" }}
        >
          Native English Teacher
          <br />
          <span className="text-red">in Zaragoza.</span>
        </h1>

        <p className="mt-3 font-dm-sans text-navy/55 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
          Are you a native English speaker who loves teaching? Join our team.
          Tell us when you&apos;re available, upload your CV and we&apos;ll be in touch.
        </p>

        <p className="mt-4 flex items-center justify-center gap-1.5 font-dm-sans text-xs text-navy/45">
          <MapPin className="w-3.5 h-3.5 shrink-0" />
          Calle Celso Emilio Ferreiro 17, Zaragoza
        </p>
      </header>

      <section className="relative pb-4 overflow-hidden">
        <SquareShape color="sky" size={32} className="absolute top-4 -left-3 z-0" />
        <RingShape color="gold" size={64} className="absolute bottom-8 -right-3 z-0" />
        <div className="relative z-10">
          <TeacherForm />
        </div>
      </section>

      <div className="h-1.5 mt-10 bg-gradient-to-r from-gold via-red to-sky" />

      <section className="relative z-10 px-6 py-12">
        <h2 className="text-center font-satoshi font-bold text-2xl text-navy">Why teach with us</h2>
        <div className="mt-6 max-w-3xl mx-auto grid gap-3 sm:grid-cols-3">
          {perks.map((perk) => (
            <div key={perk.title} className="bg-white/70 backdrop-blur-sm border border-sand rounded-2xl p-5">
              <span className="text-2xl">{perk.emoji}</span>
              <h3 className="mt-2 font-satoshi font-bold text-base text-navy">{perk.title}</h3>
              <p className="mt-1 font-dm-sans text-sm text-navy/55 leading-relaxed">{perk.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="relative z-10 border-t border-navy/10 px-6 py-6 overflow-hidden">
        <RingShape color="sky" size={70} className="absolute -bottom-6 -right-6" />
        <SquareShape color="gold" size={28} className="absolute top-2 -left-2" />
        <div className="max-w-md mx-auto flex flex-col items-center gap-3 text-center">
          <span className="flex items-center gap-2 font-dm-sans text-sm text-navy/60">
            <MapPin className="w-4 h-4 shrink-0" />
            Calle Celso Emilio Ferreiro 17, Zaragoza
          </span>
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
    </main>
  )
}
