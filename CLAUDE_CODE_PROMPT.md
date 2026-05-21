# Claude Code Starter Prompt for GlassForge UI

Use this prompt inside Claude Code when starting the repository.

---

You are helping me build **GlassForge UI**, an open-source React UI kit.

## Product direction

GlassForge UI is a themeable React UI block system for modern dashboards, SaaS apps, portfolios, and premium web interfaces.

It should ship with a polished glass-style preset, but it must not be limited to glassmorphism. Developers should be able to customize themes, colors, radius, shadows, blur, motion, and layout behavior.

Primary tagline:

**Themeable React UI blocks for modern dashboards, SaaS apps, and portfolios.**

Supporting line:

**Start with glass. Customize everything.**

## Tech stack

Use:

- React
- TypeScript
- Tailwind CSS
- Framer Motion / Motion
- clsx
- tailwind-merge
- class-variance-authority
- tsup
- Storybook
- Vitest
- React Testing Library
- pnpm
- Changesets

## Repo structure

Create a pnpm monorepo:

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

## V1 components

Start only with these:

1. Surface
2. Action
3. Panel
4. Navbar
5. Hero
6. MetricCard
7. StatsGrid
8. SidebarShell
9. LoginPanel
10. AuroraBackground

Use neutral names, not GlassButton/GlassCard, because the library is themeable.

## Component rules

Every component must:

- Use TypeScript
- Accept `className`
- Use CSS variables where possible
- Use Tailwind utility classes
- Use CVA variants where useful
- Support light and dark mode
- Be customizable
- Avoid being locked to only glass style
- Have Storybook stories
- Have basic tests where practical

## Styling architecture

Create a base CSS file with variables:

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

## First implementation task

Set up the monorepo and implement the first package `@glassforge/ui` with:

- `cn` utility
- `styles/glassforge.css`
- `Surface` component
- `Action` component
- `Panel` component
- `index.ts` exports
- tsup build config
- basic Storybook setup
- basic README

Do not overbuild. Keep v1 small, clean, and maintainable.
