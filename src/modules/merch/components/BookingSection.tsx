import React from "react";
import { ArrowRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export const BookingSection = () => {
    return (
        <section className="w-full bg-gradient-to-b from-[#1e1a14] to-[#16130f] py-20 border-t border-[#41392a]/30 relative z-10">
            <div className="max-w-[960px] mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-12">
                    <h2 className="text-white text-3xl md:text-4xl font-black uppercase tracking-tight mb-3">Reserva Tu Sesión</h2>
                    <p className="text-[#bfb29c] max-w-lg text-lg font-light leading-relaxed">
                        Producción de nivel profesional en el corazón de Bogotá. Asegura tu espacio con nuestro equipo de ingeniería.
                    </p>
                </div>

                <div className="bg-[#2e281e] p-8 md:p-10 rounded-2xl shadow-2xl border border-[#41392a]/50 backdrop-blur-sm">
                    <form className="flex flex-col gap-8">
                        {/* Row 1 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-white text-xs font-bold uppercase tracking-widest text-opacity-80 ml-1">Nombre del Artista / Grupo</span>
                                <input
                                    className="w-full bg-[#41392a]/40 border border-transparent border-b-[#bfb29c]/30 focus:border-primary focus:bg-[#41392a]/80 focus:ring-0 focus:outline-none text-white rounded-lg h-14 px-4 placeholder-[#bfb29c]/40 transition-all duration-300 font-medium"
                                    placeholder="ej. Feid"
                                    type="text"
                                />
                            </label>
                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-white text-xs font-bold uppercase tracking-widest text-opacity-80 ml-1">Correo Electrónico</span>
                                <input
                                    className="w-full bg-[#41392a]/40 border border-transparent border-b-[#bfb29c]/30 focus:border-primary focus:bg-[#41392a]/80 focus:ring-0 focus:outline-none text-white rounded-lg h-14 px-4 placeholder-[#bfb29c]/40 transition-all duration-300 font-medium"
                                    placeholder="contacto@ejemplo.com"
                                    type="email"
                                />
                            </label>
                        </div>

                        {/* Row 2 */}
                        <div className="flex flex-col md:flex-row gap-6">
                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-white text-xs font-bold uppercase tracking-widest text-opacity-80 ml-1">Tipo de Servicio</span>
                                <div className="relative">
                                    <select className="w-full bg-[#41392a]/40 border border-transparent border-b-[#bfb29c]/30 focus:border-primary focus:bg-[#41392a]/80 focus:ring-0 focus:outline-none text-white rounded-lg h-14 pl-4 pr-10 appearance-none transition-all duration-300 font-medium cursor-pointer">
                                        <option>Grabación de Estudio</option>
                                        <option>Mezcla y Masterización</option>
                                        <option>Producción de Beats</option>
                                        <option>Consultoría</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#bfb29c]">
                                        <ChevronDownIcon className="size-5" />
                                    </div>
                                </div>
                            </label>
                            <label className="flex flex-col flex-1 gap-2">
                                <span className="text-white text-xs font-bold uppercase tracking-widest text-opacity-80 ml-1">Fecha Preferida</span>
                                <div className="relative">
                                    <input
                                        className="w-full bg-[#41392a]/40 border border-transparent border-b-[#bfb29c]/30 focus:border-primary focus:bg-[#41392a]/80 focus:ring-0 focus:outline-none text-white rounded-lg h-14 px-4 placeholder-[#bfb29c]/40 transition-all duration-300 font-medium [color-scheme:dark]"
                                        type="date"
                                    />
                                </div>
                            </label>
                        </div>

                        {/* Submit */}
                        <div className="pt-4">
                            <button
                                className="w-full h-14 bg-primary hover:bg-[#a67c33] text-[#1f1b14] rounded-lg font-black uppercase tracking-widest text-lg transition-transform active:scale-[0.99] flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(191,143,59,0.15)] hover:shadow-[0_0_30px_rgba(191,143,59,0.3)] cursor-pointer"
                                type="button"
                            >
                                <span>Confirmar Solicitud</span>
                                <ArrowRightIcon className="size-5" />
                            </button>
                            <p className="text-center text-[#bfb29c]/60 text-xs mt-4">Se requiere un depósito del 50% para asegurar tu reserva.</p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};
