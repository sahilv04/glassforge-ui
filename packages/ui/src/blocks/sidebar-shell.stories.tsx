import type { Meta, StoryObj } from "@storybook/react";
import { SidebarShell } from "./sidebar-shell";

const meta: Meta<typeof SidebarShell> = {
  title: "Blocks/SidebarShell",
  component: SidebarShell,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof SidebarShell>;

export const Default: Story = {
  args: {
    sidebar: (
      <nav className="space-y-2 text-sm">
        <div className="font-semibold text-base mb-4">GlassForge</div>
        <a className="block px-3 py-2 rounded-md bg-[rgb(var(--gf-primary)/0.15)] text-[rgb(var(--gf-primary))]">Dashboard</a>
        <a className="block px-3 py-2 rounded-md hover:bg-[rgb(var(--gf-background)/0.06)]">Projects</a>
        <a className="block px-3 py-2 rounded-md hover:bg-[rgb(var(--gf-background)/0.06)]">Settings</a>
      </nav>
    ),
    header: <div className="font-medium">Dashboard</div>,
    children: <div className="opacity-80">Main content area.</div>,
  },
};
