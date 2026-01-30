"use client";
import React from "react";
import { ABOUT_CONTENT } from "../constants/about.content";

export const ObjectivesSection = () => {
    const { objectives } = ABOUT_CONTENT;

    return (
        <section className="relative py-12 px-4 container mx-auto z-10">
            <div className="text-center mb-16">
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase">Fines del Sello</span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mt-4">Nuestros Objetivos</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {objectives.map((obj, index) => (
                    <div
                        key={obj.id}
                        className={`group relative p-8 glass-card rounded-xl hover:-translate-y-2 transition-transform duration-300 ${index === 3 || index === 4 ? 'lg:col-span-1 md:translate-x-1/2 lg:translate-x-0' : ''}`}
                    >
                        {/* Number Watermark */}
                        <div className="absolute top-2 right-4 text-6xl font-black text-white/3 group-hover:text-primary/5 transition-colors pointer-events-none">
                            0{obj.id}
                        </div>

                        <div className="h-full flex flex-col justify-end relative z-10">
                            <div className="w-8 h-px bg-primary/30 mb-4 group-hover:w-16 transition-all duration-500"></div>
                            <p className="text-white/80 text-lg font-light leading-snug group-hover:text-white transition-colors">
                                {obj.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
