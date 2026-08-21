"use client"

import dynamic from "next/dynamic"

const Testimonials = dynamic(
  () => import("@/components/Testimonials").then((mod) => mod.Testimonials),
  { ssr: false }
)

export function LazyTestimonials() {
  return <Testimonials />
}
