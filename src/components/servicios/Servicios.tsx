import Link from "next/link";
import { HiMiniCheckBadge } from "react-icons/hi2";

export function Servicios() {
  const services = [
    {
      title: "Diagnóstico y Diseño de la Solución",
      description:
        "Análisis de tus necesidades operativas y ambientales para diseñar una arquitectura de monitoreo a medida.",
    },
    {
      title: "Implementación de Red IIoT y Sensores",
      description:
        "Despliegue de nuestra red privada y el hardware necesario para la captura de datos críticos en campo.",
    },
    {
      title: "Configuración de la Plataforma y Dashboards",
      description:
        "Personalización de los paneles de control para que visualices los KPIs que realmente importan para tu operación.",
    },
    {
      title: "Capacitación y Puesta en Marcha",
      description:
        "Formación a tu equipo para que aprovechen al máximo el poder de la plataforma desde el primer día.",
    },
    {
      title: "Soporte Técnico y Optimización Continua",
      description:
        "Ofrecemos soporte proactivo y te ayudamos a identificar nuevas oportunidades de mejora basadas en tus datos.",
    },
  ];

  return (
    <section className="relative" id="servicios">
      <div className="w-full bg-[#0B1120] py-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          {/* Contenedor principal con flex responsivo */}
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-16 pb-10 ">
            {/* Texto */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug mt-7">
                Servicios Profesionales
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Más que una plataforma, somos tu aliado estratégico. Ofrecemos
                una solución integral de Hardware como Servicio (HaaS) que cubre
                desde la instalación de la red y los sensores hasta la
                optimización continua de tus procesos. Nuestro equipo de
                expertos te acompaña en cada paso para asegurar que alcances tus
                metas de eficiencia y sostenibilidad.
              </p>

              <p className="text-gray-100 font-medium">
                ¿Tienes un desafío específico?{" "}
                <Link
                  href="/agendar"
                  className="text-[#31CF6E] hover:underline font-semibold"
                >
                  Hablemos
                </Link>{" "}
                y diseñemos juntos la solución perfecta para ti.
              </p>
            </div>

            {/* Lista de servicios */}
            <div className="flex-1 w-full space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition"
                >
                  <div className="text-3xl sm:text-4xl text-[#4CD137] shrink-0">
                    <HiMiniCheckBadge />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
