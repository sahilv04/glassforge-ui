# GlassForge UI — V1 Target

## V1 goal

Launch a small but polished open-source React UI kit that proves the GlassForge UI concept.

The goal is not to build 50 components. The goal is to build a focused set of themeable components and blocks that look premium, are easy to customize, and clearly communicate the product direction.

---

## V1 positioning

**GlassForge UI — Themeable React UI blocks for modern dashboards, SaaS apps, and portfolios.**

Supporting line:

**Start with glass. Customize everything.**

---

## V1 must-have qualities

Every v1 component/block should be:

- Written in React + TypeScript
- Tailwind-first
- Themeable using CSS variables
- Customizable using `className`
- Accessible where applicable
- Motion-ready, but not animation-heavy by default
- Documented with examples
- Useful in a real app or portfolio

---

## Recommended V1 stack

| Area | Tool |
|---|---|
| Core | React + TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion / Motion |
| Utilities | clsx, tailwind-merge, class-variance-authority |
| Build | tsup |
| Docs/Preview | Storybook |
| Testing | Vitest + React Testing Library |
| Package manager | pnpm |
| Releases | Changesets |
| Repo | GitHub |
| Package registry | npm |

---

## V1 package structure

```txt
glassforge-ui/
  apps/
    docs/
    playground/
  packages/
    ui/
      src/
        components/
        blocks/
        hooks/
        styles/
        utils/
        index.ts
      package.json
  .changeset/
  package.json
  pnpm-workspace.yaml
  README.md
```

---

## V1 components and blocks

### 1. `Surface`

The foundational visual container.

Purpose:

- Base themeable surface used by other components
- Supports glass, solid, soft, outline, and ghost variants

Suggested props:

```ts
type SurfaceVariant = "glass" | "solid" | "soft" | "outline" | "ghost";
type SurfaceTone = "neutral" | "blue" | "violet" | "emerald" | "rose" | "amber";
type SurfaceRadius = "md" | "lg" | "xl" | "2xl" | "3xl";
type SurfaceIntensity = "subtle" | "medium" | "strong";
```

Must support:

- `variant`
- `tone`
- `radius`
- `intensity`
- `className`
- `children`

---

### 2. `Action`

Themeable CTA/action component.

Purpose:

- Button-like action component for CTAs inside GlassForge blocks
- Should not be a full generic button replacement at first

Suggested variants:

- `solid`
- `glass`
- `soft`
- `outline`
- `ghost`
- `glow`

Suggested sizes:

- `sm`
- `md`
- `lg`

Must support:

- `asChild` later if using Radix Slot
- `leftIcon`
- `rightIcon`
- `className`
- `disabled`

---

### 3. `Panel`

Section/card wrapper built on top of `Surface`.

Purpose:

- Used for dashboard sections, content sections, and layout grouping

Must support:

- Header slot
- Footer slot
- Children
- Variant props passed to `Surface`

---

### 4. `Navbar`

Themeable navigation block.

Purpose:

- Useful for SaaS landing pages, portfolios, and docs demos

Must support:

- Logo/brand slot
- Nav links
- CTA slot
- Mobile menu later; optional in v1
- Sticky/floating style option

---

### 5. `Hero`

Landing page hero block.

Purpose:

- Main marketing/demo component for the library
- Should visually sell GlassForge UI

Must support:

- Eyebrow text
- Title
- Description
- Primary CTA
- Secondary CTA
- Visual/content slot
- Background option

---

### 6. `MetricCard`

Dashboard metric card.

Purpose:

- Shows number, label, trend, and optional icon

Must support:

- Label
- Value
- Trend
- Icon
- Tone
- Variant

---

### 7. `StatsGrid`

Dashboard stats layout.

Purpose:

- Grid wrapper around multiple `MetricCard` items

Must support:

- Array-based API or children composition
- Responsive grid
- Gap control

---

### 8. `SidebarShell`

Dashboard/app layout block.

Purpose:

- Gives real product usefulness beyond visual components

Must support:

- Sidebar slot
- Header slot
- Main content slot
- Collapsed state later; optional in v1

---

### 9. `LoginPanel`

Auth UI block.

Purpose:

- Practical SaaS block that demonstrates theme customization

Must support:

- Title
- Description
- Form slot
- Social login slot optional
- Footer slot

---

### 10. `AuroraBackground`

Optional visual background component.

Purpose:

- Makes demo pages and hero sections look premium
- Should be optional and not required for other components

Must support:

- Intensity
- Blur
- Animated on/off
- Custom className

---

## V1 exports

Recommended exports:

```ts
export { Surface } from "./components/surface";
export { Action } from "./components/action";
export { Panel } from "./components/panel";
export { Navbar } from "./blocks/navbar";
export { Hero } from "./blocks/hero";
export { MetricCard } from "./components/metric-card";
export { StatsGrid } from "./blocks/stats-grid";
export { SidebarShell } from "./blocks/sidebar-shell";
export { LoginPanel } from "./blocks/login-panel";
export { AuroraBackground } from "./components/aurora-background";
```

Optional aliases later:

```ts
export { Surface as GlassSurface };
export { Panel as GlassPanel };
```

---

## V1 theme presets

Ship with these presets conceptually:

| Preset | Description |
|---|---|
| `glass` | Default premium frosted/glass look |
| `solid` | Clean solid app UI |
| `soft` | Light modern SaaS style |
| `midnight` | Dark dashboard style |

V1 can implement these using CSS variables, not necessarily a complex theme provider.

---

## V1 documentation pages

Minimum docs/pages:

1. Introduction
2. Installation
3. Theming
4. Surface
5. Action
6. Hero
7. Navbar
8. MetricCard / StatsGrid
9. SidebarShell
10. LoginPanel

---

## V1 demo page

Build one polished demo page using only GlassForge UI components.

Suggested sections:

1. Navbar
2. Hero
3. StatsGrid
4. Feature/Panel section
5. LoginPanel or dashboard preview
6. Footer

This page becomes the homepage, portfolio proof, and social preview.

---

## Do not include in V1

Avoid these for v1:

- Advanced DataTable
- Date picker
- Calendar
- Full form system
- Command menu
- Complex charts
- Multi-theme GUI builder
- CLI installer
- Paid template system

These can come later.

---

## V1 release checklist

- [ ] Repo initialized
- [ ] pnpm workspace configured
- [ ] `packages/ui` created
- [ ] TypeScript configured
- [ ] Tailwind configured
- [ ] tsup build working
- [ ] Storybook working
- [ ] CSS variables added
- [ ] `cn` utility added
- [ ] Surface built
- [ ] Action built
- [ ] Panel built
- [ ] Hero built
- [ ] Navbar built
- [ ] MetricCard built
- [ ] StatsGrid built
- [ ] SidebarShell built
- [ ] LoginPanel built
- [ ] AuroraBackground built
- [ ] README written
- [ ] License added
- [ ] Changesets initialized
- [ ] npm package metadata finalized
- [ ] First version published as `0.1.0`
