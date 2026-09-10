import React from "react";

const WISHES = [
  {
    icon: "✨",
    title: "Happiness",
    quote: "May your life always have more reasons to smile than reasons to worry.",
    gradient: "from-amber-400 to-pink-500",
    glowColor: "rgba(251, 191, 36, 0.15)",
    borderColor: "hover:border-amber-400/40",
  },
  {
    icon: "🚀",
    title: "Dreams",
    quote: "May every dream you chase bring you one step closer to the life you imagine.",
    gradient: "from-blue-400 to-indigo-500",
    glowColor: "rgba(59, 130, 246, 0.15)",
    borderColor: "hover:border-blue-400/40",
  },
  {
    icon: "❤️",
    title: "Memories",
    quote: "May this year give you moments you'll remember forever.",
    gradient: "from-rose-400 to-pink-600",
    glowColor: "rgba(244, 63, 94, 0.15)",
    borderColor: "hover:border-rose-400/40",
  },
  {
    icon: "🌟",
    title: "Success",
    quote: "May success follow you in everything you choose to do.",
    gradient: "from-yellow-400 to-orange-500",
    glowColor: "rgba(234, 179, 8, 0.15)",
    borderColor: "hover:border-yellow-400/40",
  },
];

export default function BirthdayWishes() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-card border-purple-500/20 text-xs font-semibold text-purple-300 uppercase tracking-wider mb-4">
          <span>💫</span>
          <span>From My Heart To Yours</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          A Few Wishes For You
        </h2>
        <p className="mt-3 text-slate-400 text-base sm:text-lg">
          Four heartfelt hopes for the extraordinary chapter you are stepping into.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {WISHES.map((wish, index) => (
          <div
            key={index}
            className={`glass-card glass-card-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border-white/10 ${wish.borderColor} group relative overflow-hidden`}
            style={{
              boxShadow: `0 10px 30px -10px ${wish.glowColor}`,
            }}
          >
            {/* Ambient corner glow inside card */}
            <div
              className={`absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br ${wish.gradient} opacity-20 blur-2xl group-hover:opacity-35 transition-opacity duration-300`}
            />

            <div>
              {/* Icon Orb */}
              <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-inner">
                {wish.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2">
                <span>{wish.title}</span>
              </h3>

              {/* Quote */}
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed font-light">
                &ldquo;{wish.quote}&rdquo;
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span>0{index + 1}</span>
              <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-white/20 group-hover:to-pink-400/50 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
