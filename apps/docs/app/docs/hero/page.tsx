import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="Hero" intro="Landing page hero with eyebrow, CTAs, visual, and background slots.">
      <Code>{`<Hero
  eyebrow="v0.1"
  title="Themeable React UI blocks"
  description="Start with glass. Customize everything."
  primaryCta={<Action variant="glow">Get started</Action>}
  background={<AuroraBackground />}
/>`}</Code>
      <p>
        Pass any background — <code>AuroraBackground</code>, a gradient, an image, or
        nothing. Use <code>visual</code> for a side-by-side product shot.
      </p>
    </DocPage>
  );
}
