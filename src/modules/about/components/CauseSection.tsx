"use client";
import { ABOUT_CONTENT } from "../constants/about.content";

export const CauseSection = () => {
    const { cause } = ABOUT_CONTENT;

    return (
        <section className="relative py-20 px-4 md:px-10 max-w-[1440px] mx-auto z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">

                {/* Left Column: Sticky Title or Intro could go here, but for now just cards */}
                {cause.items.map((item, index) => (
                    <div
                        key={item.id}
                        className={`group relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden transition-all duration-500 hover:border-primary/30 ${index === 1 ? 'md:mt-24' : ''}`}
                    >
                        {/* Background Hover Glow */}
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-700"></div>

                        {/* Content */}
                        <div className="relative z-10 space-y-6">
                            <span className="text-6xl md:text-8xl font-serif font-black text-white/5 absolute -top-4 -left-4 select-none group-hover:text-primary/10 transition-colors duration-500">
                                {item.id}
                            </span>

                            <div className="pt-8">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>

                            {/* Image Reveal on Hover (Optional aesthetic touch) */}
                            <div className="relative h-48 w-full rounded-lg overflow-hidden mt-6 opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-700 border border-white/5 group-hover:border-primary/20">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
