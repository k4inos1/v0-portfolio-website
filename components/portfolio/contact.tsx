"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, MapPin, Phone, Send, Check } from "lucide-react"
import { GithubIcon, LinkedinIcon } from "@/components/ui/social-icons"
import { SectionHeader } from "./section-header"

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 px-6 md:py-32 relative">
      <div className="container mx-auto max-w-5xl" ref={ref}>
        <div className="space-y-16">
          <SectionHeader 
            num="05" 
            kicker="Contacto" 
            title="Iniciemos un Proyecto" 
            subtitle="Estoy disponible para nuevos proyectos y oportunidades laborales. Si tienes una idea, necesitas consultoría en arquitectura de software o quieres mejorar la seguridad de tus sistemas, hablemos."
            align="center"
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="space-y-8">
                <div className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-sm group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">Email</div>
                    <a href="mailto:ricardosanhuezaacuna@gmail.com" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      ricardosanhuezaacuna@gmail.com
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-sm group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">Teléfono</div>
                    <a href="tel:+56953407990" className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                      +56 9 5340 7990
                    </a>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-primary shadow-sm group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">Ubicación</div>
                    <span className="text-lg font-medium text-foreground">
                      Concepción, Chile
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-border/50">
                <div className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-widest">Redes Profesionales</div>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/k4inos1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ricardo-sanhueza/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="card-premium bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 space-y-6 relative overflow-hidden"
              >
                {/* Decorative gradients */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-chart-4/10 blur-3xl rounded-full" />

                <div className="relative z-10 space-y-5">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Nombre</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm text-foreground shadow-inner"
                      placeholder="Ej. Jane Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm text-foreground shadow-inner"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Mensaje</label>
                    <textarea
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3.5 bg-background border border-border rounded-xl focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-sm text-foreground resize-none shadow-inner custom-scrollbar"
                      placeholder="Cuéntame sobre tu proyecto..."
                      required
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full h-12 flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl font-semibold transition-all hover:bg-primary/90 glow hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:glow-none"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <Check className="w-5 h-5" />
                        Mensaje Enviado
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
