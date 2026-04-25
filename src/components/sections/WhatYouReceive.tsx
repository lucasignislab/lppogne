"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "../ui/Container";
import { AnimatedItem, AnimatedSection } from "../ui/AnimatedSection";

const columns = [
  {
    title: "Rastreamento e Conversão",
    items: [
      "Rastreamento de vendas 100% automático",
      "Cada venda rastreada. Cada clique identificado.",
      "Identifica quase 100% das conversões",
      "Marcação automática de checkout",
      "Exportação de dados de conversão",
    ],
  },
  {
    title: "Inteligência e Estratégia",
    items: [
      "Dashboard com ROI e CPA em tempo real",
      "Dashboard Financeiro",
      "Visão consolidada em uma tela só",
      "Dados limpos para escalar com segurança",
      "Integração com +70 plataformas de afiliados",
    ],
  },
  {
    title: "Proteção e Segurança",
    items: [
      "Bloqueio de bots e cliques fraudulentos",
      "Bloqueia IPs fraudulentos automaticamente",
      "Blindagem anti-fraude para o orçamento",
      "Orçamento direcionado a tráfego humano",
      "Proteção desde o primeiro dia",
    ],
  },
];

export const WhatYouReceive = () => {
  return (
    <section className="py-24 bg-foreground text-background">
      <Container>
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-14" stagger={0.08}>
          <AnimatedItem>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
              O que você <span className="text-primary italic">recebe</span>
            </h2>
          </AnimatedItem>
          <AnimatedItem>
            <p className="text-background/60 mt-3 text-sm md:text-base">
              Recursos já presentes no projeto para rastrear, proteger e escalar suas campanhas.
            </p>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" stagger={0.12} delay={0.05}>
          {columns.map((column) => (
            <AnimatedItem key={column.title}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="rounded-2xl border border-background/10 bg-background/5 p-6 h-full"
              >
                <h3 className="text-base md:text-lg font-black mb-5">{column.title}</h3>
                <ul className="space-y-3">
                  {column.items.map((item) => (
                    <motion.li
                      key={item}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="flex items-start gap-2.5 text-sm text-background/80"
                    >
                      <Check className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
};
