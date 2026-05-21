import type { Meta, StoryObj } from "@storybook/react";
import { ArrowRight } from "lucide-react";
import { Hero } from "./hero";
import { Action } from "../components/action";
import { AuroraBackground } from "../components/aurora-background";

const meta: Meta<typeof Hero> = {
  title: "Blocks/Hero",
  component: Hero,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Hero>;

export const Centered: Story = {
  args: {
    eyebrow: "v0.1 — themeable",
    title: "Themeable React UI blocks for modern products",
    description: "Start with glass. Customize everything.",
    primaryCta: <Action variant="glow" rightIcon={<ArrowRight size={16} />}>Get started</Action>,
    secondaryCta: <Action variant="ghost">Docs</Action>,
    background: <AuroraBackground />,
  },
};
