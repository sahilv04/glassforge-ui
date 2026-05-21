import { forwardRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const surfaceVariants = cva(
  "relative overflow-hidden border transition-colors",
  {
    variants: {
      variant: {
        glass:
          "bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] text-[rgb(var(--gf-foreground))] border-[rgb(var(--gf-border)/var(--gf-border-alpha))] backdrop-blur-[var(--gf-blur)] shadow-[var(--gf-shadow)]",
        solid:
          "bg-[rgb(var(--gf-background))] text-[rgb(var(--gf-foreground))] border-[rgb(var(--gf-border)/0.12)] shadow-sm",
        soft:
          "bg-[rgb(var(--gf-primary)/0.08)] text-[rgb(var(--gf-foreground))] border-[rgb(var(--gf-primary)/0.14)]",
        outline:
          "bg-transparent text-[rgb(var(--gf-foreground))] border-[rgb(var(--gf-border)/0.22)]",
        ghost:
          "bg-transparent text-[rgb(var(--gf-foreground))] border-transparent shadow-none",
      },
      tone: {
        neutral: "",
        blue: "[--gf-primary:59_130_246]",
        violet: "[--gf-primary:139_92_246]",
        emerald: "[--gf-primary:16_185_129]",
        rose: "[--gf-primary:244_63_94]",
        amber: "[--gf-primary:245_158_11]",
      },
      radius: {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        "2xl": "rounded-2xl",
        "3xl": "rounded-3xl",
      },
      intensity: {
        subtle: "[--gf-surface-alpha:0.06] [--gf-border-alpha:0.08]",
        medium: "",
        strong: "[--gf-surface-alpha:0.22] [--gf-border-alpha:0.28]",
      },
    },
    defaultVariants: {
      variant: "glass",
      tone: "neutral",
      radius: "2xl",
      intensity: "medium",
    },
  },
);

export interface SurfaceProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof surfaceVariants> {}

export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, variant, tone, radius, intensity, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        surfaceVariants({ variant, tone, radius, intensity }),
        className,
      )}
      {...props}
    />
  ),
);
Surface.displayName = "Surface";
