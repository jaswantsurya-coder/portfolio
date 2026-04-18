"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse displacement from center [-1, 1]
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      // Multiply by a factor to increase movement bounds
      mouseX.set(x * 100);
      mouseY.set(y * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
      {/* Glowing orbs that gently follow the mouse */}
      <motion.div
        style={{ x: dx, y: dy }}
        className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px]"
      />
      <motion.div
        style={{ 
          x: useTransform(dx, v => -v), 
          y: useTransform(dy, v => -v) 
        }}
        className="absolute bottom-[20%] right-[20%] w-[35rem] h-[35rem] bg-secondary/15 rounded-full blur-[100px]"
      />
    </div>
  );
}
