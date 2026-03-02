/**
 * DATOS DE EJEMPLO - REEMPLAZAR CON INFORMACION REAL ANTES DE PRODUCCION
 * Los testimonios, direccion, telefono y demas datos son ficticios.
 */

import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Reparaciones Aldama",
  tagline: "Especialistas en productos Apple",
  address: "Calle Ignacio Aldama 45, Centro Historico, Queretaro, Qro.",
  phone: "(442) 123-4567",
  whatsapp: "(442) 765-4321",
  email: "contacto@reparacionesaldama.com",
  schedule: {
    weekdays: "Lunes a Viernes: 9:00 - 19:00",
    saturday: "Sabados: 10:00 - 15:00",
    sunday: "Domingos: Cerrado",
  },
  coordinates: {
    lat: 20.5888,
    lng: -100.3899,
  },
  social: {
    facebook: "https://facebook.com/reparacionesaldama",
    instagram: "https://instagram.com/reparacionesaldama",
    whatsapp: "https://wa.me/5214421234567",
  },
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Por que elegirnos", href: "#por-que-elegirnos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
  { label: "Ubicacion", href: "#ubicacion" },
];

export const deviceOptions = [
  "iPhone",
  "iPad",
  "Mac",
  "Apple Watch",
  "AirPods",
  "Otro",
];
