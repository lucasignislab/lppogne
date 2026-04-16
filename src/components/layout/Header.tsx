"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-10">
            {/* Partnership Branding */}
            <a href="/" className="flex items-center gap-3 font-bold text-lg tracking-tighter">
              <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary" />
              </div>
              <span>
                Ratoeira<span className="text-primary italic">Ads</span>
              </span>
              <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                × Método PNG
              </span>
            </a>
            
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
              <a href="#how-it-works" className="hover:text-foreground transition-colors">Como Funciona</a>
              <a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a>
              <a href="#pricing" className="hover:text-foreground transition-colors">Plano Exclusivo</a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="bg-foreground text-background btn-pill text-sm font-bold modern-shadow hover:bg-black/90">
              Quero Minha Vaga
            </button>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};
