/**
 * DATOS DE EJEMPLO - REEMPLAZAR CON INFORMACION REAL ANTES DE PRODUCCION
 * Los servicios y descripciones son ficticios.
 */

import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "iphone",
    icon: "📱",
    title: "Reparacion de iPhone",
    description:
      "Solucionamos cualquier problema de tu iPhone con refacciones de alta calidad.",
    details: ["Pantalla", "Bateria", "Puerto de carga", "Camara", "Face ID"],
  },
  {
    id: "mac",
    icon: "💻",
    title: "Reparacion de Mac",
    description:
      "MacBook, iMac y Mac Mini. Reparamos tu equipo para que vuelva a funcionar como nuevo.",
    details: ["Pantalla", "Teclado", "Bateria", "Placa logica", "SSD"],
  },
  {
    id: "ipad",
    icon: "📲",
    title: "Reparacion de iPad",
    description:
      "Tu iPad en las mejores manos. Reparaciones rapidas y confiables.",
    details: ["Pantalla", "Bateria", "Puerto de carga", "Boton home"],
  },
  {
    id: "apple-watch",
    icon: "⌚",
    title: "Apple Watch",
    description:
      "Servicio especializado para tu Apple Watch. Cuidamos cada detalle.",
    details: ["Pantalla", "Bateria", "Corona digital"],
  },
  {
    id: "airpods",
    icon: "🎧",
    title: "AirPods",
    description:
      "Reparacion de AirPods y case de carga. Recupera la calidad de audio.",
    details: ["Bateria", "Audio", "Case de carga"],
  },
  {
    id: "data-recovery",
    icon: "💾",
    title: "Recuperacion de datos",
    description:
      "Recuperamos tu informacion en dispositivos danados o con fallos.",
    details: ["iPhone", "iPad", "Mac", "Discos externos"],
  },
  {
    id: "battery",
    icon: "🔋",
    title: "Cambio de bateria",
    description:
      "Servicio express de cambio de bateria para todos los dispositivos Apple.",
    details: ["Mismo dia", "Baterias de alta calidad", "Garantia incluida"],
  },
  {
    id: "diagnostic",
    icon: "🛡️",
    title: "Diagnostico gratuito",
    description:
      "Evaluacion sin costo ni compromiso. Te decimos exactamente que necesita tu equipo.",
    details: ["Sin costo", "Sin compromiso", "Resultado inmediato"],
  },
];
