import type { ReactNode } from "react";

export function DocPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight mb-3">{title}</h1>
      {intro ? (
        <p className="text-[rgb(var(--gf-muted))] mb-8 text-lg">{intro}</p>
      ) : null}
      <div className="space-y-6 leading-7">{children}</div>
    </>
  );
}

export function Code({ children }: { children: string }) {
  return (
    <pre className="text-sm overflow-x-auto p-4 rounded-lg bg-black/40 border border-[rgb(var(--gf-border)/var(--gf-border-alpha))]">
      <code>{children}</code>
    </pre>
  );
}
