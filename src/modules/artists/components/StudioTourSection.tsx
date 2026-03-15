"use client";
import React, { useState, useEffect } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

const STUDIO_IMAGES_DESKTOP = [
    "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1773613159/DSC05571.jpg_xqyemg.jpg",
    "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1773613298/DSC05559.jpg_g9jloh.jpg",
    "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1773613295/DSC05558.jpg_lioq0r.jpg",
    "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1773613173/DSC05564.jpg_ev5qhd.jpg",
    "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1773613183/DSC05572.jpg_y7jwld.jpg"
];

const STUDIO_IMAGES_MOBILE = [
    "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1773613304/DSC05577.jpg_btmnmf.jpg",
    "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1773613307/DSC05581.jpg_smbyqx.jpg",
];

export const StudioTourSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Responsive detection
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const images = isMobile ? STUDIO_IMAGES_MOBILE : STUDIO_IMAGES_DESKTOP;

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-black z-0">
            {/* Background Image Carousel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={images[currentIndex]}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url("${images[currentIndex]}")`
                    }}
                />
            </AnimatePresence>

            {/* Vintage Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise_pattern_with_subtle_grain.png')]" />

            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e1a14] via-transparent to-[#1e1a14] opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#1e1a14_70%)] opacity-60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 gap-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                    <h2 className="text-primary text-sm md:text-base font-bold tracking-[0.3em] uppercase animate-pulse">
                        Bogotá, Colombia
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none text-white drop-shadow-2xl">
                        El Laboratorio
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 font-light tracking-wide max-w-xl mx-auto">
                        Acústica de clase mundial fusionada con el alma del vinilo.
                        <br className="hidden md:block" />
                        Vive el lugar donde nacen los hits.
                    </p>
                </div>

                <div className="pt-8">
                    <a
                        href="/merch"
                        className="group flex items-center gap-3 px-8 py-4 bg-primary hover:bg-white text-[#1e1a14] rounded-md transition-all duration-300 cursor-pointer"
                    >
                        <span className="text-sm font-bold uppercase tracking-widest">Reservar Sesión</span>
                        <ArrowRightIcon className="size-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};
