import { Panel, Action } from "@glassforge/ui";
import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="Panel" intro="Surface with optional header, title/description, and footer slots.">
      <div className="max-w-md">
        <Panel
          title="Invite team"
          description="Add a teammate to this workspace."
          footer={
            <div className="flex justify-end gap-2">
              <Action variant="ghost" size="sm">Cancel</Action>
              <Action size="sm">Invite</Action>
            </div>
          }
        >
          <input
            className="h-10 px-3 rounded-lg bg-[rgb(var(--gf-background)/0.4)] border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] text-sm w-full"
            placeholder="teammate@example.com"
          />
        </Panel>
      </div>
      <Code>{`<Panel title="..." description="..." footer={...}>
  body
</Panel>`}</Code>
    </DocPage>
  );
}
