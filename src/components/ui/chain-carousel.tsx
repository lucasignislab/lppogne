"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    LucideIcon,
    Search,
    DeleteIcon,
} from 'lucide-react';

// NOTE: Placeholder for your custom Input component
const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
    <input {...props} />
);

const MarqueeTrack: React.FC<{
    items: ChainItem[];
    reverse?: boolean;
    durationSec?: number;
}> = ({ items, reverse = false, durationSec = 24 }) => {
    const marqueeItems = [...items, ...items];

    return (
        <div className="relative w-full overflow-hidden rounded-full border border-zinc-800/80 bg-zinc-950/70 py-2">
            <div
                className={`flex w-max items-center gap-6 px-4 ${reverse ? "animate-marquee-rtl" : "animate-marquee-ltr"}`}
                style={{ animationDuration: `${durationSec}s` }}
            >
                {marqueeItems.map((item, idx) => (
                    <div key={`${item.id}-${idx}`} className="shrink-0 rounded-full border border-zinc-800 bg-black p-1.5">
                        {item.logo ? (
                            <img src={item.logo} alt={`${item.name} logo`} className="size-8 rounded-full object-cover" />
                        ) : (
                            <item.icon className="size-8 text-zinc-500" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

// --- Core Data Interface ---
export interface ChainItem {
    id: string | number; // Unique ID
    name: string;
    icon: LucideIcon;
    /** A secondary string line for the item, e.g., a short description or a value. */
    details?: string;
    logo?: string; // Optional image URL
}

// --- Internal Animated Type ---
/** The specific type returned by getVisibleItems, extending the base ChainItem. */
type AnimatedChainItem = ChainItem & {
    distanceFromCenter: number;
    originalIndex: number;
};

// --- Component Props Interfaces ---

interface CarouselItemProps {
    chain: AnimatedChainItem;
    side: 'left' | 'right';
}

interface ChainCarouselProps {
    /** The list of items to display in the carousel. (REQUIRED) */
    items: ChainItem[];
    /** The speed of the auto-scroll rotation in milliseconds. */
    scrollSpeedMs?: number;
    /** The number of carousel items visible at once (must be an odd number). */
    visibleItemCount?: number;
    /** Custom class for the main container div. */
    className?: string;
    /** Function to call when a chain is selected from the search dropdown. */
    onChainSelect?: (chainId: ChainItem['id'], chainName: string) => void;
}

// --- Helper Components ---

/** A single item card for the carousel. */
const CarouselItemCard: React.FC<CarouselItemProps> = ({ chain, side }) => {
    const { distanceFromCenter, id, name, details, logo, icon: FallbackIcon } = chain;
    let verticalPos = 0;
    let xOffset = 0;
    let yOffset = 0;
    let opacity = 0;
    let scale = 1;
    let zIndex = 0;

    const verticalSpacing = 88;
    const horizontalCurve = 34;

    if (side === 'left') {
        verticalPos = distanceFromCenter + 3; // maps -5..-1 to -2..2
        const curve = Math.abs(verticalPos);
        xOffset = -(curve * horizontalCurve); // curves outwards to the left
        yOffset = verticalPos * verticalSpacing; // spacing between items
        opacity = Math.max(0, 1 - curve * 0.35); // fade out edges
        scale = Math.max(0.75, 1 - curve * 0.1); // shrink edges
        zIndex = 10 - curve;
    } else {
        verticalPos = distanceFromCenter - 3; // maps 1..5 to -2..2
        const curve = Math.abs(verticalPos);
        xOffset = (curve * horizontalCurve); // curves outwards to the right
        yOffset = verticalPos * verticalSpacing; // spacing between items
        opacity = Math.max(0, 1 - curve * 0.35); // fade out edges
        scale = Math.max(0.75, 1 - curve * 0.1); // shrink edges
        zIndex = 10 - curve;
    }

    const IconOrLogo = (
        <div className="rounded-full flex items-center justify-center p-1 bg-black">
            {logo ? (
                <img src={logo} alt={`${name} logo`} className="size-10 lg:size-12 rounded-full object-cover" />
            ) : (
                <FallbackIcon className="size-10 lg:size-12 text-zinc-500" />
            )}
        </div>
    );

    return (
        <motion.div
            key={id}
            className={`absolute flex items-center gap-3 sm:gap-4 text-background px-4 sm:px-6 py-2.5 sm:py-3
                ${side === 'left' ? 'flex-row-reverse' : 'flex-row'}`}
            animate={{
                opacity,
                scale,
                y: yOffset,
                x: xOffset,
                zIndex,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            {IconOrLogo}

            <div className={`flex flex-col mx-4 ${side === 'left' ? 'text-right' : 'text-left'}`}>
                {/* FIX: Added whitespace-nowrap to prevent the name from wrapping. */}
                <span className="text-xs sm:text-sm lg:text-md font-bold text-zinc-200 whitespace-nowrap">{name}</span>
                {/* Display generic details/description */}
                <span className="text-[11px] sm:text-xs text-zinc-500">{details}</span>
            </div>
        </motion.div>
    );
};

// --- Main Component ---

const ChainCarousel: React.FC<ChainCarouselProps> = ({
    items,

    scrollSpeedMs = 1500,
    visibleItemCount = 9,
    className = '',
    onChainSelect,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [isMobileLayout, setIsMobileLayout] = useState(false);

    // References for Framer Motion scroll-based animation
    const rightSectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(rightSectionRef, { margin: '-100px 0px -100px 0px' });
    const totalItems = items.length;

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(max-width: 1279px)");
        const sync = () => setIsMobileLayout(mediaQuery.matches);

        sync();
        mediaQuery.addEventListener("change", sync);

        return () => mediaQuery.removeEventListener("change", sync);
    }, []);

    // 1. Auto-scroll effect
    useEffect(() => {
        if (isPaused || totalItems === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % totalItems);
        }, scrollSpeedMs);

        return () => clearInterval(interval);
    }, [isPaused, totalItems, scrollSpeedMs]);

    // 2. Scroll listener to pause carousel on page scroll
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;
        const handleScroll = () => {
            setIsPaused(true);
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsPaused(false);
            }, 500); // Resume auto-scroll after 500ms of no scrolling
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);


    // Memoized function for carousel items
    const getVisibleItems = useCallback(
        (): AnimatedChainItem[] => { // Explicitly define return type
            const visibleItems: AnimatedChainItem[] = [];
            if (totalItems === 0) return [];

            // Ensure visibleItemCount is an odd number for a clear center item
            const itemsToShow = visibleItemCount % 2 === 0 ? visibleItemCount + 1 : visibleItemCount;
            const half = Math.floor(itemsToShow / 2);

            for (let i = -half; i <= half; i++) {
                let index = currentIndex + i;
                if (index < 0) index += totalItems;
                if (index >= totalItems) index -= totalItems;

                visibleItems.push({
                    ...items[index],
                    originalIndex: index,
                    distanceFromCenter: i,
                });
            }
            return visibleItems;
        },
        [currentIndex, items, totalItems, visibleItemCount]
    );

    // Filtered list for search dropdown
    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [items, searchTerm]);

    const visibleItems = useMemo(() => getVisibleItems(), [getVisibleItems]);

    // Handler for selecting an item from the dropdown
    const handleSelectChain = (id: ChainItem['id'], name: string) => {
        const index = items.findIndex((c) => c.id === id);
        if (index !== -1) {
            setCurrentIndex(index); // Jump to the selected item
            setIsPaused(true);       // Pause to highlight the selection
            if (onChainSelect) {
            }
        }
        setSearchTerm(name); // Set search term to the selected item's name
        setShowDropdown(false);
    };

    // Keep the middle card synchronized with the item centered on the right column.
    const currentItem = isMobileLayout
        ? items[currentIndex]
        : visibleItems.find((item) => item.distanceFromCenter === 3) ?? items[currentIndex];

    // --- JSX Render ---
    return (
        <div id='explore-section' className={`space-y-12 md:space-y-20
            ${className}`}>
            <div className='flex flex-col xl:flex-row 
            max-w-7xl mx-auto px-4 md:px-8 gap-8 md:gap-12 justify-center items-center'>


                {/* Left Section - Chain Carousel (Hidden on smaller screens) */}
                <motion.div
                    className="relative w-full max-w-md xl:max-w-2xl h-[380px] md:h-[430px] xl:h-[450px]
                items-center justify-center hidden xl:flex xl:-left-8"
                    onMouseEnter={() => !searchTerm && setIsPaused(true)}
                    onMouseLeave={() => !searchTerm && setIsPaused(false)}
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.8 }}
                >
                    {/* Fading overlay to mask items */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-0 h-1/4 w-full bg-transparent"></div>
                        <div className="absolute bottom-0 h-1/4 w-full bg-transparent "></div>
                    </div>

                    {visibleItems.filter(c => c.distanceFromCenter < 0).map((chain) => (
                        <CarouselItemCard
                            key={chain.id}
                            chain={chain} // Renamed prop to 'chain' for this component's context
                            side="left"
                        />
                    ))}
                </motion.div>

                {/* Middle Section - Text and Search Input */}
                <div className="flex flex-col text-center 2xl:text-center xl:text-center
                 gap-4 max-w-md">

                    {/* Currently Selected Item Display */}
                    {isMobileLayout && (
                        <div className="xl:hidden mt-1 space-y-3">
                            <MarqueeTrack items={items} durationSec={20} />
                        </div>
                    )}

                    {currentItem && (
                    <div className="flex flex-col items-center justify-center gap-1 mt-2 sm:mt-4">
                            <div className='p-[2px] bg-black rounded-full shadow-[0_0_40px_rgba(234,179,8,0.4)]'>
                                {currentItem.logo ? (
                                    <img src={currentItem.logo} alt={`${currentItem.name} logo`} className="size-20 lg:size-24 rounded-full object-cover" />
                                ) : (
                                    <currentItem.icon className="size-20 lg:size-24 text-zinc-400" />
                                )}
                            </div>
                            <h3 className="text-xl sm:text-2xl xl:text-3xl font-black text-white uppercase tracking-wider mt-4 sm:mt-6">
                                {currentItem.name}
                            </h3>
                            <p className="text-xs sm:text-sm xl:text-base font-bold text-[#EAB308] uppercase tracking-widest">
                                {currentItem.details || 'View Details'}
                            </p>
                        </div>
                    )}

                    {isMobileLayout && (
                        <div className="xl:hidden mb-1 space-y-3">
                            <MarqueeTrack items={items} reverse durationSec={26} />
                        </div>
                    )}

                    {/* Search Bar */}
                    <div className="mt-4 sm:mt-6 relative max-w-lg mx-auto xl:mx-0">
                        <div className="px-3 flex items-center relative">
                            <Input
                                type="text"
                                value={searchTerm}
                                placeholder="Buscar integração..."
                                onChange={(e) => {
                                    const val = e.target.value;
                                    setSearchTerm(val);
                                    setShowDropdown(val.length > 0);
                                    if (val === '') setIsPaused(false);
                                }}
                                onFocus={() => {
                                    if (searchTerm.length > 0) setShowDropdown(true);
                                    setIsPaused(true);
                                }}
                                onBlur={() => {
                                    // Wait briefly before hiding to allow click on dropdown item
                                    setTimeout(() => setShowDropdown(false), 200);
                                }}
                                className="flex-grow outline-none text-zinc-300 bg-zinc-950/80 px-4 
                            !placeholder-zinc-600 text-sm rounded-full border-zinc-800 pr-10 
                            pl-10 py-3 cursor-pointer border focus:border-[#EAB308]/50 transition-colors"
                            />
                            <Search className="absolute text-zinc-500 w-5 h-5 left-6 pointer-events-none" />
                            {searchTerm && (
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setShowDropdown(false);
                                        setIsPaused(false);
                                    }}
                                    className="absolute right-6 text-foreground hover:text-gray-300"
                                >
                                    <DeleteIcon />
                                </button>
                            )}
                        </div>

                        {/* Dropdown for search results */}
                        {showDropdown && filteredItems.length > 0 && (
                            <div className="absolute left-0 right-0 mt-2 bg-background 
                        rounded-lg border z-20 max-h-60 overflow-y-auto shadow-xl">
                                {filteredItems.slice(0, 10).map((chain) => (
                                    <div
                                        key={chain.id}
                                        // FIX: Use e.preventDefault() to stop browser's form validation/alert
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                            handleSelectChain(chain.id, chain.name);
                                        }}
                                        className="flex items-center gap-3 px-4 py-3 cursor-pointer 
                                    hover:bg-gray-100/10 transition-colors duration-150 rounded-lg m-2"
                                    >
                                        {chain.logo ? (
                                            <img src={chain.logo} alt={`${chain.name} logo`} className="size-6 rounded-full object-cover" />
                                        ) : (
                                            <chain.icon size={24} className="text-primary" />
                                        )}
                                        <span className="text-foreground font-medium">{chain.name}</span>
                                        <span className="ml-auto text-sm text-gray-500">{chain.details}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section - Chain Carousel */}
                <motion.div
                    ref={rightSectionRef}
                    className="relative w-full max-w-md xl:max-w-2xl h-[380px] md:h-[430px] xl:h-[450px]
                items-center justify-center xl:flex xl:-right-8 hidden"
                    onMouseEnter={() => !searchTerm && setIsPaused(true)}
                    onMouseLeave={() => !searchTerm && setIsPaused(false)}
                    initial={{ x: '100%', opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ type: 'spring', stiffness: 80, damping: 20, duration: 0.8 }}
                >
                    {/* Fading overlay to mask items */}
                    <div className="absolute inset-0 z-10 pointer-events-none">
                        <div className="absolute top-0 h-1/4 w-full bg-transparent "></div>
                        <div className="absolute bottom-0 h-1/4 w-full bg-transparent "></div>
                    </div>

                    {visibleItems.filter(c => c.distanceFromCenter > 0).map((chain) => (
                        <CarouselItemCard
                            key={chain.id}
                            chain={chain}
                            side="right"
                        />
                    ))}
                </motion.div>



            </div>

        </div >
    );
};

export default ChainCarousel;
