"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40"
    >
      <Container>
        <div className="flex items-center justify-between h-20 relative">
          {/* Partnership Branding */}
          <a href="/" className="flex items-center">
            <Image 
              src="/logoraads.png" 
              alt="Ratoeira Ads × Método PNG" 
              width={280}
              height={56}
              className="h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </a>
          
          {/* Centered Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Plano Exclusivo</a>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-4 z-10">
            <button className="bg-foreground text-background btn-pill text-sm font-bold modern-shadow hover:bg-black/90">
              Quero Minha Vaga
            </button>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};
