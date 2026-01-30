"use client";
import React from "react";
import { ABOUT_CONTENT } from "../constants/about.content";

export const MissionVisionSection = () => {
    const { missionVision } = ABOUT_CONTENT;

    return (
        <section className="relative py-12 px-4 z-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-white/10">

                {/* Mission */}
                <div className="flex-1 p-8 md:p-16 space-y-6 hover:bg-white/2 transition-colors duration-500 rounded-lg">
                    <span className="text-primary/50 font-serif text-6xl md:text-8xl opacity-20 absolute pointer-events-none -translate-y-8 -translate-x-4">
                        M
                    </span>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-widest relative z-10">
                        {missionVision.mission.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed font-light text-lg">
                        {missionVision.mission.description}
                    </p>
                    <div className="h-px w-12 bg-primary/50"></div>
                    <p className="text-white/90 font-medium italic">
                        "{missionVision.mission.highlight}"
                    </p>
                </div>

                {/* Vision */}
                <div className="flex-1 p-8 md:p-16 space-y-6 hover:bg-white/2 transition-colors duration-500 rounded-lg">
                    <span className="text-primary/50 font-serif text-6xl md:text-8xl opacity-20 absolute pointer-events-none -translate-y-8 -translate-x-4">
                        V
                    </span>
                    <h3 className="text-3xl font-bold text-white uppercase tracking-widest relative z-10">
                        {missionVision.vision.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed font-light text-lg">
                        {missionVision.vision.description}
                    </p>

                    <div className="space-y-4 pt-4">
                        {missionVision.vision.goals.map((goal, idx) => (
                            <div key={idx} className="group">
                                <span className="text-xs text-primary font-bold uppercase tracking-wider block mb-1 group-hover:text-white transition-colors">
                                    {goal.label}
                                </span>
                                <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">
                                    {goal.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
