import Link from "next/link"
import { Bot, ArrowLeft } from "lucide-react"

export default function PrivacidadPage() {
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
          <span className="inline-block rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-1.5 text-sm font-medium text-[#A78BFA] mb-4">
            Legal
          </span>
          <h1 className="text-4xl font-bold text-foreground mb-3">
            Política de Privacidad
          </h1>
          <p className="text-muted-foreground">Última actualización: {fecha}</p>
        </div>

        <div className="space-y-10 text-muted-foreground leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Responsable del tratamiento</h2>
            <p>
              Lazyzz, operador de TurnosBot, es responsable del tratamiento de los datos
              personales recopilados a través de este servicio. Podés contactarnos en{" "}
              <a href="mailto:turnosbot404@gmail.com" className="text-[#F5B841] hover:underline">
                turnosbot404@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Datos que recopilamos</h2>
            <p className="mb-3">Recopilamos los siguientes datos cuando contratás el servicio:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Datos personales:</strong> nombre, apellido, correo electrónico, número de WhatsApp.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Datos del negocio:</strong> nombre del negocio, ubicación, horarios, servicios ofrecidos.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Datos del equipo:</strong> nombres y teléfonos de los profesionales del negocio.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Datos técnicos:</strong> zona horaria detectada automáticamente desde el navegador.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Datos de uso:</strong> mensajes enviados y recibidos a través del bot de WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. Finalidad del tratamiento</h2>
            <p className="mb-3">Usamos tus datos para:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Configurar y operar el bot de WhatsApp para tu negocio.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Procesar pagos y gestionar tu suscripción.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Enviarte notificaciones de servicio y recordatorios de vencimiento.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Brindarte soporte técnico.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> Mejorar el servicio mediante análisis de uso agregado y anónimo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Datos de los clientes finales</h2>
            <p>
              A través del bot, el sistema procesa datos de los clientes de tu negocio (nombre,
              teléfono, turnos reservados). Vos, como operador del negocio, sos responsable de
              informar a tus clientes que sus datos son procesados por este sistema. TurnosBot
              actúa como encargado del tratamiento en nombre tuyo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Compartición de datos</h2>
            <p className="mb-3">
              No vendemos ni compartimos tus datos personales con terceros con fines comerciales.
              Solo compartimos datos con:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Twilio:</strong> para el envío de mensajes de WhatsApp.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Google Calendar:</strong> para la gestión de turnos.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">MercadoPago / LemonSqueezy:</strong> para el procesamiento de pagos.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">MongoDB Atlas / Redis:</strong> para el almacenamiento de datos del servicio.</li>
            </ul>
            <p className="mt-3">
              Todos estos proveedores operan bajo sus propias políticas de privacidad y están sujetos
              a estándares de seguridad reconocidos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Seguridad</h2>
            <p>
              Implementamos medidas técnicas y organizativas para proteger tus datos, incluyendo
              cifrado en tránsito (HTTPS/TLS), autenticación segura y acceso restringido.
              Sin embargo, ningún sistema es 100% seguro y no podemos garantizar seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Retención de datos</h2>
            <p>
              Conservamos tus datos mientras tu cuenta esté activa. Al cancelar el servicio,
              eliminamos tus datos personales dentro de los 30 días siguientes, salvo obligación
              legal de conservarlos por más tiempo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Tus derechos</h2>
            <p className="mb-3">Tenés derecho a:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Acceso:</strong> solicitar una copia de los datos que tenemos sobre vos.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Rectificación:</strong> corregir datos incorrectos o incompletos.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Eliminación:</strong> solicitar que eliminemos tus datos personales.</li>
              <li className="flex gap-2"><span className="text-[#8B5CF6]">•</span> <strong className="text-foreground">Portabilidad:</strong> recibir tus datos en formato legible por máquina.</li>
            </ul>
            <p className="mt-3">
              Para ejercer estos derechos, escribinos a{" "}
              <a href="mailto:turnosbot404@gmail.com" className="text-[#F5B841] hover:underline">
                turnosbot404@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Cookies</h2>
            <p>
              Este sitio web no utiliza cookies de rastreo ni publicidad. Solo usamos las cookies
              técnicas estrictamente necesarias para el funcionamiento del sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Te notificaremos por correo
              electrónico ante cambios significativos. La fecha de última actualización siempre
              estará visible al inicio del documento.
            </p>
          </section>

        </div>

        {/* Footer links */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-[#F5B841] transition-colors">Inicio</Link>
          <Link href="/terminos" className="hover:text-[#F5B841] transition-colors">Términos y Condiciones</Link>
          <span>© 2026 Lazyzz. Todos los derechos reservados.</span>
        </div>
      </div>
    </div>
  )
}