"use client";
import React from "react";
import { PlayIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

export const StudioTourSection = () => {
    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-black z-0">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-60 scale-105"
                style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDg2s-60NLLsJM1LzvI44mIRKV_n1kWuxHVsZZLam4KE587AVfDq0LdvUJfOs8IHRVDSQxzMElYs-Za78UgFztecnwoe3v9IVU8Km_1PSULEqORAD-Dc7XYVLNZP3UyfiGXohMSyrwJYmbqrstscVU6cHSCeDNidRV0_y-CE6kyCoDgcDJZWdONnBEuWBj4QHRgi9dsZQxwm5bzxLUZKvn3uH7IrfupjPWpodRFZobeTwd9n1wH6AmRanp8TsP8eHzkBxTgmX8fvOU")`
                }}
            />

            {/* Vintage Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/Noise_pattern_with_subtle_grain.png')]" />

            {/* Vignette Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e1a14] via-transparent to-[#1e1a14] opacity-90" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#1e1a14_70%)] opacity-60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-4 gap-8 max-w-4xl mx-auto">
                {/* Play Button */}
                <button className="group relative flex items-center justify-center size-24 md:size-32 rounded-full border border-primary/30 bg-[#1e1a14]/30 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-primary hover:bg-primary/10 cursor-pointer">
                    <PlayIcon className="size-12 md:size-14 text-white group-hover:text-primary transition-colors ml-1" />
                    {/* Ripple Effect */}
                    <span className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
                </button>

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
