"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, X, ShoppingCart, MessageSquare, LayoutDashboard, Rocket, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"

type ProjectCategory = "all" | "ecommerce" | "landing" | "ai" | "saas" | "dashboard"

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  category: ProjectCategory
  technologies: string[]
  image: string
  demoComponent: React.ReactNode
  github?: string
  live?: string
  icon: React.ReactNode
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Tienda online completa con carrito, pagos y gestion de inventario.",
    longDescription: "Plataforma de comercio electronico desarrollada con React y Node.js. Incluye sistema de autenticacion, carrito de compras, pasarela de pagos con Stripe, panel de administracion y gestion de inventario en tiempo real.",
    category: "ecommerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    image: "/projects/ecommerce.jpg",
    icon: <ShoppingCart className="w-6 h-6" />,
    demoComponent: <EcommerceDemo />
  },
  {
    id: 2,
    title: "AI Chat Assistant",
    description: "Asistente virtual con procesamiento de lenguaje natural.",
    longDescription: "Chatbot inteligente construido con Python y modelos de lenguaje. Capaz de responder preguntas, realizar tareas y aprender de las interacciones del usuario mediante fine-tuning.",
    category: "ai",
    technologies: ["Python", "OpenAI", "FastAPI", "React", "WebSockets"],
    image: "/projects/ai-chat.jpg",
    icon: <MessageSquare className="w-6 h-6" />,
    demoComponent: <AIChatDemo />
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description: "Panel de control con visualizaciones de datos en tiempo real.",
    longDescription: "Dashboard interactivo para analisis de metricas empresariales. Graficos dinamicos, reportes automatizados, exportacion de datos y alertas configurables.",
    category: "dashboard",
    technologies: ["Angular", "D3.js", "PostgreSQL", "Python", "Docker"],
    image: "/projects/dashboard.jpg",
    icon: <BarChart3 className="w-6 h-6" />,
    demoComponent: <DashboardDemo />
  },
  {
    id: 4,
    title: "SaaS Project Manager",
    description: "Herramienta de gestion de proyectos con colaboracion en tiempo real.",
    longDescription: "Aplicacion SaaS para equipos de desarrollo. Incluye tableros Kanban, seguimiento de tiempo, integracion con Git, notificaciones en tiempo real y reportes de productividad.",
    category: "saas",
    technologies: ["React", "Firebase", "Node.js", "Socket.io", "Tailwind"],
    image: "/projects/saas.jpg",
    icon: <Rocket className="w-6 h-6" />,
    demoComponent: <SaaSDemo />
  },
  {
    id: 5,
    title: "Startup Landing Page",
    description: "Landing page moderna y animada para producto tecnologico.",
    longDescription: "Pagina de aterrizaje optimizada para conversion con animaciones fluidas, formularios de captura, integracion con CRM y A/B testing incorporado.",
    category: "landing",
    technologies: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
    image: "/projects/landing.jpg",
    icon: <LayoutDashboard className="w-6 h-6" />,
    demoComponent: <LandingDemo />
  },
  {
    id: 6,
    title: "AI-Logistics Assistant",
    description: "App móvil para gestión inteligente con Gemini Vision.",
    longDescription: "Aplicación móvil innovadora para la gestión de inventarios inteligente y automatización. Emplea la API de Gemini Vision para escanear guías y facturas al instante, logrando reducir los tiempos operativos en un 70%.",
    category: "ai",
    technologies: ["React Native", "Firebase", "Gemini Pro", "Vision API"],
    image: "/projects/ai-logistics.jpg",
    icon: <Rocket className="w-6 h-6" />,
    demoComponent: <AIChatDemo />
  },
  {
    id: 7,
    title: "Agency SaaS Platform",
    description: "Plataforma SaaS en la nube con CI/CD automatizado.",
    longDescription: "Solución completa para agencias que ofrece la comercialización de servicios de desarrollo y TI. Arquitectura escalable construida con Next.js y flujos de trabajo de CI/CD automatizados usando GitHub Actions.",
    category: "saas",
    technologies: ["Next.js", "GitHub Actions", "Tailwind CSS", "CI/CD", "TypeScript"],
    image: "/projects/agency-saas.jpg",
    icon: <LayoutDashboard className="w-6 h-6" />,
    demoComponent: <SaaSDemo />
  }
]

const categories = [
  { id: "all" as const, label: "Todos" },
  { id: "ecommerce" as const, label: "E-commerce" },
  { id: "landing" as const, label: "Landing Pages" },
  { id: "ai" as const, label: "IA" },
  { id: "saas" as const, label: "SaaS" },
  { id: "dashboard" as const, label: "Dashboards" }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="flex items-center gap-4">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading tracking-tight">Proyectos</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer"
                >
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5">
                    {/* Project Preview */}
                    <div className="aspect-video bg-secondary/50 relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {project.icon}
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 text-muted-foreground text-xs">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
            >
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
                {/* Interactive Demo */}
                <div className="bg-secondary/30 rounded-xl p-4 border border-border">
                  <div className="text-xs font-mono text-muted-foreground mb-4">Demo Interactivo</div>
                  {selectedProject.demoComponent}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Codigo
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

// Demo Components
function EcommerceDemo() {
  const [cart, setCart] = useState<string[]>([])
  const products = [
    { id: "1", name: "Laptop Pro", price: "$1,299" },
    { id: "2", name: "Wireless Mouse", price: "$49" },
    { id: "3", name: "USB-C Hub", price: "$79" }
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <div key={product.id} className="bg-card p-3 rounded-lg border border-border text-center">
            <div className="w-12 h-12 bg-secondary rounded mx-auto mb-2" />
            <div className="text-xs font-medium text-foreground">{product.name}</div>
            <div className="text-xs text-primary">{product.price}</div>
            <button 
              onClick={() => setCart([...cart, product.id])}
              className="mt-2 px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
            >
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground text-center">
        Carrito: {cart.length} items
      </div>
    </div>
  )
}

function AIChatDemo() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hola! Soy un asistente de IA. Como puedo ayudarte?" }
  ])
  const [input, setInput] = useState("")

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages([...messages, { role: "user", content: input }])
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "Procesando tu consulta con IA..." }])
    }, 500)
    setInput("")
  }

  return (
    <div className="space-y-3">
      <div className="h-32 overflow-y-auto space-y-2 bg-card rounded-lg p-3">
        {messages.map((msg, i) => (
          <div key={i} className={`text-xs p-2 rounded ${msg.role === "user" ? "bg-primary text-primary-foreground ml-8" : "bg-secondary mr-8"}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Escribe un mensaje..."
          className="flex-1 px-3 py-2 bg-card border border-border rounded text-xs"
        />
        <button onClick={sendMessage} className="px-3 py-2 bg-primary text-primary-foreground rounded text-xs">
          Enviar
        </button>
      </div>
    </div>
  )
}

function DashboardDemo() {
  const data = [65, 40, 80, 55, 90, 45, 70]
  
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card p-3 rounded-lg border border-border">
          <div className="text-xs text-muted-foreground">Usuarios</div>
          <div className="text-lg font-bold text-foreground">2,543</div>
        </div>
        <div className="bg-card p-3 rounded-lg border border-border">
          <div className="text-xs text-muted-foreground">Ventas</div>
          <div className="text-lg font-bold text-primary">$12.4k</div>
        </div>
        <div className="bg-card p-3 rounded-lg border border-border">
          <div className="text-xs text-muted-foreground">Conversion</div>
          <div className="text-lg font-bold text-foreground">3.2%</div>
        </div>
      </div>
      <div className="bg-card p-3 rounded-lg border border-border">
        <div className="flex items-end gap-2 h-16">
          {data.map((value, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ delay: i * 0.1 }}
              className="flex-1 bg-primary rounded-t"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function SaaSDemo() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Disenar UI", status: "done" },
    { id: 2, title: "Implementar API", status: "progress" },
    { id: 3, title: "Testing", status: "todo" }
  ])

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-2 text-xs">
        {["todo", "progress", "done"].map((status) => (
          <div key={status} className="bg-card p-2 rounded-lg border border-border">
            <div className="font-medium text-foreground mb-2 capitalize">{status}</div>
            {tasks.filter(t => t.status === status).map((task) => (
              <div key={task.id} className="bg-secondary p-2 rounded text-muted-foreground mb-1">
                {task.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function LandingDemo() {
  return (
    <div className="space-y-3">
      <div className="bg-card p-4 rounded-lg border border-border text-center">
        <div className="text-lg font-bold text-foreground mb-1">Tu Producto</div>
        <div className="text-xs text-muted-foreground mb-3">La solucion perfecta para tu negocio</div>
        <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-xs">
          Comenzar Gratis
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Rapido", "Seguro", "Escalable"].map((feature) => (
          <div key={feature} className="bg-secondary p-2 rounded text-center text-xs text-muted-foreground">
            {feature}
          </div>
        ))}
      </div>
    </div>
  )
}
