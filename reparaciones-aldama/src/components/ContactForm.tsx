"use client";

import { useState } from "react";
import type { ContactFormData, FormStatus } from "@/types";
import { deviceOptions } from "@/data/site-config";

function sanitize(value: string): string {
  return value
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

function validateForm(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.name.trim()) {
    errors.name = "El nombre es requerido";
  } else if (data.name.length > 100) {
    errors.name = "El nombre no puede exceder 100 caracteres";
  }

  if (!data.phone.trim()) {
    errors.phone = "El telefono es requerido";
  } else if (data.phone.length > 15) {
    errors.phone = "El telefono no puede exceder 15 caracteres";
  } else if (!/^[\d\s()+-]+$/.test(data.phone)) {
    errors.phone = "Ingresa un numero de telefono valido";
  }

  if (!data.email.trim()) {
    errors.email = "El email es requerido";
  } else if (data.email.length > 254) {
    errors.email = "El email no puede exceder 254 caracteres";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresa un email valido";
  }

  if (!data.device) {
    errors.device = "Selecciona un dispositivo";
  }

  if (!data.problem.trim()) {
    errors.problem = "Describe el problema de tu dispositivo";
  } else if (data.problem.length > 1000) {
    errors.problem = "La descripcion no puede exceder 1000 caracteres";
  }

  return errors;
}

async function submitContactForm(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  // Simular envio al servidor con sanitizacion
  const sanitizedData: ContactFormData = {
    name: sanitize(data.name),
    phone: sanitize(data.phone),
    email: sanitize(data.email),
    device: sanitize(data.device),
    model: sanitize(data.model),
    problem: sanitize(data.problem),
  };

  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Simular respuesta exitosa (validacion server-side)
  const serverErrors = validateForm(sanitizedData);
  if (Object.keys(serverErrors).length > 0) {
    return {
      success: false,
      message: "Por favor verifica los datos ingresados.",
    };
  }

  return {
    success: true,
    message:
      "Recibimos tu solicitud! Te contactaremos en menos de 24 horas para agendar tu diagnostico gratuito.",
  };
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    device: "",
    model: "",
    problem: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setErrors({});

    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
        setMessage(result.message);
        setFormData({
          name: "",
          phone: "",
          email: "",
          device: "",
          model: "",
          problem: "",
        });
      } else {
        setStatus("error");
        setMessage(result.message);
      }
    } catch {
      setStatus("error");
      setMessage("Hubo un error al enviar tu solicitud. Intentalo de nuevo.");
    }
  };

  if (status === "success") {
    return (
      <section id="contacto" className="bg-gray-50 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-white p-8 shadow-sm sm:p-12">
            <span className="text-5xl" aria-hidden="true">
              ✅
            </span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">
              Solicitud enviada
            </h2>
            <p className="mt-2 text-gray-600">{message}</p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 rounded-full bg-[#007AFF] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0066DD]"
            >
              Enviar otra solicitud
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Solicita tu diagnostico gratuito
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-gray-600">
            Cuentanos sobre tu dispositivo y te contactaremos para agendar tu
            cita
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {/* Nombre */}
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] ${
                  errors.name ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Telefono */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefono <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                maxLength={15}
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] ${
                  errors.phone ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={254}
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] ${
                  errors.email ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Dispositivo */}
            <div>
              <label
                htmlFor="device"
                className="block text-sm font-medium text-gray-700"
              >
                Dispositivo <span className="text-red-500">*</span>
              </label>
              <select
                id="device"
                name="device"
                required
                value={formData.device}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border bg-white px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] ${
                  errors.device ? "border-red-400" : "border-gray-200"
                }`}
              >
                <option value="">Selecciona un dispositivo</option>
                {deviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.device && (
                <p className="mt-1 text-xs text-red-500">{errors.device}</p>
              )}
            </div>

            {/* Modelo */}
            <div>
              <label
                htmlFor="model"
                className="block text-sm font-medium text-gray-700"
              >
                Modelo aproximado
              </label>
              <input
                type="text"
                id="model"
                name="model"
                maxLength={100}
                value={formData.model}
                onChange={handleChange}
                placeholder="Ej: iPhone 14 Pro, MacBook Air M2"
                className="mt-1 block w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF]"
              />
            </div>

            {/* Problema */}
            <div className="sm:col-span-2">
              <label
                htmlFor="problem"
                className="block text-sm font-medium text-gray-700"
              >
                Describe el problema <span className="text-red-500">*</span>
              </label>
              <textarea
                id="problem"
                name="problem"
                required
                maxLength={1000}
                rows={4}
                value={formData.problem}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-lg border px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors focus:border-[#007AFF] focus:ring-1 focus:ring-[#007AFF] ${
                  errors.problem ? "border-red-400" : "border-gray-200"
                }`}
              />
              {errors.problem && (
                <p className="mt-1 text-xs text-red-500">{errors.problem}</p>
              )}
            </div>
          </div>

          {/* Error message */}
          {status === "error" && (
            <div className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-600">
              {message}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-6 w-full rounded-full bg-[#007AFF] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#0066DD] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Enviando...
              </span>
            ) : (
              "Enviar solicitud"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
