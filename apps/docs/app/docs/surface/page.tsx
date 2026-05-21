import { Surface } from "@glassforge/ui";
import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="Surface" intro="The foundational themeable container. Every block builds on Surface.">
      <div className="grid grid-cols-2 gap-4">
        <Surface variant="glass" className="p-6">glass</Surface>
        <Surface variant="solid" className="p-6">solid</Surface>
        <Surface variant="soft" className="p-6">soft</Surface>
        <Surface variant="outline" className="p-6">outline</Surface>
      </div>
      <Code>{`<Surface variant="glass" tone="violet" radius="2xl" intensity="medium">
  content
</Surface>`}</Code>
      <h2 className="text-xl font-semibold">Props</h2>
      <ul className="list-disc pl-6">
        <li><code>variant</code>: glass | solid | soft | outline | ghost</li>
        <li><code>tone</code>: neutral | blue | violet | emerald | rose | amber</li>
        <li><code>radius</code>: md | lg | xl | 2xl | 3xl</li>
        <li><code>intensity</code>: subtle | medium | strong</li>
      </ul>
    </DocPage>
  );
}
