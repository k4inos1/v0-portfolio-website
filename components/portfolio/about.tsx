"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">About</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-4"
            >
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Soy un desarrollador apasionado por crear experiencias digitales que combinan 
                un diseno atractivo con ingenieria robusta. Mi enfoque se centra en la 
                interseccion del diseno y el desarrollo, creando soluciones que no solo 
                lucen increibles sino que estan meticulosamente construidas para el 
                rendimiento y la usabilidad.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                A lo largo de mi carrera, he tenido la oportunidad de desarrollar software 
                en diversos entornos: desde agencias de publicidad y grandes corporaciones 
                hasta startups y estudios de productos digitales. Esta experiencia diversa 
                me ha dado una perspectiva unica sobre como construir productos que realmente 
                importan.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Actualmente me especializo en <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">Next.js</span>,{" "}
                <span className="text-foreground font-medium">Node.js</span> y tecnologias de{" "}
                <span className="text-foreground font-medium">Inteligencia Artificial</span>. 
                Siempre estoy buscando nuevos desafios y oportunidades para aprender.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative aspect-square rounded-lg overflow-hidden bg-card border border-border">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-4xl font-bold text-primary">{"</>"}</span>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
