import type { Meta, StoryObj } from "@storybook/react";
import { Surface } from "./surface";

const meta: Meta<typeof Surface> = {
  title: "Components/Surface",
  component: Surface,
  args: {
    children: "GlassForge Surface",
  },
};

export default meta;
type Story = StoryObj<typeof Surface>;

export const Glass: Story = {
  args: { variant: "glass" },
  render: (args) => (
    <Surface {...args} className="p-8 min-w-72 text-center">
      {args.children}
    </Surface>
  ),
};

export const Solid: Story = { ...Glass, args: { variant: "solid" } };
export const Soft: Story = { ...Glass, args: { variant: "soft" } };
export const Outline: Story = { ...Glass, args: { variant: "outline" } };
export const Ghost: Story = { ...Glass, args: { variant: "ghost" } };
