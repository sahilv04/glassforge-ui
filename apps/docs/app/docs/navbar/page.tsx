import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="Navbar" intro="Themeable header with brand, links, and CTA slots.">
      <Code>{`<Navbar
  floating
  brand={<>GlassForge</>}
  links={<><a>Components</a><a>Docs</a></>}
  cta={<Action size="sm">Sign in</Action>}
/>`}</Code>
      <ul className="list-disc pl-6">
        <li><code>sticky</code>: pins to top</li>
        <li><code>floating</code>: floating pill, padded from top</li>
      </ul>
    </DocPage>
  );
}
