"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { SlLogin } from "react-icons/sl";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Detectar scroll para header sticky
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Scrollspy con IntersectionObserver
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // se activa cuando 60% de la sección es visible
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-[#0B1120]"
      }`}
    >
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-7 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img
            src={isScrolled ? "/ruwaytec.svg" : "/ruwaytec2.svg"}
            alt="/"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop menu */}
        <ul
          className={`hidden md:flex gap-8 text-md font-medium transition-colors ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
        >
          <li>
            <Link
              href="#producto"
              className={`transition-colors hover:text-[#31CF6E]  ${
                activeSection === "producto"
                  ? "text-[#31CF6E] font-semibold"
                  : ""
              }`}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              href="#servicios"
              className={`transition-colors hover:text-[#31CF6E]  ${
                activeSection === "servicios"
                  ? "text-[#31CF6E] font-semibold"
                  : ""
              }`}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              href="#tecnologia"
              className={`transition-colors hover:text-[#31CF6E]  ${
                activeSection === "tecnologia"
                  ? "text-[#31CF6E] font-semibold"
                  : ""
              }`}
            >
              Tecnología
            </Link>
          </li>
          <li>
            <Link
              href="#soluciones"
              className={`transition-colors hover:text-[#31CF6E]  ${
                activeSection === "soluciones"
                  ? "text-[#31CF6E] font-semibold"
                  : ""
              }`}
            >
              Industrias
            </Link>
          </li>
          <li>
            <Link
              href="#contacto"
              className={`transition-colors hover:text-[#31CF6E]  ${
                activeSection === "contacto"
                  ? "text-[#31CF6E] font-semibold"
                  : ""
              }`}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Botón solo en desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/agendar"
            className={`px-6 py-3 rounded-full transition duration-300 ${
              isScrolled
                ? "bg-transparent text-[#31CF6E] border-2 border-[#31CF6E] hover:bg-[#31CF6E] hover:text-white"
                : "bg-transparent text-white border-2 border-white hover:bg-[#31CF6E] hover:border-[#31CF6E]"
            }`}
          >
            Agendar demo
          </Link>

          <Link
            href="/login"
            className={`flex items-center gap-2 px-6 py-3 rounded-full transition duration-300 ${
              isScrolled
                ? "bg-[#2FC96B] text-white border-2 border-[#31CF6E] hover:bg-transparent hover:text-[#31CF6E]"
                : "bg-[#2FC96B] text-white border-2 border-[#2FC96B] hover:bg-transparent hover:border-[#31CF6E]"
            }`}
          >
            <SlLogin />
            Login
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden focus:outline-none text-2xl ${
            isScrolled ? "text-gray-900" : "text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-6 py-6 ${
            isScrolled ? "bg-white text-gray-900" : "bg-[#31CF6E] text-white"
          }`}
        >
          <Link href="#producto">Productos</Link>
          <Link href="#servicios">Servicios</Link>
          <Link href="#tecnologia">Tecnología</Link>
          <Link href="#soluciones">Soluciones</Link>
          <Link href="#contacto">Contacto</Link>
        </div>
      )}
    </header>
  );
};
