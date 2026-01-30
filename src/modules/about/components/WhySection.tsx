"use client";
import React from "react";
import { ABOUT_CONTENT } from "../constants/about.content";

export const WhySection = () => {
    const { why } = ABOUT_CONTENT;

    return (
        <section className="relative py-12 px-4 border-t border-white/5 bg-black/50 backdrop-blur-3xl z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                {why.items.map((item, index) => (
                    <div key={index} className="flex flex-col gap-6 relative group">
                        {/* Vertical Separator for non-last items */}
                        {index !== why.items.length - 1 && (
                            <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-2/3 w-px bg-linear-to-b from-transparent via-white/10 to-transparent"></div>
                        )}

                        <h3 className="text-xl font-bold uppercase tracking-widest text-primary/80 group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>

                        <p className="text-white/70 font-light leading-relaxed pr-6">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
