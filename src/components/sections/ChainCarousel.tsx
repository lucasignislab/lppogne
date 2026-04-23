"use client";

import { useState, useEffect, useRef, useCallback, useMemo, type InputHTMLAttributes } from "react";
import { motion, useInView } from "framer-motion";
import {
  type LucideIcon,
  TrendingUp,
  Search,
  Globe,
  CreditCard,
  Target,
  Zap,
  Database,
  Share2,
  Activity,
  DollarSign,
  ShoppingCart,
  Layers,
  Shield,
  Smartphone,
  Package,
  BarChart3,
  X,
} from "lucide-react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...props}
    className={`grow outline-none text-white bg-zinc-900 px-4 placeholder-zinc-500 text-base rounded-full border border-zinc-700 pr-10 pl-10 py-2 transition-colors focus:border-primary/50 ${props.className || ""}`}
  />
);

export interface ChainItem {
  id: string | number;
  name: string;
  icon: LucideIcon;
  details?: string;
  logo?: string;
}

type AnimatedChainItem = ChainItem & {
  distanceFromCenter: number;
  originalIndex: number;
};

interface CarouselItemProps {
  chain: AnimatedChainItem;
  side: "left" | "right";
}

interface ChainCarouselProps {
  items: ChainItem[];
  scrollSpeedMs?: number;
  visibleItemCount?: number;
  className?: string;
  onChainSelect?: (chainId: ChainItem["id"], chainName: string) => void;
}

const CarouselItemCard = ({ chain, side }: CarouselItemProps) => {
  const { distanceFromCenter, id, name, details, logo, icon: FallbackIcon } = chain;
  const distance = Math.abs(distanceFromCenter);
  const opacity = 1 - distance / 4;
  const scale = 1 - distance * 0.1;
  const yOffset = distanceFromCenter * 90;
  const xOffset = side === "left" ? -distance * 50 : distance * 50;

  return (
    <motion.div
      key={id}
      className={`absolute flex items-center gap-4 text-white px-6 py-3 ${side === "left" ? "flex-row-reverse" : "flex-row"}`}
      animate={{ opacity, scale, y: yOffset, x: xOffset }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div className="rounded-full border border-white/20 p-2 bg-white">
        {logo ? (
          <img src={logo} alt={`${name} logo`} className="size-8 rounded-full object-cover" />
        ) : (
          <FallbackIcon className="size-8 text-zinc-950" />
        )}
      </div>

      <div className={`flex flex-col mx-4 ${side === "left" ? "text-right" : "text-left"}`}>
        <span className="text-md lg:text-lg font-semibold text-white whitespace-nowrap">{name}</span>
        <span className="text-xs lg:text-sm text-zinc-400">{details}</span>
      </div>
    </motion.div>
  );
};

const ChainCarousel = ({
  items,
  scrollSpeedMs = 1500,
  visibleItemCount = 9,
  className = "",
  onChainSelect,
}: ChainCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const rightSectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rightSectionRef, { margin: "-100px 0px -100px 0px" });
  const totalItems = items.length;

  useEffect(() => {
    if (isPaused || totalItems === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, scrollSpeedMs);
    return () => clearInterval(interval);
  }, [isPaused, totalItems, scrollSpeedMs]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsPaused(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsPaused(false), 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const getVisibleItems = useCallback((): AnimatedChainItem[] => {
    const visibleItems: AnimatedChainItem[] = [];
    if (totalItems === 0) return [];
    const itemsToShow = visibleItemCount % 2 === 0 ? visibleItemCount + 1 : visibleItemCount;
    const half = Math.floor(itemsToShow / 2);

    for (let i = -half; i <= half; i++) {
      let index = currentIndex + i;
      while (index < 0) index += totalItems;
      while (index >= totalItems) index -= totalItems;

      visibleItems.push({
        ...items[index],
        originalIndex: index,
        distanceFromCenter: i,
      });
    }

    return visibleItems;
  }, [currentIndex, items, totalItems, visibleItemCount]);

  const filteredItems = useMemo(
    () => items.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase())),
    [items, searchTerm]
  );

  const handleSelectChain = (id: ChainItem["id"], name: string) => {
    const index = items.findIndex((c) => c.id === id);
    if (index !== -1) {
      setCurrentIndex(index);
      setIsPaused(true);
      onChainSelect?.(id, name);
    }
    setSearchTerm(name);
    setShowDropdown(false);
  };

  const currentItem = items[currentIndex];

  return (
    <div id="explore-section" className={`space-y-20 ${className}`}>
      <div className="flex flex-col xl:flex-row max-w-7xl mx-auto px-4 md:px-8 gap-12 justify-center items-center">
        <motion.div
          className="relative w-full max-w-md xl:max-w-2xl h-[450px] items-center justify-center hidden xl:flex -left-14"
          onMouseEnter={() => !searchTerm && setIsPaused(true)}
          onMouseLeave={() => !searchTerm && setIsPaused(false)}
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
        >
          {getVisibleItems().map((chain) => (
            <CarouselItemCard key={`left-${chain.id}-${chain.originalIndex}`} chain={chain} side="left" />
          ))}
        </motion.div>

        <div className="flex flex-col text-center gap-4 max-w-md">
          {currentItem && (
            <div className="flex flex-col items-center justify-center gap-0 mt-4">
              <div className="p-2 bg-white rounded-full">
                {currentItem.logo ? (
                  <img src={currentItem.logo} alt={`${currentItem.name} logo`} className="size-12 rounded-full object-cover" />
                ) : (
                  <currentItem.icon className="size-8 text-zinc-900" />
                )}
              </div>
              <h3 className="text-xl xl:text-2xl font-bold text-white mt-2">{currentItem.name}</h3>
              <p className="text-sm xl:text-lg text-primary">{currentItem.details || "View Details"}</p>
            </div>
          )}

          <div className="mt-6 relative max-w-lg mx-auto xl:mx-0">
            <div className="px-3 flex items-center relative">
              <Input
                type="text"
                value={searchTerm}
                placeholder="Buscar plataforma..."
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchTerm(val);
                  setShowDropdown(val.length > 0);
                  if (val === "") setIsPaused(false);
                }}
                onFocus={() => {
                  if (searchTerm.length > 0) setShowDropdown(true);
                  setIsPaused(true);
                }}
                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
              />
              <Search className="absolute text-zinc-400 w-5 h-5 left-6 pointer-events-none" />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setShowDropdown(false);
                    setIsPaused(false);
                  }}
                  className="absolute right-6 text-zinc-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {showDropdown && filteredItems.length > 0 && (
              <div className="absolute left-0 right-0 mt-2 bg-zinc-900 rounded-lg border border-white/10 z-20 max-h-60 overflow-y-auto shadow-xl">
                {filteredItems.slice(0, 10).map((chain) => (
                  <div
                    key={chain.id}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      handleSelectChain(chain.id, chain.name);
                    }}
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-white/10 transition-colors duration-150 rounded-lg m-2"
                  >
                    {chain.logo ? (
                      <img src={chain.logo} alt={`${chain.name} logo`} className="size-6 rounded-full object-cover" />
                    ) : (
                      <chain.icon size={20} className="text-primary" />
                    )}
                    <span className="text-white font-medium">{chain.name}</span>
                    <span className="ml-auto text-sm text-zinc-400">{chain.details}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <motion.div
          ref={rightSectionRef}
          className="relative w-full max-w-md xl:max-w-2xl h-[450px] hidden xl:flex items-center justify-center -right-14"
          onMouseEnter={() => !searchTerm && setIsPaused(true)}
          onMouseLeave={() => !searchTerm && setIsPaused(false)}
          initial={{ x: "100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, duration: 0.8 }}
        >
          {getVisibleItems().map((chain) => (
            <CarouselItemCard key={`right-${chain.id}-${chain.originalIndex}`} chain={chain} side="right" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const defaultItems: ChainItem[] = [
  { id: "hotmart", name: "Hotmart", icon: TrendingUp, details: "Infoprodutos", logo: "/logos/hotmart.jpg" },
  { id: "eduzz", name: "Eduzz", icon: CreditCard, details: "Checkout", logo: "/logos/Eduzz.png" },
  { id: "kiwify", name: "Kiwify", icon: ShoppingCart, details: "Vendas", logo: "/logos/kiwify.png" },
  { id: "monetizze", name: "Monetizze", icon: DollarSign, details: "Afiliados", logo: "/logos/monetizze.png" },
  { id: "perfectpay", name: "PerfectPay", icon: Shield, details: "Pagamento", logo: "/logos/perfectpay.png" },
  { id: "clickbank", name: "ClickBank", icon: Globe, details: "Global", logo: "/logos/clickbank.svg" },
  { id: "digistore", name: "Digistore", icon: Layers, details: "Escala", logo: "/logos/digistore.png" },
  { id: "cartpanda", name: "CartPanda", icon: Package, details: "E-commerce", logo: "/logos/cartpanda.png" },
  { id: "ticto", name: "Ticto", icon: Smartphone, details: "Funnel", logo: "/logos/ticto.png" },
  { id: "everflow", name: "Everflow", icon: Activity, details: "Tracking", logo: "/logos/everflow.png" },
  { id: "jvzoo", name: "JVZoo", icon: Database, details: "Dados", logo: "/logos/jvzoo.png" },
  { id: "maxweb", name: "MaxWeb", icon: Target, details: "Ofertas", logo: "/logos/maxweb.png" },
  { id: "maxbounty", name: "MaxBounty", icon: Zap, details: "CPA", logo: "/logos/maxbounty.png" },
  { id: "offersify", name: "Offersify", icon: Share2, details: "Rede", logo: "/logos/offersify.png" },
  { id: "sellhealth", name: "SellHealth", icon: BarChart3, details: "Nutra", logo: "/logos/sellhealth.png" },
];

export default function ChainCarouselSection() {
  return (
    <div className="mt-10 rounded-3xl bg-zinc-950 border border-zinc-800 py-8">
      <div className="px-6 text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">
          Mais de 70 plataformas.
        </h3>
        <p className="text-sm md:text-base text-zinc-300 font-semibold">
          Conexão em minutos. Zero retrabalho.
        </p>
      </div>
      <ChainCarousel items={defaultItems} />
    </div>
  );
}
