import { forwardRef, type ReactNode } from "react";
import { Surface, type SurfaceProps } from "./surface";
import { cn } from "../utils/cn";

export interface PanelProps extends Omit<SurfaceProps, "title"> {
  header?: ReactNode;
  footer?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;
}

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    { header, footer, title, description, children, className, ...rest },
    ref,
  ) => {
    const showDefaultHeader = !header && (title || description);
    return (
      <Surface ref={ref} className={cn("flex flex-col", className)} {...rest}>
        {header ? (
          <div className="px-6 pt-6 pb-4 border-b border-[rgb(var(--gf-border)/var(--gf-border-alpha))]">
            {header}
          </div>
        ) : null}
        {showDefaultHeader ? (
          <div className="px-6 pt-6 pb-4">
            {title ? (
              <h3 className="text-base font-semibold text-[rgb(var(--gf-foreground))]">
                {title}
              </h3>
            ) : null}
            {description ? (
              <p className="text-sm text-[rgb(var(--gf-muted))] mt-1">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        <div className="px-6 py-6 flex-1">{children}</div>
        {footer ? (
          <div className="px-6 py-4 border-t border-[rgb(var(--gf-border)/var(--gf-border-alpha))]">
            {footer}
          </div>
        ) : null}
      </Surface>
    );
  },
);
Panel.displayName = "Panel";
