"use client"

import { motion } from "framer-motion"
import { ArrowDown, Mail, Sparkles, Code2, ShieldCheck, Database, Bot } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { useState, useEffect } from "react"

const roles = [
  "Aseguro software desde el diseño",
  "Lidero soluciones full-stack seguras",
  "Optimizo productos con impacto real",
]

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((i) => (i + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, roleIndex])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-chart-4/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="space-y-10 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="space-y-5"
            >
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono tracking-wide shadow-[0_0_15px_rgba(var(--primary),0.15)]"
              >
                <Sparkles className="w-4 h-4" />
                DISPONIBLE PARA NUEVOS PROYECTOS
              </motion.div>

              <div className="space-y-2">
                <span className="kicker">Hola, soy</span>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter text-foreground font-heading">
                  Ricardo
                  <br />
                  <span className="text-gradient">
                    Sanhueza
                  </span>
                </h1>
              </div>

              {/* Typewriter role */}
              <div className="h-8 flex items-center gap-1 text-lg md:text-xl font-heading text-muted-foreground">
                <span className="text-foreground/90 font-medium">{displayed}</span>
                <span className="w-0.5 h-5 bg-primary animate-pulse rounded-full" />
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground/90 max-w-lg leading-relaxed text-pretty font-light"
            >
              Desarrollador Full-Stack y especialista en Software Seguro.
              Diseño plataformas escalables con foco en ciberseguridad, calidad técnica
              y resultados medibles para negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a 
                href="#projects"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground font-semibold transition-all duration-300 hover:bg-primary/90 glow hover:-translate-y-1"
              >
                Ver Proyectos
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-card text-foreground font-semibold border border-border transition-all duration-300 hover:border-primary/50 hover:bg-white/5 hover:-translate-y-1"
              >
                Contactar
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-4 pt-2"
            >
              <a
                href="https://github.com/k4inos1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:glow-sm"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-sanhueza/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:glow-sm"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="mailto:ricardosanhuezaacuna@gmail.com"
                className="p-3 rounded-full bg-card border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:glow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Interactive Code Block (Right Column) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block z-10"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <motion.div
                className="absolute inset-0 rounded-2xl bg-card/80 backdrop-blur-md border border-border overflow-hidden shadow-2xl shadow-primary/10 card-premium"
                animate={{
                  rotateY: [0, 4, 0, -4, 0],
                  rotateX: [0, -2, 0, 2, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Terminal Header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-chart-4/80" />
                  <span className="ml-2 text-xs font-mono text-muted-foreground">developer.ts</span>
                </div>

                <div className="p-6 font-mono text-sm sm:text-base space-y-3 leading-relaxed">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-chart-4">{"{"}</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="pl-6">
                    <span className="text-foreground/90">name</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-chart-1">{'"Ricardo Sanhueza"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="pl-6">
                     <span className="text-foreground/90">role</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-chart-1">{'"Software Seguro"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="pl-6">
                    <span className="text-foreground/90">securityFirst</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-chart-2">true</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="pl-6">
                    <span className="text-foreground/90">focus</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-chart-1">{'"Resultados medibles"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="pl-6">
                    <span className="text-foreground/90">stack</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-chart-4">{"["}</span>
                    <span className="text-chart-1">{'"React"'}</span><span className="text-muted-foreground">, </span>
                    <span className="text-chart-1">{'"Python"'}</span><span className="text-muted-foreground">, </span>
                    <span className="text-chart-1">{'"Angular"'}</span>
                    <span className="text-chart-4">{"]"}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="pl-6">
                    <span className="text-foreground/90">available</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-chart-2">true</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }}>
                    <span className="text-chart-4">{"}"}</span>
                    <span className="text-muted-foreground">;</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="pt-2">
                    <span className="text-muted-foreground opacity-50">{"// Executing secure_build..."}</span>
                    <span className="block w-2 h-4 bg-primary animate-pulse mt-1" />
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating tech badges */}
              <motion.div
                className="absolute -top-6 -right-6 px-4 py-2.5 bg-card/90 backdrop-blur-sm border border-border rounded-xl text-sm font-mono flex items-center gap-2 shadow-xl"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code2 className="w-4 h-4 text-primary" /> React
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 px-4 py-2.5 bg-card/90 backdrop-blur-sm border border-border rounded-xl text-sm font-mono flex items-center gap-2 shadow-xl"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              >
                <Database className="w-4 h-4 text-primary" /> Python
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-12 px-4 py-2.5 bg-card/90 backdrop-blur-sm border border-border rounded-xl text-sm font-mono flex items-center gap-2 shadow-xl"
                animate={{ x: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              >
                <ShieldCheck className="w-4 h-4 text-primary" /> Angular
              </motion.div>
              <motion.div
                className="absolute top-12 -left-10 px-4 py-2.5 bg-card/90 backdrop-blur-sm border border-border rounded-xl text-sm font-mono flex items-center gap-2 shadow-xl"
                animate={{ x: [0, -12, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
              >
                <Bot className="w-4 h-4 text-primary" /> AI Agents
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
