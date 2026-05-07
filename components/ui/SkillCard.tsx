"use client";

import { motion } from "framer-motion";
import React from "react";

interface SkillCardProps {
  category: string;
  items: string[];
  description: string;
  index: number;
}

export default function SkillCard({ category, items, description, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className="group relative p-7 rounded-2xl bg-surface-2 border border-border hover:border-primary/50 transition-all duration-300"
    >
      {/* hover glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <h3 className="font-heading text-xl font-bold mb-2 text-foreground">{category}</h3>
      <p className="text-text-muted text-sm mb-5 leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20 group-hover:border-primary/40 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
