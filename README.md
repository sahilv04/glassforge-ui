# GlassForge UI

> Themeable React UI blocks for modern dashboards, SaaS apps, and portfolios.

**Start with glass. Customize everything.**

[![Live demo](https://img.shields.io/badge/demo-live-7c3aed)](https://glassforge-ui.vercel.app)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![npm](https://img.shields.io/badge/npm-%40glassforge%2Fui-cb3837)](https://www.npmjs.com/package/@glassforge/ui)
[![Built with TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6)](https://www.typescriptlang.org/)

**[→ Live demo](https://glassforge-ui.vercel.app)**

GlassForge UI ships a small, premium set of themeable React components and blocks. Glass is the default showcase preset — but every component is driven by CSS variables, so you can swap to solid, soft, midnight, or any custom theme without forking the components.

## Install

```bash
pnpm add @glassforge/ui
# or: npm install @glassforge/ui  |  yarn add @glassforge/ui
```

Import the stylesheet once in your app entry — no Tailwind required:

```tsx
import "@glassforge/ui/styles.css";
```

## Quickstart

```tsx
import { Hero, Action } from "@glassforge/ui";
import { AuroraBackground } from "@glassforge/ui/client";
import { ArrowRight } from "lucide-react";

export default function Landing() {
  return (
    <Hero
      title="Build a polished product, fast."
      description="Drop-in React blocks with a themeable design system."
      primaryCta={
        <Action variant="glow" rightIcon={<ArrowRight size={16} />}>
          Get started
        </Action>
      }
      background={<AuroraBackground />}
    />
  );
}
```

## Theming

Theme tokens are CSS variables. Switch presets by adding a class on `<html>`:

```html
<html class="dark gf-theme-glass">
  <!-- glass | solid | soft | midnight -->
</html>
```

Or set individual tokens to brand the kit:

```css
:root {
  --gf-primary: 244 63 94; /* rose */
  --gf-radius: 0.5rem;
  --gf-blur: 12px;
}
```

Optional Tailwind preset for power users:

```ts
import { glassforgePreset } from "@glassforge/ui/tailwind-preset";
export default { presets: [glassforgePreset], content: [...] };
```

## Components

| Category | Exports |
|---|---|
| Primitives | `Surface`, `Action`, `Panel` |
| Dashboard | `MetricCard`, `StatsGrid`, `SidebarShell` |
| Marketing | `Hero`, `Navbar`, `LoginPanel` |
| Client-only | `AuroraBackground` (from `@glassforge/ui/client`) |

Every component accepts `className`, forwards `ref`, and is fully typed.

## Monorepo

```
glassforge-ui/
├── apps/
│   ├── docs/         # Next.js 16 docs + demo
│   └── playground/
└── packages/
    └── ui/           # @glassforge/ui
```

### Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start docs (Next.js) |
| `pnpm build` | Build all packages/apps |
| `pnpm build:ui` | Build `@glassforge/ui` only |
| `pnpm test` | Vitest across workspaces |
| `pnpm lint` | ESLint |
| `pnpm storybook` | Open Storybook (packages/ui) |
| `pnpm changeset` | Add a changeset |
| `pnpm release` | Build + publish via Changesets |

## License

MIT © GlassForge UI contributors
