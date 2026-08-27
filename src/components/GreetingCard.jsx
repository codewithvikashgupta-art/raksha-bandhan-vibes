import Rakhi from "./Rakhi.jsx";
import content from "../content.js";
import { useReveal } from "../hooks/useReveal.js";

export default function GreetingCard({ visible }) {
  const { ref, visible: onScreen } = useReveal();

  return (
    <section
      className={`card-section reveal${onScreen ? " is-visible" : ""}${visible ? " card-section--armed" : ""}`}
      ref={ref}
      aria-hidden={!visible}
    >
      <div className={`greeting-card${visible ? " greeting-card--in" : ""}`}>
        <Rakhi className="greeting-card__rakhi" />
        <span className="greeting-card__heart" aria-hidden="true">❤️</span>
        <p className="greeting-card__salutation">Dear {content.sisterName},</p>
        <div className="greeting-card__body">
          {content.letter
            .split("\n\n")
            .slice(1)
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </div>
        <p className="greeting-card__signoff">— {content.senderName}</p>
      </div>

      <style>{`
        .card-section {
          display: flex;
          justify-content: center;
          padding: clamp(2rem, 6vw, 5rem) 1.25rem;
        }
        .greeting-card {
          position: relative;
          max-width: 560px;
          width: 100%;
          padding: clamp(2rem, 5vw, 3rem);
          border-radius: 28px;
          background: linear-gradient(160deg, rgba(122,21,38,0.55), rgba(58,9,16,0.75));
          backdrop-filter: blur(16px);
          border: 1px solid rgba(247, 183, 51, 0.35);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), inset 0 0 60px rgba(247,183,51,0.06);
          text-align: center;
          opacity: 0;
          transform: translateY(30px) scale(0.97);
          transition: opacity 0.9s var(--ease-soft), transform 0.9s var(--ease-soft);
        }
        .greeting-card--in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .greeting-card:hover {
          transform: translateY(-6px) scale(1.01);
        }
        .greeting-card__rakhi {
          width: 56px;
          margin: 0 auto 1rem;
        }
        .greeting-card__heart {
          position: absolute;
          top: 18px;
          right: 22px;
          font-size: 1.4rem;
          animation: float-y 3s ease-in-out infinite;
        }
        .greeting-card__salutation {
          font-family: var(--font-display);
          font-size: 1.6rem;
          color: var(--gold-light);
          margin-bottom: 1rem;
        }
        .greeting-card__body {
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          color: var(--cream-dim);
          font-size: 1.02rem;
          line-height: 1.7;
        }
        .greeting-card__signoff {
          margin-top: 1.4rem;
          font-family: var(--font-display);
          font-style: italic;
          color: var(--gold);
          font-size: 1.15rem;
        }
      `}</style>
    </section>
  );
}
