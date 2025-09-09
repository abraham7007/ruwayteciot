"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef } from "react";

// Importa estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Soluciones = () => {
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  const cards = [
    {
      title: "Minería 4.0 Sostenible Integral",
      description:
        "Optimiza el monitoreo de tus parámetros ambientales (agua, aire, pH, relaves) y operativos. Reduce tu huella de carbono, asegura el cumplimiento normativo y mejora la eficiencia de tus activos.",
      button: "Soluciones Mineras",
      href: "/starter-plan",
      img: "/mineria.png",
    },
    {
      title: "Construcción Inteligente y Eficiente",
      description:
        "Supervisa la seguridad de tus estructuras, el rendimiento de tu maquinaria y el impacto ambiental de tus obras en tiempo real. Optimiza el uso de recursos y minimiza riesgos.",
      button: "Soluciones para Construcción",
      href: "/free-trial",
      img: "/construccion.png",
    },
    {
      title: "Agricultura de Precisión y Resiliente",
      description:
        "Monitorea condiciones de suelo, clima y cultivos para una gestión hídrica óptima y un uso eficiente de fertilizantes. Maximiza tu rendimiento y promueve prácticas agrícolas sostenibles.",
      button: "Soluciones Agrícolas",
      href: "/scale-ready-iiot-solution-on-flex83",
      img: "/agricultura.png",
    },
    {
      title: "Gestión Energética Inteligente",
      description:
        "Controla el consumo y la producción energética, detecta anomalías y optimiza la distribución en plantas o ciudades. Impulsa la transición hacia fuentes renovables y la eficiencia energética.",
      button: "Soluciones Energéticas",
      href: "/scale-ready-iiot-solution-on-flex83",
      img: "/energia.png",
    },
  ];

  return (
    <section
      className="md:py-40 py-20 bg-white text-black relative"
      id="soluciones"
    >
      <div className="max-w-screen-xl mx-auto px-6 relative overflow-hidden">
        {/* Encabezado */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Tu Aliado Estratégico para la Sostenibilidad Industrial
          </h2>
          <p className="text-lg text-gray-700">
            <span className="font-bold">RuwayTEC</span> impulsa la
            transformación digital y sostenible en los sectores industriales
            clave. Nuestra plataforma IIoT adaptable permite monitorear,
            controlar y optimizar procesos, reduciendo el impacto ambiental y
            maximizando la rentabilidad en cualquier entorno.
          </p>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Botón Izquierdo */}
          <div
            ref={prevRef}
            className=" scale-105  swiper-button-prev-custom absolute -left-1 -translate-x-1/2 top-1/2 -translate-y-1/2 z-30 bg-gray-200 hover:bg-[#31CF6E] text-[#31CF6E] hover:text-white rounded-full p-3 cursor-pointer shadow-md transition"
          >
            ◀
          </div>

          {/* Botón Derecho */}
          <div
            ref={nextRef}
            className="scale-105  swiper-button-next-custom absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 hover:bg-[#31CF6E] text-[#31CF6E] hover:text-white rounded-full p-3 cursor-pointer shadow-md transition"
          >
            ▶
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={40} // reducido para que no desborde
            pagination={{ clickable: true }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // conecta los botones antes de inicializar
              // @ts-expect-error
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-visible"
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 mb-16 rounded-2xl p-6 flex flex-col items-start shadow-md hover:shadow-lg transition h-full">
                  <img
                    src={card.img}
                    alt={card.title}
                    width={500}
                    height={300}
                    className="mb-6 rounded-lg w-full object-cover h-52"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{card.description}</p>
                  <a
                    href={card.href}
                    className="px-6 py-3 rounded-full bg-[#31CF6E] hover:bg-transparent border-2 border-[#31CF6E] hover:border-[#31CF6E] text-white hover:text-[#31CF6E] font-normal transition duration-300 w-full text-center"
                  >
                    {card.button}
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
