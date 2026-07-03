"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
  noPadding?: boolean;
}

export function Section({ children, className, id, dark, noPadding }: SectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      id={id}
      ref={ref}
      className={cn(
        "relative",
        dark ? "bg-charcoal text-ivory" : "bg-ivory text-charcoal",
        !noPadding && "py-section-mobile lg:py-section",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
