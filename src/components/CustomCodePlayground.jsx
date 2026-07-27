import React, { useState } from "react";
import {
  Code,
  Sparkles,
  Save,
  Check,
  RefreshCw,
  Layout,
  Tag,
  FileText,
  AlertCircle,
  ArrowRight,
  Sliders,
  Layers,
  Copy,
  Terminal,
} from "lucide-react";
import DynamicRunner from "./DynamicRunner";
import { SAMPLE_TEMPLATES, saveCustomComponent } from "../lib/customComponentsStorage";
import { CATEGORIES } from "../data/componentsData";
import { cn } from "../lib/utils";

const INITIAL_CODE = `const testimonials = [
  {
    quote: "This component library cut our development time by over 60%. The Framer Motion integration is fluid and effortless to integrate into our React stack.",
    name: "Elena Rostova",
    role: "Lead Frontend Architect",
    company: "Vortex Labs",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Enterprise Plan",
    metric: "+140% Conversion Rate"
  },
  {
    quote: "The pre-built micro-interactions and layout dynamics give our SaaS app a hyper-polished look. Our design system team loves it.",
    name: "Marcus Vance",
    role: "Head of Product Design",
    company: "Aether Dynamics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Pro License",
    metric: "3.2x User Engagement"
  },
  {
    quote: "Clean, responsive, and zero unnecessary bloat. Finding UI components that render smoothly with Framer Motion without glitches is rare.",
    name: "Sophia Chen",
    role: "CTO & Co-Founder",
    company: "Hyperion Edge",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Startup Scale",
    metric: "100k Daily Active Users"
  },
  {
    quote: "Implementation took less than an hour. The prop controls and runtime customization panel made developer handoff completely seamless.",
    name: "David KOR",
    role: "Senior Engineering Manager",
    company: "Pulse Systems",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    tag: "Scale Tier",
    metric: "99.9% Uptime SLA"
  }
];

export default function TestimonialShowcase() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  const current = testimonials[active];

  return (
    <div className="w-full max-w-3xl bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden font-sans space-y-6">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -right-24 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar */}
      <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Quote className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              CLIENT TESTIMONIALS
            </h3>
            <p className="text-[11px] text-zinc-400 font-mono">
              Verified feedback from product engineering teams
            </p>
          </div>
        </div>

        {/* Autoplay toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setAutoplay(!autoplay)}
            className={"px-2.5 py-1 rounded-md border text-[11px] font-mono transition-colors flex items-center gap-1.5 cursor-pointer " + (autoplay ? "bg-indigo-950/60 border-indigo-800 text-indigo-300" : "bg-zinc-900 border-zinc-800 text-zinc-400")}
          >
            <span className={"w-1.5 h-1.5 rounded-full " + (autoplay ? "bg-indigo-400 animate-pulse" : "bg-zinc-600")} />
            {autoplay ? "AUTOPLAY ON" : "PAUSED"}
          </button>
        </div>
      </div>

      {/* Main Active Testimonial Card */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="p-6 bg-gradient-to-br from-zinc-900/90 to-zinc-950 border border-zinc-800 rounded-xl space-y-6 shadow-lg"
          >
            {/* Rating Stars & Tag */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                {current.tag}
              </span>
            </div>

            {/* Quote Body */}
            <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-sans italic">
              "{current.quote}"
            </p>

            {/* User Profile & Metric Footer */}
            <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-indigo-500/30 ring-2 ring-zinc-900"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    {current.name}
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </h4>
                  <p className="text-xs text-zinc-400 font-mono">
                    {current.role} • <span className="text-indigo-400">{current.company}</span>
                  </p>
                </div>
              </div>

              <div className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/50 text-emerald-300 text-xs font-mono font-semibold text-center sm:text-right">
                {current.metric}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons & Avatars Row */}
      <div className="flex items-center justify-between pt-2 relative z-10">
        <div className="flex items-center gap-2">
          {testimonials.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActive(idx);
                setAutoplay(false);
              }}
              className={"relative p-0.5 rounded-full transition-all cursor-pointer " + (active === idx ? "ring-2 ring-indigo-500 scale-110" : "opacity-50 hover:opacity-100")}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
              setAutoplay(false);
            }}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setActive((prev) => (prev + 1) % testimonials.length);
              setAutoplay(false);
            }}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}`;

export default function CustomCodePlayground({ onSavedSuccess, onGoToLibrary }) {
  const [name, setName] = useState("Custom Motion Widget");
  const [category, setCategory] = useState("custom");
  const [description, setDescription] = useState("A custom interactive motion primitive built directly in the playground.");
  const [tags, setTags] = useState("custom, motion, interactive");
  const [code, setCode] = useState(INITIAL_CODE);
  const [errorMsg, setErrorMsg] = useState(null);
  const [savedStatus, setSavedStatus] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Load template preset
  const handleSelectTemplate = (template) => {
    setName(template.name);
    setCategory(template.category);
    setDescription(template.description);
    setTags(template.tags.join(", "));
    setCode(template.code);
    setSavedStatus(false);
  };

  const handleResetCode = () => {
    setCode(INITIAL_CODE);
    setName("Custom Motion Widget");
    setSavedStatus(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errorMsg) {
      alert("Please fix syntax or execution errors before submitting to library.");
      return;
    }
    if (!name.trim()) {
      alert("Please enter a component name.");
      return;
    }

    const savedComp = saveCustomComponent({
      name: name.trim(),
      category,
      description: description.trim(),
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      code,
    });

    setSavedStatus(true);
    if (onSavedSuccess) onSavedSuccess(savedComp);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner & Preset Selector */}
      <div className="p-6 sm:p-8 rounded bg-zinc-900 border border-zinc-800 text-zinc-100 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
        <div className="space-y-2 max-w-2xl relative z-10">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-indigo-950 text-indigo-400 border border-indigo-800/80 font-mono text-xs font-bold uppercase tracking-wider">
            <Code className="w-3.5 h-3.5" /> LIVE JSX CREATOR & PLAYGROUND
          </div>
          <h2 className="font-syne font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-white">
            Write Code & Add To Library
          </h2>
          <p className="font-mono text-xs text-zinc-400 leading-relaxed">
            Directly write React, Motion, and Tailwind code below. Test live interactions in real-time, submit to save it to your component library!
          </p>
        </div>

        {/* Template selector pills */}
        <div className="space-y-2 shrink-0 w-full md:w-auto relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 block">
            LOAD STARTER TEMPLATE:
          </span>
          <div className="flex flex-wrap md:flex-col gap-2">
            {SAMPLE_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => handleSelectTemplate(tmpl)}
                className="px-3 py-1.5 font-mono text-xs rounded bg-zinc-950 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 hover:border-indigo-500/50 transition-colors cursor-pointer text-left flex items-center justify-between gap-3 uppercase"
              >
                <span>{tmpl.name}</span>
                <span className="text-[9px] text-indigo-400 bg-indigo-950/80 px-1.5 py-0.5 rounded border border-indigo-800/80">
                  {tmpl.category}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Component Metadata Form Bar */}
      <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-5 rounded space-y-4">
        <div className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-300 pb-2 border-b border-zinc-800 flex items-center justify-between">
          <span>Component Metadata Configuration</span>
          <span className="text-indigo-400 text-[10px]">ALL FIELDS EDITABLE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-1.5">
            <label className="font-mono text-xs text-zinc-400 uppercase flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-indigo-400" /> Component Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setSavedStatus(false);
              }}
              placeholder="e.g. Cyber Neon Card"
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded font-mono text-xs text-zinc-100 outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs text-zinc-400 uppercase flex items-center gap-1.5">
              <Layout className="w-3.5 h-3.5 text-indigo-400" /> Category
            </label>
            <select
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setSavedStatus(false);
              }}
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded font-mono text-xs text-zinc-100 outline-none focus:border-indigo-500"
            >
              {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name} ({cat.id})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="font-mono text-xs text-zinc-400 uppercase flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-indigo-400" /> Tags (Comma separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => {
                setTags(e.target.value);
                setSavedStatus(false);
              }}
              placeholder="e.g. motion, card, cyber"
              className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded font-mono text-xs text-zinc-100 outline-none focus:border-indigo-500"
            />
          </div>
        </div>
      </form>

      {/* Split Editor Grid: Left Code Editor, Right Live Render Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Code Editor */}
        <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 rounded overflow-hidden flex flex-col space-y-0">
          {/* Editor Header Bar */}
          <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span className="font-mono text-xs font-bold text-zinc-200 uppercase tracking-wider">
                REACT / MOTION CODE EDITOR
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyCode}
                className="px-2.5 py-1 font-mono text-[11px] font-semibold text-zinc-400 hover:text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded transition-colors uppercase flex items-center gap-1 cursor-pointer"
              >
                {copiedCode ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedCode ? "Copied" : "Copy"}</span>
              </button>

              <button
                type="button"
                onClick={handleResetCode}
                className="px-2.5 py-1 font-mono text-[11px] font-semibold text-zinc-400 hover:text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded transition-colors uppercase flex items-center gap-1 cursor-pointer"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>
          </div>

          {/* Textarea Code Input with Prism Colorful Syntax Highlighting */}
          <div className="relative min-h-[360px] bg-[#0a0a0c]">
            <textarea
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                setSavedStatus(false);
              }}
              spellCheck={false}
              rows={18}
              className="w-full p-4 bg-[#0a0a0c] text-zinc-100 font-mono text-xs leading-relaxed outline-none border-none resize-y selection:bg-indigo-600 selection:text-white"
              placeholder="Write your React component code here..."
            />
          </div>

          {/* Scope Quick Reference Bar */}
          <div className="px-4 py-2.5 bg-zinc-950 border-t border-zinc-800 font-mono text-[10px] text-zinc-400 flex flex-wrap gap-1.5 items-center">
            <span className="text-indigo-400 uppercase font-bold mr-1">In-Scope:</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">motion</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">useState</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">useEffect</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">MotionButton</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">MotionCard</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">MotionBadge</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">Lucide Icons</span>
            <span className="bg-zinc-900 border border-zinc-800 px-1.5 py-0.5 rounded text-zinc-300">cn</span>
          </div>

        </div>

        {/* Right Column: Live Render Stage & Submit CTA */}
        <div className="lg:col-span-6 space-y-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded overflow-hidden">
            {/* Stage Header */}
            <div className="px-4 py-3 bg-zinc-950 border-b border-zinc-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-bold text-zinc-200 uppercase tracking-wider">LIVE COMPONENT CANVAS</span>
              </div>
              <span className="text-[10px] text-zinc-400 uppercase">
                {errorMsg ? "SYNTAX_ERROR" : "COMPILING_OK"}
              </span>
            </div>

            {/* Stage Body */}
            <div className="p-8 bg-grid-dots bg-zinc-950 min-h-[380px] flex items-center justify-center relative overflow-hidden">
              <DynamicRunner code={code} onError={setErrorMsg} />
            </div>

            {/* Stage Footer Status */}
            <div className="px-5 py-3 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
              <span className="font-mono text-xs text-zinc-400">
                {errorMsg ? (
                  <span className="text-rose-400 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" /> Fix errors before saving
                  </span>
                ) : (
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" /> Ready for submission
                  </span>
                )}
              </span>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={Boolean(errorMsg)}
                className={cn(
                  "px-5 py-2.5 font-mono text-xs font-bold rounded uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-lg",
                  savedStatus
                    ? "bg-emerald-600 text-white hover:bg-emerald-500"
                    : errorMsg
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                    : "bg-indigo-600 hover:bg-indigo-500 text-white"
                )}
              >
                {savedStatus ? (
                  <>
                    <Check className="w-4 h-4" /> Saved to Library!
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" /> Submit & Add To Library
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Saved Notification Card */}
          {savedStatus && (
            <div className="p-5 rounded bg-emerald-950/80 border border-emerald-800/80 text-emerald-100 font-mono text-xs space-y-3 shadow-xl">
              <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-sm">
                <Sparkles className="w-4 h-4" /> Component Successfully Saved!
              </div>
              <p className="text-emerald-200 text-xs">
                "{name}" has been submitted and saved to your component library under category "{category}".
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={onGoToLibrary}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
                >
                  <span>View in Component Library</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
