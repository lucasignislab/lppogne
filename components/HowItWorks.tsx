'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Crie sua conta',
    description: 'Em menos de 2 minutos, você cria sua conta e acessa o painel da Ratoeira. Sem cartão de crédito, sem compromisso.',
    icon: CheckCircle
  },
  {
    step: '02',
    title: 'Conecte suas plataformas',
    description: 'Integre Hotmart, Eduzz, Kiwify e mais de 70 plataformas de checkout e afiliados em poucos cliques.',
    icon: CheckCircle
  },
  {
    step: '03',
    title: 'Comece a blindar',
    description: 'A Ratoeira começa a bloquear fraudes e rastrear conversões automaticamente. Você só precisa escalar.',
    icon: CheckCircle
  }
];

export default function HowItWorks() {
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
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em 3 passos simples, você começa a blindar sua operação de Google Ads
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100 hover:border-emerald-200 transition-all duration-300 h-full">
                <div className="text-6xl font-bold text-emerald-100 mb-4">
                  {item.step}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-emerald-500" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
