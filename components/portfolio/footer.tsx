"use client"

import { motion } from "framer-motion"
import { Code2, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-12 px-6 border-t border-border/50 bg-background overflow-hidden relative">
      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-sm font-medium text-foreground flex items-center gap-2">
              <Code2 className="w-4 h-4 text-primary" />
              <span>Ricardo Sanhueza</span>
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              Software Seguro & Full-Stack
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">Sobre Mí</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          
          <div className="text-xs text-muted-foreground font-mono flex flex-col items-center md:items-end gap-1">
            <span>&copy; {currentYear} Todos los derechos reservados.</span>
            <span className="flex items-center gap-1 opacity-70">
              Hecho con <Heart className="w-3 h-3 text-destructive mx-0.5" /> y código
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
