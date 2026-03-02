import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} de 5 estrellas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-200"}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            La satisfaccion de nuestros clientes es nuestra mejor carta de
            presentacion
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4">
                <p className="text-sm leading-relaxed text-gray-700">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </blockquote>
              <div className="mt-4 border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-gray-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500">{testimonial.device}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
