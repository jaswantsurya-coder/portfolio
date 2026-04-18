"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-8 py-6 flex justify-between items-center ${isScrolled ? "bg-background/80 backdrop-blur-md py-4" : "bg-transparent"}`}>
      <div className="text-xl font-bold tracking-tighter">SRI JASWANT SURYA CHERRI</div>
      <div className="hidden md:flex gap-8 text-sm font-medium opacity-70">
        {["About", "Skills", "Work", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-primary transition-colors">
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
