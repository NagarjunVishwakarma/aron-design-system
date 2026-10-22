import type { Metadata } from "next";
import React from "react";
import "@/styles/aron.css";
import "@/styles/docs.css";
import { Sidebar } from "@/components/docs/Sidebar";

export const metadata: Metadata = {
  title: { default: "Aron Design System", template: "%s · Aron Design System" },
  description: "Tokens, foundations and components of the Aron design system.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="d-shell">
          <Sidebar />
          <main className="d-main"><div className="d-content">{children}</div></main>
        </div>
      </body>
    </html>
  );
}
