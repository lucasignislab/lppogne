"use client";

import { motion, type Variants } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: ({ stagger = 0.1, delay = 0 }: { stagger?: number; delay?: number } = {}) => ({
    transition: { staggerChildren: stagger, delayChildren: delay },
  }),
};

export function AnimatedSection({ 
  children, 
  className, 
  delay = 0, 
  stagger = 0.1 
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={{ stagger, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedItemProps {
  children: React.ReactNode;
  className?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring" as const,
      stiffness: 100, 
      damping: 20 
    },
  },
};

export function AnimatedItem({ children, className }: AnimatedItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
