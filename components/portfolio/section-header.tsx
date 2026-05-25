"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface SectionHeaderProps {
  kicker: string
  title: string
  subtitle?: string
  align?: "left" | "center"
  num?: string
}

export function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
  num,
}: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  const isCenter = align === "center"

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`space-y-3 ${isCenter ? "text-center" : ""}`}
    >
      {/* Kicker */}
      <motion.span
        initial={{ opacity: 0, x: isCenter ? 0 : -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="kicker"
      >
        {num && (
          <span className="opacity-40 mr-2">{num}</span>
        )}
        {kicker}
      </motion.span>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground font-heading tracking-tight leading-tight"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.22 }}
          className={`text-muted-foreground leading-relaxed text-pretty ${isCenter ? "max-w-2xl mx-auto" : "max-w-xl"}`}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative line — only for left-aligned */}
      {!isCenter && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="origin-left h-px w-16 bg-primary/60 mt-4"
        />
      )}
    </motion.div>
  )
}
