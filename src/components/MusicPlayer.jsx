import { useEffect, useRef, useState } from "react";
import content from "../content.js";

const AUDIO_SRC = `${import.meta.env.BASE_URL}audio/O Neele Ambar Wale Tere Bhi Khel Nirale _ Raksha Bandhan 2025.mp3`;

export default function MusicPlayer({ shouldPlay }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.7);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const audio = new Audio(AUDIO_SRC);
    audio.loop = true;
    audio.volume = volume;
    audioRef.current = audio;

    const handleError = () => setMissing(true);
    audio.addEventListener("error", handleError);

    return () => {
      audio.pause();
      audio.removeEventListener("error", handleError);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!shouldPlay || !audioRef.current || missing) return;
    audioRef.current
      .play()
      .then(() => setPlaying(true))
      .catch(() => setMissing(true));
  }, [shouldPlay, missing]);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = muted ? 0 : volume;
  }, [volume, muted]);

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio || missing) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => setMissing(true));
    }
  }

  function toggleMute() {
    setMuted((m) => !m);
  }

  if (!shouldPlay) return null;

  return (
    <div className="music-player" role="region" aria-label="Music player">
      <div className={`music-player__icon${playing ? " is-spinning" : ""}`} aria-hidden="true">
        🎵
      </div>

      <div className="music-player__info">
        <p className="music-player__label">Now Playing</p>
        <p className="music-player__song">{content.song.title}</p>
        <p className="music-player__song music-player__song--sub">{content.song.subtitle}</p>
        {missing && (
          <p className="music-player__missing">
            Add your own licensed track at <code>public/audio/raksha-bandhan-song.mp3</code>
          </p>
        )}
      </div>

      <div className="music-player__eq" aria-hidden="true">
        <span className={playing ? "is-playing" : ""} />
        <span className={playing ? "is-playing" : ""} />
        <span className={playing ? "is-playing" : ""} />
        <span className={playing ? "is-playing" : ""} />
      </div>

      <div className="music-player__controls">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={playing ? "Pause music" : "Play music"}
          disabled={missing}
        >
          {playing ? "⏸" : "▶"}
        </button>
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} disabled={missing}>
          {muted ? "🔇" : "🔊"}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          aria-label="Volume"
          disabled={missing}
        />
      </div>

      <style>{`
        .music-player {
          position: fixed;
          top: max(1rem, env(safe-area-inset-top));
          right: 1rem;
          z-index: 60;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(58, 9, 16, 0.72);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(247, 183, 51, 0.35);
          border-radius: 18px;
          padding: 0.65rem 1rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.35);
          animation: text-reveal 0.8s var(--ease-soft) both;
          max-width: min(88vw, 320px);
        }
        .music-player__icon {
          font-size: 1.4rem;
          flex-shrink: 0;
        }
        .music-player__icon.is-spinning {
          animation: rakhi-spin 3s linear infinite;
        }
        .music-player__info {
          flex: 1;
          min-width: 0;
        }
        .music-player__label {
          font-size: 0.62rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 2px;
        }
        .music-player__song {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--cream);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .music-player__song--sub {
          font-weight: 500;
          opacity: 0.75;
        }
        .music-player__missing {
          font-size: 0.62rem;
          color: var(--gold-light);
          opacity: 0.85;
          margin-top: 4px;
          line-height: 1.4;
        }
        .music-player__missing code {
          background: rgba(0,0,0,0.3);
          padding: 1px 4px;
          border-radius: 4px;
        }
        .music-player__eq {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 18px;
        }
        .music-player__eq span {
          width: 3px;
          background: var(--gold);
          height: 4px;
          border-radius: 2px;
        }
        .music-player__eq span.is-playing {
          animation: eq-bounce 0.9s ease-in-out infinite;
        }
        .music-player__eq span:nth-child(2) { animation-delay: 0.15s; }
        .music-player__eq span:nth-child(3) { animation-delay: 0.3s; }
        .music-player__eq span:nth-child(4) { animation-delay: 0.45s; }
        @keyframes eq-bounce {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        .music-player__controls {
          display: flex;
          align-items: center;
          gap: 0.4rem;
        }
        .music-player__controls button {
          background: rgba(247, 183, 51, 0.15);
          border: 1px solid rgba(247, 183, 51, 0.4);
          color: var(--gold-light);
          border-radius: 10px;
          width: 30px;
          height: 30px;
          cursor: pointer;
          font-size: 0.85rem;
        }
        .music-player__controls button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .music-player__controls input[type="range"] {
          width: 60px;
          accent-color: var(--gold);
        }
        @media (max-width: 560px) {
          .music-player { gap: 0.5rem; padding: 0.5rem 0.7rem; }
          .music-player__controls input[type="range"] { width: 42px; }
        }
      `}</style>
    </div>
  );
}
