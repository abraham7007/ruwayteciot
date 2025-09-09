import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      <iframe
        src="https://zcal.co/acasot/30min"
        className="w-full h-full"
        style={{ border: "none" }}
        allowFullScreen
      />

      {/* Franja inferior + botón */}
      <div className="fixed bottom-0 left-0 w-full h-20 bg-[#1F1F1F] z-50 flex items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-medium shadow-lg transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Volver al inicio
        </Link>
      </div>

      {/* Franjas laterales solo en PC */}
      <div className="hidden md:block fixed left-0 top-0 h-full xl:w-[15%] 2xl:w-[20%] w-[10%] lg:w-[12%] sm:w-[10%] bg-[#1F1F1F] z-50"></div>
      <div className="hidden md:block fixed right-0 top-0 h-full xl:w-[20%] w-[10%] md:w-[15%] bg-[#1F1F1F] z-50"></div>
      <div className="hidden md:block fixed right-0 top-0 h-8 w-full bg-[#1F1F1F] z-50"></div>
    </div>
  );
}
