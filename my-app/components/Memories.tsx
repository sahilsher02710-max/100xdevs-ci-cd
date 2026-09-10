import React from "react";

interface MemoryItem {
  id: number;
  caption: string;
  tag: string;
  icon: string;
  themeGradient: string;
  subtext: string;
}

const MEMORIES: MemoryItem[] = [
  {
    id: 1,
    caption: "Good times ✨",
    tag: "Celebration & Smiles",
    icon: "🥂",
    themeGradient: "from-purple-600/30 via-pink-600/20 to-blue-600/30",
    subtext: "The spontaneous laughs, shared triumphs, and golden memories.",
  },
  {
    id: 2,
    caption: "Unforgettable moments ❤️",
    tag: "Milestones",
    icon: "🌟",
    themeGradient: "from-rose-600/30 via-purple-600/20 to-amber-600/30",
    subtext: "Standing proud after beating the odds and inspiring everyone around.",
  },
  {
    id: 3,
    caption: "Always a memory",
    tag: "Timeless",
    icon: "📸",
    themeGradient: "from-blue-600/30 via-indigo-600/20 to-purple-600/30",
    subtext: "Etched into the archives of time, never forgotten and cherished.",
  },
  {
    id: 4,
    caption: "More adventures ahead 🚀",
    tag: "The Next Frontier",
    icon: "🌌",
    themeGradient: "from-cyan-600/30 via-blue-600/20 to-violet-600/30",
    subtext: "Bigger horizons, greater conquests, and endless possibilities.",
  },
];

export default function Memories() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border-pink-500/20 text-xs font-semibold text-pink-300 uppercase tracking-wider mb-4">
          <span>📷</span>
          <span>Snapshots & Stories</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Memories & Milestones
        </h2>
        <p className="mt-3 text-slate-400 text-base sm:text-lg">
          A tribute to the moments that shaped the journey, and the thrill of what is yet to come.
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {MEMORIES.map((item) => (
          <div
            key={item.id}
            className="glass-card glass-card-hover rounded-3xl p-5 border-white/10 flex flex-col group relative overflow-hidden"
          >
            {/* Memory Visual Window */}
            <div
              className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${item.themeGradient} border border-white/10 relative flex flex-col items-center justify-center overflow-hidden p-6 shadow-inner group-hover:scale-[1.02] transition-transform duration-300`}
            >
              {/* Subtle visual grid pattern */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              />

              {/* Central celebratory emblem */}
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-3xl shadow-xl z-10 group-hover:rotate-12 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Tag pill */}
              <span className="mt-3 text-[10px] uppercase font-bold tracking-widest text-slate-300/80 bg-black/30 px-2.5 py-1 rounded-full backdrop-blur-sm z-10 border border-white/10">
                {item.tag}
              </span>
            </div>

            {/* Caption & Description */}
            <div className="mt-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-pink-300 transition-colors">
                  {item.caption}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              {/* Frame footer accent */}
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500">
                <span>Moment #{item.id}</span>
                <span className="text-pink-400/80">✨ Harkirat</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
