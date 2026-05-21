import { Action } from "@glassforge/ui";
import { ArrowRight } from "lucide-react";
import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="Action" intro="Themeable CTA. Six variants × three sizes, with icon slots and asChild.">
      <div className="flex flex-wrap gap-3">
        <Action variant="solid">Solid</Action>
        <Action variant="glass">Glass</Action>
        <Action variant="soft">Soft</Action>
        <Action variant="outline">Outline</Action>
        <Action variant="ghost">Ghost</Action>
        <Action variant="glow" rightIcon={<ArrowRight size={16} />}>Glow</Action>
      </div>
      <Code>{`<Action variant="glow" rightIcon={<ArrowRight size={16} />}>
  Get started
</Action>`}</Code>
      <p>
        Use <code>asChild</code> to render the styling onto a different element (e.g. <code>&lt;a&gt;</code> via Next.js <code>Link</code>).
      </p>
    </DocPage>
  );
}
