'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, BarChart3 } from 'lucide-react';
import Card from './Card';

const benefits = [
  {
    icon: Target,
    title: 'Rastreamento de Precisão',
    description: 'Identifica quase 100% das conversões — inclusive as que o Google não registra. Mostra qual clique, campanha e criativo gerou cada venda real.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: Shield,
    title: 'Blindagem Anti-Fraude',
    description: 'Detecta bots e cliques de concorrentes antes de atingirem seu anúncio. Bloqueia IPs fraudulentos automaticamente, sem intervenção manual.',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    icon: BarChart3,
    title: 'Visão Consolidada',
    description: 'Chega de abrir 4 plataformas para saber se está no lucro. Margem real, ROI, CPA e caixa em um painel feito para quem anuncia no Google.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  }
];

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Três Módulos. <span className="gradient-text">Um Sistema.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Como a Ratoeira Trabalha por Você: rastreamento, proteção e visão funcionando juntos, em segundo plano
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl">
                <div className={`${benefit.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
