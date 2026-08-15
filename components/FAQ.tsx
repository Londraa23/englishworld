"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import * as Accordion from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto duran los cursos?",
    answer: "Nuestros cursos siguen el calendario escolar, de octubre a junio, con 2–3 sesiones semanales de 90 minutos. También ofrecemos cursos intensivos de verano de 2 y 4 semanas.",
  },
  {
    question: "¿Cómo puedo conocer mi nivel?",
    answer: "Realizamos una prueba de nivel gratuita en dos partes — escrita y oral — antes de incorporarte. También puedes usar el test oficial de Cambridge online para tener una primera orientación.",
  },
  {
    question: "¿Cuál es el tamaño de los grupos?",
    answer: "Máximo 8–10 alumnos por grupo. Así garantizamos atención personalizada, participación activa y mucha práctica oral en cada clase.",
  },
  {
    question: "¿Preparan para todos los exámenes Cambridge?",
    answer: "Sí — desde A2 Key hasta C2 Proficiency, con material oficial actualizado y simulacros completos incluidos en la preparación.",
  },
]

function AccordionItem({ 
  item, 
  index 
}: { 
  item: typeof faqs[number]
  index: number 
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Accordion.Item
      value={`item-${index}`}
      className="border-b border-white/10"
    >
      <Accordion.Header>
        <Accordion.Trigger
          onClick={() => setIsOpen(!isOpen)}
          className="
            w-full flex items-center justify-between
            py-6 text-left
            font-dm-sans font-medium text-lg text-white
            transition-colors duration-200
            hover:text-red
            group
          "
        >
          <span className="relative">
            {item.question}
            {/* Animated underline */}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: isOpen ? "100%" : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute -bottom-1 left-0 h-0.5 bg-red"
            />
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 flex-shrink-0 ml-4" />
          </motion.div>
        </Accordion.Trigger>
      </Accordion.Header>
      
      <AnimatePresence>
        {isOpen && (
          <Accordion.Content forceMount asChild>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="pb-6 font-dm-sans text-white/70 text-base max-w-2xl leading-body">
                {item.answer}
              </p>
            </motion.div>
          </Accordion.Content>
        )}
      </AnimatePresence>
    </Accordion.Item>
  )
}

export function FAQ() {
  return (
    <section className="relative bg-night py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="font-dm-mono text-sm text-sky/60 tracking-wide"
          >
            {"// PREGUNTAS FRECUENTES"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1 }}
            className="mt-4 font-satoshi font-bold text-white tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Todo lo que necesitas
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.15 }}
            className="font-satoshi font-bold text-white tracking-tight-apple leading-display"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            saber antes de empezar.
          </motion.h2>
        </div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: 0.2 }}
        >
          <Accordion.Root type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} item={faq} index={index} />
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  )
}
