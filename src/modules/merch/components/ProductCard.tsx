"use client";
import React, { useState, useRef, useCallback } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

interface ProductCardProps {
    id: number;
    name: string;
    price: string;
    image: string;
    badge: string | null;
    alt: string;
}

export const ProductCard = ({ name, price, image, badge, alt }: ProductCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [transform, setTransform] = useState("");
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Aumenté la rotación a 18 grados para que sea más notorio
        const rotateX = ((y - centerY) / centerY) * -18;
        const rotateY = ((x - centerX) / centerX) * 18;

        setTransform(`perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.04, 1.04, 1.04)`);
    }, []);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setIsHovered(false);
        setTransform("");
    }, []);

    return (
        <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative flex flex-col gap-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-3 min-w-[280px] w-[280px] hover:border-primary/50 hover:bg-white/10 shadow-xl will-change-transform"
            style={{
                transform: transform || "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transformStyle: "preserve-3d",
                transition: isHovered ? "transform 0.08s ease-out" : "transform 0.4s ease-out"
            }}
        >
            {/* Capa invisible para capturar todos los eventos del mouse sin interferencias */}
            <div
                className="absolute inset-0 z-50 rounded-xl"
                style={{ pointerEvents: "none" }}
            />

            {/* Glare Effect */}
            <div
                className="absolute inset-0 rounded-xl pointer-events-none z-10 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 0.12 : 0,
                    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)"
                }}
            />

            {/* Image Container */}
            <div
                className="relative w-full aspect-[2/2] overflow-hidden rounded-lg bg-black pointer-events-none"
                style={{
                    transform: "translateZ(25px)",
                    transformStyle: "preserve-3d"
                }}
            >
                <div
                    className="w-full h-full bg-center bg-cover bg-no-repeat transition-all duration-500"
                    style={{
                        backgroundImage: `url("${image}")`,
                        opacity: isHovered ? 1 : 0.8,
                        transform: isHovered ? "scale(1.08)" : "scale(1)"
                    }}
                    role="img"
                    aria-label={alt}
                />
                {badge && (
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                        {badge}
                    </div>
                )}
            </div>

            {/* Content */}
            <div
                className="flex flex-col justify-between gap-3 px-1 pb-1 pointer-events-none"
                style={{
                    transform: "translateZ(40px)",
                    transformStyle: "preserve-3d"
                }}
            >
                <div>
                    <p className="text-white text-lg font-bold uppercase tracking-tight">{name}</p>
                    <p className="text-primary text-sm font-medium tracking-wide">{price}</p>
                </div>
                <button
                    className="w-full h-10 flex items-center justify-center gap-2 rounded bg-[#41392a] hover:bg-white hover:text-black transition-all text-white text-sm font-bold uppercase tracking-wider cursor-pointer pointer-events-auto relative z-[60]"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <ShoppingBagIcon className="size-5" />
                    <span>Comprar</span>
                </button>
            </div>
        </div>
    );
};
