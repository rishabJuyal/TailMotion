import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { cn } from "../../lib/utils";

const badgeVariants = {
  indigo: {
    solid: "bg-indigo-600 text-white",
    subtle: "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/80 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800",
    outline: "border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 bg-transparent",
    glow: "bg-indigo-600 text-white shadow-[0_0_12px_rgba(79,70,229,0.5)]",
    glass: "bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 text-indigo-700 dark:text-indigo-300",
  },
  violet: {
    solid: "bg-violet-600 text-white",
    subtle: "bg-violet-100 text-violet-700 dark:bg-violet-950/80 dark:text-violet-300 border border-violet-200 dark:border-violet-800",
    outline: "border-2 border-violet-600 text-violet-600 dark:text-violet-400 bg-transparent",
    glow: "bg-violet-600 text-white shadow-[0_0_12px_rgba(124,58,237,0.5)]",
    glass: "bg-violet-500/10 backdrop-blur-md border border-violet-500/30 text-violet-700 dark:text-violet-300",
  },
  emerald: {
    solid: "bg-emerald-600 text-white",
    subtle: "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800",
    outline: "border-2 border-emerald-600 text-emerald-600 dark:text-emerald-400 bg-transparent",
    glow: "bg-emerald-600 text-white shadow-[0_0_12px_rgba(5,150,105,0.5)]",
    glass: "bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-700 dark:text-emerald-300",
  },
  rose: {
    solid: "bg-rose-600 text-white",
    subtle: "bg-rose-100 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800",
    outline: "border-2 border-rose-600 text-rose-600 dark:text-rose-400 bg-transparent",
    glow: "bg-rose-600 text-white shadow-[0_0_12px_rgba(225,29,72,0.5)]",
    glass: "bg-rose-500/10 backdrop-blur-md border border-rose-500/30 text-rose-700 dark:text-rose-300",
  },
  amber: {
    solid: "bg-amber-500 text-zinc-950 font-bold",
    subtle: "bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-200 dark:border-amber-800",
    outline: "border-2 border-amber-500 text-amber-600 dark:text-amber-400 bg-transparent",
    glow: "bg-amber-500 text-zinc-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]",
    glass: "bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-amber-700 dark:text-amber-300",
  },
  cyan: {
    solid: "bg-cyan-600 text-white",
    subtle: "bg-cyan-100 text-cyan-800 dark:bg-cyan-950/80 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800",
    outline: "border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 bg-transparent",
    glow: "bg-cyan-600 text-white shadow-[0_0_12px_rgba(8,145,178,0.5)]",
    glass: "bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 text-cyan-700 dark:text-cyan-300",
  },
  zinc: {
    solid: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
    subtle: "bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700",
    outline: "border-2 border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100 bg-transparent",
    glow: "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-[0_0_12px_rgba(113,113,122,0.5)]",
    glass: "bg-zinc-500/10 backdrop-blur-md border border-zinc-500/30 text-zinc-900 dark:text-zinc-100",
  },
};

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

export default function MotionBadge({
  label = "Feature Live",
  variant = "subtle",
  colorScheme = "emerald",
  size = "md",
  radius = "full",
  pulseDot = true,
  glow = false,
  removable = false,
  iconName = "Zap",
  onRemove,
  className = "",
}) {
  const IconComponent = Icons[iconName] || Icons.Zap;
  const scheme = badgeVariants[colorScheme] || badgeVariants.emerald;
  const style = variant === "glow" ? scheme.glow : (scheme[variant] || scheme.subtle);
  const radiusClass = radiusClasses[radius] || radiusClasses.full;

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px] gap-1 min-h-[20px]",
    md: "px-3 py-1 text-xs gap-1.5 min-h-[24px]",
    lg: "px-4 py-1.5 text-sm gap-2 min-h-[30px]",
  }[size] || "px-3 py-1 text-xs gap-1.5";

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center font-semibold transition-all duration-200 select-none cursor-default",
        style,
        radiusClass,
        sizeStyles,
        glow && scheme.glow,
        className
      )}
    >
      {pulseDot && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current" />
        </span>
      )}

      {iconName && <IconComponent className="w-3.5 h-3.5 shrink-0" />}

      <span>{label}</span>

      {removable && (
        <button
          onClick={onRemove}
          className="ml-1 -mr-1 p-0.5 rounded-full hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
        >
          <Icons.X className="w-3 h-3" />
        </button>
      )}
    </motion.div>
  );
}
