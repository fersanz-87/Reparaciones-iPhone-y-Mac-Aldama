import type { DifferentiatorItem } from "@/types";

const differentiators: DifferentiatorItem[] = [
  {
    id: "experience",
    icon: "✅",
    title: "Mas de 10 anos de experiencia",
    description:
      "Conocemos a fondo cada producto Apple y sus particularidades tecnicas.",
  },
  {
    id: "express",
    icon: "⚡",
    title: "Reparaciones express",
    description:
      "La mayoria de reparaciones se realizan el mismo dia que traes tu dispositivo.",
  },
  {
    id: "diagnostic",
    icon: "🔍",
    title: "Diagnostico gratuito",
    description:
      "Evaluamos tu equipo sin costo ni compromiso antes de cualquier reparacion.",
  },
  {
    id: "warranty",
    icon: "🛡️",
    title: "Garantia en reparaciones",
    description:
      "Todas nuestras reparaciones incluyen garantia para tu tranquilidad.",
  },
  {
    id: "location",
    icon: "📍",
    title: "Ubicacion centrica",
    description:
      "Facil acceso en el Centro Historico de Queretaro, con estacionamiento cercano.",
  },
  {
    id: "pricing",
    icon: "💰",
    title: "Precios transparentes",
    description:
      "Te damos un presupuesto claro antes de iniciar. Sin sorpresas ni cargos ocultos.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="por-que-elegirnos" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Por que elegirnos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Tu confianza es nuestra prioridad
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 rounded-xl bg-white p-6 shadow-sm"
            >
              <span
                className="flex-shrink-0 text-3xl"
                role="img"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
