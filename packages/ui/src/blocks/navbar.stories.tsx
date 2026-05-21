import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";
import { Action } from "../components/action";

const meta: Meta<typeof Navbar> = {
  title: "Blocks/Navbar",
  component: Navbar,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Navbar>;

const links = (
  <>
    <a href="#">Components</a>
    <a href="#">Blocks</a>
    <a href="#">Docs</a>
  </>
);

export const Default: Story = {
  args: {
    brand: "GlassForge",
    links,
    cta: <Action size="sm">Sign in</Action>,
  },
};

export const Floating: Story = {
  args: { ...Default.args, floating: true },
};
