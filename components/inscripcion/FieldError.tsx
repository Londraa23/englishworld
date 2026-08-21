"use client"

import { motion } from "framer-motion"

export function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return (
    <motion.p
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-red text-xs font-dm-sans mt-1 pl-1"
    >
      {message}
    </motion.p>
  )
}
