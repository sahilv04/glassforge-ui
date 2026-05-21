import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage
      title="Theming"
      intro="GlassForge is themed entirely with CSS variables. Switch presets with a class, or override individual tokens."
    >
      <h2 className="text-xl font-semibold mt-6">Theme presets</h2>
      <p>Four presets ship out of the box:</p>
      <ul className="list-disc pl-6">
        <li><code>.gf-theme-glass</code> — frosted/glass</li>
        <li><code>.gf-theme-solid</code> — clean app UI</li>
        <li><code>.gf-theme-soft</code> — light, modern SaaS</li>
        <li><code>.gf-theme-midnight</code> — dark dashboard</li>
      </ul>
      <Code>{`<html class="dark gf-theme-glass">`}</Code>
      <h2 className="text-xl font-semibold mt-6">Custom tokens</h2>
      <Code>{`:root {
  --gf-primary: 244 63 94;   /* rose */
  --gf-radius: 0.5rem;
  --gf-blur: 12px;
}`}</Code>
    </DocPage>
  );
}
