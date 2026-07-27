import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import * as Icons from "lucide-react";
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

const focusRings = {
  indigo: "focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-600 dark:focus:border-indigo-500",
  violet: "focus:ring-2 focus:ring-violet-500/30 focus:border-violet-600 dark:focus:border-violet-500",
  emerald: "focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-600 dark:focus:border-emerald-500",
  rose: "focus:ring-2 focus:ring-rose-500/30 focus:border-rose-600 dark:focus:border-rose-500",
  amber: "focus:ring-2 focus:ring-amber-500/30 focus:border-amber-600 dark:focus:border-amber-500",
  cyan: "focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-600 dark:focus:border-cyan-500",
  zinc: "focus:ring-2 focus:ring-zinc-400/30 focus:border-zinc-900 dark:focus:border-zinc-100",
};

export default function MotionInput({
  label = "Email Address",
  placeholder = "name@company.com",
  colorScheme = "indigo",
  radius = "lg",
  variant = "outlined",
  iconName = "Mail",
  helperText = "We'll never share your data.",
  isInvalid = false,
  errorMessage = "Please enter a valid email address.",
  showClearButton = true,
  className = "",
}) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const IconComponent = Icons[iconName] || Icons.Mail;
  const isFloating = isFocused || value.length > 0;

  const radiusClass = radiusClasses[radius] || radiusClasses.lg;
  const focusRing = focusRings[colorScheme] || focusRings.indigo;

  return (
    <div className={cn("w-full max-w-md space-y-1.5", className)}>
      <div className="relative flex items-center">
        {/* Leading Icon */}
        {iconName && (
          <div className="absolute left-3.5 pointer-events-none text-zinc-400 dark:text-zinc-500">
            <IconComponent className="w-4 h-4" />
          </div>
        )}

        {/* Input Control */}
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isFocused ? placeholder : ""}
          className={cn(
            "w-full text-sm transition-all duration-200 outline-none bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-600",
            iconName ? "pl-10" : "pl-4",
            showClearButton && value ? "pr-10" : "pr-4",
            "py-3",
            variant === "outlined" && "border border-zinc-300 dark:border-zinc-700",
            variant === "filled" && "bg-zinc-100 dark:bg-zinc-800/80 border border-transparent",
            variant === "underlined" && "border-b-2 border-x-0 border-t-0 border-zinc-300 dark:border-zinc-700 rounded-none px-0",
            variant === "glass" && "bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80",
            radiusClass,
            isInvalid ? "border-rose-500 focus:ring-2 focus:ring-rose-500/30 focus:border-rose-600" : focusRing
          )}
        />

        {/* Floating Animated Label */}
        <motion.label
          animate={{
            y: isFloating ? -24 : 0,
            scale: isFloating ? 0.82 : 1,
            x: isFloating ? (iconName ? -10 : 0) : 0,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          className={cn(
            "absolute left-0 pointer-events-none text-sm transition-colors duration-200 origin-left select-none",
            iconName ? "left-10" : "left-4",
            isFloating
              ? "text-indigo-600 dark:text-indigo-400 font-semibold bg-white dark:bg-zinc-900 px-1 rounded"
              : "text-zinc-500 dark:text-zinc-400"
          )}
        >
          {label}
        </motion.label>

        {/* Clear Button */}
        <AnimatePresence>
          {showClearButton && value && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setValue("")}
              className="absolute right-3 p-1 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <Icons.X className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Helper / Error Message */}
      <div className="min-h-[18px] text-xs px-1">
        {isInvalid ? (
          <p className="text-rose-500 font-medium flex items-center gap-1">
            <Icons.AlertCircle className="w-3 h-3" />
            {errorMessage}
          </p>
        ) : (
          <p className="text-zinc-500 dark:text-zinc-400">{helperText}</p>
        )}
      </div>
    </div>
  );
}
