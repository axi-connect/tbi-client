import React from "react";
import Link from "next/link";
import {
    MicrophoneIcon,
    UserGroupIcon,
    CalendarDaysIcon,
    Squares2X2Icon
} from "@heroicons/react/24/outline";

export const FloatingDock = () => {
    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-1 p-2 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/50 hover:bg-black/50 transition-colors">
            <DockItem icon={<MicrophoneIcon className="size-6" />} label="Estudio" href="/" />
            <div className="w-px h-8 bg-white/10 mx-1"></div>
            <DockItem icon={<UserGroupIcon className="size-6" />} label="Artistas" href="/artists" />
            <div className="w-px h-8 bg-white/10 mx-1"></div>
            <DockItem icon={<CalendarDaysIcon className="size-6" />} label="Reservar" href="/merch" />
            <div className="w-px h-8 bg-white/10 mx-1"></div>
            <DockItem icon={<Squares2X2Icon className="size-6" />} label="Más" href="/about" />
        </div>
    );
};

const DockItem = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => {
    return (
        <Link
            href={href}
            className="flex flex-col items-center justify-center gap-1 w-20 h-16 rounded-xl hover:bg-white/10 transition-all group relative overflow-hidden"
        >
            <div className="text-white/70 group-hover:text-primary transition-colors group-hover:-translate-y-1 group-hover:scale-110 duration-300">
                {icon}
            </div>
            <span className="text-[10px] text-white/50 uppercase tracking-wide group-hover:text-white transition-colors absolute bottom-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300">
                {label}
            </span>
        </Link>
    );
};
