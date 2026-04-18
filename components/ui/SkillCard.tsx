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
      initial={{ opacity: 0, y: 30, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative p-8 rounded-3xl bg-surface backdrop-blur-xl border border-border hover:border-primary transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

      <h3 className="text-2xl font-bold mb-3 text-foreground">{category}</h3>
      <p className="text-text-muted text-sm mb-6 leading-relaxed">
        {description}
      </p>

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
