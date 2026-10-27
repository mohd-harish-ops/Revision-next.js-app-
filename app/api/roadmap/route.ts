import { NextResponse } from "next/server";
import { topics, totalItems } from "@/lib/roadmap";

export async function GET() {
  return NextResponse.json({ totalTopics: topics.length, totalItems, topics });
}
