import type { Meta, StoryObj } from "@storybook/react";
import { DollarSign } from "lucide-react";
import { MetricCard } from "./metric-card";

const meta: Meta<typeof MetricCard> = {
  title: "Components/MetricCard",
  component: MetricCard,
};
export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Up: Story = {
  args: {
    label: "Revenue",
    value: "$12,430",
    icon: <DollarSign size={16} />,
    trend: { direction: "up", label: "+12% this week" },
  },
  render: (a) => <div className="w-64"><MetricCard {...a} /></div>,
};

export const Down: Story = {
  ...Up,
  args: { ...Up.args, value: "$8,210", trend: { direction: "down", label: "-4%" } },
};
