import BrotherSisterScene from "./BrotherSisterScene.jsx";
import Diya from "./Diya.jsx";
import content from "../content.js";

export default function Hero({ onCelebrate, celebrating }) {
  return (
    <section className="hero" aria-label="Raksha Bandhan greeting">
      <div className="hero__diyas" aria-hidden="true">
        <Diya className="hero__diya hero__diya--1" delay={0} />
        <Diya className="hero__diya hero__diya--2" delay={0.4} />
      </div>

      <p className="eyebrow hero__eyebrow">For {content.sisterName}</p>
      <h1 className="hero__title">Happy Raksha Bandhan ❤️</h1>
      <p className="hero__subtitle">
        {content.heroSubtitle.split("\n").map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <BrotherSisterScene className="hero__scene" />

      <button
        type="button"
        className="hero__cta"
        onClick={onCelebrate}
        disabled={celebrating}
        aria-pressed={celebrating}
      >
        {celebrating ? "✨ Celebrating ✨" : "🎉 Celebrate Raksha Bandhan 🎉"}
      </button>

      <style>{`
        .hero {
          position: relative;
          min-height: 100svh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 6rem 1.25rem 3rem;
          overflow: hidden;
        }
        .hero__eyebrow {
          animation: text-reveal 0.9s var(--ease-soft) both;
        }
        .hero__title {
          font-size: clamp(2.4rem, 8vw, 5rem);
          background: linear-gradient(90deg, var(--gold-light), var(--gold), var(--saffron));
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 26px rgba(247, 183, 51, 0.45));
          animation: text-reveal 1s var(--ease-soft) 0.15s both;
          max-width: 18ch;
        }
        .hero__subtitle {
          margin-top: 1.1rem;
          font-size: clamp(1rem, 2.4vw, 1.3rem);
          color: var(--cream-dim);
          line-height: 1.6;
          animation: text-reveal 1s var(--ease-soft) 0.35s both;
          max-width: 34ch;
        }
        .hero__scene {
          width: min(90vw, 520px);
          margin: 2rem 0;
          animation: float-y 6s ease-in-out infinite, text-reveal 1.1s var(--ease-soft) 0.5s both;
        }
        .hero__cta {
          position: relative;
          border: none;
          cursor: pointer;
          padding: 1.1rem 2.4rem;
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--maroon-950);
          border-radius: 999px;
          background: linear-gradient(120deg, var(--gold-light), var(--gold) 45%, var(--saffron));
          animation: pulse-glow 2.6s ease-in-out infinite, float-y 4s ease-in-out infinite,
            text-reveal 1s var(--ease-soft) 0.7s both;
          transition: transform 0.25s var(--ease-soft);
        }
        .hero__cta:hover:not(:disabled) {
          transform: translateY(-4px) scale(1.03);
        }
        .hero__cta:active:not(:disabled) {
          transform: translateY(-1px) scale(0.98);
        }
        .hero__cta:disabled {
          opacity: 0.85;
          cursor: default;
        }
        .hero__diyas {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero__diya {
          position: absolute;
          width: 54px;
          opacity: 0.85;
        }
        .hero__diya--1 {
          top: 12%;
          left: 6%;
          animation: float-y 5s ease-in-out infinite;
        }
        .hero__diya--2 {
          top: 18%;
          right: 6%;
          animation: float-y 5.5s ease-in-out infinite 0.6s;
        }
        @media (max-width: 640px) {
          .hero__diya { width: 38px; }
        }
      `}</style>
    </section>
  );
}
