import { siteConfig } from "@/data/site-config";

export default function MapSection() {
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3735.5!2d${siteConfig.coordinates.lng}!3d${siteConfig.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx`;

  return (
    <section id="ubicacion" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Encuentranos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Estamos en el corazon del Centro Historico de Queretaro
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Map */}
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <iframe
              title="Ubicacion de Reparaciones Aldama en Queretaro"
              src={mapSrc}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex gap-4">
              <span className="flex-shrink-0 text-2xl" aria-hidden="true">
                📍
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Direccion</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 text-2xl" aria-hidden="true">
                📞
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Telefono</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {siteConfig.phone}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 text-2xl" aria-hidden="true">
                💬
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-[#007AFF] hover:underline"
                >
                  {siteConfig.whatsapp}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 text-2xl" aria-hidden="true">
                ✉️
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-1 inline-block text-sm text-[#007AFF] hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <span className="flex-shrink-0 text-2xl" aria-hidden="true">
                🕐
              </span>
              <div>
                <h3 className="font-semibold text-gray-900">Horario</h3>
                <p className="mt-1 text-sm text-gray-600">
                  {siteConfig.schedule.weekdays}
                </p>
                <p className="text-sm text-gray-600">
                  {siteConfig.schedule.saturday}
                </p>
                <p className="text-sm text-gray-600">
                  {siteConfig.schedule.sunday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
