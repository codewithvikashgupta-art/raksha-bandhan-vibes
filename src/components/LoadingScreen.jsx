import Rakhi from "./Rakhi.jsx";

export default function LoadingScreen({ fadingOut }) {
  return (
    <div
      className={`loading-screen${fadingOut ? " loading-screen--out" : ""}`}
      role="status"
      aria-live="polite"
    >
      <div className="loading-screen__glow" aria-hidden="true" />
      <Rakhi className="loading-screen__rakhi" />
      <p className="loading-screen__text">Preparing Something Special...</p>
      <div className="loading-screen__dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <style>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          background: radial-gradient(circle at 50% 40%, #7A1526 0%, #3A0910 55%, #241033 100%);
          transition: opacity 0.8s var(--ease-soft), visibility 0.8s;
        }
        .loading-screen--out {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .loading-screen__glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(247,183,51,0.35), transparent 70%);
          filter: blur(10px);
        }
        .loading-screen__rakhi {
          width: 110px;
          height: 110px;
          filter: drop-shadow(0 0 24px rgba(247, 183, 51, 0.6));
        }
        .loading-screen__text {
          font-family: var(--font-display);
          font-size: 1.4rem;
          letter-spacing: 0.05em;
          color: var(--gold-light);
          text-align: center;
          padding: 0 1.5rem;
        }
        .loading-screen__dots {
          display: flex;
          gap: 8px;
        }
        .loading-screen__dots span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--gold);
          animation: dot-bounce 1.2s ease-in-out infinite;
        }
        .loading-screen__dots span:nth-child(2) { animation-delay: 0.15s; }
        .loading-screen__dots span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes dot-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.5; }
          40% { transform: translateY(-8px); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
