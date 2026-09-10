import React from "react";

export default function BirthdayMessage() {
  return (
    <section
      id="message"
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10 scroll-mt-12"
    >
      {/* Decorative background glow behind card */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/15 to-blue-500/10 rounded-3xl blur-2xl -z-10 transform scale-95" />

      {/* Main Glassmorphism Card */}
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border-white/10 relative overflow-hidden shadow-2xl">
        {/* Subtle top accent gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" />

        {/* Top Header with Heart Icon Badge */}
        <div className="flex flex-col items-center text-center mb-10">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/30 border border-pink-500/30 flex items-center justify-center text-2xl mb-4 shadow-inner animate-heart-beat">
            ❤️
          </div>
          <span className="text-xs uppercase tracking-widest text-pink-400 font-semibold mb-2">
            A Letter From The Heart
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Today Is Your Day{" "}
            <span className="text-pink-400 inline-block animate-pulse">❤️</span>
          </h2>
        </div>

        {/* Message Content with beautiful typography */}
        <div className="space-y-6 text-slate-200 text-base sm:text-lg md:text-xl font-normal leading-relaxed text-center sm:text-left">
          <div className="flex items-center gap-3">
            <p className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
              Dear Harkirat,
            </p>
          </div>

          <p className="text-xl sm:text-2xl font-semibold text-white/95">
            Happy Birthday! 🥳
          </p>

          <p className="text-slate-300">
            I hope this special day brings you everything you&apos;ve been wishing for.
          </p>

          <p className="text-slate-300">
            May this new chapter of your life be filled with happiness, success,
            adventures, unforgettable memories, and countless reasons to smile.
          </p>

          <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/5 border-l-4 border-l-purple-500 my-4">
            <p className="text-purple-200/90 italic">
              &ldquo;You&apos;ve come a long way, and there&apos;s still so much waiting for you.&rdquo;
            </p>
          </div>

          <p className="text-slate-300">
            Keep chasing your dreams, keep smiling, and most importantly,
            keep being the amazing person you are.
          </p>

          <p className="text-slate-300">
            You deserve all the good things life has to offer.
          </p>

          <p className="pt-4 text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400">
            Happy Birthday once again! ❤️
          </p>
        </div>

        {/* Bottom decorative seal / signoff */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
              H
            </div>
            <div>
              <p className="text-sm font-semibold text-white">For Harkirat</p>
              <p className="text-xs text-slate-400">Someone Truly Exceptional</p>
            </div>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-xs text-pink-300 font-medium">
            <span>✨</span>
            <span>Always Celebrating You</span>
          </div>
        </div>
      </div>
    </section>
  );
}
