"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { SectionHeader } from "./section-header"
import { ShieldCheck, Paintbrush, Cog, Database, Sparkles } from "lucide-react"

const categories = [
  {
    title: "Seguridad",
    skills: ["Software Seguro", "Ciberseguridad", "OWASP", "Criptografía", "Pentesting"],
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "text-primary"
  },
  {
    title: "Frontend",
    skills: ["React", "Angular", "HTML/CSS", "Flutter", "Tailwind CSS"],
    icon: <Paintbrush className="w-5 h-5" />,
    color: "text-chart-4"
  },
  {
    title: "Backend",
    skills: ["Java", "Python", "PHP", "C++", "Kotlin", "Node.js"],
    icon: <Cog className="w-5 h-5" />,
    color: "text-chart-2"
  },
  {
    title: "Datos y APIs",
    skills: ["SQL", "NoSQL", "APIs REST", "GraphQL", "Redis"],
    icon: <Database className="w-5 h-5" />,
    color: "text-chart-1"
  },
  {
    title: "Emerging Tech",
    skills: ["Agentes de IA", "LangChain", "Unity", "Web3"],
    icon: <Sparkles className="w-5 h-5" />,
    color: "text-amber-500"
  }
]

const topSkills = [
  { name: "Software Seguro", percentage: 95 },
  { name: "React & Angular", percentage: 95 },
  { name: "Python / Java", percentage: 90 },
  { name: "Arquitectura Cloud", percentage: 85 },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-24 px-6 md:py-32 relative">
      {/* Background decorations */}
      <div className="absolute top-1/2 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-chart-4/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="space-y-16">
          <SectionHeader 
            num="02" 
            kicker="Arsenal Tecnológico" 
            title="Herramientas y Habilidades" 
            subtitle="Mi enfoque combina sólidas bases de ingeniería y seguridad con las últimas tecnologías para crear productos digitales robustos y escalables."
            align="center"
          />

          <div className="grid lg:grid-cols-12 gap-10">
            {/* Left: Categories Grid */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`card-premium bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 relative overflow-hidden group ${index === categories.length - 1 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {category.icon}
                  </div>
                  
                  <div className={`mb-4 inline-flex items-center justify-center p-2 rounded-lg bg-black/20 ${category.color}`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-foreground mb-4 font-heading">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-secondary/80 text-secondary-foreground rounded text-xs font-mono border border-border/50 group-hover:border-primary/30 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Expertise Bars */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 bg-card border border-border rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px]" />
              
              <h3 className="text-xl font-heading font-semibold mb-8 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-primary rounded-full block" />
                Nivel de Expertise
              </h3>

              <div className="space-y-8">
                {topSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-medium text-foreground/90">{skill.name}</span>
                      <span className="text-primary font-mono">{skill.percentage}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-secondary/60 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-chart-4 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.percentage}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1), ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm text-muted-foreground font-mono leading-relaxed">
                  <span className="text-primary font-bold">{">"}</span> Compromiso continuo con el aprendizaje y adopción de mejores prácticas en arquitecturas seguras y cloud.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
