"use client";

import { useState } from "react";

interface Peluquero {
  nombre: string;
  telefono: string;
}

interface FormData {
  // Paso 1 - Datos personales
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  // Paso 2 - Datos del negocio
  nombre_negocio: string;
  ubicacion: string;
  horarios: string;
  servicios: string; // "Corte $5000, Tinte $8000, ..."
  // Paso 3 - Peluqueros
  cantidad_peluqueros: number;
  peluqueros: Peluquero[];
  // Paso 4 - Plan
  plan: "argentina" | "internacional" | "";
}

const initialForm: FormData = {
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  nombre_negocio: "",
  ubicacion: "",
  horarios: "",
  servicios: "",
  cantidad_peluqueros: 1,
  peluqueros: [{ nombre: "", telefono: "" }],
  plan: "",
};

// 👇 Reemplazá con tus links reales
const MERCADOPAGO_URL = "https://mpago.la/TU_LINK_ACA";
const LEMONSQUEEZY_URL = "https://TU_TIENDA.lemonsqueezy.com/checkout/TU_LINK";

// 👇 URL de tu backend en Railway
const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://tu-backend.railway.app";

export default function ContratarModal({
  plan: planInicial,
  onClose,
}: {
  plan: "argentina" | "internacional";
  onClose: () => void;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>({ ...initialForm, plan: planInicial });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paymentUrl, setPaymentUrl] = useState("");

  const totalSteps = 4;

  const update = (field: keyof FormData, value: unknown) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const updatePeluquero = (i: number, field: keyof Peluquero, value: string) => {
    const updated = [...form.peluqueros];
    updated[i] = { ...updated[i], [field]: value };
    setForm((prev) => ({ ...prev, peluqueros: updated }));
  };

  const handleCantidadPeluqueros = (cantidad: number) => {
    const arr: Peluquero[] = Array.from({ length: cantidad }, (_, i) =>
      form.peluqueros[i] || { nombre: "", telefono: "" }
    );
    setForm((prev) => ({ ...prev, cantidad_peluqueros: cantidad, peluqueros: arr }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/payments/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Error al procesar");
      setPaymentUrl(data.payment_url);
      setStep(5); // paso de éxito
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full bg-gray-800 border border-gray-600 text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 transition-colors placeholder-gray-500";
  const labelClass = "block text-gray-300 text-sm font-medium mb-1";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
          <div>
            <h2 className="text-white font-bold text-lg">
              {step === 5 ? "¡Listo para pagar! 🎉" : "Contratar TurnosBot"}
            </h2>
            {step < 5 && (
              <p className="text-gray-400 text-xs mt-0.5">Paso {step} de {totalSteps}</p>
            )}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">✕</button>
        </div>

        {/* Progress bar */}
        {step < 5 && (
          <div className="h-1 bg-gray-700">
            <div
              className="h-1 bg-green-500 transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        )}

        <div className="p-6">

          {/* ── PASO 1: Datos personales ── */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-4">👤 Tus datos de contacto</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Nombre</label>
                  <input className={inputClass} placeholder="Juan" value={form.nombre}
                    onChange={(e) => update("nombre", e.target.value)} />
                </div>
                <div>
                  <label className={labelClass}>Apellido</label>
                  <input className={inputClass} placeholder="García" value={form.apellido}
                    onChange={(e) => update("apellido", e.target.value)} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input className={inputClass} type="email" placeholder="juan@gmail.com" value={form.email}
                  onChange={(e) => update("email", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Teléfono (WhatsApp con código de país)</label>
                <input className={inputClass} placeholder="+5491112345678" value={form.telefono}
                  onChange={(e) => update("telefono", e.target.value)} />
                <p className="text-gray-500 text-xs mt-1">Acá te contactamos para empezar tu prueba gratis</p>
              </div>
            </div>
          )}

          {/* ── PASO 2: Datos del negocio ── */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-4">🏪 Datos de tu negocio</p>
              <div>
                <label className={labelClass}>Nombre del negocio</label>
                <input className={inputClass} placeholder="Peluquería El Estilo" value={form.nombre_negocio}
                  onChange={(e) => update("nombre_negocio", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Ubicación (dirección completa)</label>
                <input className={inputClass} placeholder="Av. Corrientes 1234, CABA" value={form.ubicacion}
                  onChange={(e) => update("ubicacion", e.target.value)} />
                <p className="text-gray-500 text-xs mt-1">La agregamos a Google Maps para que tus clientes te encuentren</p>
              </div>
              <div>
                <label className={labelClass}>Horarios de atención</label>
                <textarea className={`${inputClass} resize-none h-20`}
                  placeholder={"Lunes a Viernes: 9:00 - 19:00\nSábados: 9:00 - 14:00"}
                  value={form.horarios}
                  onChange={(e) => update("horarios", e.target.value)} />
              </div>
              <div>
                <label className={labelClass}>Servicios y precios</label>
                <textarea className={`${inputClass} resize-none h-24`}
                  placeholder={"Corte de cabello - $5.000\nTinte completo - $12.000\nBarba - $3.000"}
                  value={form.servicios}
                  onChange={(e) => update("servicios", e.target.value)} />
                <p className="text-gray-500 text-xs mt-1">Un servicio por línea con su precio</p>
              </div>
            </div>
          )}

          {/* ── PASO 3: Peluqueros ── */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-4">✂️ Tu equipo de trabajo</p>
              <div>
                <label className={labelClass}>¿Cuántos peluqueros/profesionales tenés?</label>
                <select
                  className={inputClass}
                  value={form.cantidad_peluqueros}
                  onChange={(e) => handleCantidadPeluqueros(Number(e.target.value))}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>{n} {n === 1 ? "peluquero" : "peluqueros"}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-3">
                {form.peluqueros.map((p, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <p className="text-green-400 text-sm font-semibold mb-3">Peluquero {i + 1}</p>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className={labelClass}>Nombre</label>
                        <input className={inputClass} placeholder="Nombre" value={p.nombre}
                          onChange={(e) => updatePeluquero(i, "nombre", e.target.value)} />
                      </div>
                      <div>
                        <label className={labelClass}>WhatsApp</label>
                        <input className={inputClass} placeholder="+5491187654321" value={p.telefono}
                          onChange={(e) => updatePeluquero(i, "telefono", e.target.value)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs">El bot notifica a cada peluquero por WhatsApp cuando le asignan un turno</p>
            </div>
          )}

          {/* ── PASO 4: Confirmar y pagar ── */}
          {step === 4 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-2">✅ Resumen antes de confirmar</p>
              <div className="bg-gray-800 rounded-xl p-4 space-y-2 border border-gray-700 text-sm">
                <p className="text-white"><span className="text-gray-400">Nombre:</span> {form.nombre} {form.apellido}</p>
                <p className="text-white"><span className="text-gray-400">Email:</span> {form.email}</p>
                <p className="text-white"><span className="text-gray-400">Negocio:</span> {form.nombre_negocio}</p>
                <p className="text-white"><span className="text-gray-400">Ubicación:</span> {form.ubicacion}</p>
                <p className="text-white"><span className="text-gray-400">Peluqueros:</span> {form.cantidad_peluqueros}</p>
                <p className="text-white"><span className="text-gray-400">Plan:</span> {form.plan === "argentina" ? "🇦🇷 Argentina · $24.500 ARS/mes" : "🌎 Internacional · $34.50 USD/mes"}</p>
              </div>
              <div className="bg-green-900/30 border border-green-700 rounded-xl p-4 text-sm text-green-300">
                <p className="font-semibold mb-2">🎁 ¿Cómo funciona la prueba gratis?</p>
                <div className="space-y-1 text-green-400 text-xs">
                  <p>1. Enviás estos datos → te contactamos en menos de 48hs</p>
                  <p>2. Configuramos tu bot completamente gratis</p>
                  <p>3. Probás 7 días sin pagar nada</p>
                  <p>4. Si te gusta, cargás el método de pago y seguís</p>
                </div>
              </div>
              {error && (
                <p className="text-red-400 text-sm bg-red-900/30 border border-red-700 rounded-lg p-3">{error}</p>
              )}
            </div>
          )}

          {/* ── PASO 5: Éxito → próximos pasos ── */}
          {step === 5 && (
            <div className="text-center space-y-5 py-4">
              <div className="text-5xl">🎉</div>
              <div>
                <p className="text-white font-bold text-lg">¡Solicitud recibida!</p>
                <p className="text-gray-400 text-sm mt-1">En menos de 48hs te contactamos por WhatsApp</p>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 text-left space-y-2 border border-gray-700">
                <p className="text-green-400 text-sm font-semibold mb-2">¿Qué pasa ahora?</p>
                <div className="space-y-2 text-xs text-gray-300">
                  <p>✅ <span className="text-white">Paso 1:</span> Te contactamos y configuramos tu bot</p>
                  <p>✅ <span className="text-white">Paso 2:</span> Probás 7 días completamente gratis</p>
                  <p>✅ <span className="text-white">Paso 3:</span> Si te convence, cargás el pago y seguís</p>
                  <p className="text-gray-500 pt-1">
                    Precio: {form.plan === "argentina" ? "$24.500 ARS/mes" : "$34.50 USD/mes"} · Cancelá cuando quieras
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-xs">
                Revisá tu WhatsApp — te escribimos al {form.telefono} 📱
              </p>
            </div>
          )}

          {/* ── Botones de navegación ── */}
          {step < 5 && (
            <div className="flex gap-3 mt-6">
              {step > 1 && (
                <button
                  onClick={() => setStep((s) => s - 1)}
                  className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2.5 rounded-xl transition-colors"
                >
                  ← Atrás
                </button>
              )}
              {step < 4 ? (
                <button
                  onClick={() => setStep((s) => s + 1)}
                  className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2.5 rounded-xl transition-colors"
                >
                  Continuar →
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white font-bold py-2.5 rounded-xl transition-colors"
                >
                  {loading ? "Guardando..." : "Guardar y pagar →"}
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}