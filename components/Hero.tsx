"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

function AnimatedGlobe({ 
  globeX, globeY, globeScale, globeOpacity,
  ribbonsX, ribbonsY, ribbonsRotate, ribbonsOpacity,
  isMobile 
}: any) {
  return (
    <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
      {/* Idle Animation Wrapper (Always active) */}
      <motion.div
        animate={isMobile ? { x: 0, y: 0 } : { x: [0, 18, 0, -18, 0], y: [0, -14, 0, 14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Parallax Wrapper */}
        <motion.div
          style={{ 
            x: isMobile ? 0 : globeX,
            y: isMobile ? 0 : globeY,
            scale: isMobile ? 1 : globeScale,
            opacity: isMobile ? 1 : globeOpacity,
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          {/* Radial Glow (Moves with globe) */}
          <div className="absolute inset-0 bg-sky/20 rounded-full blur-[80px] pointer-events-none scale-150" />
          
          {/* Globe wireframe */}
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full relative z-10"
            style={{ willChange: "transform" }}
            role="img"
            aria-label="Globo terráqueo animado representando el alcance global del inglés"
          >
            <defs>
              <linearGradient id="ukFlag" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#002868" />
                <stop offset="25%" stopColor="#002868" />
                <stop offset="25%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#FFFFFF" />
                <stop offset="40%" stopColor="#CF142B" />
                <stop offset="60%" stopColor="#CF142B" />
                <stop offset="60%" stopColor="#FFFFFF" />
                <stop offset="75%" stopColor="#FFFFFF" />
                <stop offset="75%" stopColor="#002868" />
                <stop offset="100%" stopColor="#002868" />
              </linearGradient>
              <linearGradient id="usFlag" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#002868" />
                <stop offset="30%" stopColor="#002868" />
                <stop offset="30%" stopColor="#CF142B" />
                <stop offset="50%" stopColor="#CF142B" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#FFFFFF" />
                <stop offset="70%" stopColor="#CF142B" />
                <stop offset="100%" stopColor="#CF142B" />
              </linearGradient>
            </defs>
            
            {/* Globe base */}
            <g style={{ animation: "globeRotate 12s ease-in-out infinite" }}>
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#5B9BD5"
                strokeWidth="1"
                opacity="0.4"
              />
              {[0, 30, 60, 90, 120, 150].map((angle) => (
                <ellipse
                  key={angle}
                  cx="200"
                  cy="200"
                  rx={150 * Math.cos((angle * Math.PI) / 180)}
                  ry="150"
                  fill="none"
                  stroke="#5B9BD5"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}
              {[-100, -50, 0, 50, 100].map((y) => (
                <ellipse
                  key={y}
                  cx="200"
                  cy={200 + y}
                  rx={Math.sqrt(150 * 150 - y * y)}
                  ry={Math.sqrt(150 * 150 - y * y) * 0.3}
                  fill="none"
                  stroke="#5B9BD5"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              ))}
              <circle cx="200" cy="50" r="4" fill="#C8A225" opacity="0.8" />
              <circle cx="320" cy="200" r="4" fill="#C8A225" opacity="0.8" />
              <circle cx="200" cy="350" r="4" fill="#C8A225" opacity="0.8" />
              <circle cx="80" cy="200" r="4" fill="#C8A225" opacity="0.8" />
            </g>
          </motion.svg>

          {/* Ribbons Layer (Lagged Parallax) */}
          <motion.svg
            viewBox="0 0 400 400"
            className="absolute inset-0 w-full h-full pointer-events-none z-20"
            style={{ 
              x: isMobile ? 0 : ribbonsX,
              y: isMobile ? 0 : ribbonsY,
              rotate: isMobile ? 0 : ribbonsRotate,
              opacity: isMobile ? 1 : ribbonsOpacity,
              willChange: "transform",
            }}
          >
            <path
              d="M 80 280 Q 200 200 320 120"
              fill="none"
              stroke="url(#ukFlag)"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M 120 100 Q 200 200 280 300"
              fill="none"
              stroke="url(#usFlag)"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.8"
            />
          </motion.svg>
        </motion.div>
      </motion.div>
      
      <style jsx>{`
        @keyframes globeRotate {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
      `}</style>
    </div>
  )
}

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] md:h-[120px]"
        role="img"
        aria-label="Divisor decorativo en forma de onda"
      >
        <path
          d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z"
          fill="#FBF5E6"
        />
      </svg>
    </div>
  )
}

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    setMounted(true)
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Parallax Values
  const ease = (v: number) => 1 - Math.pow(1 - v, 3) // easeOutCubic

  // Layer 1 - Background Noise
  const bgY = useTransform(scrollY, [0, 500], [0, 150], { ease })
  const bgOpacity = useTransform(scrollY, [0, 400], [1, 0.4], { ease })

  // Layer 2 - Globe (Curved Path)
  const globeX = useTransform(scrollY, [0, 250, 500], [0, -120, -280], { ease: [ease, ease] })
  const globeY = useTransform(scrollY, [0, 250, 500], [0, -80, -200], { ease: [ease, ease] })
  const globeScale = useTransform(scrollY, [0, 250, 500], [1, 1.12, 0.85], { ease: [ease, ease] })
  const globeOpacity = useTransform(scrollY, [0, 500], [1, 0.2], { ease })

  // Layer 3 - Ribbons (Lagged 80%)
  const ribbonsX = useTransform(scrollY, [0, 500], [0, -224], { ease })
  const ribbonsY = useTransform(scrollY, [0, 500], [0, -160], { ease })
  const ribbonsRotate = useTransform(scrollY, [0, 500], [0, 25], { ease })
  const ribbonsOpacity = useTransform(scrollY, [0, 500], [1, 0.15], { ease })

  // Layer 4 - Headline
  const headY = useTransform(scrollY, [0, 400], [0, -40], { ease })
  const headOpacity = useTransform(scrollY, [0, 300], [1, 0], { ease })

  // Layer 5 - Body text + CTA
  const bodyY = useTransform(scrollY, [0, 400], [0, -60], { ease })
  const bodyOpacity = useTransform(scrollY, [0, 250], [1, 0], { ease })

  // Layer 6 - Trust row
  const trustY = useTransform(scrollY, [0, 400], [0, -80], { ease })
  const trustOpacity = useTransform(scrollY, [0, 200], [1, 0], { ease })

  const trustItems = [
    "Profesores nativos",
    "Grupos máx. 10",
    "Cambridge Official",
  ]

  if (!mounted) return (
    <section className="relative min-h-screen bg-night overflow-hidden" />
  )

  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-night overflow-hidden flex flex-col"
    >
      {/* Background Layer */}
      <motion.div 
        style={{ y: isMobile ? 0 : bgY, opacity: isMobile ? 1 : bgOpacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 noise-overlay pointer-events-none" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-20 flex-1 flex flex-col justify-center">
        <div className={`
          ${isMobile ? "flex flex-col items-center text-center" : "grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-8 items-center"}
        `}>
          {/* Right column - Globe (Only on Desktop) */}
          {!isMobile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="hidden lg:flex justify-center items-center order-last"
            >
              <AnimatedGlobe 
                globeX={globeX} globeY={globeY} globeScale={globeScale} globeOpacity={globeOpacity}
                ribbonsX={ribbonsX} ribbonsY={ribbonsY} ribbonsRotate={ribbonsRotate} ribbonsOpacity={ribbonsOpacity}
                isMobile={isMobile}
              />
            </motion.div>
          )}

          {/* Left column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={`flex flex-col ${isMobile ? "w-full max-w-2xl" : ""}`}
          >
            <motion.div style={{ y: isMobile ? 0 : headY, opacity: isMobile ? 1 : headOpacity }} className="flex flex-col">
              <motion.div variants={itemVariants}>
                <span className="inline-flex items-center gap-2 font-dm-mono text-sm text-sky border border-sky/30 bg-sky/10 px-4 py-1.5 rounded-full">
                  Centro Oficial Cambridge · Zaragoza
                </span>
              </motion.div>
              <motion.h1
                variants={itemVariants}
                className="mt-8 font-satoshi font-bold text-white tracking-tight-apple leading-display"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                Tu futuro
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="font-satoshi font-bold text-white tracking-tight-apple leading-display"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                comienza
              </motion.h1>
              <motion.h1
                variants={itemVariants}
                className="font-satoshi font-bold text-red tracking-tight-apple leading-display"
                style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
              >
                aquí.
              </motion.h1>
            </motion.div>

            <motion.div style={{ y: isMobile ? 0 : bodyY, opacity: isMobile ? 1 : bodyOpacity }} className="flex flex-col">
              <motion.p
                variants={itemVariants}
                className="mt-6 font-dm-sans text-white/70 text-lg max-w-md leading-body"
              >
                Aprende inglés con profesores nativos y certificados.
                Grupos reducidos, horarios flexibles y preparación oficial Cambridge.
              </motion.p>

              <motion.div variants={itemVariants} className={`mt-8 flex flex-wrap gap-4 ${isMobile ? "justify-center" : ""}`}>
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-red text-white font-satoshi font-semibold px-6 py-3 rounded-full transition-colors duration-200 hover:bg-red/90"
                >
                  Solicita información
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#niveles"
                  whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 bg-transparent text-white border border-white/40 font-satoshi font-semibold px-6 py-3 rounded-full transition-all duration-200"
                >
                  Ver niveles
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              style={{ y: isMobile ? 0 : trustY, opacity: isMobile ? 1 : trustOpacity }}
              className={`mt-6 flex flex-wrap gap-6 ${isMobile ? "justify-center" : ""}`}
            >
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-2 font-dm-sans text-sm text-white/50">
                  <CheckCircle className="w-4 h-4 text-gold" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <WaveDivider />
    </section>
  )
}
