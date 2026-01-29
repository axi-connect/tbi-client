"use client";

import React, { memo } from "react";
import {
    PlayIcon,
    PauseIcon,
    ForwardIcon,
    BackwardIcon,
} from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

interface PlayerControlsProps {
    isPlaying: boolean;
    isLoading: boolean;
    shuffleEnabled: boolean;
    onPlay: () => void;
    onPause: () => void;
    onNext: () => void;
    onPrevious: () => void;
    onToggleShuffle: () => void;
    compact?: boolean;
}

export const PlayerControls: React.FC<PlayerControlsProps> = memo(
    ({
        isPlaying,
        isLoading,
        shuffleEnabled,
        onPlay,
        onPause,
        onNext,
        onPrevious,
        onToggleShuffle,
        compact = false,
    }) => {
        const handlePlayPause = () => {
            if (isPlaying) {
                onPause();
            } else {
                onPlay();
            }
        };

        if (compact) {
            return (
                <button
                    onClick={handlePlayPause}
                    disabled={isLoading}
                    className="flex shrink-0 items-center justify-center rounded-full size-10 bg-primary text-background-dark hover:bg-white hover:text-black transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isLoading ? (
                        <div className="size-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                        <PauseIcon className="size-5" />
                    ) : (
                        <PlayIcon className="size-5 ml-0.5" />
                    )}
                </button>
            );
        }

        return (
            <div className="flex items-center justify-center gap-3">
                {/* Shuffle */}
                <button
                    onClick={onToggleShuffle}
                    className={`p-2 rounded-full transition-colors ${shuffleEnabled
                            ? "text-primary bg-primary/10"
                            : "text-white/40 hover:text-white/60"
                        }`}
                    aria-label="Toggle shuffle"
                >
                    <ArrowPathIcon className="size-4" />
                </button>

                {/* Previous */}
                <button
                    onClick={onPrevious}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                    aria-label="Previous track"
                >
                    <BackwardIcon className="size-5" />
                </button>

                {/* Play/Pause */}
                <button
                    onClick={handlePlayPause}
                    disabled={isLoading}
                    className="flex items-center justify-center rounded-full size-12 bg-primary text-background-dark hover:bg-white hover:text-black transition-colors shadow-lg shadow-primary/20 disabled:opacity-50"
                    aria-label={isPlaying ? "Pause" : "Play"}
                >
                    {isLoading ? (
                        <div className="size-6 border-2 border-current border-t-transparent rounded-full animate-spin" />
                    ) : isPlaying ? (
                        <PauseIcon className="size-6" />
                    ) : (
                        <PlayIcon className="size-6 ml-0.5" />
                    )}
                </button>

                {/* Next */}
                <button
                    onClick={onNext}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                    aria-label="Next track"
                >
                    <ForwardIcon className="size-5" />
                </button>
            </div>
        );
    }
);

PlayerControls.displayName = "PlayerControls";
