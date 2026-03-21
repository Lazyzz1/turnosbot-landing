import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})
const _geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: 'TurnosBot | Automatización Profesional de Turnos por WhatsApp',
  description: 'Automatiza tus turnos con WhatsApp. Deja que el bot gestione tus reservas 24/7 mientras tú te enfocas en tu negocio. Recordatorios automáticos, cancelaciones fáciles, multi-peluquero.',
  generator: 'v0.app',
  keywords: ['turnos', 'whatsapp', 'bot', 'automatización', 'peluquería', 'barbería', 'reservas', 'citas'],
  authors: [{ name: 'TurnosBot' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'TurnosBot | Automatización Profesional de Turnos por WhatsApp',
    description: 'Automatiza tus turnos con WhatsApp. Deja que el bot gestione tus reservas 24/7.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#121212',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <body className={`${_inter.variable} ${_geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
