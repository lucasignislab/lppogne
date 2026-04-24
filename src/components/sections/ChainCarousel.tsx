"use client";

import ChainCarousel, { type ChainItem } from "@/components/ui/chain-carousel";
import {
  TrendingUp,
  CreditCard,
  ShoppingCart,
  DollarSign,
  Shield,
  Globe,
  Layers,
  Package,
  Smartphone,
  Activity,
  Database,
  Target,
  Zap,
  Share2,
  BarChart3,
} from "lucide-react";

const defaultItems: ChainItem[] = [
  { id: "hotmart", name: "Hotmart", icon: TrendingUp, details: "Infoprodutos", logo: "/logos/hotmart.jpg" },
  { id: "eduzz", name: "Eduzz", icon: CreditCard, details: "Checkout", logo: "/logos/Eduzz.png" },
  { id: "kiwify", name: "Kiwify", icon: ShoppingCart, details: "Infoprodutos & Checkout", logo: "/logos/kiwify.png" },
  { id: "monetizze", name: "Monetizze", icon: DollarSign, details: "Checkout Robusto", logo: "/logos/monetizze.png" },
  { id: "perfectpay", name: "PerfectPay", icon: Shield, details: "Pagamento", logo: "/logos/perfectpay.png" },
  { id: "clickbank", name: "ClickBank", icon: Globe, details: "Affiliate Network", logo: "/logos/clickbank.svg" },
  { id: "digistore", name: "Digistore24", icon: Layers, details: "Escala", logo: "/logos/digistore.png" },
  { id: "cartpanda", name: "CartPanda", icon: Package, details: "E-commerce", logo: "/logos/cartpanda.png" },
  { id: "ticto", name: "Ticto", icon: Smartphone, details: "Plataforma de Vendas", logo: "/logos/ticto.png" },
  { id: "everflow", name: "Everflow", icon: Activity, details: "Tracking", logo: "/logos/everflow.png" },
  { id: "jvzoo", name: "JVZoo", icon: Database, details: "Marketplace", logo: "/logos/jvzoo.png" },
  { id: "maxweb", name: "MaxWeb", icon: Target, details: "Ofertas", logo: "/logos/maxweb.png" },
  { id: "maxbounty", name: "MaxBounty", icon: Zap, details: "CPA", logo: "/logos/maxbounty.png" },
  { id: "offersify", name: "Offersify", icon: Share2, details: "Rede", logo: "/logos/offersify.png" },
  { id: "sellhealth", name: "SellHealth", icon: BarChart3, details: "Nutra", logo: "/logos/sellhealth.png" },
  { id: "adcombo", name: "AdCombo", icon: TrendingUp, details: "CPA", logo: "/logos/AdCombo-logo.png" },
  { id: "cpaomni", name: "CPAOMNI", icon: Target, details: "CPA", logo: "/logos/CPAOMNI.jpg" },
  { id: "coinzz", name: "Coinzz", icon: DollarSign, details: "Crypto", logo: "/logos/Coinzz.png" },
  { id: "digitalmguru", name: "Digital Manager Guru", icon: Database, details: "Gestão", logo: "/logos/DigitalManagerGuru.webp" },
  { id: "doppus", name: "Doppus", icon: CreditCard, details: "Checkout", logo: "/logos/Doppus.jpeg" },
  { id: "everad", name: "Everad", icon: Activity, details: "CPA", logo: "/logos/EverAd.png" },
  { id: "imperiumpay", name: "ImperiumPay", icon: Shield, details: "Pagamento", logo: "/logos/ImperiumPay.png" },
  { id: "kirvano", name: "Kirvano", icon: ShoppingCart, details: "Checkout", logo: "/logos/Kirvano.webp" },
  { id: "monadlead", name: "MonadLead", icon: Target, details: "Leads", logo: "/logos/MonadLead.jpeg" },
  { id: "netvork", name: "NetvŌrk", icon: Share2, details: "Rede", logo: "/logos/NetvŌrk.png" },
  { id: "shark", name: "SHARK Platform", icon: Zap, details: "CPA", logo: "/logos/SHARK-Platform-logo.png" },
  { id: "adexico", name: "Adexico", icon: Globe, details: "Rede", logo: "/logos/adexico_logo.jpg" },
  { id: "aff1", name: "Aff1", icon: TrendingUp, details: "Afiliados", logo: "/logos/aff1.png" },
  { id: "affbay", name: "AffBay", icon: Share2, details: "Rede", logo: "/logos/affbay.png" },
  { id: "ambalaya", name: "Ambalaya", icon: Globe, details: "CPA", logo: "/logos/ambalaya.jpeg" },
  { id: "appmax", name: "Appmax", icon: Smartphone, details: "Pagamento", logo: "/logos/appmax.avif" },
  { id: "blitzads", name: "BlitzAds", icon: Zap, details: "Ads", logo: "/logos/blitzads_limited_logo.jpeg" },
  { id: "braip", name: "Braip", icon: CreditCard, details: "Produtos Físicos", logo: "/logos/braip.webp" },
  { id: "buygoods", name: "BuyGoods", icon: ShoppingCart, details: "E-commerce", logo: "/logos/buygoods.png" },
  { id: "cashfactories", name: "CashFactories", icon: DollarSign, details: "CPA", logo: "/logos/cahsfactories.webp" },
  { id: "clickdealer", name: "ClickDealer", icon: Target, details: "CPA", logo: "/logos/clickdealerltd_logo.jpeg" },
  { id: "clickhunts", name: "ClickHunts", icon: Target, details: "CPA", logo: "/logos/clickhunts.png" },
  { id: "clicksadv", name: "Click$Adv", icon: Activity, details: "Rede", logo: "/logos/clicksadv.jpeg" },
  { id: "cpahouse", name: "CPA.House", icon: Layers, details: "CPA", logo: "/logos/cpa_house.png" },
  { id: "cpacombo", name: "CPA Combo", icon: TrendingUp, details: "CPA", logo: "/logos/cpacombo.webp" },
  { id: "cpagetti", name: "CPAgetti", icon: Share2, details: "CPA", logo: "/logos/cpagetti.png" },
  { id: "drcash", name: "Dr.Cash", icon: DollarSign, details: "Nutra", logo: "/logos/drcash.png" },
  { id: "gasmobi", name: "Gasmobi", icon: Smartphone, details: "Mobile", logo: "/logos/gasmobi.webp" },
  { id: "giantmobi", name: "GiantMobi", icon: Smartphone, details: "Mobile", logo: "/logos/giant_mobi.png" },
  { id: "gurumedia", name: "GuruMedia", icon: BarChart3, details: "Rede", logo: "/logos/gurumedia.png" },
  { id: "healthtrader", name: "HealthTrader", icon: Activity, details: "Nutra", logo: "/logos/health_trader.png" },
  { id: "hebreus", name: "Hebreus", icon: CreditCard, details: "Checkout", logo: "/logos/hebreus.png" },
  { id: "keedpay", name: "KeedPay", icon: Shield, details: "Pagamento", logo: "/logos/keedpay.jpeg" },
  { id: "kma", name: "KMA.BIZ", icon: Target, details: "CPA", logo: "/logos/kma.png" },
  { id: "leadreaktor", name: "LeadReaktor", icon: Zap, details: "Leads", logo: "/logos/lead_reaktor.png" },
  { id: "leadbeat", name: "LeadBeat", icon: Activity, details: "Leads", logo: "/logos/leadbeat.png" },
  { id: "leadrock", name: "LeadRock", icon: TrendingUp, details: "Leads", logo: "/logos/leadrock.png" },
  { id: "lemonad", name: "Lemonad", icon: DollarSign, details: "CPA", logo: "/logos/lemonad.png" },
  { id: "logzz", name: "Logzz", icon: Database, details: "Tracking", logo: "/logos/logzz.png" },
  { id: "manymoney", name: "ManyMoney", icon: DollarSign, details: "CPA", logo: "/logos/manymoney.png" },
  { id: "mediascalers", name: "MediaScalers", icon: BarChart3, details: "Escala", logo: "/logos/mediascalers.png" },
  { id: "metacpa", name: "MetaCPA", icon: Target, details: "CPA", logo: "/logos/metacpa.jpg" },
  { id: "moreniche", name: "MoreNiche", icon: Globe, details: "Afiliados", logo: "/logos/moreniche.png" },
  { id: "mylead", name: "MyLead", icon: Share2, details: "Afiliados", logo: "/logos/mylead.png" },
  { id: "nutrabank", name: "Nutra Bank", icon: Shield, details: "Nutra", logo: "/logos/nutrabank.png" },
  { id: "nutriprofits", name: "NutriProfits", icon: Activity, details: "Nutra", logo: "/logos/nutriprofits.png" },
  { id: "orbio", name: "Orbio", icon: Globe, details: "CPA", logo: "/logos/orbio.png" },
  { id: "pagtrust", name: "PagTrust", icon: Shield, details: "Pagamento", logo: "/logos/pagtrust.png" },
  { id: "payt", name: "Payt", icon: CreditCard, details: "Pagamento", logo: "/logos/payt.png" },
  { id: "profitnxt", name: "ProfitNxt", icon: TrendingUp, details: "CPA", logo: "/logos/profitnxt.png" },
  { id: "profitpay", name: "ProfitPay", icon: DollarSign, details: "Pagamento", logo: "/logos/profitpay.png" },
  { id: "shakespro", name: "ShakesPro", icon: BarChart3, details: "CPA", logo: "/logos/shakespro.png" },
  { id: "skylead", name: "Skylead", icon: Target, details: "Leads", logo: "/logos/skylead_logo.png" },
  { id: "smartadv", name: "Smart Adv", icon: Zap, details: "Rede", logo: "/logos/smartadv_logo.png" },
  { id: "smashloud", name: "SmashLoud", icon: Activity, details: "CPA", logo: "/logos/smashloud.png" },
  { id: "terraleads", name: "TerraLeads", icon: Globe, details: "Nutra", logo: "/logos/terraleads.png" },
  { id: "trafficlight", name: "TrafficLight", icon: Layers, details: "Rede", logo: "/logos/traffic_light.png" },
  { id: "webvork", name: "Webvork", icon: Globe, details: "Nutra", logo: "/logos/webvork.png" },
  { id: "yampi", name: "Yampi", icon: ShoppingCart, details: "E-commerce", logo: "/logos/yampi.png" },
];

export default function ChainCarouselSection() {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      {/* Subtle background glow to enhance contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.05)_0%,rgba(0,0,0,1)_70%)] pointer-events-none" />
      
      <div className="relative z-10">
        <div className="px-4 text-center mb-20 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter text-white uppercase leading-none drop-shadow-md">
            Mais de 70 plataformas.
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-6xl font-black tracking-tighter text-[#EAB308] uppercase italic leading-tight mt-3 drop-shadow-md">
            Conexão em minutos. Zero retrabalho.
          </h3>
          <p className="text-sm md:text-lg text-zinc-300 font-medium max-w-3xl mt-8 leading-relaxed">
            Seus checkouts, plataformas de afiliados e redes conectados de uma vez. Uma configuração, rastreamento de tudo.
          </p>
        </div>
        <ChainCarousel items={defaultItems} />
      </div>
    </section>
  );
}
