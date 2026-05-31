"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleSubmit = () => {
    console.log("Form submitted:", formData)
    alert("Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.")
  }

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* LEFT: FORM */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col"
          >
            <span className="font-dm-mono text-red text-sm tracking-widest uppercase mb-4 block">
              // ENVÍANOS UN MENSAJE
            </span>
            <h2 className="font-satoshi font-bold text-3xl md:text-4xl text-navy mb-12 tracking-tight-apple">
              Cuéntanos qué necesitas.
            </h2>

            <div className="space-y-8">
              <div className="relative group">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full bg-transparent border-b border-navy/20 py-4 font-dm-sans text-navy focus:outline-none focus:border-red transition-colors placeholder:text-navy/30"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="relative group">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-navy/20 py-4 font-dm-sans text-navy focus:outline-none focus:border-red transition-colors placeholder:text-navy/30"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="relative group">
                <input
                  type="tel"
                  placeholder="Teléfono (opcional)"
                  className="w-full bg-transparent border-b border-navy/20 py-4 font-dm-sans text-navy focus:outline-none focus:border-red transition-colors placeholder:text-navy/30"
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="relative group">
                <select
                  className="w-full bg-transparent border-b border-navy/20 py-4 font-dm-sans text-navy focus:outline-none focus:border-red transition-colors appearance-none cursor-pointer"
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  defaultValue=""
                >
                  <option value="" disabled>¿Qué te interesa?</option>
                  <option value="general">Información general</option>
                  <option value="test">Prueba de nivel</option>
                  <option value="group">Curso grupal</option>
                  <option value="private">Clases particulares</option>
                  <option value="exams">Exámenes Cambridge</option>
                </select>
              </div>

              <div className="relative group">
                <textarea
                  placeholder="Tu mensaje"
                  rows={4}
                  className="w-full bg-transparent border-b border-navy/20 py-4 font-dm-sans text-navy focus:outline-none focus:border-red transition-colors placeholder:text-navy/30 resize-none"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full bg-red text-white font-satoshi font-bold py-5 rounded-xl flex items-center justify-center gap-3 shadow-xl shadow-red/20 transition-all hover:bg-red/90"
              >
                Enviar mensaje
                <Send className="w-5 h-5" />
              </motion.button>

              <p className="font-dm-sans text-xs text-navy/50 text-center">
                🔒 Tus datos están seguros. Nunca los compartiremos.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: INFO CARDS */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="bg-navy rounded-2xl p-8 flex flex-col gap-4 text-white shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-satoshi font-bold text-xl mb-1">Dónde estamos</h3>
                <p className="font-dm-sans text-sm opacity-80">Calle Celso Emilio Ferreiro 17</p>
                <p className="font-dm-sans text-sm opacity-80">Zaragoza, España</p>
                <p className="font-dm-sans text-xs opacity-50 mt-2">A 5 min del centro en metro.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.1 }}
              className="bg-red rounded-2xl p-8 flex flex-col gap-4 text-white shadow-xl"
            >
               <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-satoshi font-bold text-xl mb-1">Llámanos</h3>
                <p className="font-satoshi font-bold text-2xl tracking-tight">651 85 99 39</p>
                <p className="font-dm-sans text-xs opacity-50 mt-2">Lunes a Viernes 9:00 – 21:00</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 flex flex-col gap-4 text-navy shadow-inner border border-navy/5"
            >
              <div className="w-10 h-10 rounded-xl bg-red/10 flex items-center justify-center text-red">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-satoshi font-bold text-xl mb-1">Escríbenos</h3>
                <p className="font-dm-sans text-sm font-medium">contacto@academiaenglishworld.com</p>
                <p className="font-dm-sans text-xs opacity-50 mt-2">Respondemos en menos de 24h.</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.3 }}
              className="bg-sand rounded-2xl p-8 flex flex-col gap-4 text-navy shadow-xl"
            >
              <div className="w-10 h-10 rounded-xl bg-navy/10 flex items-center justify-center text-navy">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-satoshi font-bold text-xl mb-1">Horario de atención</h3>
                <p className="font-dm-sans text-sm font-medium">Lunes a Viernes</p>
                <p className="font-satoshi font-bold text-xl">9:00 – 21:00</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
