"use client";

import React, { memo, useCallback, useRef } from "react";

interface ProgressBarProps {
    progress: number;
    currentTime: number;
    duration: number;
    onSeek: (progress: number) => void;
}

const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
};

export const ProgressBar: React.FC<ProgressBarProps> = memo(
    ({ progress, currentTime, duration, onSeek }) => {
        const barRef = useRef<HTMLDivElement>(null);

        const handleClick = useCallback(
            (e: React.MouseEvent<HTMLDivElement>) => {
                if (!barRef.current) return;
                const rect = barRef.current.getBoundingClientRect();
                const clickProgress = (e.clientX - rect.left) / rect.width;
                onSeek(Math.max(0, Math.min(1, clickProgress)));
            },
            [onSeek]
        );

        return (
            <div className="w-full">
                <div
                    ref={barRef}
                    className="h-1 bg-white/10 rounded-full cursor-pointer group relative"
                    onClick={handleClick}
                >
                    {/* Progress fill */}
                    <div
                        className="absolute inset-y-0 left-0 bg-primary rounded-full shadow-[0_0_10px_rgba(191,143,59,0.5)] transition-all duration-100"
                        style={{ width: `${progress * 100}%` }}
                    />
                    {/* Hover indicator */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 size-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                        style={{ left: `calc(${progress * 100}% - 6px)` }}
                    />
                </div>
                {/* Time display */}
                <div className="flex justify-between mt-1 text-[10px] text-white/40 font-medium">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>
        );
    }
);

ProgressBar.displayName = "ProgressBar";
