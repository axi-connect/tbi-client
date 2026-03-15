"use client";

/**
 * Studio360Section
 *
 * Sección inmersiva de video 360° para la página de Artistas.
 *
 * --- Librería ---
 * @photo-sphere-viewer con EquirectangularVideoAdapter y VideoPlugin.
 * API completamente vanilla JS, sin wrappers de React, compatible con React 19.
 *
 * --- Ciclo de vida controlado ---
 * - `useRef` estabiliza el contenedor DOM.
 * - `useEffect` con cleanup destruye el viewer al desmontar.
 * - `ssr: false` (importación dinámica) evita errores de hidratación.
 */

import { PlayIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// ─── Tipos internos ─── //
interface PsvViewer {
    destroy: () => void;
}

// ─── CSS del visor — inyectado una sola vez ─── //
let psvStylesInjected = false;

function injectPsvStyles(): void {
    if (psvStylesInjected || typeof document === "undefined") return;
    psvStylesInjected = true;

    [
        "https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/core@5/index.min.css",
        "https://cdn.jsdelivr.net/npm/@photo-sphere-viewer/video-plugin@5/index.min.css",
    ].forEach((href) => {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    });
}

// ─── Hook: inicializa el viewer con imports dinámicos (no SSR) ─── //
function usePsvVideoViewer(
    containerRef: React.RefObject<HTMLDivElement | null>,
    videoSrc: string,
    enabled: boolean
): boolean {
    const viewerRef = useRef<PsvViewer | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!enabled || !containerRef.current) return;

        // Evitar doble-mount de React Strict Mode
        if (viewerRef.current) return;

        injectPsvStyles();

        let cancelled = false;

        async function init() {
            const container = containerRef.current;
            if (!container || cancelled) return;

            const [{ Viewer }, { EquirectangularVideoAdapter }, { VideoPlugin }] =
                await Promise.all([
                    import("@photo-sphere-viewer/core"),
                    import("@photo-sphere-viewer/equirectangular-video-adapter"),
                    import("@photo-sphere-viewer/video-plugin"),
                ]);

            if (cancelled || !containerRef.current) return;

            viewerRef.current = new Viewer({
                container: containerRef.current,
                adapter: EquirectangularVideoAdapter,
                panorama: {
                    source: videoSrc,
                },
                plugins: [
                    [
                        VideoPlugin,
                        {
                            autoplay: true,
                            progressbar: true,
                            bigbutton: false,
                        },
                    ],
                ],
                navbar: ["videoPlay", "videoVolume", "caption", "fullscreen"],
                defaultYaw: 0,
                defaultPitch: 0,
                minFov: 30,
                maxFov: 100,
                mousewheel: true,
                mousemove: true,
                touchmoveTwoFingers: false,
                lang: {
                    videoPlay: "Reproducir / Pausar",
                    videoVolume: "Volumen",
                    fullscreen: "Pantalla completa",
                },
            });

            if (!cancelled) setIsLoaded(true);
        }

        init();

        return () => {
            cancelled = true;
            if (viewerRef.current) {
                viewerRef.current.destroy();
                viewerRef.current = null;
            }
        };
    }, [enabled, containerRef, videoSrc]);

    return isLoaded;
}

// ─── Sub-componente: Overlay de invitación ─── //
interface ExperienceOverlayProps {
    onDismiss: () => void;
}

const ExperienceOverlay = ({ onDismiss }: ExperienceOverlayProps) => (
    <motion.div
        key="overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center cursor-pointer bg-black/75 backdrop-blur-sm"
        onClick={onDismiss}
    >
        {/* Play Button */}
        <button className="group flex items-center justify-center size-24 md:size-32 rounded-full border border-primary/30 bg-[#1e1a14]/30 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:border-primary hover:bg-primary/10 cursor-pointer">
            <PlayIcon className="size-12 md:size-14 text-white group-hover:text-primary transition-colors ml-1" />
            {/* Ripple Effect */}
            <span className="absolute inset-0 rounded-full border border-white/10 animate-ping opacity-20" />
        </button>

        <div className="mt-24 flex flex-col items-center justify-center">
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white text-center drop-shadow-2xl mb-3"
            >
                Sumérgete en <span className="text-primary">TBI</span>
            </motion.h2>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-white/60 text-sm md:text-base tracking-widest uppercase mb-8"
            >
                Arrastra para explorar el estudio
            </motion.p>

            <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-3 border border-primary/60 bg-primary/10 text-primary text-sm font-bold uppercase tracking-widest rounded-md backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
            >
                Entrar al estudio
            </motion.button>
        </div>
    </motion.div>
);

// ─── Componente principal ─── //
export const Studio360Section = () => {
    const [isExploring, setIsExploring] = useState(false);
    const viewerContainerRef = useRef<HTMLDivElement>(null);
    const isLoaded = usePsvVideoViewer(
        viewerContainerRef,
        "/video/experience_tbi_360.mp4",
        isExploring
    );

    return (
        <section
            aria-label="Experiencia 360 del estudio TBI"
            className="relative w-full overflow-hidden bg-black"
        >
            {/* ── Título superior ── */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative z-10 text-center pt-16 pb-8 px-4"
            >
                <p className="text-primary text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-3">
                    El Laboratorio · Bogotá, Colombia
                </p>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                    Experiencia <span className="text-primary">360°</span>
                </h2>
                <p className="mt-4 text-white/50 text-sm md:text-base font-light tracking-wide max-w-lg mx-auto">
                    El lugar donde nacen los hits. Explora cada rincón del estudio en
                    una experiencia inmersiva única.
                </p>
            </motion.div>

            {/* ── Visor 360 ── */}
            <motion.div
                initial={{ opacity: 0, scale: 0.99 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full"
                style={{ height: "clamp(380px, 70vh, 760px)" }}
            >
                {/* Overlay de invitación */}
                <AnimatePresence>
                    {!isExploring && (
                        <ExperienceOverlay onDismiss={() => setIsExploring(true)} />
                    )}
                </AnimatePresence>

                {/* Spinner de carga */}
                <AnimatePresence>
                    {isExploring && !isLoaded && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                                className="size-10 border-2 border-primary/30 border-t-primary rounded-full"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Contenedor del visor PSV */}
                <div
                    ref={viewerContainerRef}
                    className="w-full h-full"
                    style={{ background: "#000" }}
                />
            </motion.div>

            {/* ── Hint footer ── */}
            <AnimatePresence>
                {isExploring && isLoaded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1 }}
                        className="relative z-10 flex items-center justify-center gap-3 py-5 text-white/30 text-xs tracking-widest uppercase"
                    >
                        <span>Mantén clic y arrastra para explorar</span>
                        <span>·</span>
                        <span>Scroll para zoom</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Separador inferior degradado ── */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-black pointer-events-none z-10" />
        </section>
    );
};
