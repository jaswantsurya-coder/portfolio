"use client";

import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import { CardStack } from "@/components/ui/card-stack";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExpandingCards, CardItem } from "@/components/ui/expanding-cards";
import { ServicesSlider } from "@/components/blocks/animated-slideshow";
import { motion } from "framer-motion";
import { PROJECTS, SKILLS } from "@/data/content";
import { HeroSection } from "@/components/blocks/hero-section-5";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import {
  FileText,
  ShoppingBag,
  Globe,
  Layers,
  Landmark,
} from "lucide-react";

// Map project ids to lucide icons
const PROJECT_ICONS: Record<string, React.ReactNode> = {
  "village-grievance": <Landmark size={22} />,
  "resume-builder": <FileText size={22} />,
  "aura-fashion":   <ShoppingBag size={22} />,
  "quantum-nexus":  <Globe size={22} />,
  "neon-prism":     <Layers size={22} />,
};

// Build CardItem array consumed by ExpandingCards
const projectCards: CardItem[] = PROJECTS.map((p) => ({
  id:          p.id,
  title:       p.title,
  category:    p.category,
  description: p.description,
  imgSrc:      p.imgSrc,
  tags:        p.tags,
  icon:        PROJECT_ICONS[p.id] ?? <Layers size={22} />,
  linkHref:    p.link,
}));

// Map skills to CardStack items with high-quality unsplash images
const skillCards = SKILLS.map((skill, idx) => {
  const images = [
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=85", // Frontend (Abstract)
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=85", // Backend (Servers)
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=85", // Systems (Circuit)
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=85", // Integrations (Network)
  ];
  return {
    id: idx + 1,
    title: skill.category,
    description: skill.description,
    imageSrc: images[idx % images.length],
    skills: skill.items,
  };
});

export default function Page() {
  return (
    <>
      <SmoothScroll>
        {/* ── GLOBAL VIDEO BACKGROUND (LOCALLY HOSTED) ────────── */}
        <div className="fixed inset-0 z-[-1] bg-background overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover opacity-40"
            src="/dna-video.mp4"
          />
          {/* Gradients to ensure text remains readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-background/40 to-background" />
        </div>

        <Navbar />

        <main className="relative z-10">

          {/* ── HERO ─────────────────────────────────────────── */}
          <HeroSection />

          {/* ── ABOUT ────────────────────────────────────────── */}
          <section id="about" className="py-32 bg-surface/30 backdrop-blur-sm border-y border-white/5 overflow-hidden">
            {/* Editorial header */}
            <div className="px-8 md:px-16 mb-16">
              <div className="max-w-6xl mx-auto">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                  {/* Left: eyebrow + heading */}
                  <div>
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <span className="w-8 h-px bg-primary" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                        Who I Am
                      </span>
                    </motion.div>
                    <motion.h2
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
                      className="font-heading font-bold text-foreground leading-none"
                      style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
                    >
                      About Me
                      <span className="text-primary">.</span>
                    </motion.h2>
                  </div>
                  {/* Right: page number */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
                    className="text-right pb-2"
                  >
                    <p
                      className="font-heading font-bold text-border"
                      style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                    >
                      02
                    </p>
                    <p className="text-text-muted text-sm font-mono mt-2 tracking-wide">
                      The story
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Content grid */}
            <div className="px-8 md:px-16">
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="relative aspect-square rounded-3xl overflow-hidden border border-border shadow-2xl bg-background/50"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 to-transparent" />
                  <video
                    src="/make_him_only_waving_single_ha.mp4"
                    autoPlay
                    muted
                    playsInline
                    className="w-full h-full object-cover relative z-10 mix-blend-screen brightness-110"
                    onTimeUpdate={(e) => {
                      if (e.currentTarget.currentTime >= 4) {
                        e.currentTarget.currentTime = 0;
                        e.currentTarget.play();
                      }
                    }}
                  />
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="space-y-6"
                >
                  <div className="space-y-5 text-lg leading-relaxed text-text-muted">
                    <p>
                      Passionate developer with a drive for building modern web
                      applications. Focused on clean code, user experience, and
                      high-performance architecture.
                    </p>
                    <p>
                      I specialise in bridging the gap between high-level artistic
                      design and low-level technical performance — combining the
                      fluidity of modern frontend frameworks with the raw power of
                      C++ and Python to build systems that are visually immersive
                      and architecturally robust.
                    </p>
                    <div className="pt-2 space-y-2 font-medium text-foreground text-base">
                      <p>📍 Location: India</p>
                      <p>💼 Role: Open to Work · Frontend &amp; Backend Dev</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ── SKILLS ───────────────────────────────────────── */}
          <section id="skills" className="relative py-40 overflow-hidden">
            <div className="relative z-10 w-full">
              {/* Editorial header — staggered L→R entrance matching hero */}
              <div className="px-8 md:px-16 mb-12">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-end justify-between gap-6 flex-wrap">
                    {/* Left: eyebrow + heading */}
                    <div>
                      {/* Eyebrow */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex items-center gap-3 mb-4"
                      >
                        <span className="w-8 h-px bg-primary" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                          Expertise
                        </span>
                      </motion.div>
                      {/* Heading */}
                      <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
                        className="font-heading font-bold text-foreground leading-none text-[26px]"
                        style={{ letterSpacing: "-0.02em" }}
                      >
                        Skills & Tools
                        <span className="text-primary">.</span>
                      </motion.h2>
                    </div>
                    {/* Right: count + instruction */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
                      className="text-right pb-2"
                    >
                      <p
                        className="font-heading font-bold text-border"
                        style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                      >
                        03
                      </p>
                      <p className="text-text-muted text-sm font-mono mt-2 tracking-wide">
                        Drag to explore
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              <div className="mt-16 w-full flex justify-center px-8">
                <CardStack
                  items={skillCards}
                  initialIndex={0}
                  autoAdvance
                  intervalMs={3500}
                  pauseOnHover
                  showDots
                />
              </div>
            </div>
          </section>

          {/* ── PROJECTS ─────────────────────────────────────── */}
          <section id="work" className="py-24 bg-surface/30 backdrop-blur-sm border-y border-white/5 overflow-hidden">
            {/* Editorial header — staggered L→R entrance matching hero */}
            <div className="px-8 md:px-16 mb-12">
              <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between gap-6 flex-wrap">
                  {/* Left: eyebrow + giant heading */}
                  <div>
                    {/* Eyebrow */}
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.1 }}
                      className="flex items-center gap-3 mb-4"
                    >
                      <span className="w-8 h-px bg-primary" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                        Selected Work
                      </span>
                    </motion.div>
                    {/* Giant heading */}
                    <motion.h2
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
                      className="font-heading font-bold text-foreground leading-none"
                      style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
                    >
                      Projects
                      <span className="text-primary">.</span>
                    </motion.h2>
                  </div>
                  {/* Right: count + instruction */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
                    className="text-right pb-2"
                  >
                    <p
                      className="font-heading font-bold text-border"
                      style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                    >
                      04
                    </p>
                    <p className="text-text-muted text-sm font-mono mt-2 tracking-wide">
                      Hover to explore
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Full-width cards */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="px-8 md:px-16"
            >
              <div className="max-w-7xl mx-auto">
                <ExpandingCards
                  items={projectCards}
                  defaultActiveIndex={0}
                />
              </div>
            </motion.div>
          </section>

          {/* ── SERVICES ─────────────────────────────────────── */}
          <section id="services" className="relative py-32 overflow-hidden">
            <div className="relative z-10 w-full">
              {/* Editorial header — staggered L→R entrance matching hero */}
              <div className="px-8 md:px-16 mb-12">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-end justify-between gap-6 flex-wrap">
                    {/* Left: eyebrow + heading */}
                    <div>
                      {/* Eyebrow */}
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="flex items-center gap-3 mb-4"
                      >
                        <span className="w-8 h-px bg-primary" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary/70">
                          What I Do
                        </span>
                      </motion.div>
                      {/* Giant heading — same size as Projects */}
                      <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut', delay: 0.25 }}
                        className="font-heading font-bold text-foreground leading-none"
                        style={{ fontSize: "clamp(3rem, 8vw, 7rem)", letterSpacing: "-0.04em" }}
                      >
                        Services
                        <span className="text-primary">.</span>
                      </motion.h2>
                    </div>
                    {/* Right: count + instruction */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
                      className="text-right pb-2"
                    >
                      <p
                        className="font-heading font-bold text-border"
                        style={{ fontSize: "clamp(3rem, 6vw, 5rem)", letterSpacing: "-0.04em", lineHeight: 1 }}
                      >
                        05
                      </p>
                      <p className="text-text-muted text-sm font-mono mt-2 tracking-wide">
                        Hover to view
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Animated Slideshow Component */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="w-full"
              >
                <ServicesSlider />
              </motion.div>
            </div>
          </section>

          {/* ── CONTACT ──────────────────────────────────────── */}
          <section
            id="contact"
            className="py-40 px-8 flex items-center justify-center relative"
          >
            {/* Extra dark gradient at the bottom for closure */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl w-full text-center space-y-12">
              <SectionHeader
                title="Let's Connect"
                description="Have a project in mind? Let's talk!"
                centered
              />
              <div className="space-y-8">
                <a
                  href="mailto:srijaswantsuryacherri@gmail.com"
                  className="text-2xl md:text-4xl font-bold text-primary hover:text-primary-dark transition-colors underline underline-offset-8 block font-mono break-all"
                >
                  srijaswantsuryacherri@gmail.com
                </a>
                <div className="flex justify-center flex-wrap gap-4">
                  {[
                    { label: "GitHub",     href: "https://github.com/jaswantsurya-coder" },
                    { label: "LinkedIn",   href: "https://www.linkedin.com/in/sri-jaswant-surya-cherri-644056395" },
                    { label: "Twitter / X", href: "https://x.com/SriCherri42799" },
                  ].map(({ label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 rounded-full border border-border text-sm font-medium text-text-muted hover:border-primary hover:text-primary transition-all duration-200 bg-background/50 backdrop-blur-sm"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── FOOTER ───────────────────────────────────────── */}
          <footer className="py-10 px-8 border-t border-white/5 text-center text-text-muted text-sm font-mono tracking-wide relative z-10">
            <p>© {new Date().getFullYear()} Sri Jaswant Surya Cherri — Built with Next.js</p>
          </footer>

        </main>
      </SmoothScroll>
    </>
  );
}
