"use client";

import React, { useEffect, useRef } from "react";

interface CelebrationProps {
  active: boolean;
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  shape: "rect" | "circle" | "heart";
  opacity: number;
}

const COLORS = [
  "#f43f5e", // rose
  "#ec4899", // pink
  "#a855f7", // purple
  "#6366f1", // indigo
  "#3b82f6", // blue
  "#eab308", // gold
  "#14b8a6", // teal
];

export default function Celebration({ active, onComplete }: CelebrationProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!active) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions to viewport
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Generate 120 confetti and heart particles launched from center-bottom
    const particles: Particle[] = [];
    const count = 130;

    for (let i = 0; i < count; i++) {
      // Launch angle: upwards in a cone
      const angle = (Math.random() * 0.8 + 0.1) * Math.PI; // between 18° and 162°
      const speed = Math.random() * 18 + 12; // explosive burst
      const isHeart = i % 5 === 0;

      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 100,
        y: height * 0.7,
        size: isHeart ? Math.random() * 10 + 10 : Math.random() * 8 + 6,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
        vy: -Math.sin(angle) * speed,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        shape: isHeart ? "heart" : i % 3 === 0 ? "circle" : "rect",
        opacity: 1,
      });
    }

    let animationFrameId: number;
    const startTime = performance.now();
    const duration = 4000; // 4 seconds total

    const drawHeart = (
      c: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number
    ) => {
      c.beginPath();
      const topCurveHeight = size * 0.3;
      c.moveTo(x, y + topCurveHeight);
      // Top left curve
      c.bezierCurveTo(
        x,
        y,
        x - size / 2,
        y,
        x - size / 2,
        y + topCurveHeight
      );
      // Bottom left curve
      c.bezierCurveTo(
        x - size / 2,
        y + (size + topCurveHeight) / 2,
        x,
        y + (size + topCurveHeight) / 2,
        x,
        y + size
      );
      // Bottom right curve
      c.bezierCurveTo(
        x,
        y + (size + topCurveHeight) / 2,
        x + size / 2,
        y + (size + topCurveHeight) / 2,
        x + size / 2,
        y + topCurveHeight
      );
      // Top right curve
      c.bezierCurveTo(x + size / 2, y, x, y, x, y + topCurveHeight);
      c.closePath();
      c.fill();
    };

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      if (elapsed > duration) {
        ctx.clearRect(0, 0, width, height);
        if (onComplete) onComplete();
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Fade out gradually near end
      const progress = elapsed / duration;
      const globalFade = progress > 0.7 ? 1 - (progress - 0.7) / 0.3 : 1;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.42; // gravity
        p.vx *= 0.98; // air resistance
        p.rotation += p.rotationSpeed;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity * globalFade;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
        } else if (p.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.shape === "heart") {
          drawHeart(ctx, 0, -p.size / 2, p.size);
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [active, onComplete]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
}
