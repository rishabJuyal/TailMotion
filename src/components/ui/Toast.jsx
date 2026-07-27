import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, AlertTriangle, AlertCircle, Info, X, Sparkles } from "lucide-react";
import { cn } from "../../lib/utils";

const statusIcons = {
  success: CheckCircle2,
  info: Info,
  warning: AlertTriangle,
  error: AlertCircle,
};

const statusColors = {
  success: "border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200",
  info: "border-indigo-500/30 bg-indigo-50/90 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200",
  warning: "border-amber-500/30 bg-amber-50/90 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200",
  error: "border-rose-500/30 bg-rose-50/90 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200",
};

const progressColors = {
  success: "bg-emerald-500",
  info: "bg-indigo-500",
  warning: "bg-amber-500",
  error: "bg-rose-500",
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

export default function MotionToast({
  title = "Changes Saved Successfully",
  message = "Your component library settings have been exported to Tailwind CSS.",
  status = "success",
  colorScheme = "emerald",
  radius = "xl",
  showProgress = true,
  duration = 4000,
  className = "",
}) {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!isVisible || !showProgress) return;
    const step = 100 / (duration / 50);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          setIsVisible(false);
          return 0;
        }
        return prev - step;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isVisible, duration, showProgress]);

  const Icon = statusIcons[status] || CheckCircle2;
  const statusStyle = statusColors[status] || statusColors.success;
  const progressStyle = progressColors[status] || progressColors.success;
  const radiusClass = radiusClasses[radius] || radiusClasses.xl;

  return (
    <div className={cn("w-full max-w-md", className)}>
      {!isVisible && (
        <button
          onClick={() => { setIsVisible(true); setProgress(100); }}
          className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline cursor-pointer"
        >
          Re-trigger Toast
        </button>
      )}

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={cn(
              "relative overflow-hidden border shadow-xl p-4 flex items-start gap-3 backdrop-blur-md",
              statusStyle,
              radiusClass
            )}
          >
            <div className="p-1 shrink-0 mt-0.5">
              <Icon className="w-5 h-5" />
            </div>

            <div className="flex-1 space-y-1">
              <h4 className="text-sm font-bold leading-none">{title}</h4>
              <p className="text-xs opacity-90 leading-relaxed">{message}</p>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="p-1 rounded-lg opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Countdown Progress Bar */}
            {showProgress && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10 dark:bg-white/10">
                <div
                  className={cn("h-full transition-all duration-75", progressStyle)}
                  style={{ width: `${progress}%` }}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
