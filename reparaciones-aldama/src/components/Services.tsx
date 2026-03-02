import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nuestros servicios
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Soluciones profesionales para todos tus dispositivos Apple
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span
                className="text-4xl"
                role="img"
                aria-label={service.title}
              >
                {service.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {service.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.details.map((detail) => (
                  <li
                    key={detail}
                    className="rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-gray-500">
          Usamos refacciones de alta calidad compatibles con Apple
        </p>
      </div>
    </section>
  );
}
