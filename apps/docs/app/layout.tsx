import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GlassForge UI — Themeable React UI Blocks for SaaS Dashboards and Portfolios",
  description:
    "Themeable React UI blocks for modern dashboards, SaaS apps, and portfolios. Start with glass. Customize everything.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark gf-theme-glass">
      <body>{children}</body>
    </html>
  );
}
