import React, { useState, useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { TrendingUp, RefreshCw } from "lucide-react";
import { cn } from "../../lib/utils";

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

const colorAccents = {
  indigo: "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 border-indigo-200 dark:border-indigo-800",
  violet: "text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-950/50 border-violet-200 dark:border-violet-800",
  emerald: "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-800",
  rose: "text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-800",
  amber: "text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-800",
  cyan: "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/50 border-cyan-200 dark:border-cyan-800",
  zinc: "text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 border-zinc-300 dark:border-zinc-700",
};

export default function MotionCounter({
  value = 12840,
  prefix = "$",
  suffix = "/mo",
  label = "Monthly Recurring Revenue",
  colorScheme = "emerald",
  radius = "xl",
  className = "",
}) {
  const numericVal = typeof value === "number" ? value : parseFloat(value) || 12840;
  const [currentVal, setCurrentVal] = useState(0);

  const spring = useSpring(0, { stiffness: 100, damping: 20 });
  const displayVal = useTransform(spring, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    spring.set(numericVal);
  }, [numericVal, spring]);

  const triggerReanimate = () => {
    spring.set(0);
    setTimeout(() => spring.set(numericVal), 150);
  };

  const accent = colorAccents[colorScheme] || colorAccents.emerald;
  const radiusClass = radiusClasses[radius] || radiusClasses.xl;

  return (
    <div className={cn("p-6 max-w-sm w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl space-y-3 relative group overflow-hidden", radiusClass, className)}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {label}
        </span>
        <button
          onClick={triggerReanimate}
          title="Re-trigger counter animation"
          className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
        >
          <RefreshCw className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">{prefix}</span>
        <motion.span className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 font-mono">
          {displayVal}
        </motion.span>
        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">{suffix}</span>
      </div>

      <div className="pt-2 flex items-center gap-2">
        <span className={cn("inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border", accent)}>
          <TrendingUp className="w-3.5 h-3.5" />
          +18.4% vs last month
        </span>
      </div>
    </div>
  );
}
