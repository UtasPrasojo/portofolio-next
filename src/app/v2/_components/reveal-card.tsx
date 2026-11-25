"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export default function RevealCard({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article";
}) {
  const reducedMotion = useReducedMotion();
  const Component = as === "article" ? motion.article : motion.div;
  return (
    <Component
      className={className}
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
