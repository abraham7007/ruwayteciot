import Image from "next/image";
import { TbPointFilled } from "react-icons/tb";

export function Producto() {
  return (
    <section className="relative bg-white pt-20 pb-44" id="productos">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Producto 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <div className="flex justify-center">
            <Image
              src="/producto.png"
              alt="World Map"
              width={500}
              height={400}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
              priority
            />
          </div>

          {/* Texto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1120] mb-6">
              Controla toda tu operación desde una única plataforma.
            </h2>
            <p className="text-[#818198] text-base sm:text-lg leading-relaxed mb-6">
              Integramos todas tus fuentes de datos para darte una visibilidad
              de 360°. Convierte datos sin procesar en inteligencia accionable,
              reportes de cumplimiento y alertas predictivas.
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Integración Agnóstica",
                  description:
                    "Conecta cualquier fuente de datos sin importar la marca o el protocolo. Tu información, finalmente unificada.",
                },
                {
                  title: "Dashboards en Tiempo Real",
                  description:
                    "Monitorea tus operaciones con paneles interactivos y personalizables. Toda tu operación, en una sola pantalla.",
                },
                {
                  title: "Reportes y Alertas Automatizadas",
                  description:
                    "Olvídate de los reportes manuales. Programa informes automáticos y recibe alertas inteligentes para adelantarte a los problemas.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <TbPointFilled className="text-[#4CD137] text-xl flex-shrink-0 mt-1" />
                  <span className="font-semibold text-[#0B1120]">
                    {item.title}:{" "}
                    <span className="text-[#818198] font-normal">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Producto 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0B1120] mb-6">
              Convierte tus datos en decisiones estratégicas.
            </h2>
            <p className="text-[#818198] text-base sm:text-lg leading-relaxed mb-6">
              Centraliza, procesa y visualiza tus variables operativas y
              ambientales en dashboards interactivos. Genera reportes de
              cumplimiento y comparte insights clave con tu equipo de forma
              segura.
            </p>

            <ul className="space-y-4">
              {[
                {
                  title: "Dashboards Personalizables",
                  description:
                    " Crea vistas unificadas de tus operaciones. Combina datos de múltiples fuentes en un solo panel para un análisis 360°",
                },
                {
                  title: "Analítica y Contextualización",
                  description:
                    "Transformamos datos crudos en KPIs relevantes. Identifica tendencias, ineficiencias y oportunidades de mejora al instante.",
                },
                {
                  title: "Colaboración y Reportes Seguros",
                  description:
                    "Administra permisos de acceso y comparte dashboards o reportes automatizados con tu equipo.",
                },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <TbPointFilled className="text-[#4CD137] text-xl flex-shrink-0 mt-1" />
                  <span className="font-semibold text-[#0B1120]">
                    {item.title}:{" "}
                    <span className="text-[#818198] font-normal">
                      {item.description}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Imagen */}
          <div className="order-1 md:order-2 flex justify-center">
            <Image
              src="/producto2.png"
              alt="Producto IoT"
              width={600}
              height={500}
              className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
