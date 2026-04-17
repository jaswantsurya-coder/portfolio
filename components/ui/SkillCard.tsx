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
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative p-8 rounded-3xl bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-accent-blue/50 transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />

      <h3 className="text-2xl font-bold mb-3 text-foreground">{category}</h3>
      <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="px-3 py-1 text-xs font-mono bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700 group-hover:border-accent-blue/30 group-hover:text-white transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
