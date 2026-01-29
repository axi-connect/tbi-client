"use client";

import { Track } from "../../domain/entities/Track";
import { PlayerService } from "../../application/services/PlayerService";
import { PlayerState, initialPlayerState } from "../../domain/entities/PlayerState";
import { createPlayerService, destroyPlayerService } from "../../infrastructure/di/container";
import React, { createContext, useContext, useEffect, useState, useCallback, useRef } from "react";

interface PlayerContextValue {
    state: PlayerState;
    play: () => Promise<void>;
    pause: () => void;
    playTrack: (track: Track) => Promise<void>;
    playNext: () => Promise<void>;
    playPrevious: () => Promise<void>;
    seek: (time: number) => void;
    seekToProgress: (progress: number) => void;
    setVolume: (volume: number) => void;
    toggleMute: () => void;
    toggleShuffle: () => void;
    toggleExpanded: () => void;
    toggleMinimized: () => void;
    getAnalyserNode: () => AnalyserNode | null;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export const usePlayer = (): PlayerContextValue => {
    const context = useContext(PlayerContext);
    if (!context) {
        throw new Error("usePlayer must be used within a PlayerProvider");
    }
    return context;
};

interface PlayerProviderProps {
    children: React.ReactNode;
}

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
    const [state, setState] = useState<PlayerState>(initialPlayerState);
    const serviceRef = useRef<PlayerService | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Create service only on client
        const service = createPlayerService();
        serviceRef.current = service;

        // Subscribe to state updates
        const unsubscribe = service.subscribe((newState) => {
            setState(newState);
        });

        // Initialize with playlist
        service.initialize().then(() => {
            setIsInitialized(true);
        });

        return () => {
            unsubscribe();
            destroyPlayerService();
        };
    }, []);

    const play = useCallback(async () => {
        await serviceRef.current?.play();
    }, []);

    const pause = useCallback(() => {
        serviceRef.current?.pause();
    }, []);

    const playTrack = useCallback(async (track: Track) => {
        await serviceRef.current?.playTrack(track);
    }, []);

    const playNext = useCallback(async () => {
        await serviceRef.current?.playNext();
    }, []);

    const playPrevious = useCallback(async () => {
        await serviceRef.current?.playPrevious();
    }, []);

    const seek = useCallback((time: number) => {
        serviceRef.current?.seek(time);
    }, []);

    const seekToProgress = useCallback((progress: number) => {
        serviceRef.current?.seekToProgress(progress);
    }, []);

    const setVolume = useCallback((volume: number) => {
        serviceRef.current?.setVolume(volume);
    }, []);

    const toggleMute = useCallback(() => {
        serviceRef.current?.toggleMute();
    }, []);

    const toggleShuffle = useCallback(() => {
        serviceRef.current?.toggleShuffle();
    }, []);

    const toggleExpanded = useCallback(() => {
        serviceRef.current?.toggleExpanded();
    }, []);

    const toggleMinimized = useCallback(() => {
        serviceRef.current?.toggleMinimized();
    }, []);

    const getAnalyserNode = useCallback(() => {
        return serviceRef.current?.getAnalyserNode() ?? null;
    }, []);

    const value: PlayerContextValue = {
        state,
        play,
        pause,
        playTrack,
        playNext,
        playPrevious,
        seek,
        seekToProgress,
        setVolume,
        toggleMute,
        toggleShuffle,
        toggleExpanded,
        toggleMinimized,
        getAnalyserNode,
    };

    if (!isInitialized) {
        return null;
    }

    return <PlayerContext value={value}>{children}</PlayerContext>;
};
