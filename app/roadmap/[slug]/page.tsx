import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Checklist from "@/components/Checklist";
import { getTopic, topics } from "@/lib/roadmap";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return { title: topic ? topic.title : "Topic not found" };
}

export default async function TopicPage({ params }: Props) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();

  const index = topics.findIndex((t) => t.slug === slug);
  const prev = topics[index - 1];
  const next = topics[index + 1];

  return (
    <div className="narrow">
      <p>
        <Link href="/roadmap">&larr; Roadmap</Link>
      </p>
      <div className="emoji big-emoji">{topic.emoji}</div>
      <h1 className="title">{topic.title}</h1>
      <p className="subtitle">{topic.summary}</p>
      <div className="meta" style={{ marginBottom: "1.4rem" }}>
        <span className="pill">{topic.level}</span>
        <span className="pill">~{topic.weeks} weeks</span>
      </div>

      <Checklist topic={topic} />

      <div className="pager">
        {prev ? <Link href={`/roadmap/${prev.slug}`}>&larr; {prev.title}</Link> : <span />}
        {next ? <Link href={`/roadmap/${next.slug}`}>{next.title} &rarr;</Link> : <span />}
      </div>
    </div>
  );
}
