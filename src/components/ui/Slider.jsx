import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sliders } from "lucide-react";
import { cn } from "../../lib/utils";

const trackFills = {
  indigo: "bg-indigo-600",
  violet: "bg-violet-600",
  emerald: "bg-emerald-600",
  rose: "bg-rose-600",
  amber: "bg-amber-500",
  cyan: "bg-cyan-600",
  zinc: "bg-zinc-900 dark:bg-zinc-100",
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

export default function MotionSlider({
  label = "Animation Duration (ms)",
  min = 0,
  max = 1000,
  step = 10,
  value: initialVal = 350,
  unit = "ms",
  colorScheme = "violet",
  radius = "full",
  onChange,
  className = "",
}) {
  const [val, setVal] = useState(initialVal);
  const [isHovered, setIsHovered] = useState(false);

  const percentage = ((val - min) / (max - min)) * 100;
  const trackFill = trackFills[colorScheme] || trackFills.violet;
  const radiusClass = radiusClasses[radius] || radiusClasses.full;

  const handleChange = (e) => {
    const next = Number(e.target.value);
    setVal(next);
    if (onChange) onChange(next);
  };

  return (
    <div className={cn("w-full max-w-md space-y-3 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm", className)}>
      <div className="flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
        <span className="flex items-center gap-1.5">
          <Sliders className="w-3.5 h-3.5 text-violet-500" />
          {label}
        </span>
        <span className="font-mono bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-900 dark:text-zinc-100">
          {val} {unit}
        </span>
      </div>

      <div className="relative flex items-center h-6">
        {/* Track background */}
        <div className={cn("w-full h-2.5 bg-zinc-200 dark:bg-zinc-800 overflow-hidden relative", radiusClass)}>
          <div
            className={cn("h-full transition-all duration-75", trackFill)}
            style={{ width: `${percentage}%` }}
          />
        </div>

        {/* Real hidden slider input over the track */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={val}
          onChange={handleChange}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
        />

        {/* Floating motion thumb tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.8 }}
              animate={{ opacity: 1, y: -28, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.8 }}
              style={{ left: `calc(${percentage}% - 16px)` }}
              className="absolute top-0 px-2 py-0.5 text-[11px] font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded shadow-md pointer-events-none font-mono whitespace-nowrap"
            >
              {val} {unit}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between text-[10px] text-zinc-400 font-mono">
        <span>{min} {unit}</span>
        <span>{max} {unit}</span>
      </div>
    </div>
  );
}
