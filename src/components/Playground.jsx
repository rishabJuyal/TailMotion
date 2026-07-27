import React, { useState } from "react";
import { motion } from "motion/react";
import { Sliders, Sparkles, Copy, Check, RefreshCw, Eye, Code, Layers } from "lucide-react";
import MotionButton from "./ui/Button";
import MotionCard from "./ui/Card";
import MotionInput from "./ui/Input";
import MotionSwitch from "./ui/Switch";
import MotionBadge from "./ui/Badge";
import MotionTabs from "./ui/Tabs";
import MotionModal from "./ui/Modal";
import CodeViewer from "./CodeViewer";
import { cn } from "../lib/utils";

export default function Playground() {
  const [accentColor, setAccentColor] = useState("indigo");
  const [cardRadius, setCardRadius] = useState("2xl");
  const [buttonMotion, setButtonMotion] = useState("bouncy");
  const [showBadge, setShowBadge] = useState(true);
  const [copied, setCopied] = useState(false);

  const compositeCode = `import { motion } from "motion/react";
import MotionButton from "./ui/Button";
import MotionInput from "./ui/Input";
import MotionSwitch from "./ui/Switch";
import MotionBadge from "./ui/Badge";

export function CustomFormCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-8 rounded-${cardRadius} bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl max-w-md w-full space-y-6"
    >
      ${showBadge ? `<MotionBadge label="SECURITY ENABLED" colorScheme="${accentColor}" pulseDot />` : ""}
      <div className="space-y-1">
        <h3 className="text-xl font-extrabold text-zinc-900 dark:text-zinc-100">Deploy System</h3>
        <p className="text-xs text-zinc-500">Configure your Motion & Tailwind parameters</p>
      </div>

      <MotionInput label="Project Name" colorScheme="${accentColor}" radius="${cardRadius}" />
      <MotionSwitch label="Automated Sync" colorScheme="${accentColor}" />

      <MotionButton
        label="Launch Build"
        colorScheme="${accentColor}"
        radius="${cardRadius}"
        motionPreset="${buttonMotion}"
        glowEffect
      />
    </motion.div>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(compositeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Playground Header Banner */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-600 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Interactive Sandbox
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Component Composition Builder
          </h2>
          <p className="text-sm opacity-90 leading-relaxed">
            Combine multiple customizable motion components into an integrated UI composition. Adjust colors, corner radius, and physics parameters globally.
          </p>
        </div>

        <button
          onClick={handleCopy}
          className="relative z-10 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white text-zinc-900 font-bold text-sm shadow-xl hover:bg-zinc-100 transition-colors cursor-pointer select-none shrink-0"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" /> Copied Suite Code!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" /> Copy Suite JSX
            </>
          )}
        </button>

        {/* Ambient background glow circles */}
        <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Grid Layout: Left Inspector Controls, Right Live Preview & Code */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Panel */}
        <div className="lg:col-span-5 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 p-6 rounded-3xl shadow-xl space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-zinc-200 dark:border-zinc-800">
            <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Global Suite Tuning</h3>
              <p className="text-xs text-zinc-500">Real-time parameters across all components</p>
            </div>
          </div>

          {/* Accent Color */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Primary Accent Color
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["indigo", "violet", "emerald", "rose", "amber", "cyan", "zinc"].map((col) => (
                <button
                  key={col}
                  onClick={() => setAccentColor(col)}
                  className={cn(
                    "px-3 py-2 text-xs font-semibold rounded-xl border capitalize transition-all cursor-pointer text-center",
                    accentColor === col
                      ? "bg-indigo-600 text-white border-indigo-600 font-bold shadow-md"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                  )}
                >
                  {col}
                </button>
              ))}
            </div>
          </div>

          {/* Corner Radius */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Suite Corner Radius
            </label>
            <div className="grid grid-cols-4 gap-2">
              {["sm", "md", "lg", "xl", "2xl", "full"].map((rad) => (
                <button
                  key={rad}
                  onClick={() => setCardRadius(rad)}
                  className={cn(
                    "px-3 py-2 text-xs font-semibold rounded-xl border capitalize transition-all cursor-pointer text-center",
                    cardRadius === rad
                      ? "bg-indigo-600 text-white border-indigo-600 font-bold shadow-md"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                  )}
                >
                  {rad}
                </button>
              ))}
            </div>
          </div>

          {/* Motion Physics Preset */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-700 dark:text-zinc-300">
              Button Spring Physics
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["bouncy", "smooth", "gentle", "snappy"].map((m) => (
                <button
                  key={m}
                  onClick={() => setButtonMotion(m)}
                  className={cn(
                    "px-3 py-2 text-xs font-semibold rounded-xl border capitalize transition-all cursor-pointer text-center",
                    buttonMotion === m
                      ? "bg-indigo-600 text-white border-indigo-600 font-bold shadow-md"
                      : "border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300"
                  )}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {/* Badge Toggle */}
          <div
            onClick={() => setShowBadge(!showBadge)}
            className="flex items-center justify-between p-3 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 cursor-pointer select-none"
          >
            <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
              Show Header Status Badge
            </span>
            <div
              className={cn(
                "w-9 h-5 rounded-full p-0.5 transition-colors duration-200 flex items-center",
                showBadge ? "bg-indigo-600" : "bg-zinc-300 dark:bg-zinc-700"
              )}
            >
              <div
                className={cn(
                  "w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200",
                  showBadge ? "translate-x-4" : "translate-x-0"
                )}
              />
            </div>
          </div>
        </div>

        {/* Right Live Stage */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-8 bg-zinc-100/80 dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl min-h-[420px] flex items-center justify-center relative overflow-hidden shadow-2xl">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={cn(
                "p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl max-w-md w-full space-y-6 relative z-10",
                `rounded-${cardRadius === "full" ? "3xl" : cardRadius}`
              )}
            >
              {showBadge && (
                <MotionBadge
                  label="SECURITY COMPLIANT"
                  colorScheme={accentColor}
                  radius="full"
                  pulseDot
                />
              )}

              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                  Deploy System
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Configure your Motion & Tailwind parameters in real-time.
                </p>
              </div>

              <MotionInput
                label="Environment Name"
                placeholder="production-us-east"
                colorScheme={accentColor}
                radius={cardRadius}
              />

              <MotionSwitch
                label="Automated Synchronization"
                description="Sync components on commit"
                colorScheme={accentColor}
              />

              <div className="pt-2 flex items-center gap-3">
                <MotionButton
                  label="Launch Deployment"
                  colorScheme={accentColor}
                  radius={cardRadius}
                  motionPreset={buttonMotion}
                  glowEffect
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>

          <CodeViewer code={compositeCode} title="CompositeSuite.jsx" />
        </div>
      </div>
    </div>
  );
}
