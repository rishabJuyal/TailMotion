import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-3xl",
};

const accordionVariants = {
  outlined: "border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm",
  filled: "bg-zinc-100 dark:bg-zinc-800/60 border border-transparent",
  glass: "bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-zinc-200/80 dark:border-zinc-800/80 shadow-lg",
  minimal: "border-b border-zinc-200 dark:border-zinc-800 rounded-none bg-transparent px-0",
};

export default function MotionAccordion({
  title = "How do I customize Tailwind & Motion presets?",
  content = "You can tweak all color schemes, border radius, motion springs, and component sizes directly in the customizer panel. Code automatically adapts to your live choices!",
  colorScheme = "indigo",
  radius = "xl",
  variant = "outlined",
  defaultOpen = true,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const radiusClass = radiusClasses[radius] || radiusClasses.xl;
  const variantClass = accordionVariants[variant] || accordionVariants.outlined;

  return (
    <div className={cn("w-full max-w-md overflow-hidden", variantClass, variant !== "minimal" && radiusClass, className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 flex items-center justify-between gap-3 text-left font-semibold text-zinc-900 dark:text-zinc-100 transition-colors cursor-pointer select-none"
      >
        <span className="flex items-center gap-2.5 text-sm md:text-base">
          <Sparkles className="w-4 h-4 text-indigo-500 shrink-0" />
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
        >
          <ChevronDown className="w-4 h-4 shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-1 text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50">
              {content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
