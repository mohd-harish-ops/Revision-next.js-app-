import type { Metadata } from "next";
import TopicCard from "@/components/TopicCard";
import { topics } from "@/lib/roadmap";

export const metadata: Metadata = {
  title: "Roadmap",
};

export default function RoadmapPage() {
  return (
    <>
      <h1 className="title">Roadmap</h1>
      <p className="subtitle">Ek topic kholo aur uske steps ek ek karke complete karo.</p>
      <div className="grid">
        {topics.map((t) => (
          <TopicCard key={t.slug} topic={t} />
        ))}
      </div>
    </>
  );
}
