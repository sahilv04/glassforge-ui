/**
 * Optional Tailwind preset for consumers who want to extend their own Tailwind
 * config with GlassForge tokens. Not required — most consumers should just
 * import `@glassforge/ui/styles.css`.
 */
export const glassforgePreset = {
  theme: {
    extend: {
      colors: {
        "gf-bg": "rgb(var(--gf-background) / <alpha-value>)",
        "gf-fg": "rgb(var(--gf-foreground) / <alpha-value>)",
        "gf-muted": "rgb(var(--gf-muted) / <alpha-value>)",
        "gf-primary": "rgb(var(--gf-primary) / <alpha-value>)",
        "gf-primary-fg": "rgb(var(--gf-primary-foreground) / <alpha-value>)",
      },
      borderRadius: {
        gf: "var(--gf-radius)",
      },
      boxShadow: {
        gf: "var(--gf-shadow)",
        "gf-glow": "var(--gf-glow)",
      },
      backdropBlur: {
        gf: "var(--gf-blur)",
      },
    },
  },
} as const;

export default glassforgePreset;
