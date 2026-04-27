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
      <main className="relative z-10 w-full bg-white flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
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

      <a
        href="https://wa.me/5519997278153"
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-[110] transition-transform hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-14 w-14 drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
          fill="#25D366"
        >
          <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.75.46 3.46 1.34 4.97L2 22l5.29-1.38a9.84 9.84 0 0 0 4.75 1.22h.01c5.46 0 9.89-4.43 9.89-9.89A9.9 9.9 0 0 0 12.04 2Zm0 18.1h-.01a8.17 8.17 0 0 1-4.16-1.14l-.3-.18-3.14.82.84-3.06-.2-.32a8.16 8.16 0 0 1-1.26-4.33c0-4.49 3.65-8.14 8.15-8.14a8.15 8.15 0 0 1 8.14 8.14 8.16 8.16 0 0 1-8.06 8.21Zm4.47-6.13c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.92-1.17-.71-.63-1.19-1.4-1.33-1.64-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.48-.4-.41-.54-.42l-.46-.01c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.17.86 2.31.98 2.47.12.16 1.68 2.56 4.07 3.59.57.24 1.01.38 1.36.49.57.18 1.08.15 1.48.09.45-.07 1.43-.58 1.63-1.14.2-.56.2-1.03.14-1.14-.06-.11-.22-.17-.46-.29Z" />
        </svg>
      </a>
    </div>
  );
}
