"use client";

import type React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface StickyCardProps {
  children: React.ReactNode;
  className?: string;
}

export function StickyCard({ children, className }: StickyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      className={cn("w-full sticky top-[0vh] rounded-xl", className)}
    >
      {children}
    </motion.div>
  );
}
