"use client";
import React from "react";
import { ABOUT_CONTENT } from "../constants/about.content";
import { ChatBubbleLeftRightIcon, ChartBarIcon, LightBulbIcon } from "@heroicons/react/24/outline";

const ICONS = {
    chat: ChatBubbleLeftRightIcon,
    chart: ChartBarIcon,
    brain: LightBulbIcon
} as const;

export const CommunitySection = () => {
    const { community } = ABOUT_CONTENT;

    return (
        <section className="relative w-full py-12 px-4 overflow-hidden z-10">
            {/* Background Image with heavy blur/overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale opacity-30 scale-110"
                    style={{ backgroundImage: `url('${community.image}')` }}
                ></div>
                <div className="absolute inset-0 bg-background-dark/80 backdrop-blur-sm"></div>
                <div className="absolute inset-0 bg-linear-to-t from-background-dark via-transparent to-background-dark"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-12">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
                        {community.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/70 font-light max-w-2xl mx-auto">
                        {community.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                    {community.features.map((feature, idx) => {
                        const Icon = ICONS[feature.icon as keyof typeof ICONS];
                        return (
                            <div key={idx} className="flex flex-col items-center gap-4 group">
                                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                                    <Icon className="size-8 text-white group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-white/90 font-medium uppercase tracking-widest text-sm">
                                    {feature.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
