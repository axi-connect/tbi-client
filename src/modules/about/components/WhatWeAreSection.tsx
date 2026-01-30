"use client";
import React from "react";
import { ABOUT_CONTENT } from "../constants/about.content";

export const WhatWeAreSection = () => {
    const { whatWeAre } = ABOUT_CONTENT;

    return (
        <section className="relative py-24 px-4 md:px-10 z-10 bg-linear-to-b from-transparent to-black/30">
            <div className="max-w-5xl mx-auto">
                <div className="glass-card rounded-3xl p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
                    {/* Decorative background blob */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-8">
                            <div>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                                    {whatWeAre.title}
                                </h2>
                                <p className="text-lg text-white/70 leading-relaxed font-light">
                                    {whatWeAre.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {whatWeAre.genres.map((genre, idx) => (
                                    <span
                                        key={idx}
                                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-white/90 backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-all duration-300 cursor-default"
                                    >
                                        {genre}
                                    </span>
                                ))}
                            </div>

                            <div className="pt-4">
                                <blockquote className="text-xl md:text-2xl font-serif italic text-gradient-gold opacity-90">
                                    "{whatWeAre.quote}"
                                </blockquote>
                            </div>
                        </div>

                        {/* Values Circle Layout */}
                        <div className="flex-1 flex justify-center">
                            <div className="relative w-64 h-64 md:w-80 md:h-80">
                                {/* Center Core */}
                                <div className="absolute inset-0 m-auto w-32 h-32 rounded-full border border-primary/20 flex items-center justify-center bg-black/40 backdrop-blur-md z-20 animate-breathe">
                                    <img src="https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768022851/isotype-tbi-low_dybkgc.png" alt="TBI" className="w-12 opacity-80" />
                                </div>

                                {/* Orbiting Values */}
                                {whatWeAre.values.map((val, idx) => {
                                    const rotation = idx * (360 / whatWeAre.values.length);
                                    return (
                                        <div
                                            key={idx}
                                            className="absolute inset-0 w-full h-full animate-[spin-slow_20s_linear_infinite]"
                                            style={{ animationDelay: `-${idx * 5}s` }}
                                        >
                                            <div
                                                className="absolute top-0 left-1/2 -translate-x-1/2 -mt-4"
                                            >
                                                <div className="glass-card px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest text-primary shadow-[0_0_15px_rgba(191,143,59,0.2)] animate-[spin-slow_20s_linear_infinite_reverse]">
                                                    {val}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {/* Orbit Rings */}
                                <div className="absolute inset-0 border border-white/5 rounded-full"></div>
                                <div className="absolute inset-4 border border-white/5 rounded-full border-dashed opacity-30 animate-spin-slow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
