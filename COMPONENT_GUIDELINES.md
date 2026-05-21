# GlassForge UI — Component Guidelines

## Component goal

Each component should feel premium out of the box, but never trap developers into one visual style.

Default demos can showcase glass styling, but the component API should support multiple variants, color tones, and custom classes.

---

## General rules

1. Prefer composition over rigid props.
2. Always expose `className`.
3. Use CSS variables for theme values.
4. Use variants for common styling choices.
5. Keep animations subtle.
6. Avoid unnecessary dependencies.
7. Use TypeScript strictness.
8. Support light and dark mode.
9. Do not hardcode glass-only assumptions.
10. Keep v1 APIs small and stable.

---

## Recommended prop pattern

Example:

```ts
export interface SurfaceProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "glass" | "solid" | "soft" | "outline" | "ghost";
  tone?: "neutral" | "blue" | "violet" | "emerald" | "rose" | "amber";
  radius?: "md" | "lg" | "xl" | "2xl" | "3xl";
  intensity?: "subtle" | "medium" | "strong";
}
```

---

## Required component behavior

Every component should support:

```tsx
<Component className="custom-tailwind-classes" />
```

This is non-negotiable.

Developers should always be able to override styles.

---

## Recommended variants

### Visual variants

```ts
"glass" | "solid" | "soft" | "outline" | "ghost"
```

### Tones

```ts
"neutral" | "blue" | "violet" | "emerald" | "rose" | "amber"
```

### Radius

```ts
"md" | "lg" | "xl" | "2xl" | "3xl"
```

### Motion

```ts
"none" | "fade" | "lift" | "float" | "glow"
```

Only add these where they actually make sense.

---

## Component naming

Use neutral names:

Good:

```txt
Surface
Panel
Action
Hero
Navbar
MetricCard
StatsGrid
SidebarShell
LoginPanel
```

Avoid over-specific names:

```txt
GlassButton
GlassCard
GlassHero
```

Reason: the library should be themeable, not glass-only.

---

## Styling example

```tsx
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const surfaceVariants = cva(
  "relative overflow-hidden border transition-colors",
  {
    variants: {
      variant: {
        glass:
          "bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] border-[rgb(var(--gf-border)/var(--gf-border-alpha))] backdrop-blur-[var(--gf-blur)] shadow-[var(--gf-shadow)]",
        solid:
          "bg-[rgb(var(--gf-background))] text-[rgb(var(--gf-foreground))] border-[rgb(var(--gf-border)/0.12)] shadow-sm",
        soft:
          "bg-[rgb(var(--gf-primary)/0.08)] border-[rgb(var(--gf-primary)/0.14)]",
        outline:
          "bg-transparent border-[rgb(var(--gf-border)/0.22)]",
        ghost:
          "bg-transparent border-transparent shadow-none",
      },
      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
      },
      intensity: {
        subtle: "",
        medium: "",
        strong: "",
      },
    },
    defaultVariants: {
      variant: "glass",
      radius: "2xl",
      intensity: "medium",
    },
  }
);

export interface SurfaceProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {}

export const Surface = React.forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, variant, radius, intensity, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(surfaceVariants({ variant, radius, intensity }), className)}
        {...props}
      />
    );
  }
);

Surface.displayName = "Surface";
```

---

## Storybook requirements

Each component should include stories for:

- Default
- Glass variant
- Solid variant
- Soft variant
- Outline variant
- Dark theme
- Custom className
- Real-world usage

Example story names:

```txt
Default
Glass
Solid
Soft
Outline
WithCustomClassName
DarkMode
InDashboard
```

---

## Documentation requirements

Each component doc should explain:

- What it is
- When to use it
- Props
- Examples
- Customization
- Accessibility notes if applicable

---

## API stability rules

Before publishing v1:

- Avoid adding too many props.
- Prefer `children` and slots over overly specific props.
- Do not expose internal class names as API.
- Do not promise theme tokens that may change immediately.
- Keep initial version at `0.1.0` while API is evolving.

---

## Design quality bar

A component is ready when:

- It looks good in the default demo.
- It looks acceptable in light and dark mode.
- It works without animation.
- It can be customized through `className`.
- It has TypeScript types.
- It has Storybook examples.
- It does not require app-specific assumptions.
