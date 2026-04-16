'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users } from 'lucide-react';
import Button from './Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              +10.000 afiliados protegidos
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              A Parceria Que Vai <span className="gradient-text">Blindar Sua Operação</span> de Google Ads
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A união entre o método PNG do Michael Pogne e a tecnologia Ratoeira Ads para proteger seus anúncios e multiplicar seus lucros no mercado internacional
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="text-lg">
                Teste Grátis por 14 Dias
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                Saiba Mais
              </Button>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                Sem cartão de crédito
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-500" />
                Cancele quando quiser
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 shadow-2xl">
              <div className="absolute -top-4 -right-4 bg-amber-500 text-white rounded-2xl p-4 shadow-lg">
                <div className="text-3xl font-bold">R$2M+</div>
                <div className="text-xs">recuperados/mês</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Dashboard em Tempo Real</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">Conversões Rastreadas</span>
                    <span className="font-bold">+30%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">Fraudes Bloqueadas</span>
                    <span className="font-bold">100%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-100">ROAS Médio</span>
                    <span className="font-bold">4x</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center text-white font-bold">
                  MP
                </div>
                <div>
                  <div className="font-bold text-gray-900">Michael Pogne</div>
                  <div className="text-sm text-gray-500">Fundador do Método PNG</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
