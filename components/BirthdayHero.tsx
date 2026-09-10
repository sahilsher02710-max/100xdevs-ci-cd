import React from "react";

export default function BirthdayHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 z-10">
      {/* Top celebratory pill badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border-pink-500/20 text-xs sm:text-sm font-medium text-pink-300 mb-8 animate-float">
        <span className="inline-block w-2 h-2 rounded-full bg-pink-400 animate-ping" />
        <span>✨ A Special Celebration Just For You ✨</span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl leading-tight">
        Happy Birthday,{" "}
        <span className="text-gradient-main inline-block drop-shadow-[0_10px_25px_rgba(236,72,153,0.35)]">
          Harkirat
        </span>{" "}
        🎂
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-lg sm:text-xl md:text-2xl text-slate-300/90 font-light max-w-2xl leading-relaxed">
        Today isn&apos;t just another day... <br className="hidden sm:inline" />
        it&apos;s the day someone truly amazing came into this world.
      </p>

      {/* Animated Birthday Visual */}
      <div className="my-10 relative flex items-center justify-center">
        {/* Glow halo */}
        <div className="absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 blur-3xl animate-pulse-soft -z-10" />

        {/* Floating badge 1 */}
        <div
          className="absolute -top-3 -left-6 sm:-left-12 glass-card px-3 py-1.5 rounded-xl text-xs font-semibold text-pink-200 border-pink-500/30 animate-float shadow-lg flex items-center gap-1.5"
          style={{ animationDelay: "1s" }}
        >
          <span>🌟</span>
          <span>Inspiring Leader</span>
        </div>

        {/* Floating badge 2 */}
        <div
          className="absolute -bottom-2 -right-6 sm:-right-12 glass-card px-3 py-1.5 rounded-xl text-xs font-semibold text-blue-200 border-blue-500/30 animate-float-reverse shadow-lg flex items-center gap-1.5"
          style={{ animationDelay: "2s" }}
        >
          <span>🚀</span>
          <span>Unstoppable Force</span>
        </div>

        {/* Centerpiece visual emblem */}
        <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl glass-card flex flex-col items-center justify-center border-white/20 p-4 shadow-[0_0_50px_rgba(168,85,247,0.3)] relative group">
          {/* Animated rings */}
          <div className="absolute inset-0 rounded-3xl border border-pink-400/40 animate-pulse-soft" />

          {/* Candle Flame Glow */}
          <div className="w-4 h-6 bg-gradient-to-t from-yellow-500 via-amber-300 to-white rounded-full blur-[1px] animate-pulse -mb-1 shadow-[0_0_16px_#f59e0b]" />

          {/* Cake Icon / Vector Composition */}
          <div className="text-5xl sm:text-6xl select-none transform group-hover:scale-110 transition-transform duration-300">
            🎂
          </div>

          <span className="mt-2 text-[11px] uppercase tracking-widest text-slate-400 font-medium">
            Celebrate You
          </span>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="mt-4">
        <a
          href="#message"
          className="glow-btn inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-semibold text-base sm:text-lg shadow-xl hover:shadow-pink-500/30 hover:scale-105 active:scale-95 transition-all duration-300"
          id="hero-open-surprise"
        >
          <span>Open Your Surprise</span>
          <span className="text-xl">🎁</span>
        </a>
      </div>

      {/* Down indicator */}
      <div className="mt-14 flex flex-col items-center gap-2 text-slate-500 text-xs">
        <span className="tracking-wider uppercase">Scroll to explore</span>
        <svg
          className="w-4 h-4 animate-bounce text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
