import React from "react";

export const Hero = () => {
    return (
        <main className="relative z-10 flex flex-col items-center justify-center min-h-screen w-full pt-20 pb-32 px-4">
            {/* Animated Central Logo Section */}
            <div className="flex flex-col items-center justify-center gap-8 md:gap-12 animate-[breathe_8s_ease-in-out_infinite]">
                {/* Large Monogram SVG Representation */}
                <div className="relative size-32 md:size-48 lg:size-56 group">
                    {/* Decorative Circle */}
                    <svg
                        className="absolute inset-0 w-full h-full text-primary/20 animate-[spin_12s_linear_infinite]"
                        viewBox="0 0 100 100"
                    >
                        <path
                            d="M 50 50 m -48 0 a 48 48 0 1 1 96 0 a 48 48 0 1 1 -96 0"
                            fill="none"
                            stroke="currentColor"
                            strokeDasharray="4 4"
                            strokeWidth="0.5"
                        />
                    </svg>

                    {/* Inner Glow Circle */}
                    <div className="absolute inset-4 rounded-full border border-primary/10 animate-pulse"></div>

                    {/* Main Logo Icon */}
                    <div className="absolute inset-0 flex items-center justify-center text-primary drop-shadow-[0_0_15px_rgba(191,143,59,0.3)] transition-transform duration-700 group-hover:scale-110">
                        <div>
                            <img src="https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768022589/isotype-gold-tbi_2_fex666.png" alt="" />
                        </div>
                    </div>
                </div>

                {/* Titles */}
                <div className="text-center space-y-4 max-w-4xl mx-auto px-4">
                    {/* <h2 className="text-white font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl">
                        THE BROTHERS INC
                    </h2> */}
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto my-4"></div>
                    <p className="text-white/80 text-sm md:text-base font-light tracking-[0.2em] uppercase font-display">
                        Estudio &nbsp;•&nbsp; Producción &nbsp;•&nbsp; Cultura
                    </p>
                </div>

                {/* Hero Buttons */}
                {/* <div className="flex flex-col sm:flex-row gap-5 mt-4">
                    <button className="group relative overflow-hidden rounded-md bg-primary px-8 py-3.5 text-background-dark font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:bg-[#d4a045] hover:shadow-[0_0_20px_rgba(191,143,59,0.4)] hover:-translate-y-0.5">
                        <span className="relative z-10">Reservar Sesión</span>
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 transition-transform duration-500 skew-x-12 origin-left"></div>
                    </button>

                    <button className="group flex items-center justify-center gap-2 rounded-md border border-white/30 bg-transparent px-8 py-3.5 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:border-primary hover:text-primary hover:bg-black/40 backdrop-blur-sm hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-lg transition-transform group-hover:scale-110">play_arrow</span>
                        <span>Escuchar Reel</span>
                    </button>
                </div> */}
            </div>
        </main>
    );
};
