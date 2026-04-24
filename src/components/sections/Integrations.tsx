"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";

export const Integrations = () => {
  return (
    <section className="py-12 bg-white border-y border-border/50">
      <Container>
        <AnimatedSection className="flex flex-col items-center text-center" stagger={0.2}>
          <AnimatedItem className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Conectado à plataforma que os maiores afiliados já usam:
          </AnimatedItem>
          
          <div className="flex items-center justify-center mb-12">
            <AnimatedItem className="flex flex-col items-center gap-3">
              <div className="relative w-64 h-32 sm:w-[400px] sm:h-[150px]">
                <Image 
                  src="/google-ads-logo.svg" 
                  alt="Google Ads" 
                  fill 
                  className="object-contain" 
                  priority
                />
              </div>
            </AnimatedItem>
          </div>

          <AnimatedItem className="space-y-2">
            <h3 className="text-xl sm:text-2xl font-black text-[#0f0e0e]">
              +10.000 Afiliados Protegidos e Rastreando
            </h3>
            <p className="text-sm font-medium text-muted-foreground max-w-xl mx-auto">
              Mais de R$ 2M em orçamento recuperado da fraude e vendas rastreadas todo mês.
            </p>
          </AnimatedItem>
        </AnimatedSection>
      </Container>
    </section>
  );
};
