import Link from "next/link"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ArrowRight, Home } from "lucide-react"

export const metadata = {
  title: "Página no encontrada | English World",
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="bg-night min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center relative overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute inset-0 noise-overlay opacity-10" />
        <div className="absolute inset-0 dot-grid opacity-10" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-red/10 rounded-full blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-sky/10 rounded-full blur-[100px]" />

        <div className="relative z-10 max-w-xl mx-auto text-center">
          <span className="font-dm-mono text-sky/70 text-sm tracking-widest uppercase mb-6 block">
            {"// ERROR 404"}
          </span>

          <h1
            className="font-satoshi font-bold text-white tracking-tight-apple leading-none mb-6"
            style={{ fontSize: "clamp(5rem, 18vw, 9rem)" }}
          >
            4<span className="text-red">0</span>4
          </h1>

          <h2 className="font-satoshi font-bold text-2xl md:text-3xl text-white tracking-tight-apple mb-4">
            Esta página se ha ido de Erasmus.
          </h2>
          <p className="font-dm-sans text-white/60 text-base leading-relaxed mb-10 max-w-md mx-auto">
            No encontramos lo que buscas. Puede que el enlace esté roto o que
            la página se haya movido. Vuelve al inicio o cuéntanos qué
            necesitas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-red text-white font-satoshi font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 hover:bg-red/90"
            >
              <Home className="w-4 h-4" />
              Volver al inicio
            </Link>
            <Link
              href="/contacto"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 font-satoshi font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:border-white/60"
            >
              Contactar
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
