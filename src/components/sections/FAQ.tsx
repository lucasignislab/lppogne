"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "../ui/Container";
import { AnimatedItem, AnimatedSection } from "../ui/AnimatedSection";

const faqItems = [
  {
    question: "Esse plano é realmente exclusivo para alunos do Michael Pogne?",
    answer:
      "Sim. Essa condição foi negociada entre a Ratoeira Ads e o Michael Pogne e está disponível apenas para alunos dele nesta página.",
  },
  {
    question: "Em quanto tempo consigo configurar e começar a usar?",
    answer:
      "A configuração é rápida. A proposta é conexão em minutos, com integrações prontas para você começar o rastreamento sem retrabalho.",
  },
  {
    question: "Quais plataformas e checkouts são compatíveis?",
    answer:
      "A Ratoeira conecta seus checkouts, plataformas de afiliados e redes em um único fluxo, incluindo as integrações já apresentadas na seção de +70 plataformas.",
  },
  {
    question: "O plano inclui proteção contra cliques inválidos e bots?",
    answer:
      "Inclui sim. O foco do plano é blindagem anti-fraude, com bloqueio automático e dados mais limpos para proteger orçamento e escalar com mais segurança.",
  },
  {
    question: "Existe garantia?",
    answer:
      "Sim. Você conta com Garantia de 7 dias, destacada nas seções de oferta para dar mais segurança na sua decisão.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 bg-[#f7f4f4] text-foreground">
      <Container>
        <AnimatedSection className="max-w-4xl mx-auto text-center mb-12" stagger={0.1}>
          <AnimatedItem className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-6 border border-primary/20">
            Perguntas Frequentes
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">
              Tire suas dúvidas antes de <span className="text-primary italic">garantir acesso</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <AnimatedSection className="max-w-4xl mx-auto space-y-4" stagger={0.08}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <AnimatedItem key={item.question}>
                <motion.button
                  type="button"
                  onClick={() => handleToggle(index)}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="w-full text-left rounded-2xl border border-border bg-white p-5 md:p-6 modern-shadow"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base md:text-lg font-bold pr-2">{item.question}</h3>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                    </motion.span>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </AnimatedItem>
            );
          })}
        </AnimatedSection>
      </Container>
    </section>
  );
};
