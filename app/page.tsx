import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Skills } from "@/components/portfolio/skills"
import { Experience } from "@/components/portfolio/experience"
import { Contact } from "@/components/portfolio/contact"
import { Navigation } from "@/components/portfolio/navigation"
import { FloatingElements } from "@/components/portfolio/floating-elements"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
