---
"@glassforge/ui": minor
---

Initial v0.1.0 release of GlassForge UI.

Components:

- `Surface` — themeable container (variants: glass/solid/soft/outline/ghost, tones, radii, intensity)
- `Action` — themeable CTA (six variants × three sizes, asChild via Radix Slot, icon slots)
- `Panel` — Surface with header/title/description/footer slots
- `MetricCard` — dashboard metric with trend indicator
- `StatsGrid` — responsive grid of MetricCards (array or children API)
- `SidebarShell` — full app layout (sidebar + header + main)
- `Hero` — marketing hero (eyebrow, title, description, CTAs, visual, background)
- `Navbar` — themeable nav (brand/links/cta, sticky/floating)
- `LoginPanel` — auth UI block
- `AuroraBackground` — optional animated radial glows (respects reduced motion)

Themes: `glass`, `solid`, `soft`, `midnight` presets shipped as CSS classes. Pre-compiled `styles.css` ships in the package — no Tailwind required. Optional Tailwind preset at `@glassforge/ui/tailwind-preset`.
