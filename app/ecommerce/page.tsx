"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Search,
  Star,
  ArrowLeft,
  Check,
  Truck,
  Shield,
  RefreshCw,
  Tag,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

// ── Types ─────────────────────────────────────────────────────────────────────
interface Product {
  id: string
  name: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  emoji: string
  description: string
  stock: number
  badge?: string
}

interface CartItem extends Product {
  qty: number
}

// ── Product catalogue ─────────────────────────────────────────────────────────
const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Laptop Pro X1",
    category: "Computadores",
    price: 1299,
    originalPrice: 1599,
    rating: 4.8,
    reviews: 142,
    emoji: "💻",
    description: "Procesador i9, 32 GB RAM, SSD 1 TB. Ideal para desarrollo y diseño profesional.",
    stock: 5,
    badge: "Oferta",
  },
  {
    id: "2",
    name: "Wireless Mouse Pro",
    category: "Accesorios",
    price: 49,
    rating: 4.6,
    reviews: 89,
    emoji: "🖱️",
    description: "Mouse ergonómico inalámbrico con 3 meses de batería y DPI ajustable.",
    stock: 12,
  },
  {
    id: "3",
    name: "USB-C Hub 7-en-1",
    category: "Accesorios",
    price: 79,
    originalPrice: 99,
    rating: 4.7,
    reviews: 64,
    emoji: "🔌",
    description: "Hub con HDMI 4K, USB-A × 3, SD, microSD y carga de 100 W.",
    stock: 8,
    badge: "Popular",
  },
  {
    id: "4",
    name: "Headphones XM5",
    category: "Audio",
    price: 199,
    rating: 4.9,
    reviews: 321,
    emoji: "🎧",
    description: "Cancelación activa de ruido líder en su clase. 30 h de autonomía.",
    stock: 3,
    badge: "Nuevo",
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    category: "Accesorios",
    price: 149,
    rating: 4.5,
    reviews: 56,
    emoji: "⌨️",
    description: "Teclado mecánico RGB con switches Cherry MX Red. Layout 75 %.",
    stock: 7,
  },
  {
    id: "6",
    name: "Monitor 4K 27\"",
    category: "Monitores",
    price: 449,
    originalPrice: 549,
    rating: 4.7,
    reviews: 203,
    emoji: "🖥️",
    description: "Panel IPS 4K 144 Hz, cobertura sRGB 99 %, G-Sync compatible.",
    stock: 4,
    badge: "Oferta",
  },
  {
    id: "7",
    name: "Webcam 4K",
    category: "Accesorios",
    price: 129,
    rating: 4.4,
    reviews: 78,
    emoji: "📷",
    description: "Webcam 4K 60 fps con enfoque automático y micrófono con cancelación de ruido.",
    stock: 6,
  },
  {
    id: "8",
    name: "Desk Lamp LED",
    category: "Escritorio",
    price: 59,
    rating: 4.3,
    reviews: 41,
    emoji: "💡",
    description: "Lámpara de escritorio LED con regulación de intensidad y temperatura de color.",
    stock: 15,
  },
]

const CATEGORIES = ["Todos", "Computadores", "Accesorios", "Audio", "Monitores", "Escritorio"]

// ── Stars component ────────────────────────────────────────────────────────────
function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3 h-3 ${s <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  )
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function EcommercePage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("Todos")
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "form" | "success">("cart")
  const [formData, setFormData] = useState({ name: "", email: "", address: "", card: "" })

  // Derived
  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (category === "Todos" || p.category === category) &&
          p.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [category, search],
  )

  const cartCount = cart.reduce((s, i) => s + i.qty, 0)
  const cartTotal = cart.reduce((s, i) => s + i.price * i.qty, 0)

  // Cart helpers
  const addToCart = (p: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === p.id)
      if (existing) return prev.map((i) => (i.id === p.id ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { ...p, qty: 1 }]
    })
  }

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: i.qty + delta } : i))
        .filter((i) => i.qty > 0),
    )
  }

  const removeFromCart = (id: string) => setCart((prev) => prev.filter((i) => i.id !== id))

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    setCheckoutStep("success")
  }

  const resetCheckout = () => {
    setCart([])
    setCheckoutStep("cart")
    setCartOpen(false)
    setFormData({ name: "", email: "", address: "", card: "" })
  }

  const openCart = () => {
    setCartOpen(true)
    setCheckoutStep("cart")
  }

  const addToCartAndClose = (product: Product) => {
    addToCart(product)
    setSelectedProduct(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ── */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          {/* Logo / back */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Portafolio</span>
            </Link>
            <div className="w-px h-5 bg-border" />
            <span className="text-lg font-bold font-heading">
              <span className="text-primary">Tech</span>Store
            </span>
          </div>

          {/* Search */}
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-9 pr-4 py-2 bg-secondary border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Cart button */}
          <button
            onClick={openCart}
            className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground rounded-full text-[10px] font-bold flex items-center justify-center"
              >
                {cartCount}
              </motion.span>
            )}
          </button>
        </div>
      </header>

      {/* ── Hero banner ── */}
      <section className="py-16 px-6 bg-gradient-to-br from-primary/10 via-background to-background border-b border-border">
        <div className="container mx-auto max-w-4xl text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-mono mb-4">
              <Tag className="w-3.5 h-3.5" />
              Hasta 40% de descuento en equipos seleccionados
            </span>
            <h1 className="text-4xl md:text-5xl font-bold font-heading tracking-tight">
              Tecnología que impulsa tu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-300">
                productividad
              </span>
            </h1>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty">
              Los mejores equipos, accesorios y periféricos para desarrolladores y creativos.
              Envío express en 24 h a todo Chile.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground"
          >
            {[
              { icon: <Truck className="w-4 h-4" />, text: "Envío gratis +$50.000" },
              { icon: <Shield className="w-4 h-4" />, text: "Pago 100% seguro" },
              { icon: <RefreshCw className="w-4 h-4" />, text: "Devolución 30 días" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2">
                <span className="text-primary">{b.icon}</span>
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="ml-auto text-sm text-muted-foreground self-center">
            {filtered.length} producto{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Products grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25, delay: i * 0.04 }}
                className="group"
              >
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                      {product.badge}
                    </span>
                  )}

                  {/* Emoji preview */}
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full aspect-video bg-secondary/50 flex items-center justify-center text-6xl hover:bg-secondary/70 transition-colors"
                    aria-label={`Ver detalles de ${product.name}`}
                  >
                    {product.emoji}
                  </button>

                  <div className="p-5 space-y-3">
                    <div>
                      <span className="text-xs text-primary font-mono">{product.category}</span>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <Stars rating={product.rating} />
                      <span className="text-xs text-muted-foreground">({product.reviews})</span>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-xl font-bold text-foreground font-mono">
                        ${product.price.toLocaleString()}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through font-mono">
                          ${product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className={product.stock <= 3 ? "text-destructive font-medium" : ""}>
                        {product.stock <= 3 ? `¡Solo ${product.stock} disponibles!` : `Stock: ${product.stock}`}
                      </span>
                    </div>

                    <Button
                      onClick={() => addToCart(product)}
                      size="sm"
                      className="w-full"
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <div className="text-4xl mb-4">🔍</div>
            <p>No se encontraron productos para tu búsqueda.</p>
          </div>
        )}
      </main>

      {/* ── Product detail modal ── */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-2xl max-w-md w-full overflow-hidden"
            >
              <div className="aspect-video bg-secondary/50 flex items-center justify-center text-7xl">
                {selectedProduct.emoji}
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs text-primary font-mono">{selectedProduct.category}</span>
                    <h2 className="text-xl font-bold text-foreground">{selectedProduct.name}</h2>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-2 hover:bg-secondary rounded-full transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <Stars rating={selectedProduct.rating} />
                  <span className="text-sm text-muted-foreground">
                    {selectedProduct.rating} ({selectedProduct.reviews} reseñas)
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold font-mono">
                    ${selectedProduct.price.toLocaleString()}
                  </span>
                  {selectedProduct.originalPrice && (
                    <span className="text-muted-foreground line-through font-mono">
                      ${selectedProduct.originalPrice.toLocaleString()}
                    </span>
                  )}
                  {selectedProduct.originalPrice && selectedProduct.originalPrice > 0 && (
                    <span className="text-sm text-primary font-semibold">
                      {Math.round((1 - selectedProduct.price / selectedProduct.originalPrice) * 100)}% off
                    </span>
                  )}
                </div>

                <Button
                  onClick={() => addToCartAndClose(selectedProduct)}
                  className="w-full"
                  size="lg"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Agregar al carrito
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Cart sidebar ── */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
              onClick={() => setCartOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
            >
              {/* Cart header */}
              <div className="p-6 border-b border-border flex items-center justify-between">
                <h2 className="text-lg font-bold font-heading">
                  {checkoutStep === "success"
                    ? "¡Orden Confirmada!"
                    : checkoutStep === "form"
                      ? "Finalizar Compra"
                      : `Carrito (${cartCount})`}
                </h2>
                <button
                  onClick={() => setCartOpen(false)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Cart body */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* ─ Success screen ─ */}
                {checkoutStep === "success" && (
                  <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                      className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <Check className="w-10 h-10 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground">¡Pago procesado!</h3>
                    <p className="text-muted-foreground text-sm">
                      Tu orden por{" "}
                      <span className="text-foreground font-semibold font-mono">
                        ${cartTotal.toLocaleString()}
                      </span>{" "}
                      ha sido confirmada. Recibirás un email de confirmación en breve.
                    </p>
                    <div className="text-xs text-muted-foreground bg-secondary rounded-lg px-4 py-3 w-full text-left space-y-1">
                      <div>📦 Estimado de entrega: 24–48 h</div>
                      <div>💳 Pago procesado via Stripe</div>
                    </div>
                    <Button onClick={resetCheckout} className="w-full mt-4">
                      Seguir comprando
                    </Button>
                  </div>
                )}

                {/* ─ Checkout form ─ */}
                {checkoutStep === "form" && (
                  <form onSubmit={handleCheckout} className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Total a pagar:{" "}
                      <span className="text-foreground font-semibold font-mono">
                        ${cartTotal.toLocaleString()}
                      </span>
                    </p>
                    {[
                      { label: "Nombre completo", key: "name", type: "text", placeholder: "Ricardo Sanhueza" },
                      { label: "Email", key: "email", type: "email", placeholder: "tu@email.com" },
                      { label: "Dirección de envío", key: "address", type: "text", placeholder: "Calle 123, Ciudad" },
                      { label: "Número de tarjeta", key: "card", type: "text", placeholder: "4242 4242 4242 4242" },
                    ].map((field) => (
                      <div key={field.key} className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">{field.label}</label>
                        <input
                          type={field.type}
                          value={formData[field.key as keyof typeof formData]}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))
                          }
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-sm"
                        />
                      </div>
                    ))}
                    <div className="flex gap-3 pt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCheckoutStep("cart")}
                        className="flex-1"
                      >
                        Volver
                      </Button>
                      <Button type="submit" className="flex-1">
                        💳 Pagar con Stripe
                      </Button>
                    </div>
                  </form>
                )}

                {/* ─ Cart items ─ */}
                {checkoutStep === "cart" && (
                  <>
                    {cart.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full gap-3 text-center text-muted-foreground">
                        <ShoppingCart className="w-12 h-12 opacity-30" />
                        <p>Tu carrito está vacío</p>
                        <Button variant="outline" size="sm" onClick={() => setCartOpen(false)}>
                          Ver productos
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {cart.map((item) => (
                          <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex gap-4 items-start bg-secondary/50 rounded-xl p-4"
                          >
                            <div className="text-3xl">{item.emoji}</div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-sm text-foreground truncate">{item.name}</h4>
                              <p className="text-primary font-mono text-sm">
                                ${item.price.toLocaleString()}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() => updateQty(item.id, -1)}
                                  className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
                                >
                                  <Minus className="w-3 h-3" />
                                </button>
                                <span className="text-sm w-5 text-center font-mono">{item.qty}</span>
                                <button
                                  onClick={() => updateQty(item.id, 1)}
                                  className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center hover:bg-border transition-colors"
                                >
                                  <Plus className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="font-semibold font-mono text-sm">
                                ${(item.price * item.qty).toLocaleString()}
                              </p>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-muted-foreground hover:text-destructive transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Cart footer */}
              {checkoutStep === "cart" && cart.length > 0 && (
                <div className="p-6 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-bold font-mono text-lg">${cartTotal.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Envío gratuito · IVA incluido
                  </p>
                  <Button onClick={() => setCheckoutStep("form")} className="w-full" size="lg">
                    Proceder al pago →
                  </Button>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
