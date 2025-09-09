// components/Footer.jsx
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="bg-[#0B1120] text-[#31CF6E] px-6 py-12 md:px-20 mt-16"
      id="Footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Columna 1 - Logo + Descripción */}
        <div>
          <h2 className="text-xl font-bold">RuwayTEC</h2>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            Inteligencia Operacional para la Industria Sostenible.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="https://www.linkedin.com/company/ruwaytec/?viewAsMember=true"
              target="_blank"
            >
              <FaLinkedin className="w-5 h-5 hover:text-[#1F8EFE] transition" />
            </Link>
            <Link href="https://www.youtube.com" target="_blank">
              <FaYoutube className="w-5 h-5 hover:text-[#FF0000] transition" />
            </Link>
          </div>
        </div>

        {/* Columna 2 - Producto */}
        <div>
          <h3 className="font-semibold mb-3">Producto</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#31CF6E]">
                Plataforma
              </Link>
            </li>
            <li>
              <Link href="#servicios" className="hover:text-[#31CF6E]">
                Servicios
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 3 - Industrias */}
        <div>
          <h3 className="font-semibold mb-3">Industrias</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#soluciones" className="hover:text-[#31CF6E]">
                Minería
              </Link>
            </li>
            <li>
              <Link href="#soluciones" className="hover:text-[#31CF6E]">
                Construcción
              </Link>
            </li>
            <li>
              <Link href="/#soluciones" className="hover:text-[#31CF6E]">
                Agricultura
              </Link>
            </li>
            <li>
              <Link href="/#soluciones" className="hover:text-[#31CF6E]">
                Energía
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna 4 - Empresa */}
        <div>
          <h3 className="font-semibold mb-3">Empresa</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-[#31CF6E]">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="#contacto" className="hover:text-[#31CF6E]">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Línea divisoria + derechos */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 RuwayTEC. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacidad" className="hover:text-[#31CF6E]">
            Política de Privacidad
          </Link>
          <span>|</span>
          <Link href="/terminos" className="hover:text-[#31CF6E]">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
}
