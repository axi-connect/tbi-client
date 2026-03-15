import { Navbar } from "@/shared/components/layout/Navbar";
import { Footer } from "@/shared/components/layout/Footer";
import { Studio360Section } from "@/modules/artists/components/Studio360Section";
import { StudioTourSection } from "@/modules/artists/components/StudioTourSection";
import { ArtistRosterSection } from "@/modules/artists/components/ArtistRosterSection";

export default function ArtistsPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col pt-20">
            <Navbar />

            <main className="flex flex-col items-center w-full grow">
                <ArtistRosterSection />

                {/* Light Leak Transition */}
                <div
                    className="relative h-24 w-full pointer-events-none z-20 -mb-12 opacity-80 mix-blend-screen"
                    style={{
                        background: "linear-gradient(90deg, transparent 0%, rgba(191, 143, 59, 0.1) 45%, rgba(191, 143, 59, 0.2) 50%, rgba(191, 143, 59, 0.1) 55%, transparent 100%)",
                        backgroundSize: "200% 200%",
                        animation: "drift 8s ease infinite"
                    }}
                />

                {/* Experiencia inmersiva 360 — aparece antes del tour */}
                <Studio360Section />

                {/* Separador sutil entre secciones */}
                <div
                    className="w-full h-px opacity-10"
                    style={{ background: "linear-gradient(90deg, transparent, #BF8F3B, transparent)" }}
                />

                <StudioTourSection />
            </main>

            <Footer />
        </div>
    );
}
