'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import Card from './Card';
import Button from './Button';

const plans = [
  {
    name: 'Starter',
    price: 'R$97',
    period: '/mês',
    description: 'Para quem está começando',
    features: [
      'Rastreamento de conversões',
      'Blindagem anti-fraude básica',
      'Dashboard em tempo real',
      'Suporte por email',
      '2 plataformas integradas'
    ],
    recommended: false,
    cta: 'Começar Agora'
  },
  {
    name: 'Pro',
    price: 'R$197',
    period: '/mês',
    description: 'Para quem quer escalar',
    features: [
      'Tudo do Starter',
      'Blindagem anti-fraude avançada',
      'Rastreamento 100% das conversões',
      'Suporte prioritário',
      '10 plataformas integradas',
      'Relatórios personalizados',
      'API de integração'
    ],
    recommended: true,
    cta: 'Teste Grátis 14 Dias'
  },
  {
    name: 'Enterprise',
    price: 'Consulte',
    period: '',
    description: 'Para grandes operações',
    features: [
      'Tudo do Pro',
      'Blindagem enterprise',
      'Rastreamento ilimitado',
      'Gerente de conta dedicado',
      'Plataformas ilimitadas',
      'Integrações customizadas',
      'SLA garantido',
      'Treinamento da equipe'
    ],
    recommended: false,
    cta: 'Falar com Consultor'
  }
];

export default function Pricing() {
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
            Escolha Seu Nível de <span className="gradient-text">Proteção</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferta especial da parceria PNG × Ratoeira Ads. Cancele quando quiser.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.recommended ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <Card className={`h-full border-2 ${plan.recommended ? 'border-emerald-500 shadow-2xl' : 'border-gray-100'}`}>
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-white" />
                      Recomendado
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500 pb-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.recommended ? 'primary' : 'outline'}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
