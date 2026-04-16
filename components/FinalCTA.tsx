'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
import Button from './Button';

export default function FinalCTA() {
  const benefits = [
    {
      icon: CheckCircle,
      text: 'Sem cartão de crédito'
    },
    {
      icon: Shield,
      text: 'Setup em minutos'
    },
    {
      icon: Zap,
      text: 'Suporte 7 dias/semana'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500 to-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comece a Blindar Sua Operação <span className="text-amber-300">Hoje</span>
            </h2>
            
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Junte-se a mais de 10.000 afiliados que já estão protegendo suas operações de Google Ads e escalando com segurança no mercado internacional
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" className="text-lg bg-white text-emerald-600 hover:bg-emerald-50">
                Teste Grátis por 14 Dias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-100 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <benefit.icon className="w-5 h-5 text-amber-300" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-white/20">
              <p className="text-white/90 text-sm leading-relaxed">
                <strong className="text-white">Oferta especial da parceria PNG × Ratoeira Ads:</strong> Garanta seu acesso com as melhores condições de lançamento. Essa oferta é por tempo limitado.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
