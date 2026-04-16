'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Eye, ShieldAlert } from 'lucide-react';
import Card from './Card';

const problems = [
  {
    icon: Bot,
    title: 'Até 40% do seu tráfego não é humano',
    description: 'Bots e concorrentes clicam nos seus anúncios, drenam seu orçamento e ensinam o algoritmo a buscar pessoas que nunca vão comprar',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    icon: Eye,
    title: '60-75% das conversões não são rastreadas',
    description: 'Você está escalando com base em dados incompletos. Vendas reais somem do painel e você não sabe qual anúncio realmente performa',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    icon: ShieldAlert,
    title: 'Uma suspensão pode encerrar sua operação',
    description: 'Cliques inválidos podem gerar suspensão da conta, perdendo todo o histórico, pixel inteligência e meses de aprendizado',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  }
];

export default function Problems() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sua Escala Está <span className="text-red-500">Travada</span> e Você Nem Percebe
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estes são os 3 principais obstáculos que estão impedindo você de escalar suas vendas no Google Ads
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 hover:border-red-200 transition-colors duration-300">
                <div className={`${problem.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}>
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
