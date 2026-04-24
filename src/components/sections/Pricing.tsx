"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Check, ShieldCheck, Zap } from "lucide-react";

const features = [
  "Rastreamento de vendas 100% automático",
  "Bloqueio de bots e cliques fraudulentos",
  "Dashboard com ROI e CPA em tempo real",
  "Integração com +70 plataformas de afiliados",
  "Setup em menos de 15 minutos",
  "Suporte dedicado para alunos PNG",
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-[#0f0e0e] text-white overflow-hidden">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-6"
          >
            <ShieldCheck className="w-3 h-3" />
            Oferta Exclusiva Alunos Método PNG
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4"
          >
            Seu Plano <span className="text-primary italic">Exclusivo</span>
          </motion.h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Condição especial negociada entre a Ratoeira Ads e o Michael Pogne, 
            disponível apenas para alunos do Método PNG.
          </p>
        </div>

        {/* Single Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto"
        >
          <div className="relative bg-white text-[#0f0e0e] p-10 md:p-14 rounded-3xl modern-shadow">
            {/* Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
              <Zap className="w-3 h-3" />
              Ratoeira Ads × Método PNG
            </span>

            <div className="text-center mb-8 pt-2">
              <h3 className="text-xl font-bold mb-1">Plano Aluno PNG</h3>
              <p className="text-sm text-muted-foreground">Tudo que você precisa para proteger e escalar</p>
            </div>

            {/* Price */}
            <div className="text-center mb-10">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-6xl font-black text-primary">—</span>
              </div>
              <p className="text-xs font-bold text-muted-foreground mt-2 uppercase tracking-widest">
                Preço a ser revelado em breve
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 text-sm"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  {feature}
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <button className="w-full bg-[#EAB308] text-[#111111] btn-pill text-sm font-bold modern-shadow hover:bg-[#d4a107] flex items-center justify-center gap-2">
              Garantir Meu Acesso
            </button>
            
            <p className="text-center text-[10px] text-muted-foreground mt-4">
              Disponível apenas para alunos verificados do Método PNG.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
