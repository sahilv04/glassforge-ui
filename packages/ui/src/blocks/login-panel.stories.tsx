import type { Meta, StoryObj } from "@storybook/react";
import { LoginPanel } from "./login-panel";
import { Action } from "../components/action";

const meta: Meta<typeof LoginPanel> = {
  title: "Blocks/LoginPanel",
  component: LoginPanel,
};
export default meta;
type Story = StoryObj<typeof LoginPanel>;

export const Default: Story = {
  render: () => (
    <LoginPanel
      social={
        <>
          <Action variant="outline">Continue with GitHub</Action>
          <Action variant="outline">Continue with Google</Action>
        </>
      }
      footer={<>Don&apos;t have an account? <a className="underline">Sign up</a></>}
    >
      <input
        className="h-10 px-3 rounded-lg bg-[rgb(var(--gf-background)/0.4)] border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] text-sm"
        placeholder="Email"
      />
      <input
        className="h-10 px-3 rounded-lg bg-[rgb(var(--gf-background)/0.4)] border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] text-sm"
        placeholder="Password"
        type="password"
      />
      <Action variant="glow">Sign in</Action>
    </LoginPanel>
  ),
};
