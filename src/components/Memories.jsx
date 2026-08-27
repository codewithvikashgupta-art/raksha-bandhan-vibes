import { useState } from "react";
import content from "../content.js";
import { useReveal } from "../hooks/useReveal.js";

export default function Memories() {
  const { ref, visible } = useReveal();
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className={`section reveal${visible ? " is-visible" : ""}`} ref={ref} aria-label="Our beautiful memories">
      <p className="eyebrow">Photo Gallery</p>
      <h2 className="section-title">Our Beautiful Memories ❤️</h2>
      <p className="memories__hint">
        Replace the images in <code>public/images/</code> with your real photos — see the README.
      </p>

      <div className="memories__grid">
        {content.memories.map((m, i) => (
          <button
            type="button"
            className="memories__item"
            key={m.file}
            style={{ animationDelay: `${i * 0.08}s` }}
            onClick={() => setLightbox(m)}
          >
            <img
              src={`${import.meta.env.BASE_URL}images/${m.file}`}
              alt={m.caption}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextElementSibling.style.display = "flex";
              }}
            />
            <div className="memories__placeholder">📷 {m.caption}</div>
            <span className="memories__caption">{m.caption}</span>
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="memories__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
          onClick={() => setLightbox(null)}
        >
          <img
            src={`${import.meta.env.BASE_URL}images/${lightbox.file}`}
            alt={lightbox.caption}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <p>{lightbox.caption}</p>
          <button type="button" aria-label="Close" onClick={() => setLightbox(null)}>
            ✕
          </button>
        </div>
      )}

      <style>{`
        .memories__hint {
          color: var(--cream-dim);
          opacity: 0.7;
          font-size: 0.85rem;
          margin-bottom: 2rem;
        }
        .memories__hint code {
          background: rgba(0,0,0,0.3);
          padding: 1px 6px;
          border-radius: 4px;
        }
        .memories__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.25rem;
        }
        .memories__item {
          position: relative;
          border: none;
          padding: 0;
          cursor: pointer;
          border-radius: 18px;
          overflow: hidden;
          aspect-ratio: 4 / 5;
          background: linear-gradient(160deg, rgba(232,84,107,0.25), rgba(58,9,16,0.6));
          border: 1px solid rgba(247,183,51,0.25);
          transition: transform 0.4s var(--ease-soft), box-shadow 0.4s var(--ease-soft);
        }
        .memories__item:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0,0,0,0.35);
        }
        .memories__item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s var(--ease-soft);
        }
        .memories__item:hover img {
          transform: scale(1.08);
        }
        .memories__placeholder {
          display: none;
          position: absolute;
          inset: 0;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 1rem;
          color: var(--gold-light);
          font-family: var(--font-display);
          font-size: 1.1rem;
        }
        .memories__caption {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 0.6rem 0.8rem;
          font-size: 0.8rem;
          background: linear-gradient(0deg, rgba(0,0,0,0.55), transparent);
          color: var(--cream);
          text-align: left;
        }
        .memories__lightbox {
          position: fixed;
          inset: 0;
          z-index: 200;
          background: rgba(0,0,0,0.85);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 2rem;
          cursor: zoom-out;
        }
        .memories__lightbox img {
          max-width: min(90vw, 600px);
          max-height: 70vh;
          border-radius: 12px;
          object-fit: contain;
        }
        .memories__lightbox p {
          color: var(--gold-light);
          font-family: var(--font-display);
          font-size: 1.2rem;
        }
        .memories__lightbox button {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.3);
          color: var(--cream);
          border-radius: 50%;
          width: 36px;
          height: 36px;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}
