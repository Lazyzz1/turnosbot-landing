"use client"

import { FileText, Smartphone, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileText,
    title: "Nos pasas tus datos",
    description:
      "Nombre del negocio, servicios, precios, horarios de tus peluqueros. Lo configuramos TODO por ti en menos de 48 horas.",
    color: "#F5B841",
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Te damos un número de WhatsApp",
    description:
      "Número exclusivo para tu bot. Tus clientes escriben y el bot responde automáticamente. Tu número personal queda libre.",
    color: "#8B5CF6",
  },
  {
    number: "03",
    icon: Rocket,
    title: "¡Listo! A trabajar",
    description:
      "El bot gestiona turnos, envía recordatorios y cancela ausencias. Tú solo te presentas a trabajar.",
    color: "#10B981",
  },
]

export function StepsSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#F5B841]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-1.5 text-sm font-medium text-[#34D399]">
            Cómo funciona
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Súper simple, en{" "}
            <span className="text-[#F5B841]">3 pasos</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line (hidden on mobile and last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-border to-transparent" />
                )}

                <div className="group relative rounded-3xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all hover:border-transparent hover:bg-card">
                  {/* Number badge */}
                  <div
                    className="absolute -top-5 left-8 flex h-10 w-16 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: step.color,
                      color: "#121212",
                    }}
                  >
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className="mt-6 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <step.icon
                      className="h-8 w-8"
                      style={{ color: step.color }}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Hover effect */}
                  <div
                    className="absolute inset-0 -z-10 rounded-3xl opacity-0 transition-opacity group-hover:opacity-100"
                    style={{
                      boxShadow: `0 25px 50px -12px ${step.color}20`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
