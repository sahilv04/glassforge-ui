import { forwardRef, type HTMLAttributes } from "react";
import { MetricCard, type MetricCardProps } from "../components/metric-card";
import { cn } from "../utils/cn";

export interface StatsGridProps extends HTMLAttributes<HTMLDivElement> {
  items?: MetricCardProps[];
  columns?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
}

const columnClasses: Record<NonNullable<StatsGridProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};
const gapClasses = { sm: "gap-3", md: "gap-4", lg: "gap-6" };

export const StatsGrid = forwardRef<HTMLDivElement, StatsGridProps>(
  ({ items, columns = 4, gap = "md", className, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn("grid grid-cols-1", columnClasses[columns], gapClasses[gap], className)}
      {...rest}
    >
      {items
        ? items.map((item, i) => <MetricCard key={i} {...item} />)
        : children}
    </div>
  ),
);
StatsGrid.displayName = "StatsGrid";
