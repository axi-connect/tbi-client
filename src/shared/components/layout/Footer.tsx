import React from "react";
import { ArrowTopRightOnSquareIcon, MusicalNoteIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
    return (
        <footer className="bg-[#12100d] text-white pt-16 pb-8 border-t border-[#41392a] relative z-20">
            <div className="max-w-[1440px] mx-auto px-4 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-12">
                    {/* Col 1: Brand & Map (Span 5) */}
                    <div className="md:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-white mb-2">
                            <div className="text-primary">
                                {/* graphic_eq alternative */}
                                <img src="https://res.cloudinary.com/dvtz1qx7g/image/upload/v1768022851/isotype-tbi-low_dybkgc.png" alt="The Brothers Inc isotype" className="size-16" />
                            </div>
                            <h2 className="text-2xl font-black uppercase tracking-tighter">The Brothers Inc</h2>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-24 h-24 rounded-lg overflow-hidden bg-[#2e281e] flex-shrink-0 border border-[#41392a]">
                                    <img
                                        alt="Dark stylized map snippet of Bogota Colombia location"
                                        className="w-full h-full object-cover grayscale opacity-70 hover:opacity-100 transition-opacity"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2-Dr84w9_-J8f5Wol5H4bTZJMoqqzIINc3reB6tm8G_KXYqRUaez10elyBgdaalOf3X0yZHdNM991GRvBRaHBk_AucK2FuRjPugbldvGa44dpMU81tju0WfWr2HIA2TSDLHdZokr1msVa2cWFoc--ZDVT58KSin9FP7H5H-2z-o_leeSvaQ2JrdudoPE6OuWjU0y-zc95Z9Hr9W6XK-fq3UKbwpGRpmA52ScKNtOcFCVQaHPXQJ2RdOZfLfiSwAsFyySKAnHk-7g"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h4 className="font-bold text-lg">Estudio Bogotá</h4>
                                    <p className="text-[#bfb29c] text-sm leading-relaxed">Ak 15 #119-86<br />Unicentro, Bogotá, Colombia</p>
                                    <a className="text-primary text-xs font-bold uppercase tracking-wide mt-1 flex items-center gap-1 hover:underline" href="https://www.google.com/maps/dir//Ak+15+%23119-86,+Bogot%C3%A1/@4.616599,-74.0652613,14z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e3f9b93e0725795:0xfe6c4c0368ca6a74!2m2!1d-74.0426878!2d4.7004318?entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D">
                                        Cómo llegar <ArrowTopRightOnSquareIcon className="size-3.5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-2">
                            <a className="w-10 h-10 rounded-full border border-[#41392a] flex items-center justify-center text-[#bfb29c] hover:bg-primary hover:text-black hover:border-primary transition-all" href="https://www.instagram.com/the_brothers_inc/" target="_blank">
                                {/* Instagram */}
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 014.121 3.13c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fillRule="evenodd"></path></svg>
                            </a>
                            <a className="w-10 h-10 rounded-full border border-[#41392a] flex items-center justify-center text-[#bfb29c] hover:bg-primary hover:text-black hover:border-primary transition-all" href="https://www.youtube.com/channel/UCGY-Ra7Tc9jeV9y-3ZlvpjQ" target="_blank">
                                {/* YouTube */}
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.419-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418zM15.194 12 10 15V9l5.194 3z" fillRule="evenodd"></path></svg>
                            </a>
                            <a className="w-10 h-10 rounded-full border border-[#41392a] flex items-center justify-center text-[#bfb29c] hover:bg-primary hover:text-black hover:border-primary transition-all" href="https://open.spotify.com/intl-es/artist/5DYUR8E1x1miisiVV49oSU?si=nPTu84B5QryGbl4QjyNsSQ" target="_blank">
                                <MusicalNoteIcon className="size-5" />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Navigation Links (Span 3) */}
                    <div className="md:col-span-3 pt-2">
                        <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Explorar</h4>
                        <ul className="flex flex-col gap-4">
                            <li><a className="text-[#bfb29c] hover:text-primary transition-colors text-sm" href="#">Tienda de Beats</a></li>
                            <li><a className="text-[#bfb29c] hover:text-primary transition-colors text-sm" href="#">Producción de Video</a></li>
                            <li><a className="text-[#bfb29c] hover:text-primary transition-colors text-sm" href="#">Roster de Artistas</a></li>
                            <li><a className="text-[#bfb29c] hover:text-primary transition-colors text-sm" href="#">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Newsletter (Span 4) */}
                    <div className="md:col-span-4 bg-[#1e1a14] rounded-xl p-6 border border-[#41392a] flex flex-col gap-4 relative overflow-hidden">
                        {/* Decorative gradient background for box */}
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none"></div>
                        <div>
                            <h4 className="text-white font-bold text-lg mb-1">Beat Exclusivo 🎹</h4>
                            <p className="text-[#bfb29c] text-xs leading-relaxed">Únete al círculo interno. Suscríbete ahora y recibe un pack de beats exclusivo al instante.</p>
                        </div>
                        <form className="flex flex-col gap-3 mt-2">
                            <input className="w-full bg-black/40 border border-[#41392a] text-white text-sm rounded-lg h-10 px-3 focus:border-primary focus:ring-0 placeholder-[#bfb29c]/50" placeholder="productor@ejemplo.com" type="email" />
                            <button className="w-full h-10 bg-white hover:bg-primary text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-colors">
                                Suscribirse
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-[#41392a] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[#bfb29c]/50 text-xs">© 2024 The Brothers Inc. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a className="text-[#bfb29c]/50 hover:text-white text-xs transition-colors" href="#">Política de Privacidad</a>
                        <a className="text-[#bfb29c]/50 hover:text-white text-xs transition-colors" href="#">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
