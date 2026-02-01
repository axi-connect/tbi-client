"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Album } from "../../domain/entities/album.entity";

interface AlbumCardProps {
  album: Album;
}

export const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <motion.div
      className="group relative flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-64 h-64 md:w-72 md:h-72">
        {/* Disco (Vinilo) */}
        <motion.div
          className="absolute top-0 right-0 w-full h-full rounded-full bg-black border-2 border-white/10 flex items-center justify-center z-0"
          initial={{ x: 0, rotate: 0 }}
          whileHover={{ x: "35%", rotate: 180 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          {/* Centro del disco */}
          <div className="w-24 h-24 rounded-full border-4 border-white/5 overflow-hidden relative">
             <Image
              src={album.cover_image}
              alt={album.title}
              fill
              className="object-cover opacity-50 blur-[1px]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-4 h-4 rounded-full bg-black border border-white/20" />
            </div>
          </div>
        </motion.div>

        {/* Carátula del Album */}
        <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl z-10 bg-zinc-900 border border-white/5">
          <Image
            src={album.cover_image}
            alt={album.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
             <a 
               href={album.spotify_url} 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-white text-black px-4 py-2 rounded-full text-sm font-bold w-fit hover:bg-zinc-200 transition-colors"
             >
               Escuchar en Spotify
             </a>
          </div>
        </div>
      </div>

      {/* Info del Album */}
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-white font-unbounded">{album.title}</h3>
        <p className="text-zinc-400 mt-1">{album.artist} • {album.release_date}</p>
      </div>
    </motion.div>
  );
};