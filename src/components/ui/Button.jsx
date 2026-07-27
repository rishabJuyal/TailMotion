import React from "react";
import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { cn } from "../../lib/utils";
import { MOTION_PRESETS } from "../../data/componentsData";

const colorClasses = {
  indigo: {
    primary: "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/25",
    secondary: "bg-indigo-100 hover:bg-indigo-200 text-indigo-700 dark:bg-indigo-950/60 dark:hover:bg-indigo-900/60 dark:text-indigo-300",
    outline: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 dark:text-indigo-400 dark:border-indigo-500",
    ghost: "text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 dark:text-indigo-400",
    destructive: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/25",
    glass: "bg-indigo-500/10 backdrop-blur-md border border-indigo-500/30 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-500/20",
    glow: "shadow-[0_0_20px_rgba(79,70,229,0.4)]",
  },
  violet: {
    primary: "bg-violet-600 hover:bg-violet-500 text-white shadow-violet-500/25",
    secondary: "bg-violet-100 hover:bg-violet-200 text-violet-700 dark:bg-violet-950/60 dark:hover:bg-violet-900/60 dark:text-violet-300",
    outline: "border-2 border-violet-600 text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/40 dark:text-violet-400 dark:border-violet-500",
    ghost: "text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/40 dark:text-violet-400",
    destructive: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/25",
    glass: "bg-violet-500/10 backdrop-blur-md border border-violet-500/30 text-violet-700 dark:text-violet-300 hover:bg-violet-500/20",
    glow: "shadow-[0_0_20px_rgba(124,58,237,0.4)]",
  },
  emerald: {
    primary: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/25",
    secondary: "bg-emerald-100 hover:bg-emerald-200 text-emerald-700 dark:bg-emerald-950/60 dark:hover:bg-emerald-900/60 dark:text-emerald-300",
    outline: "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-500",
    ghost: "text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 dark:text-emerald-400",
    destructive: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/25",
    glass: "bg-emerald-500/10 backdrop-blur-md border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20",
    glow: "shadow-[0_0_20px_rgba(5,150,105,0.4)]",
  },
  rose: {
    primary: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/25",
    secondary: "bg-rose-100 hover:bg-rose-200 text-rose-700 dark:bg-rose-950/60 dark:hover:bg-rose-900/60 dark:text-rose-300",
    outline: "border-2 border-rose-600 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 dark:text-rose-400 dark:border-rose-500",
    ghost: "text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 dark:text-rose-400",
    destructive: "bg-rose-700 hover:bg-rose-600 text-white shadow-rose-600/30",
    glass: "bg-rose-500/10 backdrop-blur-md border border-rose-500/30 text-rose-700 dark:text-rose-300 hover:bg-rose-500/20",
    glow: "shadow-[0_0_20px_rgba(225,29,72,0.4)]",
  },
  amber: {
    primary: "bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold shadow-amber-500/25",
    secondary: "bg-amber-100 hover:bg-amber-200 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300",
    outline: "border-2 border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40",
    ghost: "text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/40",
    destructive: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/25",
    glass: "bg-amber-500/10 backdrop-blur-md border border-amber-500/30 text-amber-700 dark:text-amber-300 hover:bg-amber-500/20",
    glow: "shadow-[0_0_20px_rgba(245,158,11,0.4)]",
  },
  cyan: {
    primary: "bg-cyan-600 hover:bg-cyan-500 text-white shadow-cyan-500/25",
    secondary: "bg-cyan-100 hover:bg-cyan-200 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300",
    outline: "border-2 border-cyan-600 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40",
    ghost: "text-cyan-600 dark:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/40",
    destructive: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/25",
    glass: "bg-cyan-500/10 backdrop-blur-md border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20",
    glow: "shadow-[0_0_20px_rgba(8,145,178,0.4)]",
  },
  zinc: {
    primary: "bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 shadow-zinc-900/20",
    secondary: "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100",
    outline: "border-2 border-zinc-900 dark:border-zinc-100 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    ghost: "text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800",
    destructive: "bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/25",
    glass: "bg-zinc-500/10 backdrop-blur-md border border-zinc-500/30 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-500/20",
    glow: "shadow-[0_0_20px_rgba(113,113,122,0.4)]",
  }
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

const sizeClasses = {
  sm: "px-3 py-1.5 text-xs gap-1.5 min-h-[32px]",
  md: "px-4 py-2 text-sm gap-2 min-h-[40px]",
  lg: "px-5 py-2.5 text-base gap-2.5 min-h-[48px]",
  xl: "px-7 py-3.5 text-lg gap-3 min-h-[56px]",
};

export default function MotionButton({
  label = "Click Me",
  variant = "primary",
  size = "md",
  colorScheme = "indigo",
  radius = "lg",
  motionPreset = "bouncy",
  showIcon = true,
  iconName = "Sparkles",
  isLoading = false,
  disabled = false,
  glowEffect = false,
  shimmerEffect = false,
  onClick,
  className = "",
  ...props
}) {
  const IconComponent = Icons[iconName] || Icons.Sparkles;
  const currentScheme = colorClasses[colorScheme] || colorClasses.indigo;
  const variantStyle = currentScheme[variant] || currentScheme.primary;
  const radiusStyle = radiusClasses[radius] || radiusClasses.lg;
  const sizeStyle = sizeClasses[size] || sizeClasses.md;

  const motionConfig = MOTION_PRESETS.find((m) => m.id === motionPreset) || MOTION_PRESETS[0];

  const transition = motionConfig.type === "spring"
    ? { type: "spring", stiffness: motionConfig.stiffness, damping: motionConfig.damping }
    : { duration: motionConfig.duration, ease: motionConfig.ease };

  return (
    <motion.button
      whileHover={disabled || isLoading ? {} : { scale: 1.04, y: -1 }}
      whileTap={disabled || isLoading ? {} : { scale: 0.95 }}
      transition={transition}
      disabled={disabled || isLoading}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center font-medium transition-all duration-200 select-none overflow-hidden cursor-pointer",
        variantStyle,
        radiusStyle,
        sizeStyle,
        glowEffect && variant === "primary" ? currentScheme.glow : "",
        (disabled || isLoading) && "opacity-50 cursor-not-allowed pointer-events-none",
        className
      )}
      {...props}
    >
      {/* Shimmer sweep effect */}
      {shimmerEffect && !disabled && !isLoading && (
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      )}

      {isLoading ? (
        <Icons.Loader2 className="w-4 h-4 animate-spin shrink-0" />
      ) : (
        showIcon && <IconComponent className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-110" />
      )}

      <span>{isLoading ? "Loading..." : label}</span>
    </motion.button>
  );
}
