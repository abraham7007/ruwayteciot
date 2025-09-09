import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="relative w-full h-screen">
      <iframe
        src="https://iot.ruway.io/login"
        className="w-full h-full"
        style={{ border: "none" }}
        allowFullScreen
      />

      {/* Franja inferior + botón */}
      <div className="fixed bottom-0 left-0 w-full sm:h-24 h-14 bg-[#171D2B] z-50 flex items-center justify-center">
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-2 rounded-2xl bg-[#31CF6E] hover:bg-green-700 text-white font-medium shadow-lg transition-all duration-300"
        >
          <ArrowLeft size={20} />
          Volver
        </Link>
      </div>

      {/* Franjas laterales solo en PC */}
      <div className=" md:block fixed left-0 top-0 h-full  w-[137px] xl:w-[480px] sm:w-[100px] md:w-[120px] lg:w-[335px]    bg-[#171D2B] z-50"></div>
      <div className=" md:block fixed right-0 top-0 h-full w-[136px] xl:w-[480px] sm:w-[100px] md:w-[120px] lg:w-[335px] bg-[#171D2B] z-50"></div>
      <div className=" md:block fixed right-0 top-0  xl:h-24 h-14 w-full bg-[#171D2B] z-50"></div>
    </div>
  );
}
