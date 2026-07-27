import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";

const variantStyles = {
  glass: "bg-white/70 dark:bg-zinc-900/60 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-xl shadow-zinc-950/5",
  solid: "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-md",
  outline: "bg-transparent border-2 border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600",
  gradient: "bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-pink-500/10 border border-indigo-500/20 dark:border-indigo-500/30 backdrop-blur-lg",
  subtle: "bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/50",
};

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-3xl",
};

const colorSchemeAccents = {
  indigo: "from-indigo-500/20 text-indigo-600 dark:text-indigo-400 border-indigo-500/30",
  violet: "from-violet-500/20 text-violet-600 dark:text-violet-400 border-violet-500/30",
  emerald: "from-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  rose: "from-rose-500/20 text-rose-600 dark:text-rose-400 border-rose-500/30",
  amber: "from-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
  cyan: "from-cyan-500/20 text-cyan-600 dark:text-cyan-400 border-cyan-500/30",
  zinc: "from-zinc-500/20 text-zinc-900 dark:text-zinc-100 border-zinc-500/30",
};

export default function MotionCard({
  title = "Interactive Motion Card",
  subtitle = "Customizable UI Primitive",
  description = "Build modern responsive applications with fluid spring interactions and clean layout math.",
  variant = "glass",
  colorScheme = "indigo",
  radius = "2xl",
  tiltEffect = true,
  spotlight = true,
  badgeText = "FEATURED",
  showFooter = true,
  className = "",
}) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!spotlight && !tiltEffect) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    if (tiltEffect) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      setRotate({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const accent = colorSchemeAccents[colorScheme] || colorSchemeAccents.indigo;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: rotate.x, rotateY: rotate.y }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{ transformStyle: "preserve-3d" }}
      className={cn(
        "relative group p-6 max-w-md w-full transition-shadow duration-300 overflow-hidden",
        variantStyles[variant] || variantStyles.glass,
        radiusClasses[radius] || radiusClasses["2xl"],
        className
      )}
    >
      {/* Spotlight effect overlay */}
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100 rounded-inherit"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(99, 102, 241, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Header Badge */}
      {badgeText && (
        <div className="flex items-center justify-between mb-4">
          <span className={cn("inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full border bg-opacity-20", accent)}>
            <Sparkles className="w-3 h-3" />
            {badgeText}
          </span>
          <span className="text-xs text-zinc-400 font-mono">v1.0</span>
        </div>
      )}

      {/* Main Content */}
      <div className="space-y-2">
        <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h3>
        {subtitle && (
          <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {subtitle}
          </p>
        )}
        <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed pt-1">
          {description}
        </p>
      </div>

      {/* Action Footer */}
      {showFooter && (
        <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" /> Ready to export
          </span>
          <motion.button
            whileHover={{ x: 3 }}
            className={cn("inline-flex items-center gap-1.5 text-xs font-semibold cursor-pointer", accent)}
          >
            Explore <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      )}
    </motion.div>
  );
}
