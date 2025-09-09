import React from "react";

export const Tecnologia = () => {
  return (
    <section
      className="relative bg-[#0b1120] text-white py-24 px-6 overflow-hidden"
      id="tecnologia"
    >
      {/* Fondo decorativo con gradientes y formas */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradiente superior izquierdo */}
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-br from-cyan-500/20 to-blue-800/10 rounded-full blur-3xl" />

        {/* Forma ondulada inferior derecha */}
        <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/10 via-indigo-500/10 to-transparent rotate-45 rounded-full blur-2xl" />

        {/* Líneas decorativas (puedes reemplazar esto por SVG si deseas) */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:40px_40px] opacity-5" />
      </div>

      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-8 relative z-10">
        {/* Contenido de texto */}
        <div className="flex-1 min-w-[300px]">
          <h2 className="text-3xl font-semibold mb-4">
            Conectividad Flexible para Cualquier Desafío
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Utilizamos las tecnologías de comunicación IIoT más robustas y
            eficientes del mercado para garantizar la captura de datos en
            cualquier entorno, sin importar lo remoto o complejo que sea.
          </p>

          <div className="mt-12 flex  gap-12 h-full ">
            <div className="hover:bg-[#e8ffe8] bg-white px-4 py-2 rounded-full ">
              <img src="/sigfox.png" alt="" />
            </div>
            <div className="hover:bg-[#e8ffe8] bg-white px-4 py-2 rounded-full ">
              <img src="/lorawan.png" alt="" />
            </div>
            <div className="hover:bg-[#e8ffe8] bg-white px-4 py-2 rounded-full ">
              <img src="iot.png" alt="" />
            </div>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex-1 min-w-[200px] flex justify-center">
          <img
            src="/tecnologia.png"
            alt="IIoT Connectivity"
            className="max-w-[500px] w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};
