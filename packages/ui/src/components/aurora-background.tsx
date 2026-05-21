"use client";
import { forwardRef, type HTMLAttributes } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../utils/cn";

export interface AuroraBackgroundProps extends HTMLAttributes<HTMLDivElement> {
  intensity?: "subtle" | "medium" | "strong";
  blur?: number;
  animated?: boolean;
}

const intensityOpacity = { subtle: 0.25, medium: 0.45, strong: 0.7 };

export const AuroraBackground = forwardRef<HTMLDivElement, AuroraBackgroundProps>(
  (
    { intensity = "medium", blur = 80, animated = true, className, style, ...rest },
    ref,
  ) => {
    const reduce = useReducedMotion();
    const shouldAnimate = animated && !reduce;
    const opacity = intensityOpacity[intensity];

    return (
      <div
        ref={ref}
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
        style={style}
        {...rest}
      >
        <motion.div
          className="absolute -top-32 -left-24 h-[36rem] w-[36rem] rounded-full"
          style={{
            background: `radial-gradient(circle, rgb(168 85 247 / ${opacity}), transparent 60%)`,
            filter: `blur(${blur}px)`,
          }}
          animate={
            shouldAnimate
              ? { x: [0, 60, -20, 0], y: [0, 40, 20, 0] }
              : undefined
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 h-[32rem] w-[32rem] rounded-full"
          style={{
            background: `radial-gradient(circle, rgb(56 189 248 / ${opacity}), transparent 60%)`,
            filter: `blur(${blur}px)`,
          }}
          animate={
            shouldAnimate
              ? { x: [0, -50, 30, 0], y: [0, -30, 20, 0] }
              : undefined
          }
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 left-1/3 h-[28rem] w-[28rem] rounded-full"
          style={{
            background: `radial-gradient(circle, rgb(244 63 94 / ${opacity * 0.7}), transparent 60%)`,
            filter: `blur(${blur}px)`,
          }}
          animate={
            shouldAnimate
              ? { x: [0, 30, -40, 0], y: [0, -20, 10, 0] }
              : undefined
          }
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    );
  },
);
AuroraBackground.displayName = "AuroraBackground";
