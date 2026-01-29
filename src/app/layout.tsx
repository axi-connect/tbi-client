import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { DynamicBackground } from "@/shared/components/layout/DynamicBackground";
import { PlayerProvider, MiniPlayer } from "@/shared/components/features/player";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Brothers Inc",
  description: "Estudio musical premium en Bogotá especializado en género urbano.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased relative font-display selection:bg-primary selection:text-black`}
      >
        {/* Fondo Dinámico (Maneja Video/Imagen, Grano y Viñeta internamente) */}
        <DynamicBackground />

        <PlayerProvider>
          <div className="relative z-10">
            {children}
          </div>

          {/* Reproductor de audio flotante */}
          <MiniPlayer />
        </PlayerProvider>
      </body>
    </html>
  );
}
