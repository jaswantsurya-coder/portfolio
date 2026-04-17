# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a professional portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS. It features heavy use of 3D graphics and animations via Three.js, React Three Fiber, Framer Motion, and GSAP.

## Development Commands
Run these commands from the `/d/portfolio` directory:

- **Dev Server**: `npm run dev`
- **Build**: `npm run build`
- **Start (Production)**: `npm run start`
- **Lint**: `npm run lint`

## Architecture & Structure
- **Framework**: Next.js 16 (App Router) with TypeScript.
- **Styling**: Tailwind CSS 4.
- **Animation & 3D**:
  - `three`, `@react-three/fiber`, `@react-three/drei`: For 3D rendering and scenes.
  - `framer-motion`, `gsap`: For UI and timeline-based animations.
  - `lenis`: For smooth scrolling.
- **Project Layout**:
  - `app/`: Next.js App Router pages and layouts.
  - `components/`: Reusable UI components.
  - `hooks/`: Custom React hooks.
  - `data/`: Static content and project data.
  - `public/`: Static assets and 3D models.

## Implementation Guidelines
- **3D Work**: When adding 3D elements, ensure they are wrapped in the appropriate Canvas components from `@react-three/fiber`.
- **Animations**: Use `framer-motion` for simple state transitions and `gsap` for complex sequenced animations.
- **Styling**: Use Tailwind CSS 4 utility classes.
- **Performance**: Be mindful of 3D model sizes and texture resolutions to maintain high performance.
