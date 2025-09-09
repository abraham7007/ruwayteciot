import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const HomeComponent = () => {
  return (
    <section
      id="HeroComponent"
      className="relative mt-[120px] min-h-[calc(100svh-96px)] bg-[#0B1120] text-white flex items-center pb-20 sm:pb-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-screen-xl mx-auto">
          {/* Texto */}
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
              La plataforma de Inteligencia Operacional{" "}
              <br className="hidden md:block" /> para la Industria Sostenible.
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Automatiza informes, predice riesgos ambientales y convierte la
              información en acciones estratégicas para un futuro más sostenible
              y rentable.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="/agendar"
                target="_blank"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#31CF6E] hover:bg-transparent border-2 border-[#31CF6E] hover:border-white text-white font-normal transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#31CF6E]"
              >
                Solicita una Demo
              </a>

              <a
                href="#soluciones"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-transparent hover:bg-[#31CF6E] border-2 border-white hover:border-[#31CF6E] text-white font-normal transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#31CF6E]"
              >
                Explorar Industrias
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/Hero2.png"
              alt="IoT Platform hero"
              width={800}
              height={800}
              priority
              className="w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 500px"
            />
          </div>
        </div>
      </div>

      {/* Flecha scroll abajo */}
      <a
        href="#productos"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white animate-float-down motion-safe:animate-bounce"
      >
        <ChevronDown size={56} />
      </a>
    </section>
  );
};
