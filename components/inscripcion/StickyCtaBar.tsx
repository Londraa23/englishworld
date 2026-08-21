"use client"

import { useEffect, useState } from "react"
import { ArrowRight } from "lucide-react"

const HERO_SCROLL_THRESHOLD = 420

export function StickyCtaBar({ targetId = "quiz-form" }: { targetId?: string }) {
  const [pastHero, setPastHero] = useState(false)
  const [formVisible, setFormVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleScroll = () => setPastHero(window.scrollY > HERO_SCROLL_THRESHOLD)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const target = document.getElementById(targetId)
    if (!target) return
    const observer = new IntersectionObserver(
      ([entry]) => setFormVisible(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(target)
    return () => observer.disconnect()
  }, [targetId])

  useEffect(() => {
    const handleSubmitted = () => setSubmitted(true)
    window.addEventListener("quiz-submitted", handleSubmitted)
    return () => window.removeEventListener("quiz-submitted", handleSubmitted)
  }, [])

  const show = pastHero && !formVisible && !submitted

  const scrollToForm = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 transition-all duration-300 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full pointer-events-none"
      }`}
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 1rem)" }}
    >
      <button
        onClick={scrollToForm}
        className="w-full flex items-center justify-center gap-2 bg-red text-white font-satoshi font-bold py-4 rounded-full shadow-2xl shadow-red/30 active:scale-[0.98] transition-transform"
      >
        Quiero información
        <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  )
}
