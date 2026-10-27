import Link from "next/link";

export default function NotFound() {
  return (
    <div className="hero">
      <h1>404</h1>
      <p>Ye page nahi mila.</p>
      <Link href="/roadmap" className="btn">
        Roadmap par jao
      </Link>
    </div>
  );
}
