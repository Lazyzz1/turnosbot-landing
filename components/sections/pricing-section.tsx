"use client"

import { useState } from "react"
import ContratarModal from "@/components/ContratarModal"

import { Button } from "@/components/ui/button"
import { Check, CreditCard, Globe, Sparkles } from "lucide-react"

const features = [
  "Bot de WhatsApp completo y personalizado",
  "Turnos y cancelaciones ilimitadas",
  "Recordatorios automáticos 24h y 2h antes",
  "Sincronización con Google Calendar",
  "Multi-peluquero (hasta 5 profesionales)",
  "Personalización de servicios y horarios",
  "Soporte técnico por WhatsApp",
  "Actualizaciones incluidas",
]

const plans = [
  {
    id: "argentina",
    flag: "🇦🇷",
    region: "Argentina",
    currency: "ARS",
    setupPrice: "$200.000",
    monthlyPrice: "$65.000",
    setupLabel: "Setup Inicial (una sola vez)",
    monthlyLabel: "Luego, pago mensual",
    paymentMethod: "MercadoPago - Pesos Argentinos",
    paymentIcons: ["Visa", "Mastercard", "Transferencia", "Efectivo"],
    highlights: [
      "Pago en pesos argentinos",
      "Hasta 12 cuotas sin interés (setup)",
      "Factura A o B",
    ],
    ctaText: "Contratar con MercadoPago",
    accent: "#F5B841",
  },
  {
    id: "international",
    flag: "🌎",
    region: "Internacional",
    currency: "USD",
    setupPrice: "$199",
    monthlyPrice: "$65",
    setupLabel: "Setup Inicial (una sola vez)",
    monthlyLabel: "Luego, pago mensual",
    paymentMethod: "Tarjeta Internacional - Dólares",
    paymentIcons: ["Visa", "Mastercard", "Amex", "PayPal"],
    highlights: [
      "Pago en dólares (USD)",
      "Acepta tarjetas de cualquier país",
      "Procesamiento seguro SSL",
    ],
    ctaText: "Contratar con Tarjeta Internacional",
    accent: "#8B5CF6",
  },
]

export function PricingSection() {
  const [modalPlan, setModalPlan] = useState<"argentina" | "internacional" | null>(null)
  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1C1C1C] to-[#121212]" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#F5B841]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-[#F5B841]/30 bg-[#F5B841]/10 px-4 py-1.5 text-sm font-medium text-[#F5B841]">
            Precios
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Precios transparentes,{" "}
            <span className="text-[#F5B841]">sin sorpresas</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Inversión única de setup + mensualidad accesible
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="group relative rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-transparent"
              style={{
                boxShadow: `0 0 0 0 ${plan.accent}00`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 25px 60px -15px ${plan.accent}30`
                e.currentTarget.style.borderColor = `${plan.accent}40`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 0 ${plan.accent}00`
                e.currentTarget.style.borderColor = ""
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{plan.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan.region}</h3>
                  <p className="text-sm text-muted-foreground">{plan.paymentMethod}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="space-y-6 mb-8">
                {/* Setup */}
                <div className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
                  <p className="text-sm text-muted-foreground mb-2">{plan.setupLabel}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold" style={{ color: plan.accent }}>
                      {plan.setupPrice}
                    </span>
                    <span className="text-muted-foreground">{plan.currency} - Pago único</span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-[#10B981]" /> Configuración completa del bot
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Check className="h-3 w-3 text-[#10B981]" /> Integración con tu calendario
                    </span>
                  </div>
                </div>

                {/* Monthly */}
                <div className="rounded-2xl border border-border/50 bg-secondary/30 p-5">
                  <p className="text-sm text-muted-foreground mb-2">{plan.monthlyLabel}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">{plan.currency}/mes</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">A partir del segundo mes</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div
                      className="flex h-5 w-5 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${plan.accent}20` }}
                    >
                      <Check className="h-3 w-3" style={{ color: plan.accent }} />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                className="w-full h-14 text-base font-semibold transition-all"
                style={{
                  backgroundColor: plan.accent,
                  color: "#121212",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.9"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1"
                }}
                onClick={() => setModalPlan(plan.id === "argentina" ? "argentina" : "internacional")}
              >
                <CreditCard className="mr-2 h-5 w-5" />
                {plan.ctaText}
              </Button>

              {/* Payment methods */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {plan.paymentIcons.map((icon) => (
                  <span
                    key={icon}
                    className="rounded-md bg-secondary/50 px-2 py-1 text-xs text-muted-foreground"
                  >
                    {icon}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="mt-6 space-y-2">
                {plan.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-[#10B981]" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-[#10B981]" />
            Pagos 100% seguros
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#F5B841]" />
            Sin cargos ocultos
          </span>
          <span className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-[#8B5CF6]" />
            Cancela cuando quieras
          </span>
        </div>
      </div>

      {/* Modal de contratación */}
      {modalPlan && (
        <ContratarModal
          plan={modalPlan}
          onClose={() => setModalPlan(null)}
        />
      )}
    </section>
  )
}