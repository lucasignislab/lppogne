'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target } from 'lucide-react';
import Card from './Card';

export default function CaseStudy() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <span className="text-4xl font-bold">MP</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Michael Pogne</h3>
                      <p className="text-amber-100">Fundador do Método PNG</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-lg leading-relaxed mb-6 text-white/90">
                    &ldquo;Antes da Ratoeira, eu estava gastando muito com cliques que não convertiam. Agora, cada centavo do meu orçamento vai para tráfego real. Escalar no mercado internacional ficou muito mais seguro.&rdquo;
                  </blockquote>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-amber-500" />
                  <span className="font-bold text-gray-900">Milhões em Dólar</span>
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
              Como o Michael Pogne Escalou <span className="gradient-text">Milhões em Faturamento</span> no Mercado Internacional
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Descubra como a união do método PNG com a tecnologia Ratoeira transformou a operação de Google Ads do Michael, permitindo escalar com segurança no mercado internacional.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <Card className="text-center">
                <Target className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">+30%</div>
                <div className="text-sm text-gray-600">Conversões Rastreadas</div>
              </Card>
              
              <Card className="text-center">
                <TrendingUp className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900 mb-1">4x</div>
                <div className="text-sm text-gray-600">ROI Médio</div>
              </Card>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">Antes vs Depois</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-gray-700">40% do orçamento desperdiçado em bots</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-gray-700">100% do orçamento focado em tráfego humano</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-gray-700">Visibilidade parcial das conversões</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-gray-700">Rastreamento de quase 100% das vendas</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
