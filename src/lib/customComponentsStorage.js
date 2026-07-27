const STORAGE_KEY = "motion_ui_custom_components";

export const SAMPLE_TEMPLATES = [
  {
    id: "template-1",
    name: "Glow Tech Button",
    category: "buttons",
    description: "Interactive glowing border button with hover spring scale and icon pulse.",
    tags: ["glow", "button", "magnetic", "tech"],
    code: `export default function GlowButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setClicked(!clicked)}
      className="relative px-6 py-3 rounded bg-zinc-950 border border-indigo-500/50 text-indigo-300 font-mono text-xs font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all cursor-pointer flex items-center gap-2"
    >
      <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
      <span>{clicked ? "SYSTEM ACTIVE" : "INITIALIZE NODE"}</span>
    </motion.button>
  );
}`
  },
  {
    id: "template-2",
    name: "Cyber Neon Card",
    category: "cards",
    description: "Futuristic dark card with live counter state and animated gradient accents.",
    tags: ["cyber", "card", "interactive", "counter"],
    code: `export default function CyberCard() {
  const [count, setCount] = useState(42);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 rounded bg-zinc-950 border border-zinc-800 text-zinc-100 max-w-sm w-full space-y-4 shadow-2xl relative overflow-hidden"
    >
      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Cpu className="w-4 h-4 text-indigo-400" />
          <h4 className="font-syne text-sm font-bold uppercase tracking-wider text-white">CORE PROCESSOR</h4>
        </div>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
          ONLINE
        </span>
      </div>

      <p className="font-mono text-xs text-zinc-400">
        Active threat mitigation engine state count: <span className="text-indigo-400 font-bold">{count}</span>
      </p>

      <div className="flex gap-2">
        <button
          onClick={() => setCount(c => c + 1)}
          className="flex-1 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs font-semibold uppercase transition-colors"
        >
          Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs uppercase"
        >
          Reset
        </button>
      </div>
    </motion.div>
  );
}`
  },
  {
    id: "template-3",
    name: "Pulse Status Badge",
    category: "badges",
    description: "Custom status pill badge with live glowing indicator and hover tooltip.",
    tags: ["pulse", "badge", "status", "live"],
    code: `export default function PulseBadge() {
  const [active, setActive] = useState(true);

  return (
    <motion.div
      onClick={() => setActive(!active)}
      whileHover={{ scale: 1.04 }}
      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 cursor-pointer transition-colors"
    >
      <span className={\`w-2 h-2 rounded-full \${active ? "bg-emerald-400 animate-ping" : "bg-zinc-600"}\`} />
      <span className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-200">
        {active ? "LIVE TELEMETRY" : "PAUSED"}
      </span>
      <Activity className="w-3.5 h-3.5 text-zinc-400" />
    </motion.div>
  );
}`
  },
  {
    id: "template-4",
    name: "Animated Testimonial Showcase",
    category: "motion",
    description: "Interactive animated testimonial slider with autoplay controls, star ratings, verified badges, and smooth Framer Motion transitions.",
    tags: ["testimonial", "reviews", "slider", "carousel", "motion", "rating"],
    customControls: [],
    code: `const testimonials = [
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
}`
  }
];

export function getCustomComponents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error("Failed to load custom components from storage:", err);
    return [];
  }
}

export function saveCustomComponent(component) {
  try {
    const existing = getCustomComponents();
    const id = component.id || `custom_${Date.now()}`;
    const newComponent = {
      ...component,
      id,
      isCustom: true,
      category: component.category || "custom",
      defaultProps: component.defaultProps || {},
      tags: Array.isArray(component.tags)
        ? component.tags
        : typeof component.tags === "string"
        ? component.tags.split(",").map((t) => t.trim()).filter(Boolean)
        : ["custom"],
      updatedAt: new Date().toISOString(),
    };

    const index = existing.findIndex((c) => c.id === id);
    if (index >= 0) {
      existing[index] = newComponent;
    } else {
      existing.unshift(newComponent);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    return newComponent;
  } catch (err) {
    console.error("Failed to save custom component to storage:", err);
    throw err;
  }
}

export function deleteCustomComponent(id) {
  try {
    const existing = getCustomComponents();
    const filtered = existing.filter((c) => c.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (err) {
    console.error("Failed to delete custom component:", err);
    return false;
  }
}
