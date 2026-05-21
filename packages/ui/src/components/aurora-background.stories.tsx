import type { Meta, StoryObj } from "@storybook/react";
import { AuroraBackground } from "./aurora-background";

const meta: Meta<typeof AuroraBackground> = {
  title: "Components/AuroraBackground",
  component: AuroraBackground,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof AuroraBackground>;

export const Medium: Story = {
  render: (a) => (
    <div className="relative h-screen w-full">
      <AuroraBackground {...a} />
      <div className="relative grid place-items-center h-full text-[rgb(var(--gf-foreground))]">
        Animated aurora background
      </div>
    </div>
  ),
  args: { intensity: "medium", animated: true },
};
