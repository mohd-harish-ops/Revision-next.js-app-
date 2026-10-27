"use client";

import Link from "next/link";
import type { Topic } from "@/lib/roadmap";
import ProgressBar from "./ProgressBar";
import { useProgress } from "./ProgressProvider";

export default function TopicCard({ topic }: { topic: Topic }) {
  const { done } = useProgress();
  const completed = topic.items.filter((i) => done[i.id]).length;

  return (
    <Link href={`/roadmap/${topic.slug}`} className="card topic">
      <div className="emoji">{topic.emoji}</div>
      <h3>{topic.title}</h3>
      <p className="muted">{topic.summary}</p>
      <div className="meta">
        <span className="pill">{topic.level}</span>
        <span className="pill">~{topic.weeks} weeks</span>
      </div>
      <ProgressBar value={completed} max={topic.items.length} />
      <p className="muted" style={{ margin: ".4rem 0 0" }}>
        {completed} / {topic.items.length} done
      </p>
    </Link>
  );
}
