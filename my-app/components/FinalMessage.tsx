import React from "react";

export default function FinalMessage() {
  return (
    <footer className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 text-center">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
        Happy Birthday,{" "}
        <span className="text-gradient-main inline-block">Harkirat!</span>{" "}
        🎂❤️
      </h2>

      {/* Subheading */}
      <p className="mt-4 text-xl sm:text-2xl text-slate-300 font-light">
        Here&apos;s to another incredible year.
      </p>

      {/* Four Stanza Wishes */}
      <div className="mt-10 max-w-md mx-auto grid grid-cols-1 gap-3">
        <div className="glass-card px-6 py-3 rounded-2xl border-white/5 flex items-center justify-center gap-3">
          <span className="text-pink-400">😄</span>
          <span className="text-slate-200 font-medium text-base sm:text-lg">
            More laughter.
          </span>
        </div>
        <div className="glass-card px-6 py-3 rounded-2xl border-white/5 flex items-center justify-center gap-3">
          <span className="text-purple-400">🌍</span>
          <span className="text-slate-200 font-medium text-base sm:text-lg">
            More adventures.
          </span>
        </div>
        <div className="glass-card px-6 py-3 rounded-2xl border-white/5 flex items-center justify-center gap-3">
          <span className="text-amber-400">🏆</span>
          <span className="text-slate-200 font-medium text-base sm:text-lg">
            More success.
          </span>
        </div>
        <div className="glass-card px-6 py-3 rounded-2xl border-white/5 flex items-center justify-center gap-3">
          <span className="text-rose-400">📸</span>
          <span className="text-slate-200 font-medium text-base sm:text-lg">
            More unforgettable memories.
          </span>
        </div>
      </div>

      {/* Signoff */}
      <div className="mt-12">
        <p className="text-lg sm:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
          With lots of love and best wishes ✨
        </p>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <span>Made with ❤️ just for Harkirat</span>
        </div>
        <div className="flex items-center gap-2 text-slate-400">
          <span>A Special Birthday Celebration</span>
        </div>
      </div>
    </footer>
  );
}
