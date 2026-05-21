import Link from "next/link";
import type { ReactNode } from "react";
import { SidebarShell } from "@glassforge/ui";

const sections: { title: string; pages: { href: string; label: string }[] }[] = [
  {
    title: "Getting started",
    pages: [
      { href: "/docs/introduction", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/theming", label: "Theming" },
    ],
  },
  {
    title: "Primitives",
    pages: [
      { href: "/docs/surface", label: "Surface" },
      { href: "/docs/action", label: "Action" },
      { href: "/docs/panel", label: "Panel" },
    ],
  },
  {
    title: "Dashboard",
    pages: [
      { href: "/docs/metric-card", label: "MetricCard" },
      { href: "/docs/stats-grid", label: "StatsGrid" },
      { href: "/docs/sidebar-shell", label: "SidebarShell" },
    ],
  },
  {
    title: "Marketing",
    pages: [
      { href: "/docs/hero", label: "Hero" },
      { href: "/docs/navbar", label: "Navbar" },
      { href: "/docs/login-panel", label: "LoginPanel" },
      { href: "/docs/aurora-background", label: "AuroraBackground" },
    ],
  },
];

export default function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarShell
      sidebar={
        <nav className="space-y-6 text-sm">
          <Link href="/" className="font-semibold text-base flex items-center gap-2">
            <span className="h-5 w-5 rounded bg-gradient-to-br from-violet-500 to-sky-400" />
            GlassForge
          </Link>
          {sections.map((s) => (
            <div key={s.title}>
              <div className="text-xs uppercase tracking-wider text-[rgb(var(--gf-muted))] mb-2">
                {s.title}
              </div>
              <ul className="space-y-1">
                {s.pages.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="block px-2 py-1 rounded hover:bg-[rgb(var(--gf-background)/0.08)]"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      }
      header={
        <div className="flex items-center justify-between">
          <span className="text-sm text-[rgb(var(--gf-muted))]">Documentation</span>
          <Link href="/" className="text-sm hover:underline">
            ← Home
          </Link>
        </div>
      }
    >
      <article className="prose-invert max-w-3xl mx-auto">{children}</article>
    </SidebarShell>
  );
}
