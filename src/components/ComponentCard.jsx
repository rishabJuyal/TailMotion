import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, Sliders, Copy, Check, Sparkles, Layers, Trash2 } from "lucide-react";
import MotionButton from "./ui/Button";
import MotionCard from "./ui/Card";
import MotionInput from "./ui/Input";
import MotionSwitch from "./ui/Switch";
import MotionTabs from "./ui/Tabs";
import MotionBadge from "./ui/Badge";
import MotionModal from "./ui/Modal";
import MotionDock from "./ui/Dock";
import MotionToast from "./ui/Toast";
import MotionAccordion from "./ui/Accordion";
import MotionCounter from "./ui/Counter";
import MotionSlider from "./ui/Slider";
import CodeViewer from "./CodeViewer";
import CustomizerPanel from "./CustomizerPanel";
import DynamicRunner from "./DynamicRunner";
import { generateComponentCode } from "../lib/codeGenerator";
import { cn } from "../lib/utils";

export default function ComponentCard({ component, globalTheme = {}, onDeleteCustom }) {
  const [propsState, setPropsState] = useState(component.defaultProps || {});
  const [activeTab, setActiveTab] = useState(component.isCustom ? "code" : "customize"); // 'customize' | 'code'
  const [copied, setCopied] = useState(false);

  const handlePropChange = (key, value) => {
    setPropsState((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetProps = () => {
    setPropsState(component.defaultProps || {});
  };

  const codeSnippet = component.code || generateComponentCode(component.id, propsState);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render actual component based on ID or custom code
  const renderPreview = () => {
    if (component.isCustom || component.code) {
      return <DynamicRunner code={component.code} />;
    }

    switch (component.id) {
      case "motion-button":
        return <MotionButton {...propsState} />;
      case "spotlight-card":
        return <MotionCard {...propsState} />;
      case "floating-input":
        return <MotionInput {...propsState} />;
      case "motion-switch":
        return <MotionSwitch {...propsState} />;
      case "segmented-tabs":
        return <MotionTabs {...propsState} />;
      case "motion-badge":
        return <MotionBadge {...propsState} />;
      case "motion-dialog":
        return <MotionModal {...propsState} />;
      case "dock-menu":
        return <MotionDock {...propsState} />;
      case "motion-toast":
        return <MotionToast {...propsState} />;
      case "animated-accordion":
        return <MotionAccordion {...propsState} />;
      case "number-ticker":
        return <MotionCounter {...propsState} />;
      case "range-slider":
        return <MotionSlider {...propsState} />;
      default:
        return <MotionButton {...propsState} />;
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="bg-zinc-900 border border-zinc-800 rounded flex flex-col justify-between overflow-hidden shadow-xl transition-all"
    >
      {/* Top Header */}
      <div className="p-5 border-b border-zinc-800 flex items-start justify-between gap-4 bg-zinc-900">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold text-zinc-100 tracking-tight">
              {component.name}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-wider bg-indigo-950/80 text-indigo-400 px-2 py-0.5 rounded border border-indigo-800/80 font-semibold">
              {component.category}
            </span>
            {component.isCustom && (
              <span className="font-mono text-[10px] uppercase tracking-wider bg-emerald-950/80 text-emerald-400 px-2 py-0.5 rounded border border-emerald-800/80 font-semibold">
                CUSTOM BUILT
              </span>
            )}
          </div>
        </div>

        {/* View Switcher Buttons */}
        <div className="inline-flex p-0.5 bg-zinc-950 rounded border border-zinc-800 shrink-0">
          <button
            onClick={() => setActiveTab("customize")}
            title="Customizer Controls Below"
            className={cn(
              "px-3 py-1 font-mono text-xs font-semibold rounded transition-all flex items-center gap-1.5 cursor-pointer uppercase select-none",
              activeTab === "customize"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            )}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Customize</span>
          </button>

          <button
            onClick={() => setActiveTab("code")}
            title="Export React Code"
            className={cn(
              "px-3 py-1 font-mono text-xs font-semibold rounded transition-all flex items-center gap-1.5 cursor-pointer uppercase select-none",
              activeTab === "code"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-200"
            )}
          >
            <Code className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Code</span>
          </button>
        </div>
      </div>

      {/* 1. LIVE PREVIEW STAGE (Always rendered on top with systematic grid dots) */}
      <div className="relative p-6 md:p-8 bg-grid-dots bg-zinc-950 min-h-[260px] flex items-center justify-center border-b border-zinc-800 overflow-x-auto">
        <div className="absolute top-3 left-4 flex items-center gap-1.5 text-[10px] font-mono font-medium text-indigo-400 bg-indigo-950/60 px-2.5 py-1 rounded border border-indigo-800/60 backdrop-blur-md uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span>LIVE PREVIEW</span>
        </div>

        <div className="w-full flex items-center justify-center pt-3 pb-1">
          {renderPreview()}
        </div>
      </div>

      {/* 2. CUSTOMIZE / CODE SECTION (Positioned below preview) */}
      <div className="bg-zinc-900">
        {activeTab === "customize" ? (
          <CustomizerPanel
            component={component}
            currentProps={propsState}
            onPropChange={handlePropChange}
            onReset={handleResetProps}
          />
        ) : (
          <div className="p-5 md:p-6">
            <CodeViewer code={codeSnippet} title={`${component.name}.jsx`} />
          </div>
        )}
      </div>

      {/* Card Footer Bar */}
      <div className="px-5 py-3 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 flex-wrap">
          {component.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 uppercase tracking-wider"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {component.isCustom && onDeleteCustom && (
            <button
              onClick={() => {
                if (confirm(`Delete custom component "${component.name}"?`)) {
                  onDeleteCustom(component.id);
                }
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs font-semibold rounded border border-rose-900 bg-rose-950/80 text-rose-300 hover:bg-rose-900 hover:text-white transition-all cursor-pointer uppercase select-none"
              title="Delete Custom Component"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Delete</span>
            </button>
          )}

          <button
            onClick={handleCopyCode}
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs font-semibold rounded border transition-all cursor-pointer uppercase select-none",
              copied
                ? "bg-emerald-950 text-emerald-400 border-emerald-800"
                : "bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border-zinc-700"
            )}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" /> Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" /> Copy Code
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
}