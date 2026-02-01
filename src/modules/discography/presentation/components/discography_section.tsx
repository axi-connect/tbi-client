"use client";

import { motion } from "framer-motion";
import { useDiscography } from "../hooks/use_discography";
import { StackedAlbumCard } from "./stacked_album_card";
import { DISCOGRAPHY_COPY } from "../../constants/discography.content";

export const DiscographySection = () => {
  const { albums, loading, error } = useDiscography();

  if (loading) return null;
  if (error) return null;

  return (
    <section className="relative py-12 px-4 md:px-10 z-10 bg-black overflow-hidden">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest bg-primary/5"
          >
            {DISCOGRAPHY_COPY.tag}
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-7xl font-bold text-white font-unbounded max-w-4xl leading-tight"
          >
            {DISCOGRAPHY_COPY.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-zinc-400 max-w-2xl text-base md:text-xl font-light leading-relaxed px-4"
          >
            {DISCOGRAPHY_COPY.description}
          </motion.p>
        </div>

        {/* Layout de Tarjetas Apiladas / Carrusel Responsive */}
        <div className="relative h-[600px] md:h-[500px] flex items-center justify-center">
          <div className="flex items-center justify-start md:justify-center overflow-x-auto md:overflow-visible md:pb-0 px-8 no-scrollbar snap-x snap-mandatory -space-x-4 md:-space-x-12 lg:-space-x-12">
            {albums.map((album, index) => (
              <div key={album.id} className="snap-center shrink-0 py-8 md:py-0">
                <StackedAlbumCard 
                  album={album} 
                  index={index} 
                  total={albums.length} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decoración de fondo premium */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-zinc-800/20 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};
