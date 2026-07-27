import React from "react";
import { Sparkles, Search, Sun, Moon, LayoutGrid, Sliders, Code } from "lucide-react";
import { cn } from "../lib/utils";

export default function Header({
  searchTerm,
  setSearchTerm,
  isDarkMode,
  setIsDarkMode,
  activeView,
  setActiveView,
  totalComponents = 12,
}) {
  return (
    <header className="sticky top-0 z-40 bg-zinc-950/90 dark:bg-zinc-950/90 backdrop-blur-xl border-b border-zinc-800/90 text-zinc-100 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand Logo Block */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-indigo-600 text-white flex items-center justify-center font-syne font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-syne font-extrabold text-lg sm:text-xl tracking-tight text-zinc-100 uppercase">
                Motion UI
              </h1>
              <span className="bg-indigo-600 text-white px-2 py-0.5 font-mono text-[10px] font-semibold tracking-wider rounded-xs uppercase">
                SHADCN + MOTION
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 hidden sm:block">
              Customizable React & Tailwind Library
            </p>
          </div>
        </div>

        {/* Live Search Bar */}
        <div className="flex-1 max-w-md relative hidden md:block">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-zinc-400">
            <Search className="w-3.5 h-3.5" />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search components..."
            className="w-full pl-9 pr-10 py-1.5 font-mono text-xs rounded border border-zinc-800 bg-zinc-900 text-zinc-100 placeholder-zinc-500 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center font-mono text-[10px] text-zinc-400 hover:text-zinc-200 uppercase cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>

        {/* View Switcher & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Main View Mode Selector */}
          <div className="inline-flex p-1 bg-zinc-900 rounded border border-zinc-800">
            <button
              onClick={() => setActiveView("gallery")}
              className={cn(
                "px-3 py-1 text-xs font-mono font-medium rounded transition-all flex items-center gap-1.5 cursor-pointer select-none uppercase",
                activeView === "gallery"
                  ? "bg-indigo-600 text-white shadow-sm font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Library</span>
            </button>

            <button
              onClick={() => setActiveView("playground")}
              className={cn(
                "px-3 py-1 text-xs font-mono font-medium rounded transition-all flex items-center gap-1.5 cursor-pointer select-none uppercase",
                activeView === "playground"
                  ? "bg-indigo-600 text-white shadow-sm font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Suite Tuner</span>
            </button>

            <button
              onClick={() => setActiveView("custom")}
              className={cn(
                "px-3 py-1 text-xs font-mono font-medium rounded transition-all flex items-center gap-1.5 cursor-pointer select-none uppercase",
                activeView === "custom"
                  ? "bg-indigo-600 text-white shadow-sm font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              )}
            >
              <Code className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Code Editor</span>
            </button>
          </div>

          {/* Dark / Light Mode Switcher */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="p-2 rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer select-none"
          >
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
          </button>
        </div>
      </div>
    </header>
  );
}
