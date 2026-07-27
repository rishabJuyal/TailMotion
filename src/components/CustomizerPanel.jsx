import React from "react";
import { Sliders, Sparkles, RefreshCw, Layers, Check, Palette } from "lucide-react";
import { COLOR_SCHEMES, RADIUS_OPTIONS, MOTION_PRESETS } from "../data/componentsData";
import { cn } from "../lib/utils";

export default function CustomizerPanel({
  component,
  currentProps,
  onPropChange,
  onReset,
}) {
  if (!component) return null;

  return (
    <div className="p-5 md:p-6 space-y-4 bg-zinc-900 border-t border-zinc-800">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="p-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-800">
            <Sliders className="w-3.5 h-3.5" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold text-zinc-100 uppercase tracking-wider">
              Props Inspector
            </h4>
            <p className="font-mono text-[10px] text-zinc-400">
              Change props below to observe live changes in preview above
            </p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs font-semibold text-zinc-400 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded transition-colors cursor-pointer uppercase select-none"
        >
          <RefreshCw className="w-3 h-3" />
          Reset
        </button>
      </div>

      {/* Control List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[420px] overflow-y-auto pr-1 scrollbar-thin">
        {(!component.customControls || component.customControls.length === 0) ? (
          <div className="col-span-full py-4 px-4 bg-zinc-950/60 rounded border border-zinc-800/80 font-mono text-xs text-zinc-400 flex items-center justify-between">
            <span>No props inspector controls for this custom code component.</span>
            <span className="text-indigo-400 font-semibold uppercase text-[10px]">Use Code Tab</span>
          </div>
        ) : (
          component.customControls.map((control) => {
          const value = currentProps[control.key];

          // Text Control
          if (control.type === "text") {
            return (
              <div key={control.key} className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {control.label}
                </label>
                <input
                  type="text"
                  value={value || ""}
                  onChange={(e) => onPropChange(control.key, e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500/30 outline-none transition-all"
                />
              </div>
            );
          }

          // Select Control
          if (control.type === "select") {
            return (
              <div key={control.key} className="space-y-1.5">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {control.label}
                </label>
                <select
                  value={value || control.options[0]}
                  onChange={(e) => onPropChange(control.key, e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-indigo-500/30 outline-none capitalize transition-all"
                >
                  {control.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            );
          }

          // Color Select
          if (control.type === "colorSelect") {
            return (
              <div key={control.key} className="space-y-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                  <span>{control.label}</span>
                  <span className="capitalize font-mono text-[10px] text-zinc-400">{value}</span>
                </label>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {COLOR_SCHEMES.map((scheme) => (
                    <button
                      key={scheme.id}
                      onClick={() => onPropChange(control.key, scheme.id)}
                      title={scheme.name}
                      className={cn(
                        "w-6 h-6 rounded-full transition-all cursor-pointer flex items-center justify-center",
                        scheme.bg,
                        value === scheme.id ? "ring-2 ring-offset-2 ring-indigo-500 scale-110" : "opacity-80 hover:opacity-100"
                      )}
                    >
                      {value === scheme.id && <Check className="w-3 h-3 text-white drop-shadow" />}
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          // Radius Select
          if (control.type === "radiusSelect") {
            return (
              <div key={control.key} className="space-y-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
                  <span>{control.label}</span>
                  <span className="font-mono text-[10px] text-zinc-400">{value}</span>
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {RADIUS_OPTIONS.map((rad) => (
                    <button
                      key={rad.id}
                      onClick={() => onPropChange(control.key, rad.id)}
                      className={cn(
                        "px-2 py-1.5 text-[11px] font-medium rounded-lg border transition-all cursor-pointer text-center capitalize",
                        value === rad.id
                          ? "bg-indigo-600 text-white border-indigo-600 font-semibold shadow-sm"
                          : "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80"
                      )}
                    >
                      {rad.id}
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          // Motion Preset Select
          if (control.type === "motionSelect") {
            return (
              <div key={control.key} className="space-y-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {control.label}
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {MOTION_PRESETS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => onPropChange(control.key, m.id)}
                      className={cn(
                        "px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-pointer text-left flex items-center justify-between",
                        value === m.id
                          ? "bg-indigo-600 text-white border-indigo-600 font-semibold"
                          : "border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80"
                      )}
                    >
                      <span>{m.name}</span>
                      <Sparkles className="w-3 h-3 shrink-0 opacity-70" />
                    </button>
                  ))}
                </div>
              </div>
            );
          }

          // Boolean Toggle
          if (control.type === "boolean") {
            return (
              <div
                key={control.key}
                onClick={() => onPropChange(control.key, !value)}
                className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/60 dark:bg-zinc-800/40 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer select-none"
              >
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  {control.label}
                </span>
                <div
                  className={cn(
                    "w-9 h-5 rounded-full p-0.5 transition-colors duration-200 flex items-center",
                    value ? "bg-indigo-600" : "bg-zinc-300 dark:bg-zinc-700"
                  )}
                >
                  <div
                    className={cn(
                      "w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200",
                      value ? "translate-x-4" : "translate-x-0"
                    )}
                  />
                </div>
              </div>
            );
          }

          return null;
        }))}
      </div>
    </div>
  );
}
