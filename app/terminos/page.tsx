import Link from "next/link"
import { Bot, ArrowLeft } from "lucide-react"

export default function TerminosPage() {
  const fecha = "Abril 2026"

  return (
    <div className="min-h-screen bg-[#121212] text-foreground">
      {/* Header */}
      <div className="border-b border-border/50 bg-[#121212]/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5B841]">
              <Bot className="h-5 w-5 text-[#121212]" />
            </div>
            <span className="font-bold text-foreground">
              Turnos<span className="text-[#F5B841]">Bot</span>
            </span>
          </Link>
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#F5B841] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="mb-12">
          <span className="inline-block rounded-full border border-[#F5B841]/30 bg-[#F5B841]/10 px-4 py-1.5 text-sm font-medium text-[#F5B841] mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Términos y Condiciones
          </h1>
          <p className="text-muted-foreground">Última actualización: {fecha}</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Aceptación de los términos</h2>
            <p>
              Al contratar o utilizar TurnosBot (en adelante "el Servicio"), operado por Lazyzz
              (en adelante "nosotros"), aceptás estos Términos y Condiciones en su totalidad.
              Si no estás de acuerdo, no debés utilizar el Servicio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Descripción del servicio</h2>
            <p>
              TurnosBot es un servicio de automatización de turnos mediante WhatsApp, orientado a
              peluquerías, barberías y salones de belleza. El servicio incluye configuración del bot,
              integración con Google Calendar, recordatorios automáticos y soporte técnico según el
              plan contratado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Período de prueba gratuita</h2>
            <p>
              El Servicio incluye un período de prueba gratuita de 7 (siete) días corridos desde la
              activación del bot. Durante este período no se realizará ningún cobro. Al finalizar
              la prueba, el Servicio se suspenderá automáticamente hasta que el usuario active un
              método de pago. No se realizan cargos automáticos sin autorización previa del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Facturación y pagos</h2>
            <p className="mb-3">
              El Servicio se factura mensualmente según el plan elegido:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2"><span className="text-[#F5B841]">•</span> Plan Argentina: $24.500 ARS por mes, procesado mediante MercadoPago.</li>
              <li className="flex gap-2"><span className="text-[#F5B841]">•</span> Plan Internacional: $34.50 USD por mes, procesado mediante LemonSqueezy.</li>
            </ul>
            <p className="mt-3">
              Los precios pueden actualizarse con un aviso previo de 30 días. Los pagos son
              procesados por plataformas de terceros (MercadoPago y LemonSqueezy) bajo sus propios
              términos y condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Cancelación</h2>
            <p>
              Podés cancelar tu suscripción en cualquier momento sin penalización. La cancelación
              tendrá efecto al final del período mensual ya abonado. No se realizan reembolsos
              parciales por períodos no utilizados, salvo casos excepcionales a criterio nuestro.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Obligaciones del usuario</h2>
            <p className="mb-3">Al usar el Servicio, el usuario se compromete a:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2"><span className="text-[#F5B841]">•</span> Proporcionar información veraz y actualizada durante el proceso de contratación.</li>
              <li className="flex gap-2"><span className="text-[#F5B841]">•</span> No utilizar el Servicio para actividades ilegales, fraudulentas o que violen derechos de terceros.</li>
              <li className="flex gap-2"><span className="text-[#F5B841]">•</span> Mantener la confidencialidad de las credenciales de acceso.</li>
              <li className="flex gap-2"><span className="text-[#F5B841]">•</span> Cumplir con las políticas de uso de WhatsApp Business y Twilio.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Limitación de responsabilidad</h2>
            <p>
              TurnosBot no se responsabiliza por interrupciones del servicio causadas por terceros
              (Twilio, Google, MercadoPago, LemonSqueezy, proveedores de hosting), ni por pérdidas
              de datos o ingresos derivadas de fallas técnicas. El Servicio se provee "tal como
              está" sin garantías de disponibilidad continua.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Propiedad intelectual</h2>
            <p>
              Todo el software, diseño y contenido de TurnosBot es propiedad de Lazyzz. El usuario
              recibe una licencia de uso limitada, no exclusiva e intransferible. Queda prohibida
              la reproducción, modificación o distribución del Servicio sin autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Modificaciones</h2>
            <p>
              Nos reservamos el derecho de modificar estos términos con un aviso previo de 15 días
              mediante correo electrónico o notificación en la plataforma. El uso continuado del
              Servicio implica la aceptación de los términos modificados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contacto</h2>
            <p>
              Para consultas sobre estos términos, escribinos a{" "}
              <a
                href="mailto:turnosbot404@gmail.com"
                className="text-[#F5B841] hover:underline"
              >
                turnosbot404@gmail.com
              </a>
            </p>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-[#F5B841] transition-colors">Inicio</Link>
          <Link href="/privacidad" className="hover:text-[#F5B841] transition-colors">Política de Privacidad</Link>
          <span>© 2026 Lazyzz. Todos los derechos reservados.</span>
        </div>
      </div>
    </div>
  )
}