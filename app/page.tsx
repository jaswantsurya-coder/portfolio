"use client";

import Experience from "@/components/canvas/Experience";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import SkillCard from "@/components/ui/SkillCard";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import HeroAnimation from "@/components/ui/HeroAnimation";
import { motion } from "framer-motion";
import { PROJECTS, SKILLS } from "@/data/content";

export default function Page() {
  return (
    <>
      <SmoothScroll>
          <Navbar />
          <Experience />
          <main className="relative z-10 text-foreground font-sans">
            {/* HERO SECTION */}
            <section className="relative min-h-screen flex items-center px-8 md:px-24 overflow-hidden pt-20">
              <div className="absolute inset-0 z-0">
                <HeroAnimation />
              </div>
              <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className="space-y-8 pointer-events-auto max-w-2xl"
                >
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground font-heading leading-tight md:leading-none">
                    Hi, I'm <br className="hidden md:block" />
                    <span className="text-primary">Sri Jaswant Surya</span><span className="text-secondary">.</span>
                  </h1>
                  <p className="text-2xl md:text-3xl text-foreground font-medium">
                    Frontend Developer & Designer
                  </p>
                  <p className="text-lg md:text-xl text-text-muted opacity-80 max-w-xl leading-relaxed">
                    Crafting digital experiences where precision meets art. Bridging the gap between
                    high-level artistic design and low-level technical performance.
                  </p>
                  <div className="flex flex-wrap gap-4 pt-6">
                    <CTAButton variant="primary" onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}>
                      View Projects
                    </CTAButton>
                    <CTAButton variant="ghost" className="border border-border/50 bg-surface/50 backdrop-blur-md hover:bg-surface" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      Contact Me &rarr;
                    </CTAButton>
                  </div>
                  <div className="flex gap-8 pt-12 text-sm font-mono opacity-60 font-medium">
                    <a href="https://github.com/jaswantsurya-coder" target="_blank" className="hover:text-primary transition-colors uppercase tracking-widest relative group">
                      GitHub
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/sri-jaswant-surya-cherri-644056395" target="_blank" className="hover:text-primary transition-colors uppercase tracking-widest relative group">
                      LinkedIn
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                    </a>
                    <a href="https://x.com/SriCherri42799" target="_blank" className="hover:text-primary transition-colors uppercase tracking-widest relative group">
                      Twitter
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-primary transition-all group-hover:w-full"></span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* ABOUT SECTION */}
            <section id="about" className="min-h-screen flex items-center justify-center py-32 px-8 bg-surface/50">
              <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white/5 dark:bg-white/5 border border-white/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                  <img
                    src="/about-character.png"
                    alt="Sri Jaswant Surya"
                    className="w-full h-full object-contain p-6 relative z-10 drop-shadow-2xl"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <SectionHeader title="About Me" />
                  <div className="space-y-6 text-lg leading-relaxed text-text-muted">
                    <p>
                      Passionate developer with a drive for building modern web applications.
                      Focused on clean code, user experience, and high-performance architecture.
                    </p>
                    <p>
                      I specialize in bridging the gap between high-level artistic design and low-level technical performance.
                      By combining the fluidity of modern frontend frameworks with the raw power of C++ and Python,
                      I build systems that are not only visually immersive but architecturally robust.
                    </p>
                    <div className="pt-4 space-y-2 font-medium text-foreground">
                      <p className="flex items-center gap-2">📍 Location: India</p>
                      <p className="flex items-center gap-2">💼 Role: Open to Work / Frontend & Backend Dev</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="min-h-screen py-32 px-8 bg-background">
              <div className="max-w-6xl mx-auto w-full">
                <SectionHeader
                  title="Skills & Tools"
                  description="Bridging the gap between low-level performance and high-end visual experiences."
                  centered
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {SKILLS.map((skill, i) => (
                    <SkillCard
                      key={skill.category}
                      index={i}
                      category={skill.category}
                      description={skill.description}
                      items={skill.items}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="work" className="min-h-screen py-32 px-8 bg-surface/30">
              <div className="max-w-6xl mx-auto">
                <SectionHeader
                  title="Featured Projects"
                  description="Exploring the boundaries of the web with Three.js and GSAP."
                  centered
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {PROJECTS.map((project, i) => (
                    <a
                      key={project.title}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <ProjectCard
                        title={project.title}
                        category={project.category}
                        tags={project.tags}
                        index={i}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="min-h-screen flex items-center justify-center py-32 px-8 bg-background">
              <div className="max-w-3xl w-full text-center space-y-12">
                <SectionHeader
                  title="Let's Connect"
                  description="Have a project in mind? Let's talk!"
                  centered
                />
                <div className="space-y-8">
                  <a
                    href="mailto:srijaswantsuryacherri@gmail.com"
                    className="text-3xl md:text-5xl font-bold text-primary hover:text-primary-dark transition-colors underline underline-offset-8 block"
                  >
                    srijaswantsuryacherri@gmail.com
                  </a>
                  <div className="flex justify-center gap-6">
                    <a
                      href="https://github.com/jaswantsurya-coder"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-full border border-border bg-surface hover:bg-primary hover:text-white transition-all"
                    >
                      GitHub Profile
                    </a>
                    <a
                      href="https://x.com/SriCherri42799"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 rounded-full border border-border bg-surface hover:bg-primary hover:text-white transition-all"
                    >
                      Twitter / X
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="py-12 px-8 border-t border-border text-center text-text-muted text-sm">
              <p>© {new Date().getFullYear()} Sri Jaswant Surya. Built with Next.js</p>
            </footer>
          </main>
        </SmoothScroll>
    </>
  );
}
