import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="Installation" intro="Install the package and import the stylesheet once.">
      <Code>{`pnpm add @glassforge/ui`}</Code>
      <Code>{`// app entry
import "@glassforge/ui/styles.css";`}</Code>
      <p>That&apos;s it. No Tailwind required. If you do use Tailwind, the optional preset is at <code>@glassforge/ui/tailwind-preset</code>.</p>
    </DocPage>
  );
}
