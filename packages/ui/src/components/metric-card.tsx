import { forwardRef, type ReactNode } from "react";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Surface, type SurfaceProps } from "./surface";
import { cn } from "../utils/cn";

export interface MetricCardProps extends Omit<SurfaceProps, "title"> {
  label: ReactNode;
  value: ReactNode;
  trend?: {
    direction: "up" | "down" | "flat";
    label?: ReactNode;
  };
  icon?: ReactNode;
}

const trendStyles = {
  up: "text-emerald-400",
  down: "text-rose-400",
  flat: "text-[rgb(var(--gf-muted))]",
};

const TrendIcon = {
  up: TrendingUp,
  down: TrendingDown,
  flat: Minus,
};

export const MetricCard = forwardRef<HTMLDivElement, MetricCardProps>(
  ({ label, value, trend, icon, className, ...rest }, ref) => {
    const Trend = trend ? TrendIcon[trend.direction] : null;
    return (
      <Surface
        ref={ref}
        className={cn("p-5 flex flex-col gap-3", className)}
        {...rest}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider text-[rgb(var(--gf-muted))]">
            {label}
          </span>
          {icon ? (
            <span className="text-[rgb(var(--gf-muted))]">{icon}</span>
          ) : null}
        </div>
        <div className="text-3xl font-semibold tracking-tight text-[rgb(var(--gf-foreground))]">
          {value}
        </div>
        {trend && Trend ? (
          <div
            className={cn(
              "inline-flex items-center gap-1 text-xs",
              trendStyles[trend.direction],
            )}
          >
            <Trend size={14} />
            {trend.label}
          </div>
        ) : null}
      </Surface>
    );
  },
);
MetricCard.displayName = "MetricCard";
