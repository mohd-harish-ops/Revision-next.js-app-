"use client";

import { topics, totalItems } from "@/lib/roadmap";
import ProgressBar from "./ProgressBar";
import { useProgress } from "./ProgressProvider";

export default function OverallProgress() {
  const { done, reset } = useProgress();
  const completed = topics.reduce((sum, t) => sum + t.items.filter((i) => done[i.id]).length, 0);
  const pct = totalItems === 0 ? 0 : Math.round((completed / totalItems) * 100);

  return (
    <div className="card overall">
      <div className="overall-head">
        <div>
          <p className="label">Overall progress</p>
          <p className="big">{pct}%</p>
        </div>
        <p className="muted">
          {completed} / {totalItems} steps complete
        </p>
      </div>
      <ProgressBar value={completed} max={totalItems} />
      {completed > 0 && (
        <p style={{ textAlign: "right", marginBottom: 0 }}>
          <button
            className="link-btn"
            onClick={() => {
              if (window.confirm("Saara progress reset karna hai?")) reset();
            }}
          >
            Reset progress
          </button>
        </p>
      )}
    </div>
  );
}
