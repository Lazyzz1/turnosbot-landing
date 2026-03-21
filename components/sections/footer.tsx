"use client"

import { Bot, Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-[#0D0D0D] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5B841] transition-transform group-hover:scale-110">
                <Bot className="h-6 w-6 text-[#121212]" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Turnos<span className="text-[#F5B841]">Bot</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Automatización profesional de turnos por WhatsApp. 
              Gestiona tus reservas 24/7 mientras te enfocas en tu negocio.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-[#F5B841] hover:text-[#121212]"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-all hover:bg-[#10B981] hover:text-[#121212]"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { href: "#features", label: "Funcionalidades" },
                { href: "#pricing", label: "Precios" },
                { href: "#testimonials", label: "Testimonios" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-[#F5B841]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-[#8B5CF6]" />
                <span>hola@turnosbot.com</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-[#10B981]" />
                <span>+54 9 11 1234-5678</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-[#F5B841]" />
                <span>Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TurnosBot. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-[#F5B841]">
              Términos de Servicio
            </Link>
            <Link href="#" className="hover:text-[#F5B841]">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
