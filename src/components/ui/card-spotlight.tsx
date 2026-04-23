"use client";

import React from "react";
import { cn } from "@/lib/utils";

type CardSpotlightProps = React.HTMLAttributes<HTMLDivElement>;

export const CardSpotlight = ({ className, children, ...props }: CardSpotlightProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 text-white",
        className
      )}
      {...props}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,184,0,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_35%)]" />
      {children}
    </div>
  );
};
