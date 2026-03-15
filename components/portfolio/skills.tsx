"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
  { name: "React", level: "Experto", percentage: 95 },
  { name: "Angular", level: "Experto", percentage: 95 },
  { name: "Python", level: "Experto", percentage: 95 },
  { name: "SQL", level: "Experto", percentage: 95 },
  { name: "Agentes de IA", level: "Experto", percentage: 95 },
  { name: "HTML/CSS", level: "Experto", percentage: 95 },
  { name: "Java", level: "Avanzado", percentage: 85 },
  { name: "PHP", level: "Avanzado", percentage: 85 },
  { name: "NoSQL", level: "Avanzado", percentage: 85 },
  { name: "APIs REST", level: "Avanzado", percentage: 85 },
  { name: "C++", level: "Experto", percentage: 95 },
  { name: "Kotlin", level: "Intermedio", percentage: 65 },
  { name: "Unity", level: "Intermedio", percentage: 65 },
  { name: "Flutter", level: "Basico", percentage: 45 },
]

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Angular", "HTML/CSS", "Flutter"],
    icon: "🎨"
  },
  {
    title: "Backend",
    skills: ["Python", "Java", "PHP", "C++", "Kotlin"],
    icon: "⚙️"
  },
  {
    title: "Databases",
    skills: ["SQL", "NoSQL", "APIs REST"],
    icon: "🗄️"
  },
  {
    title: "Emerging Tech",
    skills: ["Agentes de IA", "Unity"],
    icon: "🚀"
  }
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading tracking-tight">Habilidades</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="text-3xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Bars */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground font-mono">{skill.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.percentage}%` } : {}}
                    transition={{ duration: 1, delay: index * 0.05 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
