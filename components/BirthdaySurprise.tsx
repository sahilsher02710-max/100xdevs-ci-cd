"use client";

import React, { useState } from "react";
import Celebration from "./Celebration";

export default function BirthdaySurprise() {
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [hasWished, setHasWished] = useState(false);

  const handleMakeWish = () => {
    setIsCelebrating(true);
    setHasWished(true);
  };

  return (
    <section
      id="surprise"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10 scroll-mt-12 text-center"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-[32rem] bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 rounded-full blur-[140px] -z-10" />

      {/* Floating hearts for aesthetic ambiance when wished */}
      {hasWished && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <span className="absolute top-10 left-[15%] text-2xl animate-float opacity-70">💖</span>
          <span className="absolute top-20 right-[18%] text-xl animate-float-reverse opacity-75" style={{ animationDelay: "1s" }}>✨</span>
          <span className="absolute bottom-12 left-[25%] text-2xl animate-float opacity-80" style={{ animationDelay: "2s" }}>💫</span>
          <span className="absolute bottom-16 right-[22%] text-2xl animate-float-reverse opacity-70" style={{ animationDelay: "1.5s" }}>❤️</span>
        </div>
      )}

      {/* Main Glassmorphic Container */}
      <div className="glass-card rounded-3xl p-8 sm:p-14 md:p-16 border-white/10 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative top badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs sm:text-sm font-semibold text-pink-300 mb-6">
          <span>🎁</span>
          <span>A Moment Just For You</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight">
          Wait... There&apos;s More{" "}
          <span className="inline-block animate-bounce">🎁</span>
        </h2>

        {/* Subtitle Statements */}
        <div className="mt-8 space-y-4 max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-indigo-200">
            &ldquo;Your best chapter hasn&apos;t been written yet.&rdquo;
          </p>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Here&apos;s to another year of becoming the person you&apos;ve always wanted to be.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <button
            onClick={handleMakeWish}
            id="make-a-wish-btn"
            type="button"
            className="glow-btn inline-flex items-center gap-3 px-10 py-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-lg sm:text-xl shadow-[0_0_35px_rgba(236,72,153,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-400/50"
          >
            <span>{hasWished ? "Make Another Wish 🌟" : "Make a Wish ✨"}</span>
          </button>
          {!hasWished && (
            <span className="text-xs text-slate-400 tracking-wide">
              Click to release your birthday wish into the universe
            </span>
          )}
        </div>

        {/* Revealed Secret Message Card */}
        {hasWished && (
          <div className="mt-12 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-pink-500/10 via-purple-500/15 to-blue-500/10 border border-pink-500/30 text-center max-w-xl mx-auto shadow-2xl animate-fade-in relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 rounded-full bg-pink-500 text-[11px] font-bold uppercase tracking-wider text-white shadow-md">
              Wish Granted ✨
            </div>

            <p className="text-xl sm:text-2xl font-bold text-white mb-3 pt-2">
              ✨ Make a wish, Harkirat.
            </p>

            <p className="text-base sm:text-lg text-purple-200 font-medium mb-3">
              May this year be your best one yet.
            </p>

            <p className="text-base sm:text-lg text-pink-300 font-semibold">
              The world is lucky to have you. ❤️
            </p>
          </div>
        )}
      </div>

      {/* Confetti & Particle Celebration Engine */}
      <Celebration
        active={isCelebrating}
        onComplete={() => setIsCelebrating(false)}
      />
    </section>
  );
}
