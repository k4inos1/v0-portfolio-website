"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <span className="text-primary font-mono text-sm">Hola, soy</span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                Full Stack
                <br />
                <span className="text-primary">Developer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed text-pretty"
            >
              Desarrollador Full-Stack, Analista de Datos y Especialista en Software Seguro.
              Creo soluciones eficientes y escalables con enfoque en ciberseguridad,
              metodologias agiles y experiencia de usuario.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" asChild>
                <a href="#projects">Ver Proyectos</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#contact">Contactar</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/ricardosanhueza"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ricardo-sanhueza/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ricardo.sanhueza09@inacapmail.cl"
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* 3D Interactive Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated code block */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-card border border-border overflow-hidden"
                animate={{
                  rotateY: [0, 5, 0, -5, 0],
                  rotateX: [0, -3, 0, 3, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <div className="p-6 font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-chart-4/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <span className="text-primary">const</span>{" "}
                    <span className="text-foreground">developer</span>{" "}
                    <span className="text-muted-foreground">=</span>{" "}
                    <span className="text-chart-4">{"{"}</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="pl-4"
                  >
                    <span className="text-foreground">name</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">{'"Ricardo Sanhueza"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                    className="pl-4"
                  >
                    <span className="text-foreground">role</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">{'"Full Stack"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.6 }}
                    className="pl-4"
                  >
                    <span className="text-foreground">passion</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-primary">{'"Building"'}</span>
                    <span className="text-muted-foreground">,</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="pl-4"
                  >
                    <span className="text-foreground">available</span>
                    <span className="text-muted-foreground">:</span>{" "}
                    <span className="text-chart-2">true</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    <span className="text-chart-4">{"}"}</span>
                    <span className="text-muted-foreground">;</span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                React
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              >
                Python
              </motion.div>
              <motion.div
                className="absolute top-1/2 -right-8 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                Angular
              </motion.div>
              <motion.div
                className="absolute top-8 -left-6 px-4 py-2 bg-card border border-border rounded-full text-sm font-mono"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, delay: 0.8 }}
              >
                AI Agents
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs font-mono">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
