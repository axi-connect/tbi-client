"use client";

import React, { useState, useEffect, useRef } from "react";

export type MediaType = "image" | "video";

export interface BackgroundMedia {
    id: string;
    type: MediaType;
    src: string;
    alt?: string;
    poster?: string; // Para videos
    duration?: number; // Duración específica en ms (opcional)
}

const DEFAULT_DURATION = 10000; // 10 segundos por defecto

interface DynamicBackgroundProps {
    initialMedia?: BackgroundMedia[];
}

// Datos de ejemplo predeterminados (simulando API/CMS)
const DEFAULT_MEDIA: BackgroundMedia[] = [
    {
        id: "1",
        type: "video",
        src: "https://res.cloudinary.com/dvtz1qx7g/video/upload/v1768193903/video-movistar-home_sdq5e8.mp4",
        alt: "Movistar arena Andrés SZ - TBI (the brothers inc)",
        duration: 8000
    },
    {
        id: "2",
        type: "image",
        src: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768021520/photo-large_1_oby0sw.jpg",
        alt: "La Ene - TBI (the brothers inc)",
        duration: 8000
    },
    // {
    //     id: "3",
    //     type: "image",
    //     src: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768021524/photo-large_6_jfbpga.jpg",
    //     alt: "Trillerboi - TBI (the brothers inc)",
    //     duration: 8000
    // },
    {
        id: "4",
        type: "image",
        src: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768200171/photo-large_8_xo2cs6.jpg",
        alt: "TEAM - TBI (the brothers inc)",
        duration: 8000
    },
    {
        id: "5",
        type: "image",
        src: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1769655779/show-tbi_1_brqckh.jpg",
        alt: "Bosa - TBI (the brothers inc)",
        duration: 8000
    },
    // Ejemplo de cómo se vería un video (usando la misma imagen como placeholder por ahora si no hay video real disponible)
    // {
    //   id: "2",
    //   type: "video",
    //   src: "/assets/studio-loop.mp4", 
    //   poster: "...",
    //   duration: 15000
    // }
];

export const DynamicBackground = ({ initialMedia = DEFAULT_MEDIA }: DynamicBackgroundProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const currentItem = initialMedia[currentIndex];
        const duration = currentItem.duration || DEFAULT_DURATION;

        // Si es video, podríamos querer esperar a que termine, 
        // pero por simplicidad usamos el timer o la duración del video si se implementa lógica de "onEnded"

        const timer = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % initialMedia.length);
        }, duration);

        return () => clearTimeout(timer);
    }, [currentIndex, initialMedia]);

    return (
        <div className="fixed inset-0 z-0 w-full h-full overflow-hidden bg-black select-none pointer-events-none">
            {initialMedia.map((item, index) => {
                const isActive = index === currentIndex;

                return (
                    <div
                        key={item.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        {item.type === "video" ? (
                            <video
                                ref={index === currentIndex ? videoRef : null}
                                className="object-cover w-full h-full scale-105"
                                autoPlay
                                muted
                                loop
                                playsInline
                                poster={item.poster}
                            >
                                <source src={item.src} type="video/mp4" />
                            </video>
                        ) : (
                            <div
                                className="absolute inset-0 bg-cover bg-center scale-105 animate-[spin-slow_60s_linear_infinite_reverse]"
                                style={{ backgroundImage: `url('${item.src}')` }}
                                role="img"
                                aria-label={item.alt}
                            />
                        )}
                    </div>
                );
            })}

            {/* Capas de Efectos Globales (se mantienen constantes) */}

            {/* Dark Overlay */}
            <div className="absolute inset-0 z-20 bg-black/60"></div>

            {/* Warm Ocher Tint */}
            <div className="absolute inset-0 z-20 bg-primary/10 mix-blend-overlay"></div>

            {/* Vignette */}
            <div className="absolute inset-0 z-20 vignette"></div>

            {/* Grain */}
            <div className="film-grain z-20"></div>
        </div>
    );
};
