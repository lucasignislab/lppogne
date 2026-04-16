'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Zap, Globe } from 'lucide-react';

export default function Solution() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <Handshake className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Parceria Exclusiva</h3>
                    <p className="text-emerald-100">PNG × Ratoeira Ads</p>
                  </div>
                </div>
                
                <blockquote className="text-lg leading-relaxed mb-6 text-white/90">
                  &ldquo;A Ratoeira me deu visibilidade total sobre minha operação. Agora sei exatamente qual anúncio está performando e posso escalar com segurança no mercado internacional.&rdquo;
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                    MP
                  </div>
                  <div>
                    <div className="font-bold">Michael Pogne</div>
                    <div className="text-sm text-emerald-100">Especialista em Mercado Internacional</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quando a Experiência do PNG Encontra a <span className="gradient-text">Tecnologia da Ratoeira</span>
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Michael Pogne, especialista em vender para o exterior ganhando em dólar, uniu forças com a Ratoeira Ads para criar o ecossistema definitivo de proteção e rastreamento para Google Ads.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Método PNG: Estratégias comprovadas para vender no mercado internacional</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Ratoeira Ads: Tecnologia brasileira de blindagem e rastreamento</p>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">Resultados combinados: Proteção + Estratégia = Escala segura</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
