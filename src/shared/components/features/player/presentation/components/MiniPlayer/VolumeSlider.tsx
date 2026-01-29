"use client";

import React, { memo, useCallback, useRef } from "react";
import {
    SpeakerWaveIcon,
    SpeakerXMarkIcon,
} from "@heroicons/react/24/solid";

interface VolumeSliderProps {
    volume: number;
    isMuted: boolean;
    onVolumeChange: (volume: number) => void;
    onToggleMute: () => void;
}

export const VolumeSlider: React.FC<VolumeSliderProps> = memo(
    ({ volume, isMuted, onVolumeChange, onToggleMute }) => {
        const sliderRef = useRef<HTMLDivElement>(null);

        const handleSliderClick = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!sliderRef.current) return;
                const rect = sliderRef.current.getBoundingClientRect();
                const newVolume = (e.clientX - rect.left) / rect.width;
                onVolumeChange(Math.max(0, Math.min(1, newVolume)));
            },
            [onVolumeChange]
        );

        const displayVolume = isMuted ? 0 : volume;

        return (
            <div className="flex items-center gap-2">
                <button
                    onClick={onToggleMute}
                    className="text-white/60 hover:text-white transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                >
                    {isMuted || volume === 0 ? (
                        <SpeakerXMarkIcon className="size-4" />
                    ) : (
                        <SpeakerWaveIcon className="size-4" />
                    )}
                </button>
                <div
                    ref={sliderRef}
                    className="w-16 h-1 bg-white/10 rounded-full cursor-pointer relative group"
                    onClick={handleSliderClick}
                >
                    <div
                        className="absolute inset-y-0 left-0 bg-white/60 rounded-full transition-all"
                        style={{ width: `${displayVolume * 100}%` }}
                    />
                    <div
                        className="absolute top-1/2 -translate-y-1/2 size-2.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ left: `calc(${displayVolume * 100}% - 5px)` }}
                    />
                </div>
            </div>
        );
    }
);

VolumeSlider.displayName = "VolumeSlider";
