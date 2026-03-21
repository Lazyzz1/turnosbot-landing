"use client"

import { Calendar, Bell, XCircle, Users, RefreshCcw, Globe } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Reservas Automáticas",
    description:
      "Tus clientes eligen fecha, hora y peluquero. El bot coordina todo automáticamente sin que muevas un dedo.",
    color: "#F5B841",
  },
  {
    icon: Bell,
    title: "Recordatorios Inteligentes",
    description:
      "Envío automático 24h y 2h antes del turno. Reduce ausencias hasta un 95%.",
    color: "#8B5CF6",
  },
  {
    icon: XCircle,
    title: "Cancelaciones Fáciles",
    description:
      "Los clientes pueden cancelar o reagendar su turno directamente desde WhatsApp.",
    color: "#10B981",
  },
  {
    icon: Users,
    title: "Multi-Peluquero",
    description:
      "Gestiona horarios individuales de cada profesional con sus especialidades.",
    color: "#F5B841",
  },
  {
    icon: RefreshCcw,
    title: "Sincronización con Google Calendar",
    description:
      "Todos tus turnos sincronizados en tiempo real. Verifica disponibilidad al instante.",
    color: "#8B5CF6",
  },
  {
    icon: Globe,
    title: "Multi-Idioma",
    description:
      "Soporta español, inglés y portugués. Ideal para zonas turísticas.",
    color: "#10B981",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1C1C1C] to-[#121212]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-1.5 text-sm font-medium text-[#A78BFA]">
            Funcionalidades
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que necesitas en un{" "}
            <span className="text-[#F5B841]">solo bot</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Funcionalidades diseñadas específicamente para tu negocio
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-transparent hover:shadow-2xl"
              style={{
                boxShadow: `0 0 0 0 ${feature.color}00`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 40px -20px ${feature.color}40`
                e.currentTarget.style.borderColor = `${feature.color}50`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${feature.color}00`
                e.currentTarget.style.borderColor = ""
              }}
            >
              {/* Icon */}
              <div
                className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon
                  className="h-7 w-7"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover gradient */}
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at top right, ${feature.color}08, transparent 70%)`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
