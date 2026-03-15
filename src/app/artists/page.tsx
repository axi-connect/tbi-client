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

                {/* Experiencia inmersiva 360 — aparece antes del tour */}
                <Studio360Section />

                {/* Tour */}
                <StudioTourSection />
            </main>

            <Footer />
        </div>
    );
}
