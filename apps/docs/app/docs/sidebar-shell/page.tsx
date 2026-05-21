import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="SidebarShell" intro="Full app layout: sidebar + optional header + main.">
      <p>The docs you&apos;re reading right now use <code>SidebarShell</code>.</p>
      <Code>{`<SidebarShell
  sidebar={<nav>...</nav>}
  header={<div>Title</div>}
>
  main content
</SidebarShell>`}</Code>
      <h2 className="text-xl font-semibold">Props</h2>
      <ul className="list-disc pl-6">
        <li><code>sidebar</code>: ReactNode (required)</li>
        <li><code>header</code>: ReactNode</li>
        <li><code>sidebarWidth</code>: sm | md | lg</li>
      </ul>
    </DocPage>
  );
}
