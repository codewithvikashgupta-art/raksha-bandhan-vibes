import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

const PETAL_COLORS = ["#E8546B", "#FF8FA3", "#F7B733", "#F7931E"];
const FIREWORK_COLORS = [
  ["#F7B733", "#FFE7A0"],
  ["#E8546B", "#FF8FA3"],
  ["#B392F0", "#7A5FC7"],
];

/**
 * Full-screen canvas overlay that runs falling petals + ambient sparkles
 * continuously once `active`, plus a one-time confetti burst and a light
 * looping firework show. Pauses when the tab is hidden or the user prefers
 * reduced motion, and is pointer-events:none so it never blocks content.
 */
export default function Celebration({ active }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const petalsRef = useRef([]);
  const sparklesRef = useRef([]);
  const fireworksRef = useRef([]);
  const lastFireworkRef = useRef(0);

  const reducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Confetti burst — fires once when celebration starts
  useEffect(() => {
    if (!active || reducedMotion) return;
    const colors = ["#F7B733", "#F7931E", "#E8546B", "#FFE7A0", "#B23652"];
    const end = Date.now() + 1400;
    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 65,
        origin: { x: 0, y: 0.65 },
        colors,
        scalar: 1.1,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 65,
        origin: { x: 1, y: 0.65 },
        colors,
        scalar: 1.1,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({
      particleCount: 140,
      spread: 100,
      origin: { y: 0.5 },
      colors,
      startVelocity: 45,
      scalar: 1.05,
    });
  }, [active, reducedMotion]);

  // Petals + sparkles + fireworks canvas loop
  useEffect(() => {
    if (!active || reducedMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let running = true;

    const initPetals = () => {
      const count = width < 640 ? 16 : 30;
      petalsRef.current = Array.from({ length: count }).map(() => spawnPetal(width, height, true));
    };
    const initSparkles = () => {
      const count = width < 640 ? 20 : 40;
      sparklesRef.current = Array.from({ length: count }).map(() => spawnSparkle(width, height));
    };
    initPetals();
    initSparkles();

    function spawnPetal(w, h, randomY = false) {
      return {
        x: Math.random() * w,
        y: randomY ? Math.random() * h : -20,
        size: 8 + Math.random() * 10,
        speedY: 0.6 + Math.random() * 1.2,
        speedX: Math.sin(Math.random() * Math.PI),
        drift: Math.random() * 2 - 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
        sway: Math.random() * Math.PI * 2,
      };
    }

    function spawnSparkle(w, h) {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        size: 1 + Math.random() * 2.2,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
      };
    }

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size * 0.6, p.size, Math.PI / 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function drawSparkle(s, t) {
      const twinkle = (Math.sin(t * s.speed * 40 + s.phase) + 1) / 2;
      ctx.fillStyle = `rgba(255, 231, 160, ${twinkle * 0.9})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
    }

    function launchFirework() {
      const w = width;
      const x = w * (0.2 + Math.random() * 0.6);
      const y = height * (0.2 + Math.random() * 0.25);
      const [core, edge] = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      const particles = Array.from({ length: 26 }).map((_, i) => {
        const angle = (i / 26) * Math.PI * 2;
        const speed = 1.4 + Math.random() * 1.6;
        return {
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          color: Math.random() > 0.5 ? core : edge,
        };
      });
      fireworksRef.current.push({ particles });
    }

    function drawFireworks() {
      fireworksRef.current.forEach((fw) => {
        fw.particles.forEach((p) => {
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.02;
          p.life -= 0.014;
          if (p.life > 0) {
            ctx.fillStyle = p.color;
            ctx.globalAlpha = Math.max(p.life, 0);
            ctx.beginPath();
            ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = 1;
          }
        });
      });
      fireworksRef.current = fireworksRef.current.filter((fw) =>
        fw.particles.some((p) => p.life > 0)
      );
    }

    function tick(t) {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      sparklesRef.current.forEach((s) => drawSparkle(s, t / 1000));

      petalsRef.current.forEach((p) => {
        p.y += p.speedY;
        p.sway += 0.02;
        p.x += Math.sin(p.sway) * 0.6 + p.drift * 0.15;
        p.rotation += p.rotationSpeed;
        drawPetal(p);
        if (p.y > height + 20) Object.assign(p, spawnPetal(width, height));
      });

      if (t - lastFireworkRef.current > 2600) {
        lastFireworkRef.current = t;
        launchFirework();
      }
      drawFireworks();

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    function handleVisibility() {
      running = document.visibilityState === "visible";
      if (running && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
    }
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [active, reducedMotion]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="celebration-canvas"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 40,
        pointerEvents: "none",
      }}
    />
  );
}
