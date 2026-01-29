"use client";
import React from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ProductCard } from "./ProductCard";

const PRODUCTS = [
    {
        id: 1,
        name: "SOUL MEETING 555",
        price: "$80.00 USD",
        image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768198324/item-tbiculture-video_1_exfo9l.gif",
        badge: "NUEVO LOTE",
        alt: "Oversized luxury urban hoodie in black with gold embroidery detail"
    },
    {
        id: 2,
        name: "HOODIE FOCUS PHASE 222",
        price: "$45.00 USD",
        image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768198386/item-tbiculture-video_2_qgpsx2.gif",
        badge: null,
        alt: "Vintage style faded black cap with minimalistic logo"
    },
    {
        id: 3,
        name: "Diseño gráfico",
        price: "$55.00 USD",
        image: "https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768198075/promo-tbiculture-_video_1_amaq4b.gif",
        badge: null,
        alt: "Heavyweight graphic t-shirt with urban art print on back"
    }
];

export const MerchSection = () => {
    return (
        <section className="w-full max-w-[1440px] px-4 md:px-10 py-16 flex flex-col gap-8 relative z-10">
            <div className="flex flex-col max-w-[960px] mx-auto w-full">
                <div className="flex items-center justify-between pb-6 pt-5 border-b border-[#41392a]/50">
                    <h2 className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase">
                        TBI CULTURE <span className="text-primary">//</span> Temporada 1
                    </h2>
                    <a className="hidden sm:flex items-center gap-1 text-primary hover:text-white transition-colors text-sm font-medium uppercase tracking-wide" href="#">
                        Ver todo <ArrowRightIcon className="size-5" />
                    </a>
                </div>
            </div>

            <div className="w-full overflow-hidden" style={{ perspective: "1000px" }}>
                <div className="flex overflow-x-auto no-scrollbar pb-8 -mx-4 px-4 md:px-0 md:justify-center">
                    <div className="flex items-stretch gap-6 py-6 min-w-full md:min-w-0">
                        {PRODUCTS.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
