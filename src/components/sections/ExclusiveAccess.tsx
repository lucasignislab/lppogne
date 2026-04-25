"use client";

import { motion } from "framer-motion";
import { LockKeyhole, BadgeCheck, Sparkles, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { AnimatedItem, AnimatedSection } from "../ui/AnimatedSection";
import { openLeadCaptureModal } from "../ui/LeadCaptureModal";

const exclusivityPoints = [
  "Condição especial negociada entre a Ratoeira Ads e o Michael Pogne.",
  "Disponível apenas para alunos dele, dentro desta parceria.",
  "Plano exclusivo com recursos para rastrear, proteger e escalar com segurança.",
];

export const ExclusiveAccess = () => {
  return (
    <section className="py-24 bg-background text-foreground overflow-hidden">
      <Container>
        <AnimatedSection className="max-w-4xl mx-auto text-center" stagger={0.1}>
          <AnimatedItem className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-6 border border-primary/20">
            <LockKeyhole className="w-3 h-3" />
            Acesso Exclusivo Da Parceria
          </AnimatedItem>

          <AnimatedItem>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Esse plano você encontra <span className="text-primary italic">só aqui</span>.
            </h2>
          </AnimatedItem>

          <AnimatedItem className="text-muted-foreground text-lg max-w-3xl mx-auto mt-6">
            Fora desta página, você não consegue essa mesma condição. Esta oferta foi criada
            para os alunos do Michael Pogne que querem proteger orçamento e manter escala com
            dados confiáveis desde o início.
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto mt-12" stagger={0.08} delay={0.05}>
          <AnimatedItem>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="rounded-3xl border border-border bg-card p-8 md:p-10 modern-shadow"
            >
              <ul className="space-y-4">
                {exclusivityPoints.map((point) => (
                  <motion.li
                    key={point}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="flex items-start gap-3 text-base text-foreground/90"
                  >
                    <BadgeCheck className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                type="button"
                onClick={openLeadCaptureModal}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
                className="mt-8 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#EAB308] text-[#111111] px-8 py-4 rounded-full font-black text-sm uppercase tracking-wide hover:bg-[#d4a107]"
              >
                Garantir Meu Acesso
                <Sparkles className="w-4 h-4" />
              </motion.button>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-[11px] font-black uppercase tracking-wide">
                <ShieldCheck className="w-3.5 h-3.5" />
                Garantia de 7 dias
              </div>
            </motion.div>
          </AnimatedItem>
        </AnimatedSection>
      </Container>
    </section>
  );
};
