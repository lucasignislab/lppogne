"use client";

import { ReactLenis } from 'lenis/react';
import React from 'react';

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  // Configuration options for physics-based smooth scrolling
  // Including settings to avoid iOS Safari stutter
  const options = {
    lerp: 0.06,
    duration: 1.8,
    smoothWheel: true,
    syncTouch: true,
    touchMultiplier: 1,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
