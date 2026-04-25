import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import ChainCarouselSection from "@/components/sections/ChainCarousel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { PainPoints } from "@/components/sections/PainPoints";
import { Pricing } from "@/components/sections/Pricing";
import { WhatYouReceive } from "@/components/sections/WhatYouReceive";
import { ExclusiveAccess } from "@/components/sections/ExclusiveAccess";
import { FAQ } from "@/components/sections/FAQ";

import { CinematicFooter } from "@/components/ui/motion-footer";
import { LeadCaptureModal } from "@/components/ui/LeadCaptureModal";

export default function Home() {
  return (
    <div className="relative w-full bg-black min-h-screen font-sans overflow-x-hidden">
      <main className="relative z-10 w-full bg-white flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden mb-[86vh]">
        <Header />
        <Hero />
        <Integrations />
        <Pricing />
        <WhatYouReceive />
        <HowItWorks />
        <Features />
        <PainPoints />
        <ChainCarouselSection />
        <ExclusiveAccess />
        <FAQ />
      </main>

      <LeadCaptureModal />
      <CinematicFooter />
    </div>
  );
}
