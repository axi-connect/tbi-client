import { Hero } from "@/modules/home/components/Hero";
import { Navbar } from "@/shared/components/layout/Navbar";
import { Footer } from "@/shared/components/layout/Footer";
import { FloatingDock } from "@/shared/components/layout/FloatingDock";
import { DiscographySection } from "@/modules/discography/presentation/components/discography_section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <DiscographySection />
      <Footer />
      <FloatingDock />
    </>
  );
}
