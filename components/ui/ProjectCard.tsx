"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  tags?: string[];
  index: number;
}

export default function ProjectCard({ title, category, tags, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-2xl bg-surface-2 border border-border p-6 hover:border-primary/50 transition-all duration-300 cursor-pointer"
    >
      {/* hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      <div className="text-xs font-mono text-primary mb-2 uppercase tracking-widest">
        {category}
      </div>

      <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">{title}</h3>

      {/* Placeholder image area */}
      <div className="relative h-44 w-full bg-border/40 rounded-xl overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
        <span className="relative z-10 text-7xl font-heading font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-300 select-none">
          {title.charAt(0)}
        </span>
      </div>

      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
