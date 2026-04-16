'use client';

import { ArrowRight, CheckCircle2, Shield, Target, TrendingUp, Zap } from 'lucide-react';

const METRICS = [
  { value: '+10.000', label: 'Afiliados protegidos' },
  { value: 'R$2M+', label: 'Recuperados da fraude/mês' },
  { value: '70+', label: 'Plataformas integradas' },
];

export default function GlassmorphismTrustHero() {
  return (
    <section className="relative overflow-hidden bg-zinc-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.25),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.18),_transparent_35%)]" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-emerald-200 backdrop-blur">
              <Shield className="h-4 w-4" />
              Parceria Oficial: Ratoeira Ads + Michael Pogne
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Blindagem e Escala no
              <span className="block bg-gradient-to-r from-emerald-300 via-white to-amber-300 bg-clip-text text-transparent">
                Google Ads Internacional
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-300">
              Proteja seu orçamento contra bots, rastreie quase 100% das vendas e use dados limpos para escalar com seguranca.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-white transition hover:bg-emerald-400">
                Ativar Teste Gratis de 14 Dias
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur transition hover:bg-white/15">
                Ver Demonstracao
              </button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-zinc-200 sm:grid-cols-3">
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                Sem cartao de credito
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur">
                <Zap className="h-4 w-4 text-amber-300" />
                Setup em poucos minutos
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 backdrop-blur">
                <TrendingUp className="h-4 w-4 text-emerald-300" />
                Escala com dados reais
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-200">
                <Target className="h-3.5 w-3.5" />
                Dashboard de Performance
              </div>

              <div className="space-y-4">
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/15 bg-zinc-900/40 px-4 py-3"
                  >
                    <div className="text-2xl font-bold">{metric.value}</div>
                    <div className="text-sm text-zinc-300">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/15 bg-zinc-900/40 p-4">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-zinc-300">Rastreamento de conversoes</span>
                  <span className="font-semibold text-emerald-300">98%</span>
                </div>
                <div className="h-2 rounded-full bg-zinc-700/60">
                  <div className="h-2 w-[98%] rounded-full bg-gradient-to-r from-emerald-400 to-amber-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
