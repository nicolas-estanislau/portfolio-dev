# Nicolas Estanislau Portfolio
A modern, award-winning portfolio for a Full Stack Developer, built with Next.js 15, Three.js, and Tailwind CSS. It focuses on a cinematic visual experience and extreme performance.

## Core Value
To provide an immersive, highly professional, and performant showcase of Nicolas Estanislau's skills, projects, and experience, demonstrating technical mastery and design sensibility to potential clients and employers.

## Context
Nicolas needs a personal portfolio deployed at `nicolasestanislau.dev` that stands out from standard developer websites. It must mirror the aesthetic quality of Awwwards-winning sites (Apple, Vercel, Linear, Stripe inspired) while maintaining perfect Lighthouse scores, accessibility, and SEO.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] **Architecture & Performance**: Use Next.js 15 App Router with a strict Server Component default. Implement SSG for static pages (Home, About, Projects, Contact) and lazy load/stream Client Components (animations, 3D). Ensure Lighthouse scores > 95, low TTFB, low CLS, and excellent Core Web Vitals.
- [ ] **Tech Stack**: TypeScript, Tailwind CSS, shadcn/ui, next-themes.
- [ ] **3D Visuals**: Integrate Three.js via React Three Fiber + Drei for an immersive, animated background (particles, stars, lighting, mouse parallax). Must include performance optimizations (lazy loading, conditional rendering, reduced render loop, instancing).
- [ ] **Animations & UI**: Use Framer Motion for scroll reveals, microinteractions, and fluid transitions. Implement glassmorphism, modern typography, cursor glow, noise textures, and smooth scrolling.
- [ ] **Theming**: System-synced dark/light mode with smooth transitions, user preference persistence, and manual toggling.
- [ ] **Structure - Hero**: Name, title ("Full Stack Developer"), subtitle, CTAs (Projects, Contact), and 3D background.
- [ ] **Structure - About**: Professional summary, animated tech stack icons, and cards highlighting areas of expertise (Frontend, Backend, Cloud, DevOps, APIs, Kafka, etc.).
- [ ] **Structure - Projects**: Dummy scalable projects (News Platform, Financial System, SaaS, etc.) displayed on modern hover cards with optimized images, descriptions, stack, and links.
- [ ] **Structure - Experience**: Animated professional timeline.
- [ ] **Structure - Contact**: Functional form with email integration, validation, and anti-spam protection.
- [ ] **SEO & Metadata**: Configure Next.js Metadata API, OpenGraph, Twitter Cards, `sitemap.xml`, `robots.txt`, canonical tags, and JSON-LD structured data.
- [ ] **Accessibility**: WCAG AA compliance, keyboard navigation, proper ARIA labels, high contrast, and `prefers-reduced-motion` support.
- [ ] **Deployment**: Vercel configuration (`vercel.json`) and environment variables targeting `nicolasestanislau.dev`.

### Out of Scope

- [ ] Real-time heavy backend logic (focus is on portfolio showcase, any backend will be mock or serverless light APIs for the contact form).
- [ ] Heavy unoptimized 3D scenes (performance takes precedence over complex high-poly models).

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js 15 App Router + Server Components | Maximizes performance, SEO, and developer experience while keeping the bundle size small. | — Pending |
| React Three Fiber + Drei | Provides the easiest and most declarative way to integrate performant Three.js scenes into React. | — Pending |
| SSG for Core Pages | Static Site Generation ensures the fastest possible TTFB and best SEO for public content. | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-05-10 after initialization*
