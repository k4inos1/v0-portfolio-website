"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, GraduationCap, Calendar, MapPin } from "lucide-react"

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
    period: "2024",
    description: [
      "Desarrollo de aplicaciones moviles con Flutter y Firebase",
      "Implementacion de arquitecturas limpias y patrones de diseno",
      "Colaboracion en equipos agiles utilizando metodologias Scrum"
    ],
    technologies: ["Flutter", "Firebase", "Dart", "Git"]
  },
  {
    id: 2,
    type: "work",
    title: "Practica Profesional",
    company: "Bee Fractal Spa",
    location: "Chile",
    period: "2023",
    description: [
      "Desarrollo de funcionalidades para aplicaciones web",
      "Participacion en procesos de testing y QA",
      "Documentacion tecnica y soporte al equipo de desarrollo"
    ],
    technologies: ["React", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    type: "education",
    title: "Ingenieria en Informatica",
    company: "INACAP",
    location: "Santiago, Chile",
    period: "2020 - 2024",
    description: [
      "Especializacion en Desarrollo Full Stack",
      "Especializacion en Infraestructura TI Segura",
      "Especializacion en Desarrollo de Videojuegos",
      "Especializacion en Software Seguro"
    ]
  },
  {
    id: 4,
    type: "education",
    title: "Cursos y Certificaciones",
    company: "Autodidacta",
    location: "Online",
    period: "2020 - Presente",
    description: [
      "Agentes de Inteligencia Artificial con Python",
      "Desarrollo web moderno con React y Angular",
      "Seguridad informatica y ethical hacking",
      "Cloud computing con AWS y Google Cloud"
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
    <section id="experience" className="py-32 px-6 bg-secondary/20">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading tracking-tight">Experiencia</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Tabs */}
          <div className="flex gap-4 justify-center">
            {[
              { id: "all" as const, label: "Todo" },
              { id: "work" as const, label: "Trabajo" },
              { id: "education" as const, label: "Educacion" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:text-foreground border border-border"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-border hidden lg:block" />

            <div className="space-y-8">
              {filteredExperiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="lg:w-1/2">
                    <div className={`bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}>
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
                          exp.type === "work" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                        }`}>
                          {exp.type === "work" ? (
                            <Building2 className="w-5 h-5" />
                          ) : (
                            <GraduationCap className="w-5 h-5" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                          <div className="text-primary font-medium">{exp.company}</div>
                          <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="mt-4 space-y-2">
                        {exp.description.map((desc, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1.5">{">"}</span>
                            {desc}
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full hidden lg:block border-4 border-background" />

                  {/* Empty space for other side */}
                  <div className="hidden lg:block lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
