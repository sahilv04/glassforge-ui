import type { Meta, StoryObj } from "@storybook/react";
import { Panel } from "./panel";
import { Action } from "./action";

const meta: Meta<typeof Panel> = {
  title: "Components/Panel",
  component: Panel,
};
export default meta;
type Story = StoryObj<typeof Panel>;

export const WithTitle: Story = {
  args: {
    title: "Project usage",
    description: "Monthly bandwidth across all deployments.",
    children: <div className="text-sm opacity-80">23.4 GB of 100 GB used</div>,
  },
  render: (a) => (
    <div className="w-96">
      <Panel {...a} />
    </div>
  ),
};

export const WithFooter: Story = {
  args: {
    title: "Invite team",
    description: "Add a teammate to this workspace.",
    children: <div className="text-sm opacity-80">Form goes here.</div>,
    footer: (
      <div className="flex justify-end gap-2">
        <Action variant="ghost" size="sm">Cancel</Action>
        <Action size="sm">Invite</Action>
      </div>
    ),
  },
  render: (a) => (
    <div className="w-96">
      <Panel {...a} />
    </div>
  ),
};
