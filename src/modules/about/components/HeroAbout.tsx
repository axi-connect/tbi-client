"use client";
import { ABOUT_CONTENT } from "../constants/about.content";

export const HeroAbout = () => {
    const { hero } = ABOUT_CONTENT;

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4">
            {/* Background Image with Parallax-like fix position or just absolute */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-40 scale-105 animate-[drift_20s_ease_infinite]"
                    style={{ backgroundImage: `url('${hero.backgroundImage}')` }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-b from-background-dark/80 via-background-dark/60 to-background-dark"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 pt-16">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight animate-fade-in-up delay-100">
                    <span className="block text-white mb-2">{hero.title}</span>
                </h1>

                <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto animate-fade-in-up delay-200 leading-relaxed">
                    "{hero.subtitle}"
                </p>

                <div className="h-px w-24 bg-primary/30 mx-auto animate-fade-in-up delay-300"></div>

                <p className="text-sm md:text-base text-white/60 uppercase tracking-[0.2em] animate-fade-in-up delay-500 font-display">
                    The Brothers Inc • Filosofía
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-[-4] left-1/2 -translate-x-1/2 animate-bounce opacity-50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};
