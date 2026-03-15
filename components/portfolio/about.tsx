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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading tracking-tight">Sobre Mi</h2>
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
                Soy Ricardo Sanhueza, Desarrollador Full-Stack, Analista de Datos y Especialista 
                en Software Seguro. Cuento con una solida trayectoria en el diseno de soluciones 
                eficientes y escalables, garantizando aplicaciones protegidas mediante buenas 
                practicas de ciberseguridad en cada etapa del ciclo de vida del software.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Mi formacion en INACAP incluye especializaciones en Desarrollo Full Stack, 
                Infraestructura TI Segura, Desarrollo de Videojuegos y Software Seguro. 
                He trabajado como Analista Programador en QUALITAT desarrollando con Flutter 
                y Firebase, y realice mi practica profesional en Bee Fractal Spa.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Domino tecnologias como <span className="text-foreground font-medium">React</span>,{" "}
                <span className="text-foreground font-medium">Angular</span>,{" "}
                <span className="text-foreground font-medium">Python</span>,{" "}
                <span className="text-foreground font-medium">Java</span>,{" "}
                <span className="text-foreground font-medium">SQL/NoSQL</span> y{" "}
                <span className="text-foreground font-medium">Agentes de IA</span>. 
                Mi objetivo es crecer profesionalmente aportando compromiso y rigor tecnico.
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
