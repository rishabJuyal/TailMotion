import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, Layers, Compass, Sparkles, Terminal, Settings, Bell, Heart } from "lucide-react";
import { cn } from "../../lib/utils";

const dockItems = [
  { id: "home", label: "Overview", icon: Home },
  { id: "components", label: "Components", icon: Layers },
  { id: "explore", label: "Explore", icon: Compass },
  { id: "motion", label: "Animations", icon: Sparkles },
  { id: "code", label: "CLI Tool", icon: Terminal },
  { id: "notifications", label: "Activity", icon: Bell },
  { id: "settings", label: "Settings", icon: Settings },
];

const schemeActive = {
  indigo: "bg-indigo-600 text-white shadow-indigo-500/30",
  violet: "bg-violet-600 text-white shadow-violet-500/30",
  emerald: "bg-emerald-600 text-white shadow-emerald-500/30",
  rose: "bg-rose-600 text-white shadow-rose-500/30",
  amber: "bg-amber-500 text-zinc-950 shadow-amber-500/30",
  cyan: "bg-cyan-600 text-white shadow-cyan-500/30",
  zinc: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-zinc-500/30",
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

export default function MotionDock({
  colorScheme = "indigo",
  radius = "full",
  iconSize = "md",
  magnify = true,
  showLabels = true,
  className = "",
}) {
  const [activeItem, setActiveItem] = useState("components");
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const activeColor = schemeActive[colorScheme] || schemeActive.indigo;
  const radiusClass = radiusClasses[radius] || radiusClasses.full;

  return (
    <div className={cn("flex justify-center p-2", className)}>
      <motion.div
        onMouseLeave={() => setHoveredIdx(null)}
        className={cn(
          "inline-flex items-center gap-2 p-2.5 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-2xl shadow-zinc-950/10 max-w-full overflow-x-auto",
          radiusClass
        )}
      >
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          const isHovered = hoveredIdx === idx;

          // Compute scale multiplier based on distance from hovered index
          let scale = 1;
          if (magnify && hoveredIdx !== null) {
            const distance = Math.abs(hoveredIdx - idx);
            if (distance === 0) scale = 1.4;
            else if (distance === 1) scale = 1.18;
            else if (distance === 2) scale = 1.05;
          }

          return (
            <div key={item.id} className="relative flex flex-col items-center group">
              {/* Tooltip Label */}
              <AnimatePresence>
                {showLabels && isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                    className="absolute -top-2 px-2.5 py-1 text-[11px] font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-md shadow-lg pointer-events-none whitespace-nowrap z-20"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon Item */}
              <motion.button
                onMouseEnter={() => setHoveredIdx(idx)}
                onClick={() => setActiveItem(item.id)}
                animate={{ scale }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className={cn(
                  "relative p-3 transition-colors duration-200 rounded-2xl flex items-center justify-center select-none cursor-pointer",
                  isActive
                    ? activeColor
                    : "text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 hover:text-zinc-900 dark:hover:text-zinc-100"
                )}
              >
                <Icon className="w-5 h-5 shrink-0" />
              </motion.button>

              {/* Active Indicator Dot */}
              {isActive && (
                <motion.div
                  layoutId="dockActiveDot"
                  className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 absolute -bottom-1"
                />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
