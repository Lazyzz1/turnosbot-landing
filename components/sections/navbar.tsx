"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Bot } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#features", label: "Funcionalidades" },
    { href: "#pricing", label: "Precios" },
    { href: "#testimonials", label: "Testimonios" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border/50 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5B841] transition-transform group-hover:scale-110">
              <Bot className="h-6 w-6 text-[#121212]" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Turnos<span className="text-[#F5B841]">Bot</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-[#F5B841]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <Button
              variant="ghost"
              className="text-foreground hover:text-[#F5B841] hover:bg-[#F5B841]/10"
            >
              Ver Demo
            </Button>
            <a href="https://mail.google.com/mail/?view=cm&to=turnosbot404@gmail.com&su=Consulta%20sobre%20TurnosBot" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#F5B841] text-[#121212] font-semibold hover:bg-[#D4A138] shadow-lg shadow-[#F5B841]/20">
                Consultar
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 rounded-2xl bg-card border border-border p-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-[#F5B841]/10 hover:text-[#F5B841]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-border" />
              <a href="https://mail.google.com/mail/?view=cm&to=turnosbot404@gmail.com&su=Consulta%20sobre%20TurnosBot" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-[#F5B841] text-[#121212] font-semibold hover:bg-[#D4A138]">
                  Consultar
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}