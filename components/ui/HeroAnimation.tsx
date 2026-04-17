"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function HeroAnimation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(dx, [-0.5, 0.5], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <<divdiv className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
      <<motionmotion.div
        style={{ rotateX, rotateY, x: dx, y: dy }}
        className="relative w-64 h-64 md:w-96 md:h-96"
      >
        {/* Main Glowing Sphere */}
        <<divdiv className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse" />

        {/* Interactive Glass Card Effect */}
        <<motionmotion.div
          whileHover={{ scale: 1.05 }}
          className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl flex items-center justify-center"
        >
          <<divdiv className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-50 animate-bounce" style={{ animationDuration: '3s' }} />
        </motion.div>
      </motion.div>

      {/* Background Ambient Shapes */}
      <<divdiv className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
      <<divdiv className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
    </div>
  );
}
