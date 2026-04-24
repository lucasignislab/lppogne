import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import ChainCarouselSection from "@/components/sections/ChainCarousel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { PainPoints } from "@/components/sections/PainPoints";
import { Pricing } from "@/components/sections/Pricing";

import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Home() {
  return (
    <div className="relative w-full bg-black min-h-screen font-sans overflow-x-hidden">
      <main className="relative z-10 w-full bg-white flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-b-[40px] md:rounded-b-[80px] overflow-hidden mb-[86vh]">
        <Header />
        <Hero />
        <Integrations />
        <Pricing />
        <HowItWorks />
        <Features />
        <PainPoints />
        <ChainCarouselSection />
      </main>

      <CinematicFooter />
    </div>
  );
}
