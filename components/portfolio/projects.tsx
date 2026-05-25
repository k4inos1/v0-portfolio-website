"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, X, ShoppingCart, MessageSquare, Rocket, BarChart3, Star } from "lucide-react"
import { SectionHeader } from "./section-header"
import { GithubIcon } from "@/components/ui/social-icons"

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
  featured?: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Suite Platform",
    description: "Plataforma de IA centralizada para automatizar atención y contenido.",
    longDescription: "Centralicé asistentes conversacionales y generación de contenido en una sola plataforma con orquestación en LangChain, dejando una base extensible para nuevos flujos de automatización.",
    category: "ai",
    technologies: ["Next.js", "LangChain", "OpenAI API", "TypeScript", "React"],
    image: "/projects/ai-chat.jpg",
    icon: <MessageSquare className="w-5 h-5" />,
    demoComponent: <AIChatDemo />,
    github: "https://github.com/k4inos1/ai-suite-platform",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Delivery App",
    description: "Comercio electrónico con trazabilidad logística en tiempo real.",
    longDescription: "Implementé una solución de e-commerce con seguimiento de entregas en tiempo real, integrando pagos y Firebase para soportar operación comercial y trazabilidad.",
    category: "ecommerce",
    technologies: ["Next.js", "Firebase", "Stripe", "Tailwind CSS"],
    image: "/projects/ecommerce.jpg",
    icon: <ShoppingCart className="w-5 h-5" />,
    demoComponent: <EcommerceDemo />,
    github: "https://github.com/k4inos1/ecommerce-delivery-app",
    featured: true,
  },
  {
    id: 3,
    title: "Core API Services",
    description: "Servicios backend para inventario, logística y analítica operativa.",
    longDescription: "Consolidé la lógica de negocio en una API REST escalable que centraliza inventario, entregables y analítica predictiva para soportar procesos empresariales.",
    category: "saas",
    technologies: ["Django", "Python", "REST Framework", "PostgreSQL"],
    image: "/projects/dashboard.jpg",
    icon: <Rocket className="w-5 h-5" />,
    demoComponent: <CoreApiDemo />,
    github: "https://github.com/k4inos1/core-api-services",
    featured: true,
  },
  {
    id: 4,
    title: "Business Management Dashboard",
    description: "Renovación de panel administrativo con métricas y control de acceso.",
    longDescription: "Migré un sistema administrativo de Angular a React para mejorar mantenibilidad, incorporar métricas en tiempo real y fortalecer la gestión de usuarios y roles.",
    category: "dashboard",
    technologies: ["React", "Vite", "Material UI", "TypeScript"],
    image: "/projects/saas.jpg",
    icon: <BarChart3 className="w-5 h-5" />,
    demoComponent: <DashboardDemo />,
    github: "https://github.com/k4inos1/business-management-dashboard",
    featured: true,
  }
]

const categories = [
  { id: "all" as const, label: "Todos" },
  { id: "ai" as const, label: "IA" },
  { id: "saas" as const, label: "SaaS" },
  { id: "ecommerce" as const, label: "E-commerce" },
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
    <section id="projects" className="py-24 px-6 md:py-32 relative">
      <div className="container mx-auto max-w-6xl" ref={ref}>
        <div className="space-y-12">
          <SectionHeader 
            num="04" 
            kicker="Portafolio" 
            title="Proyectos Destacados" 
          />

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                    : "bg-transparent text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer h-full"
                >
                  <div className={`h-full card-premium bg-card/40 backdrop-blur-sm border rounded-2xl overflow-hidden flex flex-col ${
                      project.featured
                        ? "border-primary/30"
                        : "border-border"
                    }`}>
                    
                    {/* Project Header Area (Visual representation) */}
                    <div className="h-48 bg-secondary/30 relative overflow-hidden flex items-center justify-center p-6 border-b border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                      
                      {/* Abstract Background pattern */}
                      <div className="absolute inset-0 opacity-[0.03]" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '24px 24px'
                      }} />

                      <div className="w-20 h-20 rounded-2xl bg-card border border-border flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 z-10">
                        {project.icon}
                      </div>

                      {project.featured && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 bg-background/80 backdrop-blur-md border border-primary/30 text-primary text-xs font-semibold rounded-full shadow-lg">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          Destacado
                        </div>
                      )}
                    </div>
                    
                    <div className="p-8 flex-1 flex flex-col">
                      <h3 className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-background border border-border text-muted-foreground rounded-lg text-xs font-mono group-hover:border-primary/30 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-xl z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl shadow-primary/10"
            >
              <div className="p-6 border-b border-border flex items-center justify-between bg-secondary/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary rounded-lg">
                    {selectedProject.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground tracking-tight">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 space-y-8 overflow-y-auto custom-scrollbar">
                
                <div className="space-y-4">
                  <h4 className="text-sm font-mono text-primary uppercase tracking-wider">Descripción del Proyecto</h4>
                  <p className="text-muted-foreground/90 leading-relaxed text-lg">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-mono text-primary uppercase tracking-wider">Demo en vivo</h4>
                  <div className="bg-background rounded-xl p-4 md:p-6 border border-border/50 shadow-inner">
                    {selectedProject.demoComponent}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-sm font-mono text-primary uppercase tracking-wider">Stack Tecnológico</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm font-mono border border-border/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4 border-t border-border/50">
                  {selectedProject.github ? (
                    <a 
                      href={selectedProject.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-secondary text-foreground font-semibold border border-border transition-all hover:border-primary/50 hover:bg-white/5"
                    >
                      <GithubIcon className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  ) : (
                    <span className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-secondary/50 text-muted-foreground font-semibold border border-border cursor-not-allowed">
                      <GithubIcon className="w-4 h-4 mr-2" />
                      Código Privado
                    </span>
                  )}
                  {selectedProject.live && (
                    <a 
                      href={selectedProject.live} 
                      target={selectedProject.live.startsWith("http") ? "_blank" : "_self"} 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 px-6 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:bg-primary/90 glow"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Sitio en Vivo
                    </a>
                  )}
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
type CartItem = { id: string; name: string; price: number; emoji: string; qty: number }

function EcommerceDemo() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [checkedOut, setCheckedOut] = useState(false)
  const [view, setView] = useState<"shop" | "cart">("shop")

  const products = [
    { id: "1", name: "Laptop Pro", price: 1299, emoji: "💻", stock: 5 },
    { id: "2", name: "Wireless Mouse", price: 49, emoji: "🖱️", stock: 12 },
    { id: "3", name: "USB-C Hub", price: 79, emoji: "🔌", stock: 8 },
    { id: "4", name: "Headphones", price: 199, emoji: "🎧", stock: 3 },
  ]

  const addToCart = (p: typeof products[0]) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === p.id)
      if (existing) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { id: p.id, name: p.name, price: p.price, emoji: p.emoji, qty: 1 }]
    })
  }

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id))

  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)
  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0)

  if (checkedOut) {
    return (
      <div className="flex flex-col items-center justify-center py-6 space-y-2 text-center">
        <div className="text-4xl mb-2">✅</div>
        <div className="text-lg font-heading font-semibold text-foreground">¡Orden Confirmada!</div>
        <div className="text-sm font-mono text-muted-foreground">Pago procesado con Stripe · ${total.toLocaleString()}</div>
        <button onClick={() => { setCheckedOut(false); setCart([]); setView("shop") }}
          className="mt-4 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-secondary/80 transition-colors">
          Nueva compra
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm font-mono bg-card border border-border rounded-lg px-4 py-3">
        <span className="font-semibold text-foreground flex items-center gap-2"><ShoppingCart className="w-4 h-4"/> TechStore</span>
        <div className="flex gap-4">
          <button onClick={() => setView("shop")} className={`transition-colors ${view === "shop" ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`}>Tienda</button>
          <button onClick={() => setView("cart")} className={`relative transition-colors ${view === "cart" ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"}`}>
            Carrito
            {cartCount > 0 && <span className="absolute -top-1.5 -right-3 bg-primary text-primary-foreground rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">{cartCount}</span>}
          </button>
        </div>
      </div>

      {view === "shop" ? (
        <div className="grid grid-cols-2 gap-3">
          {products.map(p => (
            <div key={p.id} className="bg-card/50 border border-border/50 rounded-lg p-4 flex flex-col gap-2 hover:border-primary/30 transition-colors">
              <div className="text-3xl text-center mb-1">{p.emoji}</div>
              <div className="text-sm font-semibold text-foreground text-center">{p.name}</div>
              <div className="text-sm text-primary text-center font-mono font-bold">${p.price.toLocaleString()}</div>
              <div className="text-[11px] text-muted-foreground text-center font-mono uppercase tracking-widest">Stock: {p.stock}</div>
              <button onClick={() => addToCart(p)}
                className="mt-2 py-1.5 bg-secondary text-secondary-foreground rounded-md text-xs font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Agregar
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {cart.length === 0 ? (
            <div className="text-center text-sm font-mono text-muted-foreground py-8 bg-card/30 rounded-lg border border-dashed border-border/50">El carrito está vacío</div>
          ) : (
            <>
              {cart.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-card border border-border/50 rounded-lg px-4 py-3 text-sm">
                  <span className="font-medium">{item.emoji} {item.name} ×{item.qty}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-primary font-mono font-bold">${(item.price * item.qty).toLocaleString()}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive transition-colors p-1"><X className="w-4 h-4"/></button>
                  </div>
                </div>
              ))}
              <div className="flex items-center justify-between text-sm font-bold border-t border-border pt-4 mt-2">
                <span>Total a Pagar</span>
                <span className="text-primary font-mono text-lg">${total.toLocaleString()}</span>
              </div>
              <button onClick={() => setCheckedOut(true)}
                className="w-full py-3 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors mt-2 shadow-lg shadow-primary/20">
                Pagar con Stripe
              </button>
            </>
          )}
        </div>
      )}
    </div>
  )
}

function AIChatDemo() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! Soy un asistente de IA. ¿Cómo puedo ayudarte hoy?" }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = () => {
    if (!input.trim()) return
    setMessages(prev => [...prev, { role: "user", content: input }])
    setIsTyping(true)
    setInput("")
    
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "assistant", content: "Procesando tu consulta a través de LangChain..." }])
      setIsTyping(false)
    }, 1200)
  }

  return (
    <div className="space-y-4">
      <div className="h-48 overflow-y-auto space-y-3 bg-card/30 rounded-xl p-4 border border-border/50 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`text-sm p-3 rounded-2xl max-w-[85%] ${
              msg.role === "user" 
                ? "bg-primary text-primary-foreground rounded-br-none" 
                : "bg-secondary text-secondary-foreground rounded-bl-none"
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-secondary text-secondary-foreground p-3 rounded-2xl rounded-bl-none flex gap-1">
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" />
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Escribe un mensaje..."
          className="flex-1 px-4 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:border-primary/50 transition-colors"
        />
        <button onClick={sendMessage} className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors">
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
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-card/50 p-4 rounded-xl border border-border/50 flex flex-col">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Usuarios</div>
          <div className="text-2xl font-bold text-foreground">2,543</div>
        </div>
        <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex flex-col">
          <div className="text-xs font-mono text-primary uppercase tracking-widest mb-1">Ventas</div>
          <div className="text-2xl font-bold text-primary">$12.4k</div>
        </div>
        <div className="bg-card/50 p-4 rounded-xl border border-border/50 flex flex-col">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-1">Conv.</div>
          <div className="text-2xl font-bold text-foreground">3.2%</div>
        </div>
      </div>
      <div className="bg-card/50 p-6 rounded-xl border border-border/50">
        <div className="text-sm font-semibold mb-4 text-foreground">Tráfico Semanal</div>
        <div className="flex items-end gap-3 h-24">
          {data.map((value, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${value}%` }}
              transition={{ delay: i * 0.1, duration: 0.8, type: "spring" }}
              className="flex-1 bg-gradient-to-t from-primary/50 to-primary rounded-t-sm hover:opacity-80 transition-opacity cursor-pointer relative group"
            >
              <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs py-1 px-2 rounded font-mono transition-opacity">
                {value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CoreApiDemo() {
  return (
    <div className="space-y-4 font-mono text-sm">
      <div className="bg-[#0d1117] p-4 rounded-xl border border-border shadow-inner">
        <div className="flex justify-between items-center mb-3 pb-2 border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="text-chart-4 font-bold">GET</span>
            <span className="text-muted-foreground">/api/v1/health/</span>
          </div>
          <span className="text-primary bg-primary/10 px-2 py-0.5 rounded text-xs">200 OK</span>
        </div>
        <div className="text-muted-foreground font-medium whitespace-pre text-xs md:text-sm">
          <span className="text-chart-1">{"{"}</span><br/>
          {"  "}<span className="text-foreground/90">"status"</span>: <span className="text-chart-4">"online"</span>,<br/>
          {"  "}<span className="text-foreground/90">"uptime"</span>: <span className="text-chart-2">"99.99%"</span>,<br/>
          {"  "}<span className="text-foreground/90">"services"</span>: [<span className="text-chart-4">"db"</span>, <span className="text-chart-4">"cache"</span>, <span className="text-chart-4">"ml_engine"</span>],<br/>
          {"  "}<span className="text-foreground/90">"secure"</span>: <span className="text-primary">true</span><br/>
          <span className="text-chart-1">{"}"}</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#0d1117] p-3 rounded-lg flex items-center justify-center gap-2 border border-border">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs text-muted-foreground uppercase tracking-widest">ML Engine</span>
        </div>
        <div className="bg-[#0d1117] p-3 rounded-lg flex items-center justify-center gap-2 border border-border">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
          <span className="text-xs text-muted-foreground uppercase tracking-widest">JWT Auth</span>
        </div>
      </div>
    </div>
  )
}
