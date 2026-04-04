"use client"

import { Star, MessageCircle } from "lucide-react"

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
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos comenzando. Sé el primero en probar TurnosBot y dejá tu reseña.
          </p>
        </div>

        {/* Empty state */}
        <div className="mt-16 flex flex-col items-center justify-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#F5B841]/30 bg-[#F5B841]/10">
            <MessageCircle className="h-10 w-10 text-[#F5B841]" />
          </div>

          <div className="text-center max-w-md">
            <p className="text-foreground font-semibold text-lg mb-2">
              ¡Próximamente las primeras reseñas!
            </p>
            <p className="text-muted-foreground text-sm">
              Probá el bot gratis durante 7 días. Si te convence, tu reseña podría aparecer acá.
            </p>
          </div>

          {/* Placeholder cards */}
          <div className="mt-4 grid gap-6 md:grid-cols-3 w-full max-w-4xl">
            {[
              { color: "#F5B841", label: "Tu reseña" },
              { color: "#8B5CF6", label: "Tu reseña" },
              { color: "#10B981", label: "Tu reseña" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-dashed border-border/50 bg-card/30 p-8 flex flex-col items-center justify-center gap-3 min-h-[180px]"
                style={{ borderColor: `${item.color}30` }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Star className="h-5 w-5" style={{ color: item.color }} />
                </div>
                <p className="text-sm text-muted-foreground/50">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}