"use client";

import React, { useState, useEffect } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled
                ? "backdrop-blur-md bg-black/40 border-white/5 py-4"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
                {/* Brand */}
                <div className="flex items-center gap-3 cursor-pointer group">
                    <div className="transition-transform group-hover:scale-110">
                        <img src="https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768022851/isotype-tbi-low_dybkgc.png" alt="" className="w-12" />
                    </div>
                    <h1 className="text-white font-serif font-bold text-xl tracking-wide uppercase">
                        The Brothers Inc
                    </h1>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {[
                        { label: "Inicio", href: "/" },
                        { label: "Estudio", href: "/merch" },
                        { label: "Artistas", href: "/artists" },
                        { label: "Contacto", href: "#" }
                    ].map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="text-white/80 text-sm font-medium tracking-widest hover:text-primary transition-colors uppercase relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full opacity-0 group-hover:opacity-100" />
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Icon */}
                <button className="md:hidden text-white hover:text-primary transition-colors">
                    <Bars3Icon className="size-8" />
                </button>
            </div>
        </header>
    );
};
