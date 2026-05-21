import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Action } from "./action";

const meta: Meta<typeof Action> = {
  title: "Components/Action",
  component: Action,
  args: { children: "Get started" },
};
export default meta;
type Story = StoryObj<typeof Action>;

export const Solid: Story = { args: { variant: "solid" } };
export const Glass: Story = { args: { variant: "glass" } };
export const Soft: Story = { args: { variant: "soft" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Glow: Story = { args: { variant: "glow" } };

export const WithIcons: Story = {
  args: {
    leftIcon: <Sparkles size={16} />,
    rightIcon: <ArrowRight size={16} />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Action size="sm">Small</Action>
      <Action size="md">Medium</Action>
      <Action size="lg">Large</Action>
    </div>
  ),
};
