"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface CardItem {
  id: string | number;
  title: string;
  description: string;
  imgSrc: string;
  icon: React.ReactNode;
  linkHref: string;
  category?: string;
  tags?: string[];
}

interface ExpandingCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CardItem[];
  defaultActiveIndex?: number;
}

export const ExpandingCards = React.forwardRef<
  HTMLDivElement,
  ExpandingCardsProps
>(({ className, items, defaultActiveIndex = 0, ...props }, ref) => {
  const [activeIndex, setActiveIndex] = React.useState<number>(defaultActiveIndex);
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const gridStyle = React.useMemo<React.CSSProperties>(() => {
    if (isDesktop) {
      return {
        gridTemplateColumns: items
          .map((_, i) => (i === activeIndex ? "4.5fr" : "1fr"))
          .join(" "),
        gridTemplateRows: "1fr",
      };
    }
    return {
      gridTemplateColumns: "1fr",
      gridTemplateRows: items
        .map((_, i) => (i === activeIndex ? "4fr" : "1fr"))
        .join(" "),
    };
  }, [activeIndex, items.length, isDesktop]);

  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      <ul
        className="w-full gap-2.5 grid"
        style={{
          ...gridStyle,
          height: isDesktop ? "600px" : "700px",
          transition:
            "grid-template-columns 600ms cubic-bezier(0.4,0,0.2,1), grid-template-rows 600ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          const num = String(index + 1).padStart(2, "0");

          return (
            <li
              key={item.id}
              className={cn(
                "group relative cursor-pointer overflow-hidden",
                "rounded-2xl md:min-w-[56px] min-h-0 min-w-0",
              )}
              style={{
                border: isActive
                  ? "1px solid rgba(45,212,191,0.35)"
                  : "1px solid rgba(46,46,46,0.8)",
                transition: "border-color 400ms ease",
                boxShadow: isActive
                  ? "0 0 0 1px rgba(45,212,191,0.15), 0 24px 64px rgba(0,0,0,0.6)"
                  : "0 4px 24px rgba(0,0,0,0.4)",
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              tabIndex={0}
            >
              {/* ── Background image ───────────────────── */}
              <img
                src={item.imgSrc}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover"
                style={{
                  transform: isActive ? "scale(1.0)" : "scale(1.06)",
                  filter: isActive ? "grayscale(0%) brightness(0.9)" : "grayscale(55%) brightness(0.5)",
                  transition: "transform 700ms cubic-bezier(0.4,0,0.2,1), filter 700ms ease",
                }}
              />

              {/* ── Layered gradient overlay ────────────── */}
              <div
                className="absolute inset-0"
                style={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.1) 65%, transparent 100%)"
                    : "linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 100%)",
                  transition: "background 700ms ease",
                }}
              />

              {/* Active: subtle primary tint at top */}
              {isActive && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 0%, rgba(45,212,191,0.12) 0%, transparent 65%)",
                  }}
                />
              )}

              {/* ── COLLAPSED state: number + vertical title ── */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-end pb-8 gap-4"
                style={{
                  opacity: isActive ? 0 : 1,
                  transition: "opacity 300ms ease",
                  pointerEvents: isActive ? "none" : "auto",
                }}
              >
                <span
                  className="font-heading font-bold text-white/20"
                  style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                >
                  {num}
                </span>
                <span
                  className="hidden md:block font-mono text-[10px] uppercase tracking-[0.25em] text-white/40 whitespace-nowrap"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {item.title}
                </span>
              </div>

              {/* ── ACTIVE state: full content ──────────── */}
              <article
                className="absolute inset-0 flex flex-col justify-end p-7 md:p-8"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 400ms ease 150ms, transform 400ms ease 150ms",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                {/* Number + category row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-primary/70 text-xs tracking-widest">{num}</span>
                  <span className="w-6 h-px bg-primary/40" />
                  {item.category && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Icon */}
                <div className="mb-3 text-primary/90">
                  {item.icon}
                </div>

                {/* Title — 26px bold */}
                <h3
                  className="font-heading font-bold text-white leading-tight mb-3"
                  style={{ fontSize: "26px", letterSpacing: "-0.02em" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-white/70 leading-relaxed mb-4"
                  style={{ fontSize: "14px", maxWidth: "320px" }}
                >
                  {item.description}
                </p>

                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] px-2.5 py-1 rounded-full text-primary"
                        style={{
                          background: "rgba(45,212,191,0.12)",
                          border: "1px solid rgba(45,212,191,0.25)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Visit CTA */}
                <a
                  href={item.linkHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="group/btn inline-flex items-center gap-2 w-fit"
                  style={{
                    background: "rgba(45,212,191,0.12)",
                    border: "1px solid rgba(45,212,191,0.3)",
                    borderRadius: "999px",
                    padding: "8px 18px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "rgba(45,212,191,1)",
                    transition: "background 250ms ease, border-color 250ms ease, color 250ms ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(45,212,191,0.22)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(45,212,191,0.6)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(45,212,191,0.12)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(45,212,191,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(45,212,191,1)";
                  }}
                >
                  Visit Project
                  <ArrowUpRight size={13} />
                </a>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
});
ExpandingCards.displayName = "ExpandingCards";
