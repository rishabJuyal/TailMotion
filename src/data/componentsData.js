export const CATEGORIES = [
  { id: "all", name: "All Components", icon: "Grid" },
  { id: "custom", name: "Custom Built", icon: "Code" },
  { id: "buttons", name: "Buttons & Action", icon: "MousePointerClick" },
  { id: "cards", name: "Cards & Layout", icon: "Layout" },
  { id: "inputs", name: "Inputs & Controls", icon: "Sliders" },
  { id: "navigation", name: "Navigation & Menus", icon: "Compass" },
  { id: "overlays", name: "Overlays & Modals", icon: "Layers" },
  { id: "feedback", name: "Feedback & Status", icon: "BellRing" },
  { id: "motion", name: "Motion Primitives", icon: "Sparkles" },
];

export const COLOR_SCHEMES = [
  { id: "indigo", name: "Indigo", bg: "bg-indigo-600", text: "text-indigo-600", border: "border-indigo-600", ring: "ring-indigo-500", shadow: "shadow-indigo-500/20" },
  { id: "violet", name: "Violet", bg: "bg-violet-600", text: "text-violet-600", border: "border-violet-600", ring: "ring-violet-500", shadow: "shadow-violet-500/20" },
  { id: "emerald", name: "Emerald", bg: "bg-emerald-600", text: "text-emerald-600", border: "border-emerald-600", ring: "ring-emerald-500", shadow: "shadow-emerald-500/20" },
  { id: "rose", name: "Rose", bg: "bg-rose-600", text: "text-rose-600", border: "border-rose-600", ring: "ring-rose-500", shadow: "shadow-rose-500/20" },
  { id: "amber", name: "Amber", bg: "bg-amber-500", text: "text-amber-500", border: "border-amber-500", ring: "ring-amber-500", shadow: "shadow-amber-500/20" },
  { id: "cyan", name: "Cyan", bg: "bg-cyan-600", text: "text-cyan-600", border: "border-cyan-600", ring: "ring-cyan-500", shadow: "shadow-cyan-500/20" },
  { id: "zinc", name: "Zinc", bg: "bg-zinc-900 dark:bg-zinc-100", text: "text-zinc-900 dark:text-zinc-100", border: "border-zinc-900 dark:border-zinc-100", ring: "ring-zinc-400", shadow: "shadow-zinc-500/20" },
];

export const RADIUS_OPTIONS = [
  { id: "none", name: "Square (0px)", class: "rounded-none" },
  { id: "sm", name: "Small (4px)", class: "rounded-sm" },
  { id: "md", name: "Medium (8px)", class: "rounded-md" },
  { id: "lg", name: "Large (12px)", class: "rounded-lg" },
  { id: "xl", name: "Extra Large (16px)", class: "rounded-xl" },
  { id: "2xl", name: "2X Large (24px)", class: "rounded-2xl" },
  { id: "full", name: "Pill (999px)", class: "rounded-full" },
];

export const MOTION_PRESETS = [
  { id: "smooth", name: "Smooth Spring", type: "spring", stiffness: 300, damping: 20 },
  { id: "bouncy", name: "Bouncy", type: "spring", stiffness: 400, damping: 10 },
  { id: "gentle", name: "Gentle", type: "spring", stiffness: 150, damping: 25 },
  { id: "snappy", name: "Snappy", type: "spring", stiffness: 500, damping: 30 },
  { id: "linear", name: "Ease Out", type: "tween", duration: 0.2, ease: "easeOut" },
];

export const COMPONENTS = [
  {
    id: "motion-button",
    name: "Motion Action Button",
    category: "buttons",
    description: "A highly customizable button powered by Motion with hover scale, tap bounce, magnetic cursor, loading spinner, and glow border effects.",
    tags: ["button", "action", "magnetic", "shimmer", "glow", "shadcn"],
    defaultProps: {
      label: "Click Me",
      variant: "primary",
      size: "md",
      colorScheme: "indigo",
      radius: "lg",
      motionPreset: "bouncy",
      showIcon: true,
      iconName: "Sparkles",
      isLoading: false,
      disabled: false,
      glowEffect: true,
      shimmerEffect: false,
    },
    customControls: [
      { key: "label", label: "Button Label", type: "text" },
      { key: "variant", label: "Variant", type: "select", options: ["primary", "secondary", "outline", "ghost", "destructive", "glass"] },
      { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg", "xl"] },
      { key: "colorScheme", label: "Color Accent", type: "colorSelect" },
      { key: "radius", label: "Border Radius", type: "radiusSelect" },
      { key: "motionPreset", label: "Animation Style", type: "motionSelect" },
      { key: "showIcon", label: "Show Icon", type: "boolean" },
      { key: "iconName", label: "Icon", type: "select", options: ["Sparkles", "ArrowRight", "Download", "Heart", "Send", "Check", "Zap"] },
      { key: "isLoading", label: "Loading State", type: "boolean" },
      { key: "glowEffect", label: "Glow Accent", type: "boolean" },
      { key: "shimmerEffect", label: "Shimmer Sweep", type: "boolean" },
      { key: "disabled", label: "Disabled", type: "boolean" },
    ]
  },
  {
    id: "spotlight-card",
    name: "Interactive Motion Card",
    category: "cards",
    description: "Modern card component featuring hover 3D perspective tilt, mouse tracking spotlight, glassmorphism border, and smooth content reveals.",
    tags: ["card", "spotlight", "tilt", "3d", "glass", "container"],
    defaultProps: {
      title: "Interactive Card",
      subtitle: "Customizable Motion & Tailwind Primitive",
      description: "Build engaging user interfaces with micro-interactions, responsive typography, and spring animations.",
      variant: "glass",
      colorScheme: "indigo",
      radius: "2xl",
      tiltEffect: true,
      spotlight: true,
      badgeText: "NEW",
      showFooter: true,
      motionPreset: "smooth",
    },
    customControls: [
      { key: "title", label: "Title Text", type: "text" },
      { key: "subtitle", label: "Subtitle Text", type: "text" },
      { key: "description", label: "Body Text", type: "text" },
      { key: "badgeText", label: "Badge Label", type: "text" },
      { key: "variant", label: "Variant Style", type: "select", options: ["glass", "solid", "outline", "gradient", "subtle"] },
      { key: "colorScheme", label: "Accent Color", type: "colorSelect" },
      { key: "radius", label: "Corner Radius", type: "radiusSelect" },
      { key: "tiltEffect", label: "3D Perspective Tilt", type: "boolean" },
      { key: "spotlight", label: "Cursor Spotlight Glow", type: "boolean" },
      { key: "showFooter", label: "Show Action Footer", type: "boolean" },
    ]
  },
  {
    id: "floating-input",
    name: "Floating Label Input",
    category: "inputs",
    description: "A smooth input field with floating label animation, focus spring border glow, clear button, and validation state feedback.",
    tags: ["input", "form", "floating-label", "text-field", "validation"],
    defaultProps: {
      label: "Email Address",
      placeholder: "name@company.com",
      colorScheme: "indigo",
      radius: "lg",
      variant: "outlined",
      iconName: "Mail",
      helperText: "We'll never share your email.",
      isInvalid: false,
      errorMessage: "Please enter a valid email address.",
      showClearButton: true,
    },
    customControls: [
      { key: "label", label: "Label", type: "text" },
      { key: "placeholder", label: "Placeholder", type: "text" },
      { key: "helperText", label: "Helper Message", type: "text" },
      { key: "variant", label: "Style Variant", type: "select", options: ["outlined", "filled", "underlined", "glass"] },
      { key: "colorScheme", label: "Focus Accent", type: "colorSelect" },
      { key: "radius", label: "Border Radius", type: "radiusSelect" },
      { key: "iconName", label: "Leading Icon", type: "select", options: ["Mail", "User", "Lock", "Search", "Key", "Globe", "AtSign"] },
      { key: "isInvalid", label: "Trigger Error State", type: "boolean" },
      { key: "errorMessage", label: "Error Message", type: "text" },
      { key: "showClearButton", label: "Show Clear Button", type: "boolean" },
    ]
  },
  {
    id: "motion-switch",
    name: "Spring Toggle Switch",
    category: "inputs",
    description: "An interactive switch control featuring spring physics thumb slide, customizable active/inactive icons, and glowing track states.",
    tags: ["switch", "toggle", "form", "motion", "checkbox"],
    defaultProps: {
      label: "Enable Notifications",
      description: "Receive instant updates regarding your component deployments.",
      checked: true,
      size: "md",
      colorScheme: "emerald",
      showIcons: true,
      activeIcon: "Check",
      inactiveIcon: "X",
      disabled: false,
    },
    customControls: [
      { key: "label", label: "Label", type: "text" },
      { key: "description", label: "Description", type: "text" },
      { key: "checked", label: "Checked State", type: "boolean" },
      { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg"] },
      { key: "colorScheme", label: "Active Color", type: "colorSelect" },
      { key: "showIcons", label: "Show Track Icons", type: "boolean" },
      { key: "disabled", label: "Disabled", type: "boolean" },
    ]
  },
  {
    id: "segmented-tabs",
    name: "Motion Segmented Tabs",
    category: "navigation",
    description: "Sliding pill tab navigation powered by layoutId motion animation for fluid layout transitions without re-renders.",
    tags: ["tabs", "navigation", "layoutId", "pill", "segmented"],
    defaultProps: {
      colorScheme: "indigo",
      radius: "full",
      variant: "pill",
      activeTab: "overview",
      size: "md",
      motionPreset: "snappy",
    },
    customControls: [
      { key: "variant", label: "Tab Style", type: "select", options: ["pill", "underline", "boxed", "glass"] },
      { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg"] },
      { key: "colorScheme", label: "Active Accent Color", type: "colorSelect" },
      { key: "radius", label: "Container Radius", type: "radiusSelect" },
      { key: "motionPreset", label: "Spring Physics", type: "motionSelect" },
    ]
  },
  {
    id: "motion-dialog",
    name: "Animated Modal / Dialog",
    category: "overlays",
    description: "An accessible overlay dialog with AnimatePresence scale-up entrance, backdrop blur, ESC key dismiss, and customizable trigger button.",
    tags: ["modal", "dialog", "overlay", "popover", "animate-presence"],
    defaultProps: {
      title: "Publish Component",
      description: "Are you sure you want to export this component configuration to your production design system?",
      triggerLabel: "Open Dialog",
      colorScheme: "indigo",
      radius: "2xl",
      blurBackdrop: true,
      size: "md",
    },
    customControls: [
      { key: "title", label: "Modal Title", type: "text" },
      { key: "description", label: "Modal Description", type: "text" },
      { key: "triggerLabel", label: "Trigger Button Text", type: "text" },
      { key: "colorScheme", label: "Primary Button Color", type: "colorSelect" },
      { key: "radius", label: "Modal Radius", type: "radiusSelect" },
      { key: "blurBackdrop", label: "Blur Backdrop Glass", type: "boolean" },
      { key: "size", label: "Modal Size", type: "select", options: ["sm", "md", "lg", "full"] },
    ]
  },
  {
    id: "motion-badge",
    name: "Animated Pill Badge",
    category: "feedback",
    description: "Vibrant pill badges with live pulse indicator dots, glowing borders, hover expansion, and interactive close buttons.",
    tags: ["badge", "pill", "tag", "chip", "status", "pulse"],
    defaultProps: {
      label: "Feature Live",
      variant: "subtle",
      colorScheme: "emerald",
      size: "md",
      radius: "full",
      pulseDot: true,
      glow: true,
      removable: false,
      iconName: "Zap",
    },
    customControls: [
      { key: "label", label: "Badge Label", type: "text" },
      { key: "variant", label: "Style Variant", type: "select", options: ["solid", "subtle", "outline", "glass", "glow"] },
      { key: "colorScheme", label: "Color Theme", type: "colorSelect" },
      { key: "size", label: "Size", type: "select", options: ["sm", "md", "lg"] },
      { key: "radius", label: "Border Radius", type: "radiusSelect" },
      { key: "pulseDot", label: "Status Pulse Dot", type: "boolean" },
      { key: "glow", label: "Glow Effect", type: "boolean" },
      { key: "removable", label: "Dismiss Icon", type: "boolean" },
      { key: "iconName", label: "Icon", type: "select", options: ["Zap", "Sparkles", "Shield", "Star", "Flame", "CheckCircle"] },
    ]
  },
  {
    id: "dock-menu",
    name: "Floating Glass Dock",
    category: "navigation",
    description: "macOS inspired floating dock navigation with spring magnification on cursor hover, tooltips, and active indicator dot.",
    tags: ["dock", "navigation", "macOS", "magnification", "glass"],
    defaultProps: {
      colorScheme: "indigo",
      radius: "full",
      iconSize: "md",
      magnify: true,
      showLabels: true,
    },
    customControls: [
      { key: "colorScheme", label: "Active Highlight", type: "colorSelect" },
      { key: "radius", label: "Dock Shape", type: "radiusSelect" },
      { key: "iconSize", label: "Icon Base Size", type: "select", options: ["sm", "md", "lg"] },
      { key: "magnify", label: "Enable Hover Magnify", type: "boolean" },
      { key: "showLabels", label: "Hover Tooltip Labels", type: "boolean" },
    ]
  },
  {
    id: "motion-toast",
    name: "Interactive Notification Toast",
    category: "feedback",
    description: "Animated toast banner with enter/exit slide transitions, auto-dimming countdown progress timer, and action triggers.",
    tags: ["toast", "notification", "alert", "feedback", "banner"],
    defaultProps: {
      title: "Changes Saved Successfully",
      message: "Your component library settings have been exported to Tailwind CSS.",
      status: "success",
      colorScheme: "emerald",
      radius: "xl",
      showProgress: true,
      duration: 4000,
    },
    customControls: [
      { key: "title", label: "Toast Title", type: "text" },
      { key: "message", label: "Toast Message", type: "text" },
      { key: "status", label: "Status Level", type: "select", options: ["success", "info", "warning", "error"] },
      { key: "colorScheme", label: "Color Accent", type: "colorSelect" },
      { key: "radius", label: "Border Radius", type: "radiusSelect" },
      { key: "showProgress", label: "Show Timer Progress Bar", type: "boolean" },
    ]
  },
  {
    id: "animated-accordion",
    name: "Motion Collapsible Accordion",
    category: "cards",
    description: "Smooth height transition accordion panel with spring physics, rotation indicators, and customizable open/close speed.",
    tags: ["accordion", "collapse", "faq", "card", "expand"],
    defaultProps: {
      title: "How do I customize Tailwind & Motion presets?",
      content: "You can tweak all color schemes, border radius, motion springs, and component sizes directly in the customizer panel. Code automatically adapts to your live choices!",
      colorScheme: "indigo",
      radius: "xl",
      variant: "outlined",
      defaultOpen: true,
    },
    customControls: [
      { key: "title", label: "Header Title", type: "text" },
      { key: "content", label: "Panel Content", type: "text" },
      { key: "variant", label: "Accordion Variant", type: "select", options: ["outlined", "filled", "glass", "minimal"] },
      { key: "colorScheme", label: "Active Header Color", type: "colorSelect" },
      { key: "radius", label: "Corner Radius", type: "radiusSelect" },
      { key: "defaultOpen", label: "Expanded by Default", type: "boolean" },
    ]
  },
  {
    id: "number-ticker",
    name: "Animated Counter Ticker",
    category: "motion",
    description: "Fluid mechanical counter and stats display that smoothly rolls numbers on increment or trigger.",
    tags: ["counter", "ticker", "number", "stats", "animation"],
    defaultProps: {
      value: 12840,
      prefix: "$",
      suffix: "/mo",
      label: "Monthly Recurring Revenue",
      colorScheme: "emerald",
      radius: "xl",
    },
    customControls: [
      { key: "value", label: "Target Number", type: "text" },
      { key: "prefix", label: "Prefix (e.g., $)", type: "text" },
      { key: "suffix", label: "Suffix (e.g., /mo, %)", type: "text" },
      { key: "label", label: "Stat Label", type: "text" },
      { key: "colorScheme", label: "Text Highlight Color", type: "colorSelect" },
      { key: "radius", label: "Container Radius", type: "radiusSelect" },
    ]
  },
  {
    id: "range-slider",
    name: "Motion Tooltip Range Slider",
    category: "inputs",
    description: "Custom track slider featuring a floating motion badge that dynamically follows thumb position with scale feedback.",
    tags: ["slider", "range", "input", "form", "tooltip"],
    defaultProps: {
      label: "Animation Duration (ms)",
      min: 0,
      max: 1000,
      step: 10,
      value: 350,
      unit: "ms",
      colorScheme: "violet",
      radius: "full",
    },
    customControls: [
      { key: "label", label: "Slider Label", type: "text" },
      { key: "unit", label: "Value Unit", type: "text" },
      { key: "colorScheme", label: "Track Fill Color", type: "colorSelect" },
      { key: "radius", label: "Track Radius", type: "radiusSelect" },
    ]
  },
  {
    id: "testimonial-showcase",
    name: "Animated Testimonial Showcase",
    category: "motion",
    description: "Interactive animated testimonial slider with autoplay controls, star ratings, verified badges, and smooth Framer Motion transitions.",
    tags: ["testimonial", "reviews", "slider", "carousel", "motion", "rating"],
    defaultProps: {
      colorScheme: "indigo",
      radius: "xl",
    },
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
  },
  {
    id: "studio-3d-testimonials",
    name: "Studio 3D Testimonial Carousel",
    category: "motion",
    description: "3D elevated testimonial carousel featuring studio brand headers, active card zoom effects, background side previews, and circular navigation controls.",
    tags: ["testimonial", "reviews", "3d", "carousel", "motion", "cards", "studio"],
    defaultProps: {
      colorScheme: "indigo",
      radius: "xl",
    },
    customControls: [],
    code: `const studioTestimonials = [
  {
    company: "ApexStudios",
    logoBg: "bg-red-600",
    quote: "As an indie developer, this tool has revolutionized my asset creation process. The ability to generate bulk assets quickly has saved me time and money",
    name: "Anya Petrova",
    role: "Marketing Designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
  },
  {
    company: "TechNova",
    logoBg: "bg-blue-600",
    quote: "As an indie developer, I was struggling to create consistent, professional-quality assets. With this tool, I can now generate assets that perfectly match my game's style, all while saving time and reducing costs. Highly recommend!",
    name: "Ravi Patel",
    role: "Creative Manager",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    company: "DreamWorks",
    logoBg: "bg-indigo-900",
    quote: "The custom style training feature allowed us to create assets that perfectly matched our game's vision. A game-changer for studios looking for consistent art direction",
    name: "Ben Harris",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export default function Studio3DTestimonials() {
  const [active, setActive] = useState(0);

  const prevIndex = (active - 1 + studioTestimonials.length) % studioTestimonials.length;
  const nextIndex = (active + 1) % studioTestimonials.length;

  const handlePrev = () => setActive(prevIndex);
  const handleNext = () => setActive(nextIndex);

  const current = studioTestimonials[active];
  const prevCard = studioTestimonials[prevIndex];
  const nextCard = studioTestimonials[nextIndex];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 bg-zinc-100/90 dark:bg-zinc-950/90 border border-zinc-200/80 dark:border-zinc-800/80 rounded-3xl relative overflow-hidden font-sans">
      <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[400px]">
        
        {/* Left Side Preview Card */}
        <div 
          onClick={handlePrev}
          className="hidden md:flex flex-col justify-between w-[260px] sm:w-[280px] shrink-0 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm opacity-60 scale-90 transition-all duration-300 cursor-pointer hover:opacity-80 select-none"
        >
          <div className="flex items-center justify-center gap-2">
            <div className={"w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold " + prevCard.logoBg}>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm text-zinc-900 dark:text-white">{prevCard.company}</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 my-4 text-center leading-relaxed">
            "{prevCard.quote}"
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <img src={prevCard.avatar} alt={prevCard.name} className="w-8 h-8 rounded-full object-cover border border-zinc-200 dark:border-zinc-700" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{prevCard.name}</h4>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400">{prevCard.role}</p>
            </div>
          </div>
        </div>

        {/* Center Main Active Card */}
        <div className="relative z-20 w-full max-w-md mx-2 sm:mx-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1.04, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between w-full bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl min-h-[350px]"
            >
              <div className="flex items-center justify-center gap-2.5">
                <div className={"w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold shadow-sm " + current.logoBg}>
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-bold text-lg text-zinc-900 dark:text-white">{current.company}</span>
              </div>

              <p className="text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-100 my-5 text-center leading-relaxed italic">
                "{current.quote}"
              </p>

              <div className="flex items-center justify-center gap-3 pt-2">
                <img src={current.avatar} alt={current.name} className="w-10 h-10 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-700 shadow-sm" />
                <div className="text-left">
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{current.name}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side Preview Card */}
        <div 
          onClick={handleNext}
          className="hidden md:flex flex-col justify-between w-[260px] sm:w-[280px] shrink-0 bg-white/90 dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm opacity-60 scale-90 transition-all duration-300 cursor-pointer hover:opacity-80 select-none"
        >
          <div className="flex items-center justify-center gap-2">
            <div className={"w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold " + nextCard.logoBg}>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-bold text-sm text-zinc-900 dark:text-white">{nextCard.company}</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 my-4 text-center leading-relaxed">
            "{nextCard.quote}"
          </p>
          <div className="flex items-center justify-center gap-2.5">
            <img src={nextCard.avatar} alt={nextCard.name} className="w-8 h-8 rounded-full object-cover border border-zinc-200 dark:border-zinc-700" />
            <div className="text-left">
              <h4 className="text-xs font-bold text-zinc-900 dark:text-zinc-100">{nextCard.name}</h4>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-400">{nextCard.role}</p>
            </div>
          </div>
        </div>

        {/* Floating Left Arrow Button */}
        <button
          onClick={handlePrev}
          className="absolute left-1 sm:left-2 z-30 p-2.5 sm:p-3 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 shadow-md border border-zinc-200 dark:border-zinc-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Floating Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-1 sm:right-2 z-30 p-2.5 sm:p-3 rounded-full bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 shadow-md border border-zinc-200 dark:border-zinc-700 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Indicators */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {studioTestimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={"h-1.5 rounded-full transition-all cursor-pointer " + (active === idx ? "w-6 bg-zinc-900 dark:bg-zinc-100" : "w-1.5 bg-zinc-300 dark:bg-zinc-700")}
          />
        ))}
      </div>
    </div>
  );
}`
  },
];
