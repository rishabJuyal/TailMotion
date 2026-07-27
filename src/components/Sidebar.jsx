import React from "react";
import * as Icons from "lucide-react";
import { CATEGORIES, COMPONENTS } from "../data/componentsData";
import { cn } from "../lib/utils";

export default function Sidebar({ selectedCategory, setSelectedCategory, allComponents = COMPONENTS }) {
  // Compute component counts per category
  const getCategoryCount = (catId) => {
    if (catId === "all") return allComponents.length;
    return allComponents.filter((c) => c.category === catId).length;
  };

  return (
    <aside className="w-full md:w-64 shrink-0 space-y-6 md:sticky md:top-20 md:max-h-[calc(100vh-6rem)] md:overflow-y-auto scrollbar-thin">
      <div className="bg-zinc-900 border border-zinc-800 rounded p-4 space-y-3">
        <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
          Categories
        </div>

        <nav className="space-y-1">
          {CATEGORIES.map((cat) => {
            const IconComponent = Icons[cat.icon] || Icons.Grid;
            const isSelected = selectedCategory === cat.id;
            const count = getCategoryCount(cat.id);

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded text-xs font-medium transition-all cursor-pointer select-none border",
                  isSelected
                    ? "bg-indigo-600 border-indigo-500 text-white font-semibold"
                    : "bg-transparent border-transparent text-zinc-400 hover:bg-zinc-800/80 hover:text-zinc-100 hover:border-zinc-800"
                )}
              >
                <div className="flex items-center gap-2.5">
                  <IconComponent className={cn("w-3.5 h-3.5 shrink-0", isSelected ? "text-white" : "text-zinc-400")} />
                  <span>{cat.name}</span>
                </div>

                <span
                  className={cn(
                    "font-mono text-[10px] px-1.5 py-0.5 rounded",
                    isSelected
                      ? "bg-indigo-700/60 text-indigo-100"
                      : "bg-zinc-800 text-zinc-400"
                  )}
                >
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Quick Documentation Box */}
      <div className="p-4 rounded bg-zinc-900 border border-zinc-800 space-y-3 text-xs">
        <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
          <Icons.Sparkles className="w-3.5 h-3.5" /> Motion + Tailwind
        </div>
        <p className="text-zinc-400 leading-relaxed text-[11px]">
          All components support live customizable props, spring physics, color themes, and direct JSX export. Use for building immersive user interfaces.
        </p>
        <div className="pt-2 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
            #motion
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
            #shadcn
          </span>
          <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
            #springs
          </span>
        </div>
      </div>
    </aside>
  );
}
