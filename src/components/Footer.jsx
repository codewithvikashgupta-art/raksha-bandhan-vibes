import Rakhi from "./Rakhi.jsx";
import content from "../content.js";

export default function Footer() {
  return (
    <footer className="footer">
      <Rakhi className="footer__rakhi" />
      <p className="footer__note">{content.footerNote}</p>
      <p className="footer__title">Happy Raksha Bandhan 🌸✨</p>

      <style>{`
        .footer {
          position: relative;
          text-align: center;
          padding: 3rem 1.5rem 3.5rem;
          overflow: hidden;
        }
        .footer__rakhi {
          width: 44px;
          margin: 0 auto 1rem;
          opacity: 0.9;
        }
        .footer__note {
          color: var(--cream-dim);
          font-size: 0.95rem;
          opacity: 0.85;
        }
        .footer__title {
          margin-top: 0.6rem;
          font-family: var(--font-display);
          font-size: 1.4rem;
          color: var(--gold-light);
        }
      `}</style>
    </footer>
  );
}
