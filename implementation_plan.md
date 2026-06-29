# Personal Portfolio Website — Implementation Plan

## Goal
Build a production-ready, single-page React + TypeScript portfolio for **Agrani** per the [PRD](file:///c:/Users/agran/OneDrive/Desktop/portfolio/Portfolio_PRD.md) and [step-by-step prompts](file:///c:/Users/agran/OneDrive/Desktop/portfolio/prompts.md).

**Key customizations from user:**
- Name: **Agrani**
- Accent color: **light pastel blue** (`#93C5FD` / `#A5D8FF`) — soft and elegant, not vivid cobalt
- Dark mode accent: slightly brighter variant for contrast
- Projects: placeholder data for now, real GitHub links added later
- Build **step by step** — each step reviewed before the next

---

## 10-Step Build Sequence

Each step maps to the prompts in [prompts.md](file:///c:/Users/agran/OneDrive/Desktop/portfolio/prompts.md). I'll execute one step at a time, verify it compiles, and pause for your review.

---

### Step 1 — Project Scaffold
- Scaffold Vite + React + TypeScript project
- Install deps: `tailwindcss`, `@tailwindcss/vite`, `framer-motion`, `lucide-react`
- Create folder structure: `src/data/`, `src/components/`, `src/components/ui/`, `src/hooks/`
- Create all 5 data files with placeholder content matching PRD shapes (using "Agrani" throughout)
- Verify: `npm run build` succeeds with no UI

#### Files created:
| File | Purpose |
|---|---|
| `vite.config.ts` | Vite + Tailwind plugin |
| `src/data/config.ts` | Site config (name, bio, stats, socials) |
| `src/data/projects.ts` | Project array (placeholder) |
| `src/data/skills.ts` | Technical + soft skills arrays |
| `src/data/education.ts` | Timeline entries |
| `src/data/achievements.ts` | Achievement highlights |

---

### Step 2 — Design Tokens & Global Styles
- Define CSS custom properties in `index.css` (light + dark themes)
- Accent: `--accent: #93C5FD` (pastel blue), dark mode: `--accent: #60A5FA`
- Global styles: smooth scroll, selection color, focus rings
- Map CSS vars to Tailwind via `@theme` block
- Google Fonts: Inter + Playfair Display in `index.html`
- Verify: page renders with correct background/text colors

---

### Step 3 — Navbar
- Sticky nav: transparent → frosted glass after 80px scroll
- Desktop: name left, links center, "Let's Talk" button right
- Dark mode toggle (moon/sun icon), persists in `localStorage`
- Mobile: hamburger → full-screen overlay menu
- `useActiveSection` hook for active link highlighting
- Smooth scroll with nav-height offset

---

### Step 4 — Hero Section
- Two-column layout (60/40), mobile stacks
- "Available for Work" pulsing badge
- Serif display heading (Playfair Display, 64px)
- CTA buttons: View Projects + Download Resume
- Hero photo placeholder (generated image or gray box)
- Staggered Framer Motion fade-in animations

---

### Step 5 — About Section
- Bio paragraphs from `config.ts`
- 2×2 stats grid with `StatCard` component
- `useCountUp` hook: animates 0 → target, 1.5s easeOut, fires once
- `useIntersectionObserver` hook: generic, reusable
- Scroll-triggered fade-in

---

### Step 6 — Skills Section
- Two columns: technical tags + soft skill tags
- `Tag` component: pill shape, border, hover inversion
- Staggered fade-in (20ms delay per tag)

---

### Step 7 — Projects Section
- 3-column grid (desktop), 1-column (mobile)
- `ProjectCard` component with hover lift effect
- Featured project: full-width card at top
- Tech tags, GitHub + live links
- Placeholder project images (generated or gray)

---

### Step 8 — Education & Achievements
- Left: vertical timeline with dots (filled = current)
- Right: achievements with Lucide icons in accent circles
- Staggered slide-in animations

---

### Step 9 — Contact & Footer
- Contact: centered, light gray bg, social link cards
- `SocialLink` component: icon + name + handle + arrow
- Footer: name + nav links + copyright
- `ScrollToTop` button: appears after 400px scroll

---

### Step 10 — Final Polish
- Subtle noise texture on hero background
- Consistent section padding
- SEO meta tags in `index.html`
- `robots.txt` + `sitemap.xml`
- Toast notification for resume download
- Loading screen (CSS-only, initials fade-out)
- Audit: contrast, focus rings, heading order, dark mode completeness
- Remove all placeholders and console.logs

---

## Verification Plan

### After Each Step
- `npm run build` must succeed (zero errors)
- `npm run dev` — visual check in browser

### Final (Step 10)
- Test at 375px, 768px, 1280px, 1920px
- All nav links scroll correctly with offset
- Dark mode toggle persists on refresh
- Counter animations fire once
- Mobile hamburger menu works
- No placeholder text remaining

---

## Open Questions

1. **Hero photo**: Should I generate a placeholder avatar image, or will you provide one before we start?
2. **Project thumbnails**: Same question — generate placeholders or leave as gray boxes?
3. **Accent color fine-tuning**: I'm proposing `#93C5FD` (Tailwind blue-300, a soft pastel blue). Want me to go even lighter, or try a pastel emerald (`#6EE7B7`) instead?
