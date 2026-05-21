import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  brand?: ReactNode;
  links?: ReactNode;
  cta?: ReactNode;
  sticky?: boolean;
  floating?: boolean;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ brand, links, cta, sticky, floating, className, ...rest }, ref) => (
    <nav
      ref={ref}
      className={cn(
        "z-40 w-full text-[rgb(var(--gf-foreground))]",
        sticky && !floating ? "sticky top-0" : "",
        floating ? "sticky top-4" : "",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between gap-6 px-6 py-3",
          floating
            ? "max-w-5xl mt-4 rounded-2xl border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] backdrop-blur-[var(--gf-blur)] shadow-[var(--gf-shadow)]"
            : "max-w-6xl border-b border-[rgb(var(--gf-border)/var(--gf-border-alpha))] bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] backdrop-blur-[var(--gf-blur)]",
        )}
      >
        {brand ? (
          <div className="flex items-center gap-2 font-semibold">{brand}</div>
        ) : null}
        {links ? (
          <div className="hidden md:flex items-center gap-6 text-sm text-[rgb(var(--gf-muted))]">
            {links}
          </div>
        ) : null}
        {cta ? <div className="flex items-center gap-2">{cta}</div> : null}
      </div>
    </nav>
  ),
);
Navbar.displayName = "Navbar";
