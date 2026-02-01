"use client";

import React, { memo } from "react";
import { TrackInfo } from "./TrackInfo";
import { ProgressBar } from "./ProgressBar";
import { VolumeSlider } from "./VolumeSlider";
import { PlayerControls } from "./PlayerControls";
import { AudioVisualizer } from "./AudioVisualizer";
import { usePlayer } from "../../context/PlayerContext";
import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from "@heroicons/react/24/outline";

export const MiniPlayer: React.FC = memo(() => {
    const {
        state,
        play,
        pause,
        playNext,
        playPrevious,
        seekToProgress,
        setVolume,
        toggleMute,
        toggleShuffle,
        toggleExpanded,
    } = usePlayer();

    const { currentTrack, isPlaying, isLoading, isExpanded, shuffleEnabled, volume, isMuted, progress, currentTime, duration } = state;

    if (!currentTrack) return null;

    return (
        <>
            {/* Desktop Widget */}
            <div className="fixed bottom-6 right-6 z-50 w-full max-w-[340px] hidden sm:block">
                <div
                    className={`relative overflow-hidden rounded-2xl bg-[#1f1b14]/90 border border-[#41392a] backdrop-blur-xl shadow-2xl shadow-black/50 group hover:border-primary/30 transition-all duration-300 ${isExpanded ? "p-5" : "p-4"
                        }`}
                >
                    {/* Glass reflection effect */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent pointer-events-none" />

                    {/* Expand/Collapse button */}
                    <button
                        onClick={toggleExpanded}
                        className="absolute top-3 right-3 z-20 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/40 hover:text-white/60 transition-colors"
                        aria-label={isExpanded ? "Collapse" : "Expand"}
                    >
                        {isExpanded ? (
                            <ArrowsPointingInIcon className="size-4" />
                        ) : (
                            <ArrowsPointingOutIcon className="size-4" />
                        )}
                    </button>

                    {isExpanded ? (
                        /* Expanded View */
                        <div className="relative z-10 space-y-4">
                            {/* Album Art Large */}
                            <div className="relative aspect-square w-full max-w-[200px] mx-auto overflow-hidden rounded-xl">
                                <div
                                    className={`absolute inset-0 bg-cover bg-center ${isPlaying ? "animate-[pulse_3s_linear_infinite]" : ""
                                        }`}
                                    style={{ backgroundImage: `url('${currentTrack.albumArt}')` }}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                            </div>

                            {/* Track Info Centered */}
                            <div className="text-center">
                                <h3 className="text-white font-bold text-lg truncate">{currentTrack.title}</h3>
                                <p className="text-primary text-sm font-medium">{currentTrack.artist}</p>
                            </div>

                            {/* Progress Bar */}
                            <ProgressBar
                                progress={progress}
                                currentTime={currentTime}
                                duration={duration}
                                onSeek={seekToProgress}
                            />

                            {/* Full Controls */}
                            <PlayerControls
                                isPlaying={isPlaying}
                                isLoading={isLoading}
                                shuffleEnabled={shuffleEnabled}
                                onPlay={play}
                                onPause={pause}
                                onNext={playNext}
                                onPrevious={playPrevious}
                                onToggleShuffle={toggleShuffle}
                            />

                            {/* Volume Slider */}
                            <div className="flex justify-center">
                                <VolumeSlider
                                    volume={volume}
                                    isMuted={isMuted}
                                    onVolumeChange={setVolume}
                                    onToggleMute={toggleMute}
                                />
                            </div>
                        </div>
                    ) : (
                        /* Compact View */
                        <div className="flex items-center gap-4 relative z-10">
                            {/* Album Art with Animation */}
                            <div className="relative size-12 shrink-0 overflow-hidden rounded-lg">
                                <div
                                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 ${isPlaying ? "animate-[pulse_3s_linear_infinite]" : ""
                                        }`}
                                    style={{ backgroundImage: `url('${currentTrack.albumArt}')` }}
                                />
                            </div>

                            {/* Track Info */}
                            <TrackInfo track={currentTrack} isPlaying={isPlaying} />

                            {/* Controls */}
                            <div className="flex items-center gap-3">
                                <AudioVisualizer barCount={4} />
                                <PlayerControls
                                    isPlaying={isPlaying}
                                    isLoading={isLoading}
                                    shuffleEnabled={shuffleEnabled}
                                    onPlay={play}
                                    onPause={pause}
                                    onNext={playNext}
                                    onPrevious={playPrevious}
                                    onToggleShuffle={toggleShuffle}
                                    compact
                                />
                            </div>
                        </div>
                    )}

                    {/* Progress Bar (bottom line for compact view) */}
                    {!isExpanded && (
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
                            <div
                                className="h-full bg-primary shadow-[0_0_10px_rgba(191,143,59,0.5)] transition-all duration-100"
                                style={{ width: `${progress * 100}%` }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Dynamic Island */}
            <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 sm:hidden">
                <div
                    className={`relative overflow-hidden bg-black/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 ${isExpanded
                        ? "rounded-3xl w-[calc(100vw-32px)] max-w-[360px] p-4"
                        : "rounded-full px-4 py-2"
                        }`}
                    onClick={!isExpanded ? toggleExpanded : undefined}
                >
                    {isExpanded ? (
                        /* Mobile Expanded */
                        <div className="space-y-4">
                            {/* Close button */}
                            <button
                                onClick={toggleExpanded}
                                className="absolute top-3 right-3 p-1.5 rounded-full bg-white/10 text-white/60"
                            >
                                <ArrowsPointingInIcon className="size-4" />
                            </button>

                            {/* Album Art */}
                            <div className="relative aspect-square w-full max-w-[180px] mx-auto overflow-hidden rounded-2xl">
                                <div
                                    className={`absolute inset-0 bg-cover bg-center ${isPlaying ? "animate-[pulse_3s_linear_infinite]" : ""
                                        }`}
                                    style={{ backgroundImage: `url('${currentTrack.albumArt}')` }}
                                />
                            </div>

                            {/* Info */}
                            <div className="text-center">
                                <h3 className="text-white font-bold truncate">{currentTrack.title}</h3>
                                <p className="text-primary text-sm">{currentTrack.artist}</p>
                            </div>

                            {/* Progress */}
                            <ProgressBar
                                progress={progress}
                                currentTime={currentTime}
                                duration={duration}
                                onSeek={seekToProgress}
                            />

                            {/* Controls */}
                            <PlayerControls
                                isPlaying={isPlaying}
                                isLoading={isLoading}
                                shuffleEnabled={shuffleEnabled}
                                onPlay={play}
                                onPause={pause}
                                onNext={playNext}
                                onPrevious={playPrevious}
                                onToggleShuffle={toggleShuffle}
                            />
                        </div>
                    ) : (
                        /* Mobile Pill */
                        <div className="flex items-center gap-3">
                            <div className="relative size-8 shrink-0 overflow-hidden rounded-full">
                                <div
                                    className={`absolute inset-0 bg-cover bg-center ${isPlaying ? "animate-[pulse_3s_linear_infinite]" : ""
                                        }`}
                                    style={{ backgroundImage: `url('${currentTrack.albumArt}')` }}
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-white text-xs font-medium truncate">{currentTrack.title}</p>
                            </div>
                            <AudioVisualizer barCount={3} className="h-4" />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
});

MiniPlayer.displayName = "MiniPlayer";
