"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, GraduationCap, MapPin } from "lucide-react"
import { SectionHeader } from "./section-header"

interface ExperienceItem {
  id: number
  type: "work" | "education"
  title: string
  company: string
  location: string
  period: string
  description: string[]
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    type: "work",
    title: "Analista Programador",
    company: "QUALITAT",
    location: "Chile",
    period: "2024 — Presente",
    description: [
      "Desarrollo de aplicaciones móviles con Flutter y Firebase.",
      "Implementación de arquitecturas limpias y patrones de diseño (Clean Architecture).",
      "Colaboración en equipos ágiles utilizando metodologías Scrum, optimizando flujos de entrega."
    ],
    technologies: ["Flutter", "Firebase", "Dart", "Git"]
  },
  {
    id: 2,
    type: "work",
    title: "Práctica Profesional",
    company: "Bee Fractal Spa",
    location: "Chile",
    period: "2023",
    description: [
      "Desarrollo de funcionalidades clave para aplicaciones web internas.",
      "Participación activa en procesos de testing, QA y resolución de bugs críticos.",
      "Documentación técnica y soporte constante al equipo de desarrollo."
    ],
    technologies: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    type: "education",
    title: "Ingeniería en Informática",
    company: "INACAP",
    location: "Santiago, Chile",
    period: "2020 — 2024",
    description: [
      "Especialización en Desarrollo Full Stack y Cloud.",
      "Especialización en Infraestructura TI Segura y Ciberseguridad.",
      "Desarrollo de Videojuegos y arquitecturas interactivas.",
      "Tesis en Software Seguro e integración de metodologías DevSecOps."
    ]
  },
  {
    id: 4,
    type: "education",
    title: "Cursos y Certificaciones",
    company: "Autodidacta",
    location: "Online",
    period: "2020 — Presente",
    description: [
      "Agentes de Inteligencia Artificial con Python (LangChain).",
      "Desarrollo web moderno con React (Next.js) y Angular.",
      "Seguridad informática aplicada y ethical hacking.",
      "Cloud computing con AWS y Google Cloud Platform."
    ]
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeTab, setActiveTab] = useState<"all" | "work" | "education">("all")

  const filteredExperiences = activeTab === "all" 
    ? experiences 
    : experiences.filter(e => e.type === activeTab)

  return (
    <section id="experience" className="py-24 px-6 md:py-32 bg-secondary/10">
      <div className="container mx-auto max-w-4xl" ref={ref}>
        <div className="space-y-12">
          <SectionHeader 
            num="03" 
            kicker="Trayectoria" 
            title="Experiencia y Formación" 
          />

          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            {[
              { id: "all" as const, label: "Todo" },
              { id: "work" as const, label: "Trabajo" },
              { id: "education" as const, label: "Educación" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border hover:border-primary/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>

          {/* Timeline List (Bradeac/Kawsarlog style) */}
          <div className="relative mt-12 pl-4 md:pl-0">
            <div className="space-y-12">
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="relative pl-8 md:pl-0 md:flex md:gap-8 group"
                >
                  {/* Timeline dot and line (Mobile only) */}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-primary/20 border-2 border-primary md:hidden" />
                  {index !== filteredExperiences.length - 1 && (
                    <div className="absolute left-1.5 top-4 bottom-[-3rem] w-px bg-border md:hidden" />
                  )}

                  {/* Period (Desktop Left Sidebar) */}
                  <div className="hidden md:block w-32 shrink-0 pt-1 text-right">
                    <span className="text-sm font-mono text-muted-foreground group-hover:text-primary transition-colors">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content (Right Side) */}
                  <div className="flex-1 pb-4 md:pb-8 md:border-b border-border/50 group-last:border-none group-last:pb-0">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h3>
                        <div className="text-muted-foreground font-medium mt-1 flex items-center gap-2">
                          <span className="text-foreground">{exp.company}</span>
                          <span className="text-border">•</span>
                          <span className="text-sm flex items-center gap-1 font-mono">
                            <MapPin className="w-3.5 h-3.5" /> {exp.location}
                          </span>
                        </div>
                        {/* Mobile period */}
                        <div className="md:hidden mt-2 text-sm font-mono text-muted-foreground">
                          {exp.period}
                        </div>
                      </div>
                      
                      <div className={`hidden md:flex w-10 h-10 rounded-full items-center justify-center shrink-0 border border-border/50 ${
                        exp.type === "work" ? "bg-primary/5 text-primary" : "bg-chart-4/5 text-chart-4"
                      }`}>
                        {exp.type === "work" ? <Building2 className="w-4 h-4" /> : <GraduationCap className="w-4 h-4" />}
                      </div>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-sm text-muted-foreground/90 flex items-start gap-3 leading-relaxed">
                          <span className="text-primary/70 mt-0.5 font-mono">›</span>
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-2 mt-6">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-card border border-border text-muted-foreground rounded hover:text-primary hover:border-primary/50 transition-colors text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
