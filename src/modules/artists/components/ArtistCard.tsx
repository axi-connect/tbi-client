"use client";
import React from "react";
import { SignalIcon } from "@heroicons/react/24/solid";

interface ArtistCardProps {
    name: string;
    genre: string;
    image: string;
    alt: string;
}

export const ArtistCard = ({ name, genre, image, alt }: ArtistCardProps) => {
    return (
        <div className="group relative flex flex-col gap-4 w-[280px] cursor-pointer">
            <div className="relative w-full aspect-[9/14] overflow-hidden rounded-lg shadow-2xl">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url("${image}")` }}
                    role="img"
                    aria-label={alt}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a14]/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Listen Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20 backdrop-blur-[2px]">
                    <div className="size-16 rounded-full bg-primary/90 text-[#1e1a14] flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-primary/20">
                        <SignalIcon className="size-8" />
                    </div>
                </div>

                {/* Artist Info */}
                <div className="absolute bottom-0 left-0 w-full p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white uppercase tracking-wide">{name}</h3>
                    <p className="text-primary text-sm font-medium tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                        {genre}
                    </p>
                </div>
            </div>
        </div>
    );
};
