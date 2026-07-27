import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ComponentCard from "./components/ComponentCard";
import Playground from "./components/Playground";
import CustomCodePlayground from "./components/CustomCodePlayground";
import { COMPONENTS } from "./data/componentsData";
import { getCustomComponents, deleteCustomComponent } from "./lib/customComponentsStorage";
import { Search, Sparkles, Filter, LayoutGrid } from "lucide-react";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeView, setActiveView] = useState("gallery"); // 'gallery' | 'playground' | 'custom'
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [customComponents, setCustomComponents] = useState([]);

  // Load custom components from localStorage
  useEffect(() => {
    const loaded = getCustomComponents();
    setCustomComponents(loaded);
  }, []);

  const handleSavedCustomComponent = (newComp) => {
    setCustomComponents((prev) => {
      const idx = prev.findIndex((c) => c.id === newComp.id);
      if (idx >= 0) {
        const next = [...prev];
        next[idx] = newComp;
        return next;
      }
      return [newComp, ...prev];
    });
  };

  const handleDeleteCustomComponent = (id) => {
    deleteCustomComponent(id);
    setCustomComponents((prev) => prev.filter((c) => c.id !== id));
  };

  // Sync dark class to root document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Combine static library components with user custom components
  const allComponents = [...customComponents, ...COMPONENTS];

  // Filter components based on search and category
  const filteredComponents = allComponents.filter((comp) => {
    const matchesCategory =
      selectedCategory === "all" || comp.category === selectedCategory;
    const matchesSearch =
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (comp.description && comp.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (comp.tags && comp.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#0c0c0e] text-zinc-100 transition-colors duration-200 font-sans selection:bg-indigo-600 selection:text-white flex flex-col justify-between">
      <div>
        {/* Top Navigation */}
        <Header
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          activeView={activeView}
          setActiveView={setActiveView}
          totalComponents={allComponents.length}
        />

        {/* Main Container */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {activeView === "playground" ? (
            <Playground />
          ) : activeView === "custom" ? (
            <CustomCodePlayground
              onSavedSuccess={handleSavedCustomComponent}
              onGoToLibrary={() => {
                setSelectedCategory("all");
                setActiveView("gallery");
              }}
            />
          ) : (
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Sidebar Navigation */}
              <Sidebar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                allComponents={allComponents}
              />

              {/* Component Showcase Gallery */}
              <section className="flex-1 w-full space-y-6">
                {/* Category Header Bar */}
                <div className="pb-4 border-b border-zinc-800/90 space-y-1">
                  <h2 className="font-syne font-extrabold text-2xl sm:text-3xl tracking-tight text-zinc-100 uppercase">
                    {selectedCategory === "all" ? "MOTION" : selectedCategory.toUpperCase()}
                  </h2>
                  <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider">
                    Showing {filteredComponents.length} customizable components built with Motion and Tailwind CSS
                  </p>

                  {/* Mobile Search Bar fallback */}
                  <div className="relative md:hidden w-full pt-2">
                    <Search className="w-4 h-4 absolute left-3 top-4.5 text-zinc-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search components..."
                      className="w-full pl-9 pr-4 py-2 text-xs font-mono rounded border border-zinc-800 bg-zinc-900 text-zinc-100 outline-none"
                    />
                  </div>
                </div>

                {/* Component Cards Grid */}
                {filteredComponents.length > 0 ? (
                  <div className="grid grid-cols-1 gap-6">
                    {filteredComponents.map((comp) => (
                      <ComponentCard
                        key={comp.id}
                        component={comp}
                        globalTheme={{}}
                        onDeleteCustom={handleDeleteCustomComponent}
                      />
                    ))}
                  </div>
                ) : (
                  /* Empty Search State */
                  <div className="p-12 text-center rounded bg-zinc-900 border border-zinc-800 space-y-3">
                    <div className="w-12 h-12 rounded bg-indigo-950 text-indigo-400 border border-indigo-800 mx-auto flex items-center justify-center">
                      <Filter className="w-6 h-6" />
                    </div>
                    <h3 className="font-syne text-base font-bold text-zinc-100 uppercase">No components matched your search</h3>
                    <p className="font-mono text-xs text-zinc-400 max-w-sm mx-auto">
                      Try searching for another keyword or clear your active category filters.
                    </p>
                    <button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                      }}
                      className="px-4 py-2 font-mono text-xs font-semibold rounded bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      Reset Search & Filters
                    </button>
                  </div>
                )}
              </section>
            </div>
          )}
        </main>
      </div>

      {/* Systematic Status Footer */}
      <footer className="border-t border-zinc-800/90 bg-zinc-950/80 px-4 sm:px-8 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 mt-12 text-zinc-400 font-mono text-[11px] uppercase tracking-widest">
        <div>MOTION UI SYSTEM V2.4</div>
        <div className="flex gap-6">
          <span>SEARCH_CXT: INDEX_ALL</span>
          <span>COORD: 45.2N / 12.8W</span>
        </div>
      </footer>
    </div>
  );
}
