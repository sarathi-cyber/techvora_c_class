import { useEffect, useRef } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  phase: number;
  speed: number;
  alpha: number;
}

/**
 * Lightweight gold-dust particle field.
 * ─ Pre-rendered radial sprite (no per-frame gradient/shadow cost).
 * ─ Particle count scales with viewport area and is hard-capped.
 * ─ Pauses when offscreen, hidden tab, or reduced motion is on.
 * ─ devicePixelRatio clamped for predictable GPU load.
 */
export function GoldParticles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let raf = 0;
    let running = false;
    let inView = true;
    let particles: Particle[] = [];
    let width = 0;
    let height = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.75);

    // Pre-render a soft golden sprite once — massive perf win.
    const sprite = document.createElement("canvas");
    sprite.width = 32;
    sprite.height = 32;
    const sctx = sprite.getContext("2d");
    if (sctx) {
      const g = sctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, "rgba(240, 218, 142, 0.9)");
      g.addColorStop(0.35, "rgba(212, 175, 55, 0.42)");
      g.addColorStop(1, "rgba(212, 175, 55, 0)");
      sctx.fillStyle = g;
      sctx.fillRect(0, 0, 32, 32);
    }

    const seed = () => {
      const count = Math.max(28, Math.min(72, Math.floor((width * height) / 26000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 1.4 + Math.random() * 4.6,
        vx: (Math.random() - 0.5) * 0.08,
        vy: -(0.03 + Math.random() * 0.1),
        phase: Math.random() * Math.PI * 2,
        speed: 0.3 + Math.random() * 0.9,
        alpha: 0.1 + Math.random() * 0.4,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reducedMotion) drawStatic();
    };

    const drawParticle = (p: Particle, alpha: number) => {
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      const size = p.r * 4;
      ctx.drawImage(sprite, p.x - size / 2, p.y - size / 2, size, size);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) drawParticle(p, p.alpha);
      ctx.globalAlpha = 1;
    };

    const tick = (time: number) => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const t = time / 1000;
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -8) p.y = height + 8;
        if (p.x < -8) p.x = width + 8;
        else if (p.x > width + 8) p.x = -8;
        const twinkle = p.alpha * (0.65 + 0.35 * Math.sin(t * p.speed + p.phase));
        drawParticle(p, twinkle);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    };

    const sync = () => {
      const shouldRun = inView && !document.hidden && !reducedMotion;
      if (shouldRun && !running) {
        running = true;
        raf = requestAnimationFrame(tick);
      } else if (!shouldRun && running) {
        running = false;
        cancelAnimationFrame(raf);
      }
      if (reducedMotion) drawStatic();
    };

    resize();
    if (reducedMotion) drawStatic();
    else sync();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const viewObserver = new IntersectionObserver(
      (entries) => {
        inView = entries[0]?.isIntersecting ?? true;
        sync();
      },
      { threshold: 0.01 },
    );
    viewObserver.observe(canvas);
    const onVisibility = () => sync();
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      viewObserver.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
