import type { Meta, StoryObj } from "@storybook/react";
import { Users, DollarSign, Activity, Zap } from "lucide-react";
import { StatsGrid } from "./stats-grid";

const meta: Meta<typeof StatsGrid> = {
  title: "Blocks/StatsGrid",
  component: StatsGrid,
};
export default meta;
type Story = StoryObj<typeof StatsGrid>;

export const Dashboard: Story = {
  args: {
    columns: 4,
    items: [
      { label: "Users", value: "12,840", icon: <Users size={16} />, trend: { direction: "up", label: "+8%" } },
      { label: "Revenue", value: "$48.2k", icon: <DollarSign size={16} />, trend: { direction: "up", label: "+12%" } },
      { label: "Active", value: "3,201", icon: <Activity size={16} />, trend: { direction: "flat", label: "0%" } },
      { label: "Latency", value: "184ms", icon: <Zap size={16} />, trend: { direction: "down", label: "-22ms" } },
    ],
  },
  render: (a) => <div className="w-full max-w-5xl"><StatsGrid {...a} /></div>,
};
