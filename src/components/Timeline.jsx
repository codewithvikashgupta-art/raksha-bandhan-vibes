import content from "../content.js";
import { useReveal } from "../hooks/useReveal.js";

function TimelineItem({ icon, label, index }) {
  const { ref, visible } = useReveal();
  return (
    <li className={`timeline__item reveal${visible ? " is-visible" : ""}`} ref={ref} style={{ transitionDelay: `${index * 0.08}s` }}>
      <span className="timeline__icon" aria-hidden="true">{icon}</span>
      <span className="timeline__label">{label}</span>
    </li>
  );
}

export default function Timeline() {
  const { ref, visible } = useReveal();
  return (
    <section className={`section reveal${visible ? " is-visible" : ""}`} ref={ref} aria-label="Our journey together">
      <p className="eyebrow">A Sequence Of Moments</p>
      <h2 className="section-title">Our Journey Together</h2>

      <ol className="timeline">
        {content.timeline.map((item, i) => (
          <TimelineItem key={item.label} icon={item.icon} label={item.label} index={i} />
        ))}
      </ol>

      <style>{`
        .timeline {
          list-style: none;
          margin: 2.5rem 0 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
          position: relative;
        }
        .timeline::before {
          content: "";
          position: absolute;
          left: 27px;
          top: 8px;
          bottom: 8px;
          width: 2px;
          background: linear-gradient(var(--gold), var(--rose));
          opacity: 0.4;
        }
        .timeline__item {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          padding: 1rem 0;
        }
        .timeline__icon {
          flex-shrink: 0;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          background: radial-gradient(circle, rgba(247,183,51,0.25), rgba(58,9,16,0.6));
          border: 1px solid rgba(247,183,51,0.4);
          z-index: 1;
        }
        .timeline__label {
          font-family: var(--font-display);
          font-size: 1.3rem;
          color: var(--cream);
        }
      `}</style>
    </section>
  );
}
