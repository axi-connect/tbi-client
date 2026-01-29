"use client";

import React, { useRef, useEffect, memo } from "react";
import { usePlayer } from "../../context/PlayerContext";

interface AudioVisualizerProps {
    barCount?: number;
    className?: string;
}

export const AudioVisualizer: React.FC<AudioVisualizerProps> = memo(
    ({ barCount = 4, className = "" }) => {
        const { state, getAnalyserNode } = usePlayer();
        const barsRef = useRef<(HTMLDivElement | null)[]>([]);
        const animationRef = useRef<number | null>(null);

        useEffect(() => {
            if (!state.isPlaying) {
                // Reset bars cuando está pausado
                barsRef.current.forEach((bar) => {
                    if (bar) bar.style.height = "20%";
                });
                return;
            }

            const analyser = getAnalyserNode();

            if (!analyser) {
                // Fallback: animación CSS cuando no hay analyser
                return;
            }

            const dataArray = new Uint8Array(analyser.frequencyBinCount);

            const animate = () => {
                analyser.getByteFrequencyData(dataArray);

                // Mapear frecuencias a las barras
                const step = Math.floor(dataArray.length / barCount);
                barsRef.current.forEach((bar, i) => {
                    if (!bar) return;
                    const value = dataArray[i * step];
                    const height = Math.max(20, (value / 255) * 100);
                    bar.style.height = `${height}%`;
                });

                animationRef.current = requestAnimationFrame(animate);
            };

            animate();

            return () => {
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                }
            };
        }, [state.isPlaying, getAnalyserNode, barCount]);

        return (
            <div className={`flex items-end gap-0.5 h-6 ${className}`}>
                {Array.from({ length: barCount }).map((_, i) => (
                    <div
                        key={i}
                        ref={(el) => {
                            barsRef.current[i] = el;
                        }}
                        className="w-1 rounded-full transition-all duration-75"
                        style={{
                            height: "20%",
                            backgroundColor: `rgba(191, 143, 59, ${0.4 + i * 0.2})`,
                            animationDelay: `${i * 75}ms`,
                        }}
                    />
                ))}
            </div>
        );
    }
);

AudioVisualizer.displayName = "AudioVisualizer";
