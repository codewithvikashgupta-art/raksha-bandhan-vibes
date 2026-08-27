import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen.jsx";
import Hero from "./components/Hero.jsx";
import MusicPlayer from "./components/MusicPlayer.jsx";
import Celebration from "./components/Celebration.jsx";
import GreetingCard from "./components/GreetingCard.jsx";
import Memories from "./components/Memories.jsx";
import Timeline from "./components/Timeline.jsx";
import Quote from "./components/Quote.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [loadingOut, setLoadingOut] = useState(false);
  const [celebrating, setCelebrating] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    const outTimer = setTimeout(() => setLoadingOut(true), 2200);
    const removeTimer = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(outTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  function handleCelebrate() {
    setCelebrating(true);
    setHasCelebrated(true);
    // Confetti + fireworks run continuously via Celebration while `celebrating`
    // is true. We taper the heaviest effects off after a while so the page
    // stays light — petals + sparkles keep going gently in the background.
    setTimeout(() => setCelebrating(false), 9000);
  }

  return (
    <div className="app">
      {loading && <LoadingScreen fadingOut={loadingOut} />}

      <MusicPlayer shouldPlay={hasCelebrated} />
      <Celebration active={celebrating} />

      <main>
        <Hero onCelebrate={handleCelebrate} celebrating={celebrating} />

        {hasCelebrated ? (
          <GreetingCard visible={hasCelebrated} />
        ) : (
          <p className="card-hint">↑ Click the button above to open your surprise ↑</p>
        )}

        <Memories />
        <Timeline />
        <Quote />
      </main>

      <Footer />

      <style>{`
        .card-hint {
          text-align: center;
          color: var(--gold-light);
          opacity: 0.6;
          font-size: 0.9rem;
          padding: 1rem 1.5rem 0;
        }
      `}</style>
    </div>
  );
}
