'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, Zap, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: '+',
    label: 'Afiliados Protegidos',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50'
  },
  {
    icon: DollarSign,
    value: 2,
    prefix: 'R$ ',
    suffix: 'M+',
    label: 'Recuperados da Fraude/mês',
    color: 'text-amber-500',
    bgColor: 'bg-amber-50'
  },
  {
    icon: Zap,
    value: 70,
    suffix: '+',
    label: 'Plataformas Integradas',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    icon: TrendingUp,
    value: 30,
    suffix: '%',
    label: 'Mais Conversões Rastreadas',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  }
];

export default function Numbers() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) => {
        const newCounts = prev.map((count, index) => {
          const target = stats[index].value;
          const increment = target / steps;
          return Math.min(count + increment, target);
        });

        if (newCounts.every((count, index) => count >= stats[index].value)) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-500 to-emerald-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Resultados que Aparecem no Extrato
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Não é sobre software. É sobre o dinheiro que sobra no caixa quando você para de perder para fraude e rastreamento incompleto.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`${stat.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.prefix}
                  {Math.round(counts[index])}
                  {stat.suffix}
                </div>
                
                <div className="text-emerald-100 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
