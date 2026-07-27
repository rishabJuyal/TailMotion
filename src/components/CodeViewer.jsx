import React, { useState, useMemo } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import { Copy, Check, Terminal } from "lucide-react";
import { cn } from "../lib/utils";

export default function CodeViewer({ code, language = "jsx", title = "Component Code" }) {
  const [copied, setCopied] = useState(false);

  const highlightedHtml = useMemo(() => {
    if (!code) return "";
    try {
      const grammar = Prism.languages[language] || Prism.languages.jsx || Prism.languages.javascript;
      return Prism.highlight(code, grammar, language);
    } catch (e) {
      return code;
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 text-zinc-100 shadow-2xl font-mono text-xs">
      {/* Top Bar */}
      <div className="px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-[11px] font-semibold text-zinc-400 ml-2 flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-indigo-400" />
            {title}
          </span>
        </div>

        <button
          onClick={handleCopy}
          className={cn(
            "inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer select-none",
            copied
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
              : "bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700"
          )}
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              Copy Code
            </>
          )}
        </button>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto leading-relaxed max-h-[380px] scrollbar-thin bg-[#0a0a0c]">
        <pre className="font-mono text-xs selection:bg-indigo-500/30 selection:text-indigo-200">
          <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
        </pre>
      </div>
    </div>
  );
}

