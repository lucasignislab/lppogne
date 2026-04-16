"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { ShieldCheck, Zap, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Blindagem Avançada",
    description: "Algoritmos que filtram bots e cliques inválidos em tempo real.",
  },
  {
    icon: BarChart3,
    title: "Métricas de ROI",
    description: "Acompanhe exatamente quanto você economiza em cada campanha.",
  },
  {
    icon: Users,
    title: "Filtro de Audiência",
    description: "Garanta que apenas humanos reais acessem seu checkout.",
  },
  {
    icon: Zap,
    title: "Setup em 1 Clique",
    description: "Sem configurações complexas. Ative e comece a economizar.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tight mb-4"
          >
            Funcionalidades que Fazem a <span className="text-primary italic">Diferença</span>
          </motion.h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma suíte completa de ferramentas desenhadas para proteger seu capital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-[#f7f4f4] hover:bg-white hover:modern-shadow border border-transparent hover:border-border transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
