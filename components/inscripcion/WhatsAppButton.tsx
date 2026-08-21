"use client"

import { motion } from "framer-motion"

const WHATSAPP_NUMBER = "34651859939"
const DEFAULT_MESSAGE = "Hola, quiero información sobre clases de inglés en English World"

interface WhatsAppButtonProps {
  className?: string
  message?: string
  children: React.ReactNode
}

export function WhatsAppButton({ className, message, children }: WhatsAppButtonProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || DEFAULT_MESSAGE)}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.97 }}
      className={className}
    >
      {children}
    </motion.a>
  )
}
