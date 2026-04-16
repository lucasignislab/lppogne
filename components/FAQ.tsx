'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Card from './Card';

const faqs = [
  {
    question: 'Como funciona o teste grátis?',
    answer: 'Você tem 14 dias para testar todas as funcionalidades da Ratoeira. Sem cartão de crédito, sem compromisso. Se gostar, escolha um plano. Se não, simplesmente cancele.'
  },
  {
    question: 'Quais plataformas posso integrar?',
    answer: 'Integramos mais de 70 plataformas, incluindo Hotmart, Eduzz, Kiwify, Monetizze, ClickBank e muitas outras. Também oferecemos API para integrações customizadas.'
  },
  {
    question: 'Preciso de conhecimento técnico?',
    answer: 'Não! Nossa plataforma é intuitiva e fácil de usar. Setup em menos de 2 minutos. Nossa equipe de suporte está disponível 7 dias por semana para ajudar você.'
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Sim! Você pode cancelar a qualquer momento sem multas ou taxas ocultas. Não temos contratos de fidelidade.'
  },
  {
    question: 'Como funciona o suporte?',
    answer: 'Oferecemos suporte 7 dias por semana via chat e WhatsApp. Planos Pro e Enterprise têm suporte prioritário com tempo de resposta menor.'
  },
  {
    question: 'Qual garantia vocês oferecem?',
    answer: 'Garantimos 100% de satisfação. Se você não estiver satisfeito com a Ratoeira, devolvemos seu dinheiro em até 7 dias após o pagamento.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            Dúvidas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo o que você precisa saber para começar a blindar sua escala hoje mesmo
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="border-2 hover:border-emerald-200 transition-colors">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between p-6"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Ainda tem alguma dúvida?
          </p>
          <a
            href="https://wa.me/seu-numero"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold"
          >
            Fale com nosso suporte via WhatsApp
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
