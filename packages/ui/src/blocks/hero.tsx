import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface HeroProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  primaryCta?: ReactNode;
  secondaryCta?: ReactNode;
  visual?: ReactNode;
  background?: ReactNode;
  align?: "center" | "left";
}

export const Hero = forwardRef<HTMLDivElement, HeroProps>(
  (
    {
      eyebrow,
      title,
      description,
      primaryCta,
      secondaryCta,
      visual,
      background,
      align = "center",
      className,
      ...rest
    },
    ref,
  ) => (
    <section
      ref={ref}
      className={cn(
        "relative isolate w-full overflow-hidden text-[rgb(var(--gf-foreground))]",
        className,
      )}
      {...rest}
    >
      {background ? <div className="absolute inset-0 -z-10">{background}</div> : null}
      <div
        className={cn(
          "mx-auto max-w-6xl px-6 py-24 md:py-32 flex flex-col gap-12",
          visual ? "lg:flex-row lg:items-center" : "",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-6",
            visual ? "lg:w-1/2" : "mx-auto max-w-3xl",
            align === "center" && !visual ? "text-center items-center" : "items-start",
          )}
        >
          {eyebrow ? (
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] backdrop-blur-[var(--gf-blur)] px-3 py-1 text-xs uppercase tracking-wider text-[rgb(var(--gf-muted))]">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
            {title}
          </h1>
          {description ? (
            <p className="text-lg md:text-xl text-[rgb(var(--gf-muted))] max-w-2xl">
              {description}
            </p>
          ) : null}
          {primaryCta || secondaryCta ? (
            <div
              className={cn(
                "flex flex-wrap gap-3 pt-2",
                align === "center" && !visual ? "justify-center" : "",
              )}
            >
              {primaryCta}
              {secondaryCta}
            </div>
          ) : null}
        </div>
        {visual ? <div className="lg:w-1/2">{visual}</div> : null}
      </div>
    </section>
  ),
);
Hero.displayName = "Hero";
