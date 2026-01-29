"use client";

import React, { memo } from "react";
import { Track } from "../../../domain/entities/Track";

interface TrackInfoProps {
    track: Track | null;
    isPlaying: boolean;
}

export const TrackInfo: React.FC<TrackInfoProps> = memo(({ track, isPlaying }) => {
    if (!track) {
        return (
            <div className="flex-1 min-w-0">
                <p className="text-white/50 text-sm">Sin pista seleccionada</p>
            </div>
        );
    }

    return (
        <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
                <p className="text-white text-sm font-bold truncate">{track.title}</p>
                {isPlaying && (
                    <span className="flex size-2 relative shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                        <span className="relative inline-flex rounded-full size-2 bg-primary" />
                    </span>
                )}
            </div>
            <p className="text-primary text-xs font-medium tracking-wide truncate">
                {track.artist}
            </p>
        </div>
    );
});

TrackInfo.displayName = "TrackInfo";
