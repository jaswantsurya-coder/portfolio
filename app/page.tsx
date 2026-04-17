"use client";

import Experience from "@/components/canvas/Experience";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Navbar from "@/components/ui/Navbar";
import ProjectCard from "@/components/ui/ProjectCard";
import SkillCard from "@/components/ui/SkillCard";
import { PROJECTS, SKILLS } from "@/data/content";

export default function Page() {
  return (
    <SmoothScroll>
      <Navbar />
      <Experience />
      <main className="relative z-10 text-foreground">
        <section className="h-screen flex items-center justify-center">
          <h1 className="text-8xl font-bold tracking-tighter text-center">
            SRI JASWANT <br /> SURYA CHERRI
          </h1>
        </section>

        <section id="about" className="h-screen flex items-center justify-center">
          <div className="max-w-3xl p-8 text-center">
            <h2 className="text-5xl font-bold mb-8">The Vision</h2>
            <div className="space-y-6">
              <p className="text-2xl leading-relaxed font-medium text-foreground">
                Crafting digital experiences where precision meets art.
              </p>
              <p className="text-xl leading-relaxed opacity-80">
                I specialize in bridging the gap between high-level artistic design and low-level technical performance.
                By combining the fluidity of modern frontend frameworks with the raw power of C++ and Python,
                I build systems that are not only visually immersive but architecturally robust.
              </p>
              <p className="text-lg leading-relaxed opacity-60 italic">
                Focusing on minimal aesthetics, immersive 3D interactions, and seamless system integrations.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="min-h-screen py-32 px-8 flex items-center justify-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="mb-16 text-center">
              <h2 className="text-5xl font-bold mb-6">Technical Arsenal</h2>
              <p className="text-xl opacity-80">
                Bridging the gap between low-level performance and high-end visual experiences.
              </p>
            </div>
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

        <section id="work" className="min-h-screen py-32 px-8">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-5xl font-bold mb-6">Selected Works</h2>
              <p className="text-xl opacity-80">
                Exploring the boundaries of the web with Three.js and GSAP.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PROJECTS.map((project, i) => (
                <a
                  key={project.title}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
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

        <section id="contact" className="h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-8">GET IN TOUCH</h2>
            <div className="flex flex-col items-center gap-4">
              <a
                href="mailto:srijaswantsuryacherri@gmail.com"
                className="text-2xl text-accent-blue hover:text-primary-blue transition-colors underline underline-offset-8"
              >
                srijaswantsuryacherri@gmail.com
              </a>
              <a
                href="https://github.com/jaswantsurya-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg opacity-60 hover:opacity-100 transition-opacity"
              >
                GitHub Profile →
              </a>
            </div>
          </div>
        </section>
      </main>
    </SmoothScroll>
  );
}
