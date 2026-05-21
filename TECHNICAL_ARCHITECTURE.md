# GlassForge UI — Technical Architecture

## Architecture principle

GlassForge UI should be built as a flexible React package with a themeable design-token layer, variant-based styling, and block-first components.

The package should be easy to install, easy to tree-shake, and easy to customize.

---

## Recommended stack

```txt
React
TypeScript
Tailwind CSS
Framer Motion / Motion
Radix UI where useful
clsx
tailwind-merge
class-variance-authority
tsup
Storybook
Vitest
React Testing Library
pnpm
Changesets
```

---

## Monorepo structure

```txt
glassforge-ui/
  apps/
    docs/
      # Documentation site or Storybook/docs shell
    playground/
      # Vite app for testing package usage locally
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
      tsup.config.ts
      tailwind.config.ts
  .changeset/
  package.json
  pnpm-workspace.yaml
  README.md
```

---

## Package strategy

Start with one package:

```txt
@glassforge/ui
```

Do not create multiple packages in v1 unless needed.

Possible future packages:

```txt
@glassforge/ui
@glassforge/cli
@glassforge/templates
@glassforge/themes
```

---

## Styling strategy

Use a combination of:

1. CSS variables for theme tokens
2. Tailwind utility classes for layout and styling
3. CVA for variants
4. `className` for developer overrides

---

## CSS variable tokens

Create a base CSS file:

```txt
packages/ui/src/styles/glassforge.css
```

Suggested variables:

```css
:root {
  --gf-background: 255 255 255;
  --gf-foreground: 15 23 42;
  --gf-muted: 100 116 139;
  --gf-primary: 124 58 237;
  --gf-primary-foreground: 255 255 255;
  --gf-border: 255 255 255;
  --gf-border-alpha: 0.16;
  --gf-surface-alpha: 0.14;
  --gf-radius: 1.25rem;
  --gf-blur: 24px;
  --gf-shadow: 0 24px 80px rgb(15 23 42 / 0.18);
  --gf-glow: 0 0 48px rgb(124 58 237 / 0.28);
}

.dark {
  --gf-background: 2 6 23;
  --gf-foreground: 248 250 252;
  --gf-muted: 148 163 184;
  --gf-primary: 168 85 247;
  --gf-primary-foreground: 255 255 255;
  --gf-border: 255 255 255;
  --gf-border-alpha: 0.12;
  --gf-surface-alpha: 0.10;
  --gf-shadow: 0 24px 80px rgb(0 0 0 / 0.35);
  --gf-glow: 0 0 56px rgb(168 85 247 / 0.35);
}
```

The exact variables can evolve, but v1 should establish a stable theme contract.

---

## Utility function

Create:

```txt
packages/ui/src/utils/cn.ts
```

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Variant strategy

Use `class-variance-authority` for core visual variants.

Example component dimensions:

```ts
variant: "glass" | "solid" | "soft" | "outline" | "ghost";
tone: "neutral" | "blue" | "violet" | "emerald" | "rose" | "amber";
radius: "md" | "lg" | "xl" | "2xl" | "3xl";
intensity: "subtle" | "medium" | "strong";
motion: "none" | "fade" | "lift" | "float" | "glow";
```

Keep the API simple in v1. Avoid too many props until the design is stable.

---

## Component design rules

Every component should:

- Accept `className`
- Forward refs where appropriate
- Use TypeScript interfaces
- Avoid hardcoded colors where tokens can be used
- Avoid forcing glass style only
- Be usable in light and dark mode
- Have Storybook examples
- Have at least basic tests for rendering

---

## Naming strategy

Use neutral component names:

```txt
Surface
Action
Panel
Navbar
Hero
MetricCard
StatsGrid
SidebarShell
LoginPanel
AuroraBackground
```

Avoid naming everything `GlassSomething`, because the project is themeable and not glass-only.

Use glass as a preset/variant:

```tsx
<Surface variant="glass" />
<Surface variant="solid" />
<Surface variant="soft" />
```

---

## Build setup

Use `tsup` for package builds.

Expected outputs:

```txt
dist/index.js
dist/index.mjs
dist/index.d.ts
```

Package should support:

- ESM
- CJS if needed
- Type declarations
- CSS import

Suggested package exports:

```json
{
  "name": "@glassforge/ui",
  "version": "0.1.0",
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "types": "dist/index.d.ts",
  "sideEffects": ["**/*.css"],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.mjs",
      "require": "./dist/index.js"
    },
    "./styles.css": "./dist/styles.css"
  }
}
```

---

## Tailwind strategy

Consumers should be able to import the CSS and use Tailwind classes.

Possible usage:

```tsx
import "@glassforge/ui/styles.css";
import { Hero, Surface } from "@glassforge/ui";
```

For v1, avoid complex Tailwind plugin work unless necessary.

---

## Motion strategy

Use Motion/Framer Motion carefully.

Rules:

- Animations should be tasteful and subtle.
- Do not animate everything by default.
- Support reduced motion where possible.
- Allow `motion="none"`.
- Keep heavy background animations optional.

---

## Accessibility strategy

Use semantic HTML first.

For complex interactive components later, use Radix UI primitives.

V1 accessibility targets:

- Keyboard-friendly actions
- Proper button/link semantics
- Sufficient contrast in default themes
- Avoid motion-only communication
- Support disabled states

---

## Testing strategy

For v1:

- Test component rendering
- Test className merging
- Test basic variants
- Test disabled action state

Do not over-invest in complex tests before API stabilizes.

---

## Documentation strategy

Use Storybook for component documentation and visual review.

Each component should include stories for:

- Default
- Glass
- Solid
- Soft
- Dark
- Custom className
- With icon/content where relevant

---

## Release strategy

Use Changesets.

Flow:

```bash
pnpm changeset
pnpm changeset version
pnpm changeset publish
```

Use semantic versioning:

- Patch: fixes and small visual corrections
- Minor: new components or new non-breaking props
- Major: breaking API changes

Start at:

```txt
0.1.0
```

---

## Future CLI strategy

Do not build CLI in v1.

Future CLI idea:

```bash
npx glassforge add hero
npx glassforge add sidebar-shell
npx glassforge add login-panel
```

This would support copy-paste ownership similar to shadcn-style workflows.
