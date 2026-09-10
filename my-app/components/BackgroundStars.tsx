import React from "react";

// Pre-calculated deterministic star positions for absolute hydration consistency
const DETERMINISTIC_STARS = [
  { top: "4%", left: "8%", size: "2px", opacity: 0.7, delay: "0.2s" },
  { top: "7%", left: "78%", size: "3px", opacity: 0.8, delay: "1.4s" },
  { top: "11%", left: "34%", size: "2px", opacity: 0.5, delay: "2.1s" },
  { top: "15%", left: "92%", size: "1.5px", opacity: 0.6, delay: "0.8s" },
  { top: "19%", left: "21%", size: "3px", opacity: 0.75, delay: "3.2s" },
  { top: "24%", left: "62%", size: "2px", opacity: 0.4, delay: "1.7s" },
  { top: "28%", left: "84%", size: "2.5px", opacity: 0.85, delay: "2.5s" },
  { top: "33%", left: "14%", size: "1.5px", opacity: 0.5, delay: "0.5s" },
  { top: "38%", left: "48%", size: "2px", opacity: 0.65, delay: "1.9s" },
  { top: "42%", left: "75%", size: "3px", opacity: 0.9, delay: "3.5s" },
  { top: "47%", left: "5%", size: "2px", opacity: 0.55, delay: "0.9s" },
  { top: "52%", left: "89%", size: "2.5px", opacity: 0.7, delay: "2.8s" },
  { top: "56%", left: "27%", size: "1.5px", opacity: 0.45, delay: "1.1s" },
  { top: "61%", left: "68%", size: "3px", opacity: 0.8, delay: "2.2s" },
  { top: "66%", left: "41%", size: "2px", opacity: 0.6, delay: "0.4s" },
  { top: "71%", left: "18%", size: "2.5px", opacity: 0.75, delay: "3.0s" },
  { top: "76%", left: "82%", size: "1.5px", opacity: 0.5, delay: "1.6s" },
  { top: "81%", left: "55%", size: "3px", opacity: 0.85, delay: "2.4s" },
  { top: "86%", left: "12%", size: "2px", opacity: 0.6, delay: "0.7s" },
  { top: "90%", left: "71%", size: "2.5px", opacity: 0.7, delay: "3.3s" },
  { top: "94%", left: "38%", size: "1.5px", opacity: 0.4, delay: "1.5s" },
  { top: "97%", left: "93%", size: "2px", opacity: 0.65, delay: "2.0s" },
  { top: "3%", left: "45%", size: "2.5px", opacity: 0.7, delay: "1.0s" },
  { top: "22%", left: "3%", size: "2px", opacity: 0.5, delay: "2.7s" },
  { top: "68%", left: "95%", size: "2px", opacity: 0.6, delay: "0.3s" },
  { top: "84%", left: "31%", size: "3px", opacity: 0.8, delay: "1.8s" },
];

export default function BackgroundStars() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      aria-hidden="true"
    >
      {/* Ambient Gradient Glow Orbs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse-soft" />
      <div className="absolute top-1/4 -right-40 w-[30rem] h-[30rem] bg-pink-600/15 rounded-full blur-[140px] animate-pulse-soft" style={{ animationDelay: "2s" }} />
      <div className="absolute top-2/3 -left-20 w-[28rem] h-[28rem] bg-indigo-600/15 rounded-full blur-[130px] animate-pulse-soft" style={{ animationDelay: "4s" }} />
      <div className="absolute bottom-10 right-1/4 w-[24rem] h-[24rem] bg-violet-600/20 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: "1s" }} />

      {/* Subtle Grid Overlay for modern aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem"
        }}
      />

      {/* Deterministic Stars */}
      {DETERMINISTIC_STARS.map((star, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.delay,
            boxShadow: `0 0 6px rgba(255, 255, 255, ${star.opacity})`,
          }}
        />
      ))}
    </div>
  );
}
