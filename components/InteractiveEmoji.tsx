"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface InteractiveEmojiProps {
  children: ReactNode
  className?: string
  scale?: number
  rotate?: number
  hoverY?: number
}

export function InteractiveEmoji({ 
  children, 
  className = "", 
  scale = 1.2, 
  rotate = 10,
  hoverY = -5
}: InteractiveEmojiProps) {
  return (
    <motion.span
      className={`inline-block select-none ${className}`}
      whileHover={{ 
        scale, 
        rotate,
        y: hoverY,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{ 
        scale: 0.9, 
        rotate: -rotate / 2,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      {children}
    </motion.span>
  )
}
