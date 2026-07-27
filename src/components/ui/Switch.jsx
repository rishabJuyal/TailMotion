import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { cn } from "../../lib/utils";

const trackSizes = {
  sm: { track: "w-9 h-5 p-0.5", thumb: "w-4 h-4", translate: 16 },
  md: { track: "w-12 h-6.5 p-1", thumb: "w-4.5 h-4.5", translate: 22 },
  lg: { track: "w-14 h-8 p-1", thumb: "w-6 h-6", translate: 24 },
};

const schemeColors = {
  indigo: "bg-indigo-600 shadow-indigo-500/30",
  violet: "bg-violet-600 shadow-violet-500/30",
  emerald: "bg-emerald-600 shadow-emerald-500/30",
  rose: "bg-rose-600 shadow-rose-500/30",
  amber: "bg-amber-500 shadow-amber-500/30",
  cyan: "bg-cyan-600 shadow-cyan-500/30",
  zinc: "bg-zinc-900 dark:bg-zinc-100 shadow-zinc-500/30",
};

export default function MotionSwitch({
  label = "Enable Notifications",
  description = "Receive instant push updates",
  checked: initialChecked = true,
  size = "md",
  colorScheme = "emerald",
  showIcons = true,
  disabled = false,
  onChange,
  className = "",
}) {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const toggle = () => {
    if (disabled) return;
    const next = !isChecked;
    setIsChecked(next);
    if (onChange) onChange(next);
  };

  const dim = trackSizes[size] || trackSizes.md;
  const activeColor = schemeColors[colorScheme] || schemeColors.emerald;

  return (
    <div
      onClick={toggle}
      className={cn(
        "flex items-center justify-between gap-4 p-3 rounded-xl transition-colors select-none cursor-pointer hover:bg-zinc-100/60 dark:hover:bg-zinc-800/40",
        disabled && "opacity-50 pointer-events-none",
        className
      )}
    >
      <div className="space-y-0.5">
        {label && <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{label}</p>}
        {description && <p className="text-xs text-zinc-500 dark:text-zinc-400">{description}</p>}
      </div>

      <div
        className={cn(
          "relative inline-flex items-center rounded-full transition-colors duration-300 shrink-0",
          dim.track,
          isChecked ? activeColor : "bg-zinc-300 dark:bg-zinc-700"
        )}
      >
        <motion.div
          animate={{ x: isChecked ? dim.translate : 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className={cn(
            "flex items-center justify-center rounded-full bg-white text-zinc-900 shadow-md font-bold",
            dim.thumb
          )}
        >
          {showIcons && (
            isChecked ? (
              <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />
            ) : (
              <X className="w-3 h-3 text-zinc-400 stroke-[3]" />
            )
          )}
        </motion.div>
      </div>
    </div>
  );
}
