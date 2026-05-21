import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage
      title="AuroraBackground"
      intro="Optional animated radial glows. Respects prefers-reduced-motion."
    >
      <Code>{`<div className="relative">
  <AuroraBackground intensity="medium" animated />
  ...
</div>`}</Code>
      <h2 className="text-xl font-semibold">Props</h2>
      <ul className="list-disc pl-6">
        <li><code>intensity</code>: subtle | medium | strong</li>
        <li><code>blur</code>: px (default 80)</li>
        <li><code>animated</code>: boolean (default true)</li>
      </ul>
      <p>The component is wrapped in <code>&quot;use client&quot;</code> since it uses Motion.</p>
    </DocPage>
  );
}
