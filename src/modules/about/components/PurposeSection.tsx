"use client";
import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { ABOUT_CONTENT } from "../constants/about.content";

export const PurposeSection = () => {
    const { purpose } = ABOUT_CONTENT;

    return (
        <section className="relative py-6 md:py-12 px-4 md:px-10 z-10 overflow-hidden">
            {/* Background ambient light */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <span className="text-primary text-xs font-bold tracking-[0.3em] uppercase animate-fade-in-up">
                    Nuestro Propósito
                </span>

                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-tight animate-fade-in-up delay-100">
                    "{purpose.highlight}"
                </h2>

                <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-200">
                    {purpose.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-8">
                    {purpose.checklist.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-full px-6 py-3 hover:bg-white/10 transition-colors animate-fade-in-up" style={{ animationDelay: `${300 + idx * 100}ms` }}>
                            <CheckBadgeIcon className="size-5 text-primary shrink-0" />
                            <span className="text-white/90 text-sm md:text-base font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
