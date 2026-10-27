"use client";

import type { Topic } from "@/lib/roadmap";
import ProgressBar from "./ProgressBar";
import { useProgress } from "./ProgressProvider";

export default function Checklist({ topic }: { topic: Topic }) {
  const { done, toggle } = useProgress();
  const completed = topic.items.filter((i) => done[i.id]).length;

  return (
    <section className="card">
      <div className="overall-head">
        <h3 style={{ margin: 0 }}>Checklist</h3>
        <span className="muted">
          {completed} / {topic.items.length} done
        </span>
      </div>
      <ProgressBar value={completed} max={topic.items.length} />
      <ul className="check-list">
        {topic.items.map((item) => (
          <li key={item.id} className={done[item.id] ? "checked" : ""}>
            <label>
              <input type="checkbox" checked={!!done[item.id]} onChange={() => toggle(item.id)} />
              <span>{item.text}</span>
            </label>
          </li>
        ))}
      </ul>
      {completed === topic.items.length && <p className="success">🎉 Ye topic complete ho gaya!</p>}
    </section>
  );
}
