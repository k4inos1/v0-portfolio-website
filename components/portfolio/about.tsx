"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "./section-header"

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-6 md:py-32 bg-secondary/10">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text content */}
          <div className="space-y-8">
            <SectionHeader 
              num="01" 
              kicker="Acerca de Mí" 
              title="Ingeniería y Seguridad desde la raíz" 
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-muted-foreground leading-relaxed text-pretty font-light"
            >
              <p>
                Soy Ricardo Sanhueza, desarrollador Full-Stack y especialista en Software Seguro.
                Diseño soluciones escalables y reduzco riesgos desde la arquitectura hasta la entrega, 
                garantizando que la seguridad sea un pilar y no un añadido.
              </p>
              <p>
                A lo largo de mi carrera, he trabajado en entornos exigentes como QUALITAT y Bee Fractal Spa. 
                Me formé en INACAP con un enfoque integral: Desarrollo Full Stack, Infraestructura TI Segura 
                y Software Seguro. 
              </p>
              <p>
                Actualmente trabajo con un stack moderno basado en{" "}
                <span className="text-foreground font-medium border-b border-primary/30">React</span>,{" "}
                <span className="text-foreground font-medium border-b border-primary/30">Angular</span>,{" "}
                <span className="text-foreground font-medium border-b border-primary/30">Python</span>,{" "}
                <span className="text-foreground font-medium border-b border-primary/30">Java</span>, y{" "}
                <span className="text-foreground font-medium border-b border-primary/30">Agentes de IA con LangChain</span>.
              </p>
            </motion.div>
          </div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden card-premium bg-card border border-border p-2">
              <div className="w-full h-full rounded-xl bg-secondary/30 relative overflow-hidden flex flex-col">
                <div className="h-8 border-b border-border/50 bg-black/10 flex items-center gap-1.5 px-3">
                   <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                   <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                   <div className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-center items-center relative z-10">
                   <div className="w-24 h-24 mb-6 rounded-full bg-primary/10 flex items-center justify-center glow-sm shadow-xl">
                      <span className="text-3xl font-bold text-primary font-mono">{"</>"}</span>
                   </div>
                   <div className="text-center space-y-2">
                     <div className="text-lg font-semibold text-foreground">Ricardo Sanhueza</div>
                     <div className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full inline-block">@k4inos1</div>
                   </div>
                </div>
                
                {/* Background matrix style decoration */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none font-mono text-[10px] break-all leading-none p-4 overflow-hidden z-0" style={{ wordBreak: 'break-all' }}>
                   {Array.from({ length: 400 }).map(() => Math.random() > 0.5 ? '1' : '0').join('')}
                </div>
              </div>
            </div>
            
            {/* Offset decoration frame */}
            <div className="absolute -inset-4 border border-primary/20 rounded-3xl -z-10 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
