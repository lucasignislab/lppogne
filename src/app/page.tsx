import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Integrations } from "@/components/sections/Integrations";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Features } from "@/components/sections/Features";
import { Pricing } from "@/components/sections/Pricing";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Integrations />
      <HowItWorks />
      <Features />
      <Pricing />
      
      <footer className="py-20 border-t border-white/5 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="opacity-20 text-[10px] uppercase tracking-[1em] mb-4">
            Ratoeira Ads © 2025 • Todos os Direitos Reservados
          </div>
          <div className="text-[10px] text-muted-foreground font-mono">
            SISTEMA DE BLINDAGEM ATIVO
          </div>
        </div>
      </footer>
    </main>
  );
}
