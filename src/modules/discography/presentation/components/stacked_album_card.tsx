"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { WaveEffect } from "./ui/wave_effect";
import { Album } from "../../domain/entities/album.entity";

interface StackedAlbumCardProps {
  album: Album;
  index: number;
  total: number;
}

export const StackedAlbumCard = ({ album, index, total }: StackedAlbumCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculamos la rotación basada en el índice para el efecto de apilamiento
  // Solo se aplica en desktop (md:)
  const rotation = (index - Math.floor(total / 2)) * 7;
  const zIndex = isHovered ? 50 : 10 + index;

  return (
    <motion.div
      className="relative w-[280px] md:w-[260px] h-full aspect-3/4 cursor-pointer shrink-0 scroll-snap-align-center"
      style={{ zIndex }}
      initial={{ 
        rotate: 0,
        y: 0,
        scale: 0.9
      }}
      whileInView={{ 
        opacity: 1,
        scale: 1,
        rotate: typeof window !== 'undefined' && window.innerWidth >= 768 ? rotation : 0,
        transition: { delay: index * 0.1 }
      }}
      whileHover={{ 
        rotate: 0,
        y: -20,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 shadow-2xl flex flex-col">
        {/* Imagen de fondo con overlay */}
        <div className="relative w-full h-full">
          <Image
            src={album.cover_image}
            alt={album.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
          
          {/* Efecto Wave en Hover */}
          <WaveEffect isActive={isHovered} />
        </div>

        {/* Info del Album */}
        <div className="p-6 relative z-10 bg-black/40 backdrop-blur-md">
          <motion.h3 
            className="text-xl font-bold text-white font-unbounded line-clamp-1"
            animate={{ y: isHovered ? -5 : 0 }}
          >
            {album.title}
          </motion.h3>
          <p className="text-zinc-400 text-sm mt-1">{album.artist}</p>
          
          <motion.div 
            className="mt-4 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
          >
            <a 
              href={album.spotify_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full py-3 rounded-full bg-primary text-black font-bold text-sm hover:bg-primary/90 transition-colors"
            >
              Escuchar ahora
            </a>
          </motion.div>
        </div>
      </div>

      {/* Sombras decorativas para el efecto de apilamiento */}
      <div className="absolute -inset-2 bg-primary/5 blur-2xl rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};