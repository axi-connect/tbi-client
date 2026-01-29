import { Hero } from "@/modules/home/components/Hero";
import { Navbar } from "@/shared/components/layout/Navbar";
import { FloatingDock } from "@/shared/components/layout/FloatingDock";
import { MiniPlayer } from "@/shared/components/features/player/presentation/components/MiniPlayer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FloatingDock />
      <MiniPlayer />
    </>
  );
}
