"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import * as Dialog from "@radix-ui/react-dialog"
import { AnimatePresence, motion } from "framer-motion"
import { X, ArrowRight, Sparkles } from "lucide-react"

const DISMISS_KEY = "ew_enrollment_popup_dismissed_at"
const DISMISS_DAYS = 7
const SHOW_DELAY_MS = 10000

export function EnrollmentPopup() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (pathname === "/inscripcion") return

    const dismissedAt = Number(localStorage.getItem(DISMISS_KEY) || 0)
    const daysSince = (Date.now() - dismissedAt) / (1000 * 60 * 60 * 24)
    if (dismissedAt && daysSince < DISMISS_DAYS) return

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [pathname])

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()))
    setOpen(false)
  }

  if (pathname === "/inscripcion") return null

  return (
    <Dialog.Root open={open} onOpenChange={(v) => (v ? setOpen(true) : dismiss())}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-night/50 backdrop-blur-sm z-[70]"
              />
            </Dialog.Overlay>
            <Dialog.Content asChild aria-describedby={undefined}>
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: "spring", damping: 22, stiffness: 260 }}
                className="
                  fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[71]
                  w-[92vw] max-w-md
                  bg-cream rounded-3xl shadow-2xl p-8 sm:p-10
                  overflow-hidden
                "
              >
                <div className="absolute inset-0 noise-overlay pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red/10 rounded-full blur-3xl pointer-events-none" />

                <Dialog.Close asChild>
                  <button
                    onClick={dismiss}
                    className="absolute top-5 right-5 p-1.5 rounded-full text-navy/40 hover:text-navy hover:bg-navy/5 transition-colors z-10"
                    aria-label="Cerrar"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </Dialog.Close>

                <div className="relative z-10">
                  <span className="inline-flex items-center gap-1.5 font-dm-mono text-xs text-red tracking-widest uppercase mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    Inscripciones abiertas
                  </span>

                  <Dialog.Title className="font-satoshi font-bold text-2xl sm:text-3xl text-navy tracking-tight-apple leading-tight mb-3">
                    ¡Ya estamos abriendo plazas para el nuevo curso!
                  </Dialog.Title>

                  <Dialog.Description className="font-dm-sans text-navy/60 text-sm sm:text-base leading-relaxed mb-8">
                    Cuéntanos qué nivel buscas y te llamamos en menos de 24h
                    para reservar tu plaza en English World. También puedes
                    escribirnos directamente por WhatsApp.
                  </Dialog.Description>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/inscripcion"
                      onClick={dismiss}
                      className="flex-1 flex items-center justify-center gap-2 bg-red text-white font-satoshi font-bold px-6 py-3.5 rounded-full shadow-lg shadow-red/20 transition-colors duration-200 hover:bg-red/90"
                    >
                      Quiero inscribirme
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={dismiss}
                      className="font-dm-sans text-sm text-navy/50 hover:text-navy/70 transition-colors px-4 py-3.5"
                    >
                      Ahora no
                    </button>
                  </div>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  )
}
