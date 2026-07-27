import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Sparkles, AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "../../lib/utils";
import MotionButton from "./Button";

const radiusClasses = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-3xl",
};

const modalSizes = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  full: "max-w-4xl",
};

export default function MotionModal({
  title = "Publish Component",
  description = "Are you sure you want to export this component configuration to your production design system?",
  triggerLabel = "Open Dialog",
  colorScheme = "indigo",
  radius = "2xl",
  blurBackdrop = true,
  size = "md",
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const radiusClass = radiusClasses[radius] || radiusClasses["2xl"];
  const sizeClass = modalSizes[size] || modalSizes.md;

  return (
    <div className={cn("inline-block", className)}>
      <MotionButton
        label={triggerLabel}
        colorScheme={colorScheme}
        radius={radius}
        iconName="Sparkles"
        onClick={() => setIsOpen(true)}
      />

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className={cn(
                "fixed inset-0 bg-zinc-950/60 transition-opacity",
                blurBackdrop && "backdrop-blur-md"
              )}
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className={cn(
                "relative w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 z-10 space-y-5 overflow-hidden",
                radiusClass,
                sizeClass
              )}
            >
              {/* Top Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

              {/* Header */}
              <div className="flex items-start justify-between gap-4 pt-1">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{title}</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Component Overlay Action</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Content */}
              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {description}
              </p>

              {/* Custom Info Box */}
              <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 flex items-center gap-3 text-xs text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Preset values & animation springs will be bundled into standard React JSX.</span>
              </div>

              {/* Actions Footer */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <MotionButton
                  label="Confirm Action"
                  colorScheme={colorScheme}
                  radius="lg"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
