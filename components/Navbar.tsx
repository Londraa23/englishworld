"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import * as Dialog from "@radix-ui/react-dialog"
import Link from "next/link"
import { Globe, Menu, X, ArrowRight } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/niveles", label: "Niveles" },
  { href: "/exams", label: "Exámenes" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`
          mx-auto max-w-5xl rounded-full px-6 py-3
          transition-all duration-300 ease-out
          ${isScrolled 
            ? "bg-cream/80 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
          }
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="relative w-8 h-8"
            >
              <Globe className={`w-8 h-8 ${isScrolled ? "text-navy" : "text-white"}`} />
            </motion.div>
            <span className={`font-satoshi font-semibold text-lg tracking-tight-apple ${isScrolled ? "text-navy" : "text-white"}`}>
              English World
            </span>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu.Root className="hidden md:block">
            <NavigationMenu.List className="flex items-center gap-8">
              {navLinks.map((link) => (
                <NavigationMenu.Item key={link.href}>
                  <Link
                    href={link.href}
                    className={`
                      relative font-dm-sans text-sm
                      transition-colors duration-200
                      hover:text-red
                      group
                      ${isScrolled ? "text-navy" : "text-white"}
                    `}
                  >
                    {link.label}
                    <span className="
                      absolute -bottom-1 left-0 w-0 h-0.5 bg-red
                      transition-all duration-200 ease-out
                      group-hover:w-full
                    " />
                  </Link>
                </NavigationMenu.Item>
              ))}
            </NavigationMenu.List>
          </NavigationMenu.Root>

          {/* Desktop CTA */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/contacto"
              className="
                hidden md:flex items-center gap-2
                bg-red text-white
                font-satoshi font-semibold text-sm
                px-5 py-2.5 rounded-full
                transition-colors duration-200
                hover:bg-red/90
              "
            >
              Empieza
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`md:hidden p-2 ${isScrolled ? "text-navy" : "text-white"}`}
                aria-label="Abrir menú"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </Dialog.Trigger>

            <AnimatePresence>
              {mobileMenuOpen && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-night/20 backdrop-blur-sm z-50"
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild>
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{ x: 0 }}
                      exit={{ x: "100%" }}
                      transition={{ type: "spring", damping: 25, stiffness: 200 }}
                      className="
                        fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm
                        bg-cream z-50 p-8
                        flex flex-col
                      "
                    >
                      <Dialog.Close asChild>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="absolute top-6 right-6 p-2 text-red"
                          aria-label="Cerrar menú"
                        >
                          <X className="w-6 h-6" />
                        </motion.button>
                      </Dialog.Close>

                      <Dialog.Title className="sr-only">
                        Menú de navegación
                      </Dialog.Title>

                      <nav className="mt-16 flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                          <motion.div
                            key={link.href}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={link.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="
                                font-satoshi font-semibold text-2xl text-navy
                                transition-colors duration-200
                                hover:text-red
                              "
                            >
                              {link.label}
                            </Link>
                          </motion.div>
                        ))}
                      </nav>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Link
                          href="/contacto"
                          onClick={() => setMobileMenuOpen(false)}
                          className="
                            mt-auto flex items-center justify-center gap-2
                            bg-red text-white
                            font-satoshi font-semibold text-lg
                            px-6 py-4 rounded-full
                          "
                        >
                          Empieza ahora
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </motion.nav>
    </header>
  )
}
