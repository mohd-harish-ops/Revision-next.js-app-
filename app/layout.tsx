import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { ProgressProvider } from "@/components/ProgressProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Roadmap Tracker",
    template: "%s | Roadmap Tracker",
  },
  description: "Track your learning roadmap step by step: Linux, networking, cloud and security.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ProgressProvider>
          <Navbar />
          <div className="page">
            <div className="container">{children}</div>
          </div>
          <footer className="footer">
            <div className="container">Built with Next.js, React and TypeScript</div>
          </footer>
        </ProgressProvider>
      </body>
    </html>
  );
}
