import { DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage
      title="Introduction"
      intro="GlassForge UI is a small, premium React UI block library. Themeable through CSS variables, driven by Tailwind internally, but ships pre-compiled CSS so consumers don't need Tailwind themselves."
    >
      <p>
        The library focuses on blocks that save real time: heroes, navbars,
        dashboard shells, metric grids, login panels. Not yet another generic
        Button/Card kit.
      </p>
      <p>
        Glass is the default showcase preset — but every component is variant +
        token driven, so solid, soft, midnight, or your own brand are first-class.
      </p>
    </DocPage>
  );
}
