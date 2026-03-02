export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,122,255,0.15),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 text-center sm:px-6 lg:px-8">
        {/* Device icons */}
        <div
          className="mb-8 flex items-center justify-center gap-4 text-4xl sm:gap-6 sm:text-5xl"
          aria-hidden="true"
        >
          <span className="opacity-80">📱</span>
          <span className="opacity-80">💻</span>
          <span className="opacity-80">⌚</span>
          <span className="opacity-80">🎧</span>
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Tu dispositivo Apple en{" "}
          <span className="bg-gradient-to-r from-[#007AFF] to-[#5AC8FA] bg-clip-text text-transparent">
            manos expertas
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
          Reparacion profesional de iPhone, iPad, Mac y Apple Watch en el centro
          de Queretaro
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contacto"
            className="w-full rounded-full bg-[#007AFF] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:bg-[#0066DD] hover:shadow-xl hover:shadow-blue-500/30 sm:w-auto"
          >
            Solicita tu diagnostico gratuito
          </a>
          <a
            href="#servicios"
            className="w-full rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5 sm:w-auto"
          >
            Ver servicios
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
