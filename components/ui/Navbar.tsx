"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = ["About", "Skills", "Work", "Contact"];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 md:px-16 py-5 flex justify-between items-center ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border py-4"
          : "bg-transparent"
      }`}
    >
      {/* Wordmark */}
      <a
        href="#"
        className="font-heading text-sm font-bold tracking-[0.12em] uppercase text-foreground hover:text-primary transition-colors"
      >
        Sri Jaswant Surya
      </a>

      {/* Nav links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        {NAV_LINKS.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-text-muted hover:text-primary transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
