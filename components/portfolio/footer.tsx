"use client"

import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-muted-foreground">
            Disenado y construido por <span className="text-foreground">Ricardo Sanhueza</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">Sobre Mi</a>
            <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="#projects" className="hover:text-foreground transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contacto</a>
            <a
              href="/ecommerce"
              className="hover:text-primary transition-colors flex items-center gap-1.5 font-medium"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              TechStore
            </a>
          </div>
          
          <div className="text-sm text-muted-foreground">
            2026 Todos los derechos reservados
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
