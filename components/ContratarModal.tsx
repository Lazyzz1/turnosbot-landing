"use client";

import { useState } from "react";

interface Peluquero {
  nombre: string;
  telefono: string;
}

interface FormData {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  nombre_negocio: string;
  ubicacion: string;
  horarios: string;
  servicios: string;
  cantidad_peluqueros: number;
  peluqueros: Peluquero[];
  plan: "argentina" | "internacional" | "";
  timezone: string;
}

interface FieldErrors {
  [key: string]: string;
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
  timezone: typeof Intl !== "undefined"
    ? Intl.DateTimeFormat().resolvedOptions().timeZone
    : "America/Argentina/Buenos_Aires",
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://tu-backend.railway.app";

const LIMITS = {
  nombre:         50,
  apellido:       50,
  email:          100,
  telefono:       20,
  nombre_negocio: 100,
  ubicacion:      200,
  horarios:       300,
  servicios:      500,
  peluquero_nombre: 50,
  peluquero_tel:  20,
};

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
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const totalSteps = 4;

  const update = (field: keyof FormData, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    // Limpiar error del campo cuando el usuario escribe
    if (fieldErrors[field]) {
      setFieldErrors((prev) => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

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

  // Validación por paso
  const validarPaso = (): boolean => {
    const errors: FieldErrors = {};

    if (step === 1) {
      if (!form.nombre.trim())   errors.nombre   = "El nombre es obligatorio";
      if (!form.apellido.trim()) errors.apellido = "El apellido es obligatorio";
      if (!form.email.trim())    errors.email    = "El email es obligatorio";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                                 errors.email    = "El email no es válido";
      if (!form.telefono.trim()) errors.telefono = "El teléfono es obligatorio";
      else if (!form.telefono.startsWith("+"))
                                 errors.telefono = "Debe incluir el código de país (ej: +54...)";
    }

    if (step === 2) {
      if (!form.nombre_negocio.trim()) errors.nombre_negocio = "El nombre del negocio es obligatorio";
      if (!form.ubicacion.trim())      errors.ubicacion      = "La ubicación es obligatoria";
      if (!form.horarios.trim())       errors.horarios       = "Los horarios son obligatorios";
      if (!form.servicios.trim())      errors.servicios      = "Los servicios son obligatorios";
    }

    if (step === 3) {
      form.peluqueros.forEach((p, i) => {
        if (!p.nombre.trim())
          errors[`peluquero_${i}_nombre`] = "El nombre es obligatorio";
        if (!p.telefono.trim())
          errors[`peluquero_${i}_telefono`] = "El WhatsApp es obligatorio";
        else if (!p.telefono.startsWith("+"))
          errors[`peluquero_${i}_telefono`] = "Incluí el código de país (ej: +54...)";
      });
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleContinuar = () => {
    if (validarPaso()) setStep((s) => s + 1);
  };

  const handleSubmit = async () => {
    if (!validarPaso()) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/payments/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      // Verificar si el teléfono ya usó un trial
      if (res.status === 409) {
        setError(data.error || "Este número de WhatsApp ya utilizó la prueba gratuita.");
        return;
      }

      if (!res.ok) throw new Error(data.error || "Error al procesar");
      setStep(5);
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "Error al conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field?: string) =>
    `w-full bg-gray-800 border ${field && fieldErrors[field] ? "border-red-500" : "border-gray-600"} text-white rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-green-500 transition-colors placeholder-gray-500`;

  const labelClass = "block text-gray-300 text-sm font-medium mb-1";

  const Required = () => <span className="text-red-400 ml-0.5">*</span>;

  const CharCount = ({ value, max }: { value: string; max: number }) => {
    const remaining = max - value.length;
    const isNear = remaining <= 20;
    return (
      <span className={`text-xs ml-1 ${isNear ? "text-yellow-400" : "text-gray-600"}`}>
        {value.length}/{max}
      </span>
    );
  };

  const FieldError = ({ field }: { field: string }) =>
    fieldErrors[field] ? (
      <p className="text-red-400 text-xs mt-1">{fieldErrors[field]}</p>
    ) : null;

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
              {step === 5 ? "¡Solicitud enviada! 🎉" : "Contratar TurnosBot"}
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

        {/* Indicador campos obligatorios */}
        {step < 5 && (
          <p className="text-gray-500 text-xs px-6 pt-4">
            Los campos con <span className="text-red-400">*</span> son obligatorios
          </p>
        )}

        <div className="p-6">

          {/* ── PASO 1: Datos personales ── */}
          {step === 1 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-2">👤 Tus datos de contacto</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Nombre <Required /></label>
                  <input className={inputClass("nombre")} placeholder="Juan" value={form.nombre} maxLength={LIMITS.nombre}
                    onChange={(e) => update("nombre", e.target.value)} />
                  <FieldError field="nombre" />
                </div>
                <div>
                  <label className={labelClass}>Apellido <Required /></label>
                  <input className={inputClass("apellido")} placeholder="García" value={form.apellido} maxLength={LIMITS.apellido}
                    onChange={(e) => update("apellido", e.target.value)} />
                  <FieldError field="apellido" />
                </div>
              </div>
              <div>
                <label className={labelClass}>Email <Required /></label>
                <input className={inputClass("email")} type="email" placeholder="juan@gmail.com" value={form.email} maxLength={LIMITS.email}
                  onChange={(e) => update("email", e.target.value)} />
                <FieldError field="email" />
              </div>
              <div>
                <label className={labelClass}>Teléfono WhatsApp <Required /></label>
                <input className={inputClass("telefono")} placeholder="+5491112345678" value={form.telefono} maxLength={LIMITS.telefono}
                  onChange={(e) => update("telefono", e.target.value)} />
                <FieldError field="telefono" />
                {!fieldErrors.telefono && (
                  <p className="text-gray-500 text-xs mt-1">Con código de país · Acá te contactamos para empezar tu prueba gratis</p>
                )}
              </div>
            </div>
          )}

          {/* ── PASO 2: Datos del negocio ── */}
          {step === 2 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-2">🏪 Datos de tu negocio</p>
              <div>
                <label className={labelClass}>Nombre del negocio <Required /></label>
                <input className={inputClass("nombre_negocio")} placeholder="Peluquería El Estilo" value={form.nombre_negocio} maxLength={LIMITS.nombre_negocio}
                  onChange={(e) => update("nombre_negocio", e.target.value)} />
                <div className="flex justify-end mt-0.5"><CharCount value={form.nombre_negocio} max={LIMITS.nombre_negocio} /></div>
                <FieldError field="nombre_negocio" />
              </div>
              <div>
                <label className={labelClass}>Ubicación <Required /></label>
                <input className={inputClass("ubicacion")} placeholder="Av. Corrientes 1234, CABA" value={form.ubicacion} maxLength={LIMITS.ubicacion}
                  onChange={(e) => update("ubicacion", e.target.value)} />
                <div className="flex justify-end mt-0.5"><CharCount value={form.ubicacion} max={LIMITS.ubicacion} /></div>
                <FieldError field="ubicacion" />
                {!fieldErrors.ubicacion && (
                  <p className="text-gray-500 text-xs mt-1">La agregamos a Google Maps para que tus clientes te encuentren</p>
                )}
              </div>
              <div>
                <label className={labelClass}>Zona horaria detectada</label>
                <div className="w-full bg-gray-700 border border-gray-600 text-gray-300 rounded-lg px-4 py-2.5 text-sm flex items-center justify-between">
                  <span>🌍 {form.timezone}</span>
                  <span className="text-gray-500 text-xs">Detectada automáticamente</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  Usamos esto para configurar los horarios correctamente en tu zona horaria
                </p>
              </div>
              <div>
                <label className={labelClass}>Horarios de atención <Required /></label>
                <textarea className={`${inputClass("horarios")} resize-none h-20`}
                  placeholder={"Lunes a Viernes: 9:00 - 19:00\nSábados: 9:00 - 14:00"}
                  value={form.horarios} maxLength={LIMITS.horarios}
                  onChange={(e) => update("horarios", e.target.value)} />
                <div className="flex justify-end mt-0.5"><CharCount value={form.horarios} max={LIMITS.horarios} /></div>
                <FieldError field="horarios" />
              </div>
              <div>
                <label className={labelClass}>Servicios y precios <Required /></label>
                <textarea className={`${inputClass("servicios")} resize-none h-24`}
                  placeholder={"Corte de cabello - $5.000\nTinte completo - $12.000\nBarba - $3.000"}
                  value={form.servicios} maxLength={LIMITS.servicios}
                  onChange={(e) => update("servicios", e.target.value)} />
                <div className="flex justify-end mt-0.5"><CharCount value={form.servicios} max={LIMITS.servicios} /></div>
                <FieldError field="servicios" />
                {!fieldErrors.servicios && (
                  <p className="text-gray-500 text-xs mt-1">Un servicio por línea con su precio</p>
                )}
              </div>
            </div>
          )}

          {/* ── PASO 3: Peluqueros ── */}
          {step === 3 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-2">✂️ Tu equipo de trabajo</p>
              <div>
                <label className={labelClass}>¿Cuántos profesionales tenés? <Required /></label>
                <select
                  className={inputClass()}
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
                        <label className={labelClass}>Nombre <Required /></label>
                        <input className={inputClass(`peluquero_${i}_nombre`)} placeholder="Nombre" value={p.nombre}
                          onChange={(e) => updatePeluquero(i, "nombre", e.target.value)} />
                        <FieldError field={`peluquero_${i}_nombre`} />
                      </div>
                      <div>
                        <label className={labelClass}>WhatsApp <Required /></label>
                        <input className={inputClass(`peluquero_${i}_telefono`)} placeholder="+5491187654321" value={p.telefono}
                          onChange={(e) => updatePeluquero(i, "telefono", e.target.value)} />
                        <FieldError field={`peluquero_${i}_telefono`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs">El bot notifica a cada peluquero por WhatsApp cuando le asignan un turno</p>
            </div>
          )}

          {/* ── PASO 4: Confirmar ── */}
          {step === 4 && (
            <div className="space-y-4">
              <p className="text-gray-400 text-sm mb-2">✅ Resumen antes de confirmar</p>
              <div className="bg-gray-800 rounded-xl p-4 space-y-2 border border-gray-700 text-sm">
                <p className="text-white"><span className="text-gray-400">Nombre:</span> {form.nombre} {form.apellido}</p>
                <p className="text-white"><span className="text-gray-400">Email:</span> {form.email}</p>
                <p className="text-white"><span className="text-gray-400">WhatsApp:</span> {form.telefono}</p>
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

          {/* ── PASO 5: Éxito ── */}
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

          {/* ── Navegación ── */}
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
                  onClick={handleContinuar}
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
                  {loading ? "Enviando..." : "Confirmar →"}
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}