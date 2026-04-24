"use client";

import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import Image from "next/image";
import { AnimatedSection, AnimatedItem } from "../ui/AnimatedSection";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-background overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimatedSection className="relative z-10" stagger={0.15}>
            <AnimatedItem className="inline-flex items-center gap-2 px-3 py-1 bg-white modern-shadow rounded-full text-xs font-bold mb-8 border border-border/50">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Exclusivo para Alunos Método PNG
            </AnimatedItem>

            <AnimatedItem>
              <h1 className="text-5xl md:text-6xl lg:text-[4.2rem] font-black text-foreground leading-[1.05] tracking-tight mb-6">
                Comece no <br />
                Google Ads <br />
                com <span className="text-primary italic">blindagem</span> <br />
                <span className="whitespace-nowrap">desde o <span className="text-primary italic">dia zero</span>.</span>
              </h1>
            </AnimatedItem>

            <AnimatedItem className="text-muted-foreground text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-lg">
              A Ratoeira Ads e o Michael Pogne se uniram para dar a você, aluno do Método PNG, 
              acesso exclusivo à ferramenta que protege seu orçamento e rastreia cada venda.
            </AnimatedItem>

            {/* Capture Form */}
            <AnimatedItem className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="input-pill flex-grow modern-shadow text-sm"
              />
              <button className="bg-[#EAB308] text-[#111111] btn-pill text-sm font-bold modern-shadow hover:bg-[#d4a107] whitespace-nowrap">
                Garantir Meu Acesso
              </button>
            </AnimatedItem>
          </AnimatedSection>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] w-full"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden modern-shadow border-4 border-white">
              {/* Nota: Vou usar a imagem gerada. Como o caminho muda por causa do timestamp,
                  espero que o sistema resolva ou eu forneça o caminho exato se necessário.
                  Mas aqui usarei o padrão do projeto. */}
              <Image 
                src="/eitor&pogne.jpeg" 
                alt="Heitor & Michael Pogne" 
                fill 
                className="object-cover object-[center_40%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl max-w-[240px]"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-xs">98%</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Eficiência</p>
                  <p className="text-xs font-bold">Cliques Blindados</p>
                </div>
              </div>
              <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "98%" }}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
