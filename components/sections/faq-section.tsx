"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Necesito saber de programación?",
    answer:
      "Para nada. Nosotros configuramos todo por ti. Solo necesitas proporcionarnos los datos de tu negocio y listo.",
  },
  {
    question: "¿Funciona con mi número actual de WhatsApp?",
    answer:
      "Te proporcionamos un número de WhatsApp Business nuevo y dedicado para el bot. Tu número personal queda libre.",
  },
  {
    question: "¿Qué pasa si tengo un problema?",
    answer:
      "Soporte técnico incluido por WhatsApp. Respondemos en menos de 2 horas hábiles.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer:
      "Sí, sin penalización. Avisando con 30 días de anticipación.",
  },
  {
    question: "¿Cuánto tarda la configuración?",
    answer:
      "Entre 24 y 48 horas hábiles desde que recibimos todos tus datos.",
  },
  {
    question: "¿Puedo tener varios peluqueros?",
    answer:
      "Sí, configuramos todos tus peluqueros con sus horarios y especialidades individuales.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#1C1C1C] to-[#121212]" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#8B5CF6]/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#10B981]/10 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="mb-4 inline-block rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-1.5 text-sm font-medium text-[#A78BFA]">
            FAQ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Preguntas{" "}
            <span className="text-[#F5B841]">Frecuentes</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border border-border/50 bg-card px-6 transition-all data-[state=open]:border-[#F5B841]/30 data-[state=open]:bg-card"
            >
              <AccordionTrigger className="py-6 text-left text-lg font-medium text-foreground hover:text-[#F5B841] hover:no-underline [&[data-state=open]]:text-[#F5B841]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
