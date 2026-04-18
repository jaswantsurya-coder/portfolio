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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl bg-surface border border-border p-6 hover:border-primary transition-all cursor-pointer shadow-sm hover:shadow-md"
    >
      <div className="text-xs font-mono text-primary mb-2 uppercase tracking-widest">{category}</div>
      <h3 className="text-2xl font-bold mb-4 text-foreground">{title}</h3>
      <div className="relative h-48 w-full bg-border rounded-lg overflow-hidden group-hover:scale-95 transition-transform duration-500 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary to-transparent" />
        <div className="relative z-10 text-6xl opacity-30 group-hover:opacity-60 transition-opacity duration-500 text-primary">
          {title.charAt(0)}
        </div>
      </div>
      {tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary transition-colors">
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
