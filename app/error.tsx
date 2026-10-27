"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="hero">
      <h1>Kuch galat ho gaya</h1>
      <p>Page load karte waqt error aaya.</p>
      <button className="btn" onClick={() => reset()}>
        Dobara try karo
      </button>
    </div>
  );
}
