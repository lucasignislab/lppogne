"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { CheckCircle2, MousePointerClick } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";

const features = [
  {
    tag: "RASTREAMENTO DE PRECISÃO",
    title: "Cada venda rastreada. Cada clique identificado.",
    description:
      "Identifica <span class='text-foreground font-black'>quase 100% das conversões</span> — inclusive as que o Google não registrou; Mostra qual clique, campanha e criativo gerou cada venda real; Permite usar Smart Bidding com <span class='text-foreground font-black'>dados limpos</span> para escalar com segurança",
    image:
      "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/tracking-de-conversoes-de-verdade.webp",
  },
  {
    tag: "BLINDAGEM ANTI-FRAUDE",
    title: "Bots e concorrentes bloqueados. Orçamento preservado.",
    description:
      "Detecta bots e cliques de concorrentes antes de atingirem seu anúncio; <span class='text-foreground font-black'>Bloqueia IPs fraudulentos automaticamente</span>, sem intervenção manual; Orçamento 100% direcionado a tráfego humano desde o primeiro dia",
    image:
      "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/BLOQUEIO-DE-RATOS-E-BOTS.webp",
  },
  {
    tag: "VISÃO CONSOLIDADA",
    title: "Todas as métricas que importam. Uma tela só.",
    description:
      "Chega de abrir 4 plataformas para saber se está no lucro. <span class='text-foreground font-black'>Margem real, ROI, CPA e caixa</span> em um painel feito para quem anuncia no Google.",
    image:
      "https://ratoeiraadsoficial.com.br/wp-content/uploads/2026/01/UM-DASHBOARD-INCRIVEL.webp",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#f7f4f4] overflow-hidden">
      <Container>
        <AnimatedSection className="text-center max-w-5xl mx-auto mb-20" stagger={0.1}>
          <AnimatedItem className="inline-block px-4 py-1 bg-primary/10 text-primary font-black text-xs tracking-widest rounded-full mb-6">
            A PRIMEIRA E MAIS COMPLETA FERRAMENTA BRASILEIRA PARA GOOGLE ADS
          </AnimatedItem>
          <AnimatedItem>
            <h2 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.2] md:leading-[1.15]">
              A única ferramenta brasileira <br />
              que rastreia, <span className="text-primary">protege</span> e dá visão <br />
              <span className="whitespace-nowrap">total da sua operação no Google Ads.</span>
            </h2>
          </AnimatedItem>
        </AnimatedSection>

        <div className="space-y-20">
          {features.map((feature, i) => (
            <AnimatedSection
              key={i}
              className={`flex flex-col ${i % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-24`}
              stagger={0.2}
            >
              <AnimatedItem className="flex-1 text-left flex flex-col items-start">
                <span className="text-xs font-black text-gray-400 tracking-[0.3em] uppercase mb-4 block">
                  {feature.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tighter uppercase">
                  {feature.title}
                </h3>
                <div className="space-y-4">
                  {feature.description.split(";").map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 items-start justify-start">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-1" size={20} />
                      <p
                        className="text-lg text-gray-600 font-medium text-left"
                        dangerouslySetInnerHTML={{ __html: bullet.trim() }}
                      />
                    </div>
                  ))}
                </div>
              </AnimatedItem>

              <AnimatedItem className="flex-1 relative">
                <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl -z-10" />
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-2xl modern-shadow border-4 border-white"
                />
              </AnimatedItem>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedItem className="text-center mt-20">
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="inline-flex items-center rounded-full bg-[#EAB308] text-[#111111] px-8 py-4 font-bold transition-all hover:bg-[#d4a107]"
          >
            <span>Garantir Meu Acesso</span>
            <MousePointerClick className="ml-2" />
          </motion.a>
        </AnimatedItem>
      </Container>
    </section>
  );
};
