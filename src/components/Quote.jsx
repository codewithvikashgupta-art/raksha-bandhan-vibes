import content from "../content.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Quote() {
  const { ref, visible } = useReveal();
  return (
    <section className={`quote-section reveal${visible ? " is-visible" : ""}`} ref={ref}>
      <span className="quote-section__mark" aria-hidden="true">❝</span>
      <blockquote className="quote-section__text">{content.quote}</blockquote>
      <div className="quote-section__hearts" aria-hidden="true">
        <span>💛</span><span>❤️</span><span>💛</span>
      </div>

      <style>{`
        .quote-section {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          padding: clamp(3rem, 8vw, 6rem) 1.5rem;
        }
        .quote-section__mark {
          font-family: var(--font-display);
          font-size: 3.5rem;
          color: var(--gold);
          opacity: 0.6;
          line-height: 1;
        }
        .quote-section__text {
          margin: 0.5rem 0 1.5rem;
          font-family: var(--font-display);
          font-size: clamp(1.4rem, 3.6vw, 2.1rem);
          line-height: 1.5;
          color: var(--cream);
          font-style: italic;
        }
        .quote-section__hearts span {
          display: inline-block;
          margin: 0 6px;
          font-size: 1.1rem;
          animation: float-y 3.2s ease-in-out infinite;
        }
        .quote-section__hearts span:nth-child(2) { animation-delay: 0.4s; }
        .quote-section__hearts span:nth-child(3) { animation-delay: 0.8s; }
      `}</style>
    </section>
  );
}
