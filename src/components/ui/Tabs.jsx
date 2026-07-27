import React, { useState } from "react";
import { motion } from "motion/react";
import { Layout, Sliders, Code, Eye, Layers } from "lucide-react";
import { cn } from "../../lib/utils";

const defaultItems = [
  { id: "overview", label: "Overview", icon: Layout },
  { id: "customizer", label: "Customizer", icon: Sliders },
  { id: "code", label: "React Code", icon: Code },
  { id: "preview", label: "Live Preview", icon: Eye },
  { id: "props", label: "Props API", icon: Layers },
];

const schemeColors = {
  indigo: "bg-indigo-600 text-white shadow-indigo-500/25",
  violet: "bg-violet-600 text-white shadow-violet-500/25",
  emerald: "bg-emerald-600 text-white shadow-emerald-500/25",
  rose: "bg-rose-600 text-white shadow-rose-500/25",
  amber: "bg-amber-500 text-zinc-950 font-bold shadow-amber-500/25",
  cyan: "bg-cyan-600 text-white shadow-cyan-500/25",
  zinc: "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 shadow-zinc-900/20",
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

export default function MotionTabs({
  items = defaultItems,
  colorScheme = "indigo",
  radius = "full",
  variant = "pill",
  activeTab: externalActiveTab,
  size = "md",
  onChange,
  className = "",
}) {
  const [activeTab, setActiveTab] = useState(externalActiveTab || items[0]?.id);

  const handleSelect = (id) => {
    setActiveTab(id);
    if (onChange) onChange(id);
  };

  const activeBg = schemeColors[colorScheme] || schemeColors.indigo;
  const radiusClass = radiusClasses[radius] || radiusClasses.full;

  const sizePadding = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-5 py-2.5 text-base gap-2.5",
  }[size] || "px-4 py-2 text-sm gap-2";

  return (
    <div
      className={cn(
        "inline-flex items-center p-1.5 bg-zinc-100/80 dark:bg-zinc-800/60 backdrop-blur-md border border-zinc-200/60 dark:border-zinc-700/60 overflow-x-auto max-w-full no-scrollbar",
        radiusClass,
        className
      )}
    >
      {items.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;

        return (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            className={cn(
              "relative flex items-center justify-center font-medium transition-colors duration-200 z-10 select-none whitespace-nowrap cursor-pointer",
              sizePadding,
              radiusClass,
              isActive ? "text-zinc-900 dark:text-zinc-100 font-semibold" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTabIndicator"
                className={cn("absolute inset-0 shadow-md", radiusClass, activeBg)}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
