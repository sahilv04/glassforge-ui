import { forwardRef, type HTMLAttributes, type ReactNode } from "react";
import { cn } from "../utils/cn";

export interface SidebarShellProps extends HTMLAttributes<HTMLDivElement> {
  sidebar: ReactNode;
  header?: ReactNode;
  sidebarWidth?: "sm" | "md" | "lg";
}

const widthClasses = {
  sm: "md:w-52",
  md: "md:w-64",
  lg: "md:w-72",
};

export const SidebarShell = forwardRef<HTMLDivElement, SidebarShellProps>(
  (
    { sidebar, header, sidebarWidth = "md", children, className, ...rest },
    ref,
  ) => (
    <div
      ref={ref}
      className={cn(
        "min-h-screen flex flex-col md:flex-row text-[rgb(var(--gf-foreground))]",
        className,
      )}
      {...rest}
    >
      <aside
        className={cn(
          "w-full border-b md:border-b-0 md:border-r border-[rgb(var(--gf-border)/var(--gf-border-alpha))] bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] backdrop-blur-[var(--gf-blur)] p-4 md:p-6 shrink-0",
          widthClasses[sidebarWidth],
        )}
      >
        {sidebar}
      </aside>
      <div className="flex-1 flex flex-col min-w-0">
        {header ? (
          <header className="border-b border-[rgb(var(--gf-border)/var(--gf-border-alpha))] bg-[rgb(var(--gf-background)/var(--gf-surface-alpha))] backdrop-blur-[var(--gf-blur)] px-6 py-4">
            {header}
          </header>
        ) : null}
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  ),
);
SidebarShell.displayName = "SidebarShell";
