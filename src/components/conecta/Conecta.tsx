import { ArrowRight } from "lucide-react";
import Link from "next/link";
export const Conecta = () => {
  return (
    <section className="  text-white relative overflow-hidden" id="contacto">
      <div className=" mx-auto">
        <div className="max-w-screen-xl sm:px-0  mx-5 md:pt-20 pt-10 lg:mx-auto sm:ps-12  rounded-t-4xl rounded-b-4xl bg-[#0B1120]  grid grid-cols-1  lg:grid-cols-2 gap-12 items-end">
          {/* Texto */}
          <div className="relative z-10  md:px-8 p-4">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Impulsa tu rentabilidad y sostenibilidad
            </h2>
            <p className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed max-w-xl me-6">
              Conecta tus activos, centraliza tus datos y convierte la
              información en tu mayor ventaja competitiva. Nuestra plataforma de
              inteligencia operacional te brinda las herramientas para reducir
              costos, automatizar el cumplimiento y liderar el camino hacia una
              industria más sostenible. Da el siguiente paso con un aliado que
              entiende tus desafíos.
            </p>

            {/* Botón */}
            <Link
              href="/agendar"
              className="flex w-[220px] items-end gap-2 px-6 py-3 rounded-full bg-[#31CF6E] hover:bg-transparent border-2 border-[#31CF6E] hover:border-[#ffffff] text-white font-normal transition duration-300"
            >
              Más informacion
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Imagen */}
          <div className="flex justify-end align-bottom relative z-0">
            <img
              src="/impulsa.png"
              alt="Kaa Next IoT Cloud"
              width={520}
              height={520}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
