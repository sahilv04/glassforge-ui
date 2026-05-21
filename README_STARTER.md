# GlassForge UI

**Themeable React UI blocks for modern dashboards, SaaS apps, and portfolios.**

Start with glass. Customize everything.

GlassForge UI is a themeable React UI kit built with TypeScript, Tailwind, and Motion. It provides premium surfaces, animated components, and production-ready blocks for dashboards, SaaS products, landing pages, and portfolio experiences.

> This project is in early development.

---

## Features

- React + TypeScript
- Tailwind-first styling
- Themeable with CSS variables
- Glass, solid, soft, outline, and ghost variants
- Motion-friendly components
- Dashboard and landing page blocks
- Customizable with `className`
- Built for modern SaaS apps and portfolios

---

## Installation

```bash
npm install @glassforge/ui
```

or

```bash
pnpm add @glassforge/ui
```

---

## Usage

```tsx
import "@glassforge/ui/styles.css";
import { Surface, Action } from "@glassforge/ui";

export default function Example() {
  return (
    <Surface variant="glass" radius="2xl" className="p-6">
      <h2 className="text-xl font-semibold">Build premium interfaces faster</h2>
      <p className="mt-2 text-sm opacity-80">
        Themeable React UI blocks for dashboards, SaaS apps, and portfolios.
      </p>
      <Action className="mt-4">Get Started</Action>
    </Surface>
  );
}
```

---

## V1 Components

- Surface
- Action
- Panel
- Navbar
- Hero
- MetricCard
- StatsGrid
- SidebarShell
- LoginPanel
- AuroraBackground

---

## Philosophy

GlassForge UI is not another generic component library.

It is block-first, themeable, and focused on polished product interfaces.

The default visual preset is glass-inspired, but developers can customize the system fully through tokens, variants, and Tailwind classes.

---

## License

MIT
