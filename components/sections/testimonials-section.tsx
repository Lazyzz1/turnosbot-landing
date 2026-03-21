"use client"

import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Peluquería Glamour - CABA",
    avatar: "M",
    content:
      "Increíble. Antes perdía 3-4 turnos por semana porque no contestaba el teléfono. Ahora todo es automático y mis clientes están felices.",
    rating: 5,
    color: "#F5B841",
  },
  {
    name: "Carlos Méndez",
    role: "Barbería Vintage - Rosario",
    avatar: "C",
    content:
      "Me ahorro 2 horas diarias contestando mensajes. El bot hace todo solo. La mejor inversión que hice para mi negocio.",
    rating: 5,
    color: "#8B5CF6",
  },
  {
    name: "Laura Fernández",
    role: "Salón Beauty - Córdoba",
    avatar: "L",
    content:
      "Mis clientas adoran poder sacar turno a cualquier hora. Los recordatorios automáticos son un golazo, casi no tengo más ausencias.",
    rating: 5,
    color: "#10B981",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F5B841]/5 rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#F5B841]/30 bg-[#F5B841]/10 px-4 py-1.5 text-sm font-medium text-[#F5B841]">
            Testimonios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lo que dicen nuestros{" "}
            <span className="text-[#F5B841]">clientes</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-transparent"
              style={{
                boxShadow: `0 0 0 0 ${testimonial.color}00`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 25px 50px -15px ${testimonial.color}25`
                e.currentTarget.style.borderColor = `${testimonial.color}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${testimonial.color}00`
                e.currentTarget.style.borderColor = ""
              }}
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-6 right-6 h-8 w-8 opacity-20"
                style={{ color: testimonial.color }}
              />

              {/* Avatar and info */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold"
                  style={{
                    backgroundColor: `${testimonial.color}20`,
                    color: testimonial.color,
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#F5B841] text-[#F5B841]"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
