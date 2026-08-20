"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const photos = [
  {
    src: "/header.png",
    alt: "Fachada de English World en Zaragoza",
    caption: "Nuestra entrada",
    span: "lg:row-span-2",
  },
  {
    src: "/clase_m.png",
    alt: "Aula de English World con pizarra digital",
    caption: "Aulas equipadas",
    span: "",
  },
  {
    src: "/recepcion.png",
    alt: "Recepción y sala de espera de English World",
    caption: "Zona de recepción",
    span: "",
  },
]

export function FacilitiesSection() {
  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16">
          <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
            // NUESTRAS INSTALACIONES
          </span>
          <h2 className="font-satoshi font-bold text-4xl md:text-5xl text-navy tracking-tight-apple leading-display mb-6">
            Un espacio pensado para aprender.
          </h2>
          <p className="font-dm-sans text-lg text-navy/70 leading-body max-w-lg">
            Aulas equipadas, ambiente cercano y un rincón de Reino Unido en pleno
            Zaragoza.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:auto-rows-[220px]">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl overflow-hidden shadow-lg shadow-navy/10 group aspect-[4/3] lg:aspect-auto ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-navy/0" />
              <span className="absolute bottom-4 left-4 font-dm-sans font-medium text-sm text-white">
                {photo.caption}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
