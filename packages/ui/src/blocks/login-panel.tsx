import { forwardRef, type ReactNode } from "react";
import { Surface, type SurfaceProps } from "../components/surface";
import { cn } from "../utils/cn";

export interface LoginPanelProps extends Omit<SurfaceProps, "title"> {
  title?: ReactNode;
  description?: ReactNode;
  social?: ReactNode;
  footer?: ReactNode;
}

export const LoginPanel = forwardRef<HTMLDivElement, LoginPanelProps>(
  (
    {
      title = "Welcome back",
      description = "Sign in to continue to your workspace.",
      social,
      footer,
      children,
      className,
      ...rest
    },
    ref,
  ) => (
    <Surface
      ref={ref}
      className={cn("w-full max-w-md p-8 flex flex-col gap-6", className)}
      {...rest}
    >
      <div className="flex flex-col gap-2 text-center">
        {title ? (
          <h2 className="text-2xl font-semibold tracking-tight text-[rgb(var(--gf-foreground))]">
            {title}
          </h2>
        ) : null}
        {description ? (
          <p className="text-sm text-[rgb(var(--gf-muted))]">{description}</p>
        ) : null}
      </div>
      {social ? (
        <>
          <div className="flex flex-col gap-2">{social}</div>
          <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-[rgb(var(--gf-muted))]">
            <div className="h-px flex-1 bg-[rgb(var(--gf-border)/var(--gf-border-alpha))]" />
            or
            <div className="h-px flex-1 bg-[rgb(var(--gf-border)/var(--gf-border-alpha))]" />
          </div>
        </>
      ) : null}
      <div className="flex flex-col gap-3">{children}</div>
      {footer ? (
        <div className="text-center text-sm text-[rgb(var(--gf-muted))]">
          {footer}
        </div>
      ) : null}
    </Surface>
  ),
);
LoginPanel.displayName = "LoginPanel";
