import { MetricCard } from "@glassforge/ui";
import { DollarSign } from "lucide-react";
import { Code, DocPage } from "../_doc-page";

export default function Page() {
  return (
    <DocPage title="MetricCard" intro="Number, label, optional trend, and icon.">
      <div className="max-w-xs">
        <MetricCard
          label="Revenue"
          value="$12,430"
          icon={<DollarSign size={16} />}
          trend={{ direction: "up", label: "+12% this week" }}
        />
      </div>
      <Code>{`<MetricCard
  label="Revenue"
  value="$12,430"
  trend={{ direction: "up", label: "+12%" }}
/>`}</Code>
    </DocPage>
  );
}
