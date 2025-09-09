import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { PageTransition } from "@/components";
const poppins = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RuwayTEC",
  description: "Plataforma IoT para la Industria 4.0",
  icons: {
    icon: "/ruwaytec.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${poppins.variable} ${poppins.className}   antialiased  mx-auto `}
      >
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
