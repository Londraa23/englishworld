"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    name: "María G.",
    initials: "MG",
    course: "Curso B2 First",
    bgColor: "bg-navy",
    quote: "Aprobé el FCE con distinción. Los profesores te hacen sentir capaz desde el primer día. No es una academia, es un impulso.",
  },
  {
    name: "Carlos R.",
    initials: "CR",
    course: "Clases particulares",
    bgColor: "bg-red",
    quote: "Trabajo a jornada completa y aun así mejoré mi inglés gracias a la flexibilidad de horarios. No creía que fuera posible.",
  },
  {
    name: "Laura M.",
    initials: "LM",
    course: "Conversación C1",
    bgColor: "bg-sky",
    quote: "Vine por el inglés, me quedé por la gente. English World no es una clase, es una comunidad. He hecho amigos para toda la vida.",
  },
]

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }
    
    emblaApi.on("select", onSelect)
    onSelect()
    
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative bg-cream py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="font-dm-mono text-sm text-red tracking-wide"
          >
            {"// LO QUE DICEN"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-satoshi font-bold text-navy tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Historias reales.
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15 }}
            className="font-satoshi font-bold text-navy tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Resultados reales.
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden py-10 -my-10">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 px-4 md:px-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    className="bg-white rounded-3xl p-8 md:p-10 shadow-xl max-w-3xl mx-auto"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left column - Avatar info */}
                      <div className="flex flex-col items-center md:items-start md:w-[30%]">
                        {/* Avatar */}
                        <div
                          className={`
                            w-20 h-20 rounded-full
                            flex items-center justify-center
                            ${testimonial.bgColor}
                          `}
                        >
                          <span className="font-satoshi font-bold text-xl text-white">
                            {testimonial.initials}
                          </span>
                        </div>

                        {/* Name */}
                        <p className="mt-4 font-satoshi font-semibold text-navy">
                          {testimonial.name}
                        </p>

                        {/* Course badge */}
                        <span className="mt-1 font-dm-mono text-xs bg-gold/20 text-navy px-3 py-1 rounded-full">
                          {testimonial.course}
                        </span>

                        {/* Stars */}
                        <div className="mt-3 flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-gold text-gold"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Right column - Quote */}
                      <div className="relative md:w-[70%]">
                        {/* Decorative quote mark */}
                        <span
                          className="
                            absolute -top-2 -right-2 md:top-0 md:right-0
                            font-satoshi font-bold text-[6rem] text-red/15
                            leading-none select-none pointer-events-none
                          "
                          aria-hidden="true"
                        >
                          "
                        </span>

                        {/* Quote text */}
                        <p className="font-dm-sans font-medium text-lg text-navy leading-relaxed relative z-10">
                          "{testimonial.quote}"
                        </p>

                        {/* Attribution */}
                        <p className="mt-4 font-dm-mono text-xs text-navy/50">
                          English World · Zaragoza
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={scrollPrev}
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0
              w-12 h-12 rounded-full
              border-2 border-navy
              flex items-center justify-center
              bg-cream
              transition-colors duration-200
              hover:bg-navy hover:text-white
              z-10
            "
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0
              w-12 h-12 rounded-full
              border-2 border-navy
              flex items-center justify-center
              bg-cream
              transition-colors duration-200
              hover:bg-navy hover:text-white
              z-10
            "
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                w-3 h-3 rounded-full
                transition-colors duration-200
                ${selectedIndex === index ? "bg-red" : "bg-navy/30"}
              `}
              aria-label={`Ir a testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
