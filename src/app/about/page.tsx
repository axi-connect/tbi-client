import { Navbar } from "@/shared/components/layout/Navbar";
import { Footer } from "@/shared/components/layout/Footer";
import { HeroAbout } from "@/modules/about/components/HeroAbout";
import { WhySection } from "@/modules/about/components/WhySection";
import { CauseSection } from "@/modules/about/components/CauseSection";
import { PurposeSection } from "@/modules/about/components/PurposeSection";
import { WhatWeAreSection } from "@/modules/about/components/WhatWeAreSection";
import { CommunitySection } from "@/modules/about/components/CommunitySection";
import { ObjectivesSection } from "@/modules/about/components/ObjectivesSection";
import { MissionVisionSection } from "@/modules/about/components/MissionVisionSection";

export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-background-dark text-white selection:bg-primary selection:text-black">
            <Navbar />

            <HeroAbout />

            <div className="relative">
                {/* Light Leaks / Transitions */}
                <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-b from-background-dark to-transparent z-20 pointer-events-none"></div>

                <CauseSection />

                <PurposeSection />

                <WhatWeAreSection />

                <MissionVisionSection />

                <ObjectivesSection />

                <CommunitySection />

                <WhySection />
            </div>

            <Footer />
        </main>
    );
};