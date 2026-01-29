"use client";
import React from "react";
import { ArtistCard } from "./ArtistCard";

const ARTISTS = [
    {
        id: 1,
        name: "Andrés SZ",
        genre: "Rap, Trap | Urbano",
        image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768365486/photo_andresSZ_smyqqv.jpg",
        alt: "Moody editorial portrait of artist Andrés SZ in dark streetwear lighting"
    },
    {
        id: 2,
        name: "La Ene",
        genre: "Trap, R&B | Urbano",
        image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768365483/photo_la-ene_bhtrxf.jpg",
        alt: "High contrast black and white portrait of female artist La Ene with microphone"
    },
    {
        id: 3,
        name: "Trillerboi",
        genre: "Trap, Afro | Urbano",
        image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768365481/photo_trillerboi_vbc5lk.jpg",
        alt: "Stylized portrait of producer Trillerboi in studio with neon lighting"
    },
    {
        id: 4,
        name: "Dimelojei",
        genre: "Productor Ejecutivo",
        image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768365884/photo_dimelojei_sw2hjo.jpg",
        alt: "Silhouette of artist Carlos V against a sunset urban background"
    }
];

export const ArtistRosterSection = () => {
    return (
        <section className="py-16 lg:py-24 px-4 lg:px-20 relative z-10">
            <div className="max-w-[1400px] mx-auto flex flex-col gap-10">
                {/* Headline */}
                <div className="flex flex-col items-center justify-center text-center gap-2">
                    <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">The Brothers Inc</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-light uppercase tracking-widest text-white">
                        Talento <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Exclusivo</span>
                    </h1>
                </div>

                {/* Carousel */}
                <div className="w-full overflow-x-auto no-scrollbar pb-10 pt-4">
                    <div className="flex gap-6 min-w-max px-4 md:justify-center p-24">
                        {ARTISTS.map((artist) => (
                            <ArtistCard key={artist.id} {...artist} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
