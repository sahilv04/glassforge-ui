import { StatsGrid } from "@glassforge/ui";
import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="StatsGrid" intro="Responsive grid wrapper around MetricCard. Array API or children.">
      <StatsGrid
        columns={3}
        items={[
          { label: "Users", value: "12,840", trend: { direction: "up", label: "+8%" } },
          { label: "Revenue", value: "$48.2k", trend: { direction: "up", label: "+12%" } },
          { label: "Latency", value: "184ms", trend: { direction: "down", label: "-22ms" } },
        ]}
      />
      <Code>{`<StatsGrid columns={4} items={[...]} />`}</Code>
    </DocPage>
  );
}
