'use client';

import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';

const SOCIAL_LINKS = [
  { label: 'GitHub',   href: 'https://github.com/jaswantsurya-coder' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sri-jaswant-surya-cherri-644056395' },
  { label: 'Twitter',  href: 'https://x.com/SriCherri42799' },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // ── Guarantee page starts at top on every load/refresh ──────
  // useLayoutEffect runs synchronously before paint, so scrollYProgress
  // always reads 0 on first render, preventing the "half-faded" bug.
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  // ── Scroll-exit tracking ─────────────────────────────────────
  // progress: 0 = hero top at viewport top
  //           1 = hero bottom at viewport top (fully scrolled past)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Spring smoothing — gentle physics feel
  const smooth = useSpring(scrollYProgress, {
    stiffness: 55,
    damping:   18,
    restDelta: 0.001,
  });

  // Slide out to the left as the hero scrolls away; fade out by 58% scroll
  const scrollX       = useTransform(smooth, [0, 1],    ['0px', '-150px']);
  const scrollOpacity = useTransform(smooth, [0, 0.58], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center"
    >
      {/* ── Scroll-exit shell ────────────────────────────────────
       * Only x + opacity are scroll-driven here.
       */}
      <motion.div
        style={{ x: scrollX, opacity: scrollOpacity }}
        className="relative z-10 w-full"
      >
        {/*
         * ── Entrance animation ───────────────────────────────
         * Starts invisible and offset to the left, sliding right into place.
         */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          className="mx-auto w-full max-w-7xl px-8 md:px-16 lg:px-24 pt-24 pb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-sm font-mono tracking-[0.25em] uppercase text-primary opacity-80"
              >
                Portfolio · 2026
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: 'easeOut', delay: 0.4 }}
                className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter text-foreground font-heading leading-none"
              >
                Sri{' '}
                <span className="text-primary">Jaswant</span>
                <br />
                <span className="text-foreground">Surya</span>
                <span className="text-secondary">.</span>
              </motion.h1>

              {/* Role */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-2xl md:text-3xl text-foreground/80 font-medium"
              >
                Frontend Developer &amp; Designer
              </motion.p>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.75 }}
                className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed"
              >
                Bridging the gap between high-level artistic design and low-level
                technical performance — building systems that are visually immersive
                and architecturally robust.
              </motion.p>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-wrap gap-8 pt-6 text-sm font-mono font-medium opacity-60"
              >
                {SOCIAL_LINKS.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'hover:text-primary hover:opacity-100 transition-all duration-200',
                      'uppercase tracking-widest relative group',
                    )}
                  >
                    {label}
                    <span className="absolute -bottom-1.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Interactive 3D Robot Spline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: 'easeOut', delay: 0.5 }}
              className="lg:col-span-5 relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] flex items-center justify-center pointer-events-auto"
            >
              <InteractiveRobotSpline
                scene="https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        style={{ opacity: useTransform(smooth, [0, 0.3], [0.4, 0]) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-foreground/40"
        />
      </motion.div>
    </section>
  );
}
