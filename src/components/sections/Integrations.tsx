"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const Integrations = () => {
  return (
    <section className="py-12 bg-white border-y border-border/50">
      <Container>
        <div className="flex flex-col items-center text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-10">
            Conectado à plataforma que os maiores afiliados já usam:
          </p>
          
          <div className="flex items-center justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                {/* Google Ads Icon SVG */}
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <path fill="#4285F4" d="M35.6 2c-3.1 0-5.8 2.5-5.8 5.6v23.2c0 3.1 2.6 5.6 5.8 5.6s5.8-2.5 5.8-5.6V7.6C41.4 4.5 38.8 2 35.6 2z"/>
                  <path fill="#FBBC05" d="M15.4 12.6L2.6 34.8c-1.5 2.7-.6 6.1 2.1 7.6 2.7 1.5 6.1.6 7.6-2.1l12.8-22.2c1.5-2.7.6-6.1-2.1-7.6-2.7-1.5-6.1-.6-7.6 2.1z"/>
                  <path fill="#34A853" d="M12.4 34.8c-1.5 2.7.6 6.1 2.1 7.6 2.7 1.5 6.1.6 7.6-2.1l1.4-2.4-1.2-1.2-9.9-1.9z"/>
                </svg>
              </div>
              <span className="font-bold text-sm tracking-tight text-[#0f0e0e]">Google Ads</span>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-2"
          >
            <h3 className="text-xl sm:text-2xl font-black text-[#0f0e0e]">
              +10.000 Afiliados Protegidos e Rastreando
            </h3>
            <p className="text-sm font-medium text-muted-foreground max-w-xl mx-auto">
              Mais de R$ 2M em orçamento recuperado da fraude e vendas rastreadas todo mês.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
