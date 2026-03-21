"use client";

import { useState } from "react";

export default function DonateButton() {
  const [open, setOpen] = useState(false);

  // 👇 Reemplazá con tus links reales
  const MERCADOPAGO_URL = "https://link.mercadopago.com.ar/turnosbots";
  const LEMONSQUEEZY_URL = "https://TU_TIENDA.lemonsqueezy.com/checkout/TU_LINK";

  return (
    <>
      {/* Botón flotante */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-5 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95"
        aria-label="Donar"
      >
        <span className="text-xl">☕</span>
        <span>Donar</span>
      </button>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-sm p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cerrar */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl leading-none"
            >
              ✕
            </button>

            {/* Encabezado */}
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">💚</div>
              <h2 className="text-white text-xl font-bold">Apoyá TurnosBot</h2>
              <p className="text-gray-400 text-sm mt-1">
                Tu donación ayuda a mejorar el bot y mantenerlo activo
              </p>
            </div>

            {/* Opciones */}
            <div className="flex flex-col gap-3">
              {/* MercadoPago */}
              <a
                href={MERCADOPAGO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-4 rounded-xl transition-all hover:scale-[1.02]"
              >
                <span className="text-2xl">🇦🇷</span>
                <div>
                  <div className="text-sm font-bold">MercadoPago</div>
                  <div className="text-xs text-blue-200">Para Argentina · Pesos</div>
                </div>
              </a>

              {/* LemonSqueezy */}
              <a
                href={LEMONSQUEEZY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-4 rounded-xl transition-all hover:scale-[1.02]"
              >
                <span className="text-2xl">🌎</span>
                <div>
                  <div className="text-sm font-bold">Lemon Squeeze</div>
                  <div className="text-xs text-yellow-900">Internacional · USD</div>
                </div>
              </a>
            </div>

            <p className="text-center text-gray-500 text-xs mt-4">
              ¡Gracias por el apoyo! 🙏
            </p>
          </div>
        </div>
      )}
    </>
  );
}