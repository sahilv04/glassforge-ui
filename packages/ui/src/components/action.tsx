import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--gf-primary)/0.5)] focus-visible:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none select-none whitespace-nowrap",
  {
    variants: {
      variant: {
        solid:
          "bg-[rgb(var(--gf-primary))] text-[rgb(var(--gf-primary-foreground))] hover:opacity-90 active:opacity-95 shadow-sm",
        glass:
          "bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] text-[rgb(var(--gf-foreground))] border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] backdrop-blur-[var(--gf-blur)] hover:bg-[rgb(var(--gf-background)/0.22)]",
        soft:
          "bg-[rgb(var(--gf-primary)/0.12)] text-[rgb(var(--gf-primary))] hover:bg-[rgb(var(--gf-primary)/0.18)]",
        outline:
          "bg-transparent text-[rgb(var(--gf-foreground))] border border-[rgb(var(--gf-border)/0.22)] hover:bg-[rgb(var(--gf-background)/0.08)]",
        ghost:
          "bg-transparent text-[rgb(var(--gf-foreground))] hover:bg-[rgb(var(--gf-background)/0.08)]",
        glow:
          "bg-[rgb(var(--gf-primary))] text-[rgb(var(--gf-primary-foreground))] shadow-[var(--gf-glow)] hover:brightness-110",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-md",
        md: "h-10 px-4 text-sm rounded-lg",
        lg: "h-12 px-6 text-base rounded-xl",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export interface ActionProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof actionVariants> {
  asChild?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Action = forwardRef<HTMLButtonElement, ActionProps>(
  (
    {
      className,
      variant,
      size,
      asChild,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(actionVariants({ variant, size }), className);
    if (asChild) {
      return (
        <Slot ref={ref as never} className={classes} {...props}>
          {children}
        </Slot>
      );
    }
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {leftIcon ? <span className="inline-flex shrink-0">{leftIcon}</span> : null}
        {children}
        {rightIcon ? <span className="inline-flex shrink-0">{rightIcon}</span> : null}
      </button>
    );
  },
);
Action.displayName = "Action";
