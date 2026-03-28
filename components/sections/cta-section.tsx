"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#121212]" />
      
      {/* Gradient effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F5B841]/20 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#8B5CF6]/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/3 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#10B981]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-[#34D399]" />
            <span className="text-sm font-medium text-[#34D399]">
              Únete a decenas de negocios
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            ¿Listo para{" "}
            <span className="gradient-text">automatizar</span>
            <br />
            tu negocio?
          </h2>

          <p className="mt-6 text-lg text-muted-foreground">
            Únete a decenas de negocios que ya confían en TurnosBot
          </p>

          {/* CTA Button */}
          <div className="mt-10">
            <a href="https://mail.google.com/mail/?view=cm&to=turnosbot404@gmail.com&su=Consulta%20sin%20Compromiso%20-%20TurnosBot" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group h-16 px-10 text-lg bg-[#F5B841] text-[#121212] font-semibold hover:bg-[#D4A138] shadow-2xl shadow-[#F5B841]/30 transition-all hover:shadow-[#F5B841]/50 animate-pulse-glow"
              >
                Consultar sin Compromiso
                <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          {/* Trust text */}
          <p className="mt-6 text-sm text-muted-foreground">
            Sin tarjeta de crédito • Respuesta en menos de 24h
          </p>
        </div>
      </div>
    </section>
  )
}