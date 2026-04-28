"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Check, ShieldCheck } from "lucide-react";
import { openLeadCaptureModal } from "../ui/LeadCaptureModal";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-10 md:py-12 lg:py-14 bg-[#0f0e0e] text-white overflow-hidden">
      <Container>
        <div className="text-center mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-4"
          >
            <ShieldCheck className="w-3 h-3" />
            Oferta Exclusiva Alunos Método PNG
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black tracking-tight mb-3"
          >
            Seu Plano <span className="text-primary italic">Exclusivo</span>
          </motion.h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Condição especial negociada entre a Ratoeira Ads e o Michael Pogne, 
            disponível apenas para alunos dele!
          </p>
        </div>

        {/* Single Plan Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative overflow-hidden bg-white text-[#0f0e0e] p-6 md:p-8 rounded-3xl modern-shadow border border-black/10">
            <div className="text-center mb-6 pt-1">
              <h3 className="text-xl font-bold mb-1">Plano Aluno PNG</h3>
              <p className="text-sm font-black uppercase tracking-widest text-primary">35% OFF EXCLUSIVO</p>
            </div>

            {/* Price */}
            <div className="text-center mb-6 rounded-2xl bg-zinc-100 p-4 md:p-6">
              <p className="text-base text-muted-foreground line-through">De R$ 127, 00</p>
              <p className="text-3xl md:text-4xl font-black text-primary mt-1">por R$ 82,55/mês</p>
              <p className="text-xs font-bold text-muted-foreground mt-1">*com renovação automática</p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#EAB308]/40 bg-[#111111] text-[#EAB308] px-3 py-1 text-[11px] font-black uppercase tracking-wide shadow-[0_6px_18px_rgba(0,0,0,0.18)]">
                <ShieldCheck className="h-3.5 w-3.5 text-[#EAB308]" />
                Garantia de 7 dias
              </div>
            </div>

            <div className="mb-6 text-center">
              <h4 className="text-sm font-black uppercase tracking-widest mb-3 pt-4 border-t border-black/10">Limites do Plano</h4>
              <ul className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-2 text-sm md:grid-cols-2">
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />Ebook Mensal</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />Dashboard Financeiro</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />Bloquio automático de Bots e IPs</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />1 perfil Google Ads conectado</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />2 Tags Ratoeira automáticas</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />2 Plataformas/Webhooks simultâneos</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />2 Cobtas de anúncios conectadas</li>
                <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#EAB308] shrink-0" />Máximo 5 vendas/mês*</li>
              </ul>
              <p className="text-[11px] text-muted-foreground mt-3">
                *(após trackeamento para de funcionar)
              </p>
            </div>

            {/* CTA */}
            <button
              type="button"
              onClick={openLeadCaptureModal}
              className="w-full bg-[#EAB308] text-[#111111] btn-pill text-sm font-bold modern-shadow hover:bg-[#d4a107] flex items-center justify-center gap-2"
            >
              Garantir Meu Acesso
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
