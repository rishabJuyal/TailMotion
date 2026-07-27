import React, { useState, useEffect, useRef, useMemo, useCallback, useContext, createContext, useReducer, useId, useLayoutEffect } from "react";
import * as Babel from "@babel/standalone";
import * as motionModule from "motion/react";
import * as LucideIcons from "lucide-react";
import { cn } from "../lib/utils";

import MotionButton from "./ui/Button";
import MotionCard from "./ui/Card";
import MotionInput from "./ui/Input";
import MotionSwitch from "./ui/Switch";
import MotionBadge from "./ui/Badge";
import MotionToast from "./ui/Toast";
import MotionModal from "./ui/Modal";
import MotionAccordion from "./ui/Accordion";
import MotionCounter from "./ui/Counter";
import MotionSlider from "./ui/Slider";
import MotionTabs from "./ui/Tabs";
import MotionDock from "./ui/Dock";

// Helper to sanitize and remove import & export statements cleanly
function sanitizeUserCode(rawCode) {
  if (!rawCode) return { cleanCode: "", defaultExportName: null };

  let code = rawCode;

  // 1. Remove directives like "use client"; or 'use strict';
  code = code.replace(/['"]use (client|strict)['"];?/g, "");

  // 2. Remove import statements (multiline and singleline)
  code = code
    .replace(/import\s+[\s\S]*?from\s+['"][^'"]+['"]\s*;?/g, "")
    .replace(/import\s+['"][^'"]+['"]\s*;?/g, "");

  let defaultExportName = null;

  // 3. Handle export default function Name()
  code = code.replace(/export\s+default\s+function\s+([a-zA-Z0-9_$]+)/g, (match, p1) => {
    defaultExportName = p1;
    return `function ${p1}`;
  });

  // 4. Handle export default class Name()
  code = code.replace(/export\s+default\s+class\s+([a-zA-Z0-9_$]+)/g, (match, p1) => {
    defaultExportName = p1;
    return `class ${p1}`;
  });

  // 5. Handle export default function() (anonymous)
  code = code.replace(/export\s+default\s+function\s*\(/g, "var __default_export__ = function(");

  // 6. Handle export default () => or export default (props) =>
  code = code.replace(/export\s+default\s+(\([^)]*\)\s*=>)/g, "var __default_export__ = $1");

  // 7. Handle export default Name;
  code = code.replace(/export\s+default\s+([a-zA-Z0-9_$]+)\s*;?/g, (match, p1) => {
    if (!defaultExportName) defaultExportName = p1;
    return `/* export default ${p1} */`;
  });

  // 8. Handle generic export default <expression>
  code = code.replace(/export\s+default\s+/g, "var __default_export__ = ");

  // 9. Handle named exports like export function X() or export const X = ...
  code = code
    .replace(/export\s+function\b/g, "function ")
    .replace(/export\s+const\b/g, "const ")
    .replace(/export\s+let\b/g, "let ")
    .replace(/export\s+var\b/g, "var ")
    .replace(/export\s+\{[\s\S]*?\}\s*;?/g, "");

  if (!defaultExportName) {
    const compMatches = [
      ...code.matchAll(/(?:function|const|var|let)\s+([A-Z][a-zA-Z0-9_$]*)/g)
    ];
    if (compMatches.length > 0) {
      defaultExportName = compMatches[compMatches.length - 1][1];
    }
  }

  return { cleanCode: code.trim(), defaultExportName };
}

// Extract function or arrow const identifiers defined in code
function extractFunctionNames(str) {
  const names = [];
  const funcRegex = /function\s+([a-zA-Z_$][a-zA-Z0-9_$]*)/g;
  const constRegex = /(?:const|let|var)\s+([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*(?:\([^)]*\)|[a-zA-Z_$][a-zA-Z0-9_$]*)\s*=>/g;

  let match;
  while ((match = funcRegex.exec(str)) !== null) {
    if (match[1] && !names.includes(match[1])) names.push(match[1]);
  }
  while ((match = constRegex.exec(str)) !== null) {
    if (match[1] && !names.includes(match[1])) names.push(match[1]);
  }
  return names;
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    if (this.props.onError) {
      this.props.onError(error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 rounded border border-rose-800/80 bg-rose-950/70 text-rose-300 font-mono text-xs space-y-2 max-w-xl w-full">
          <div className="font-bold uppercase tracking-wider flex items-center gap-2 text-rose-400">
            <LucideIcons.AlertCircle className="w-4 h-4 shrink-0" />
            <span>Runtime Execution Error</span>
          </div>
          <p className="text-[11px] bg-rose-950/90 p-2.5 rounded border border-rose-900 text-rose-200 font-mono">
            {this.state.error?.message}
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default function DynamicRunner({ code, onError = null }) {
  const [RenderComponent, setRenderComponent] = useState(null);
  const [compileError, setCompileError] = useState(null);

  useEffect(() => {
    try {
      setCompileError(null);
      if (onError) onError(null);

      if (!code || !code.trim()) {
        setRenderComponent(null);
        return;
      }

      const { cleanCode, defaultExportName } = sanitizeUserCode(code);
      if (!cleanCode) {
        setRenderComponent(null);
        return;
      }

      let wrappedCode = "";
      const trimmed = cleanCode.trim();

      if (trimmed.startsWith("<") || (trimmed.startsWith("(") && trimmed.includes("=>"))) {
        // Direct JSX block or arrow function expression
        wrappedCode = `
          (function() {
            return (
              ${trimmed}
            );
          })()
        `;
      } else {
        const extractedNames = extractFunctionNames(trimmed);
        wrappedCode = `
          (function() {
            var __default_export__ = undefined;
            
            ${trimmed}
            
            ${defaultExportName ? `try { if (typeof ${defaultExportName} !== 'undefined') __default_export__ = ${defaultExportName}; } catch(e){}` : ""}
            
            if (typeof __default_export__ !== 'undefined' && __default_export__ !== null) {
              return __default_export__;
            }
            
            try { if (typeof Studio3DTestimonials === 'function') return Studio3DTestimonials; } catch(e){}
            try { if (typeof TestimonialShowcase === 'function') return TestimonialShowcase; } catch(e){}
            try { if (typeof GlowButton === 'function') return GlowButton; } catch(e){}
            try { if (typeof CyberCard === 'function') return CyberCard; } catch(e){}
            try { if (typeof PulseBadge === 'function') return PulseBadge; } catch(e){}
            try { if (typeof InfiniteGallery === 'function') return InfiniteGallery; } catch(e){}
            try { if (typeof CustomComponent === 'function') return CustomComponent; } catch(e){}
            try { if (typeof MyComponent === 'function') return MyComponent; } catch(e){}
            try { if (typeof Component === 'function') return Component; } catch(e){}
            try { if (typeof App === 'function') return App; } catch(e){}
            try { if (typeof CustomMotionWidget === 'function') return CustomMotionWidget; } catch(e){}

            ${extractedNames.map(name => `try { if (typeof ${name} === 'function') return ${name}; } catch(e){}`).join('\n')}

            return null;
          })()
        `;
      }

      // Transform JSX using Babel with classic runtime (prevents import statements)
      const transformed = Babel.transform(wrappedCode, {
        presets: [["react", { runtime: "classic" }]],
      }).code;

      // Provide complete scope for runtime execution
      const scopeKeys = [
        "React",
        "useState",
        "useEffect",
        "useRef",
        "useMemo",
        "useCallback",
        "useContext",
        "createContext",
        "useReducer",
        "useId",
        "useLayoutEffect",
        "motion",
        "AnimatePresence",
        "cn",
        "Lucide",
        "MotionButton",
        "MotionCard",
        "MotionInput",
        "MotionSwitch",
        "MotionBadge",
        "MotionToast",
        "MotionModal",
        "MotionAccordion",
        "MotionCounter",
        "MotionSlider",
        "MotionTabs",
        "MotionDock",
        ...Object.keys(LucideIcons),
      ];

      const scopeValues = [
        React,
        useState,
        useEffect,
        useRef,
        useMemo,
        useCallback,
        useContext,
        createContext,
        useReducer,
        useId,
        useLayoutEffect,
        motionModule.motion,
        motionModule.AnimatePresence,
        cn,
        LucideIcons,
        MotionButton,
        MotionCard,
        MotionInput,
        MotionSwitch,
        MotionBadge,
        MotionToast,
        MotionModal,
        MotionAccordion,
        MotionCounter,
        MotionSlider,
        MotionTabs,
        MotionDock,
        ...Object.values(LucideIcons),
      ];

      const executor = new Function(...scopeKeys, `return ${transformed};`);
      const EvaluatedTarget = executor(...scopeValues);

      if (typeof EvaluatedTarget === "function") {
        setRenderComponent(() => EvaluatedTarget);
      } else if (React.isValidElement(EvaluatedTarget)) {
        setRenderComponent(() => () => EvaluatedTarget);
      } else {
        throw new Error(
          "No React component or valid JSX element was returned. Ensure your code defines a component function or returns a JSX element."
        );
      }
    } catch (err) {
      const errMsg = err?.message || "Failed to compile component code.";
      setCompileError(errMsg);
      if (onError) onError(errMsg);
      setRenderComponent(null);
    }
  }, [code]);

  if (compileError) {
    return (
      <div className="p-4 rounded border border-rose-800/80 bg-rose-950/80 text-rose-300 font-mono text-xs space-y-2 max-w-xl w-full shadow-2xl">
        <div className="font-bold uppercase tracking-wider flex items-center gap-2 text-rose-400 text-xs">
          <LucideIcons.AlertCircle className="w-4 h-4 shrink-0" />
          <span>SYNTAX / SCOPE ERROR</span>
        </div>
        <p className="text-[11px] bg-rose-950/90 p-3 rounded border border-rose-900 text-rose-200 leading-relaxed font-mono whitespace-pre-wrap">
          {compileError}
        </p>
      </div>
    );
  }

  if (!RenderComponent) {
    return (
      <div className="text-zinc-500 font-mono text-xs flex items-center gap-2">
        <LucideIcons.Sparkles className="w-4 h-4 text-zinc-600 animate-pulse" />
        <span>Waiting for component code...</span>
      </div>
    );
  }

  return (
    <ErrorBoundary
      key={code}
      onError={(msg) => {
        setCompileError(msg);
        if (onError) onError(msg);
      }}
    >
      <RenderComponent />
    </ErrorBoundary>
  );
}
