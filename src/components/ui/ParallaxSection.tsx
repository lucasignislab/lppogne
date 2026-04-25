"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  id?: string;
}

export function ParallaxSection({ 
  children, 
  className = "", 
  speed = 0.5,
  id 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const maxOffset = Math.max(0, Math.min(speed, 1)) * 24;
  const y = useTransform(scrollYProgress, [0, 1], [maxOffset, -maxOffset]);

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
