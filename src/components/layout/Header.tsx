"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#e8e8e8] backdrop-blur-md border-b border-border/40"
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20 relative">
          {/* Partnership Branding */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logoraads.png" 
              alt="Ratoeira Ads × Método PNG" 
              width={280}
              height={56}
              className="h-8 sm:h-10 lg:h-12 w-auto object-contain"
              priority
            />
          </Link>
          
          {/* Centered Navigation */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#how-it-works" className="hover:text-foreground transition-colors">Como Funciona</a>
            <a href="#features" className="hover:text-foreground transition-colors">Funcionalidades</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Plano Exclusivo</a>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-4 z-10">
            <button className="bg-[#EAB308] text-[#111111] rounded-full px-4 py-2 sm:px-8 sm:py-4 text-xs sm:text-sm font-bold modern-shadow hover:bg-[#d4a107] whitespace-nowrap">
              Quero Minha Vaga
            </button>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};
