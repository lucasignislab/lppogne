"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Play } from "lucide-react";
import Image from "next/image";

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#0f0e0e] overflow-hidden text-white">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary mb-6"
          >
            A Tecnologia por trás do Lucro
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-6"
          >
            Veja como a <span className="text-primary italic">Ratoeira</span> protege seu capital
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/60 text-lg max-w-2xl mx-auto"
          >
            Uma demonstração rápida de como nossa blindagem inteligente identifica e bloqueia 
            cliques fraudulentos antes que eles consumam seu orçamento.
          </motion.p>
        </div>

        {/* Browser Mockup / Video Player */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Browser Header */}
          <div className="bg-zinc-800 rounded-t-2xl px-4 py-3 flex items-center gap-2 border border-white/10 border-b-0">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
            </div>
            <div className="mx-auto bg-black/20 rounded-full px-4 py-1 text-[10px] font-medium text-zinc-500 border border-white/5 w-1/3 text-center">
              app.ratoeiraads.com.br
            </div>
          </div>

          {/* Video Container */}
          <div className="relative aspect-video bg-zinc-900 rounded-b-2xl overflow-hidden shadow-2xl border border-white/10 group cursor-pointer">
            <Image 
              src="/video-cover.png" 
              alt="Dashboard Ratoeira Ads" 
              fill
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </motion.div>
            </div>

            {/* Decorative Stats Overlay */}
            <div className="absolute bottom-6 left-6 right-6 hidden md:flex justify-between items-end pointer-events-none">
              <div className="glass-card p-4 rounded-xl translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 border-white/10">
                <p className="text-[10px] font-bold uppercase text-white/40 mb-1">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-xs font-bold text-white">Monitoramento Ativo</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Glow */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-4/5 h-24 bg-primary/20 blur-[100px] pointer-events-none" />
        </motion.div>
      </Container>
    </section>
  );
};
