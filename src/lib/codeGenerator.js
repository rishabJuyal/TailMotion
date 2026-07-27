export function generateComponentCode(componentId, props) {
  switch (componentId) {
    case "motion-button":
      return `import { motion } from "motion/react";
import { ${props.iconName || "Sparkles"} } from "lucide-react";

export function CustomButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      ${props.disabled ? "disabled" : ""}
      className="${props.variant === "primary" ? `bg-${props.colorScheme}-600 text-white shadow-lg` : "border-2 border-current"} px-4 py-2 rounded-${props.radius === "full" ? "full" : "lg"} inline-flex items-center gap-2 font-medium"
    >
      ${props.showIcon ? `<${props.iconName || "Sparkles"} className="w-4 h-4" />` : ""}
      <span>${props.label}</span>
    </motion.button>
  );
}`;

    case "spotlight-card":
      return `import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";

export function CustomCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 rounded-${props.radius === "full" ? "3xl" : props.radius || "2xl"} bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl max-w-md"
    >
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-${props.colorScheme}-500/20 text-${props.colorScheme}-600">
          ${props.badgeText || "NEW"}
        </span>
      </div>
      <h3 className="text-xl font-bold">${props.title}</h3>
      <p className="text-xs text-zinc-500 mt-1">${props.subtitle}</p>
      <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-3">${props.description}</p>
    </motion.div>
  );
}`;

    case "floating-input":
      return `import { useState } from "react";
import { motion } from "motion/react";
import { ${props.iconName || "Mail"} } from "lucide-react";

export function FloatingInput() {
  const [val, setVal] = useState("");
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder="${props.placeholder}"
        className="w-full px-4 py-3 rounded-${props.radius || "lg"} border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm focus:ring-2 focus:ring-${props.colorScheme}-500/30 outline-none"
      />
      <label className="text-xs text-zinc-500">${props.label}</label>
    </div>
  );
}`;

    case "motion-switch":
      return `import { useState } from "react";
import { motion } from "motion/react";

export function SpringSwitch() {
  const [checked, setChecked] = useState(${props.checked});
  return (
    <div
      onClick={() => setChecked(!checked)}
      className={\`w-12 h-6.5 p-1 rounded-full cursor-pointer transition-colors \${checked ? "bg-${props.colorScheme}-600" : "bg-zinc-300"}\`}
    >
      <motion.div
        animate={{ x: checked ? 22 : 0 }}
        className="w-4.5 h-4.5 rounded-full bg-white shadow-md"
      />
    </div>
  );
}`;

    case "segmented-tabs":
      return `import { useState } from "react";
import { motion } from "motion/react";

export function SegmentedTabs() {
  const [active, setActive] = useState("overview");
  const tabs = ["overview", "code", "preview"];

  return (
    <div className="inline-flex p-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className="relative px-4 py-2 text-sm font-medium cursor-pointer"
        >
          {active === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-${props.colorScheme}-600 rounded-full shadow-md"
            />
          )}
          <span className="relative z-10 text-white">{tab}</span>
        </button>
      ))}
    </div>
  );
}`;

    default:
      return `// Component: ${componentId}
// Props: ${JSON.stringify(props, null, 2)}
import { motion } from "motion/react";

export default function CustomizedComponent() {
  return (
    <motion.div whileHover={{ scale: 1.02 }}>
      {/* Customizable Motion & Tailwind Component */}
    </motion.div>
  );
}`;
  }
}
