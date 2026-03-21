"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Clock, TrendingUp, Users } from "lucide-react"

const stats = [
  { value: "95%", label: "Turnos sin ausencias", icon: TrendingUp },
  { value: "24/7", label: "Atención automatizada", icon: Clock },
  { value: "3 hrs", label: "Ahorradas por día", icon: Sparkles },
  { value: "40%", label: "Más ingresos", icon: Users },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[#121212]">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#F5B841 1px, transparent 1px), linear-gradient(90deg, #F5B841 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#F5B841]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#8B5CF6]/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#10B981]/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#F5B841]/30 bg-[#F5B841]/10 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-[#F5B841]" />
            <span className="text-sm font-medium text-[#F5B841]">
              Automatización Inteligente
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Automatiza tus Turnos con{" "}
            <span className="gradient-text">WhatsApp</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Deja que el bot gestione tus reservas{" "}
            <span className="text-[#10B981] font-semibold">24/7</span> mientras tú te enfocas en tu negocio.
            Sin complicaciones, sin ausencias.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group h-14 min-w-[200px] bg-[#F5B841] text-[#121212] text-base font-semibold hover:bg-[#D4A138] shadow-xl shadow-[#F5B841]/25 transition-all hover:shadow-[#F5B841]/40"
            >
              Consultar sin Compromiso
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 min-w-[200px] border-2 border-[#333] text-base font-semibold text-foreground hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:text-[#A78BFA]"
            >
              <Play className="mr-2 h-5 w-5 fill-current" />
              Ver Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-20 w-full">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-[#F5B841]/50 hover:bg-card"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#F5B841]/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <stat.icon className="mb-3 h-6 w-6 text-[#F5B841]" />
                    <div className="text-3xl font-bold text-foreground sm:text-4xl">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
