import { ArrowRight, DollarSign, Users, Activity, Zap, Github } from "lucide-react";
import {
  Action,
  Hero,
  LoginPanel,
  Navbar,
  Panel,
  StatsGrid,
  Surface,
} from "@glassforge/ui";
import { AuroraBackground } from "./_components/aurora";

export default function HomePage() {
  return (
    <>
      <Navbar
        floating
        brand={
          <span className="inline-flex items-center gap-2">
            <span className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 to-sky-400" />
            GlassForge
          </span>
        }
        links={
          <>
            <a href="#components" className="hover:text-[rgb(var(--gf-foreground))]">Components</a>
            <a href="#dashboard" className="hover:text-[rgb(var(--gf-foreground))]">Dashboard</a>
            <a href="#auth" className="hover:text-[rgb(var(--gf-foreground))]">Auth</a>
          </>
        }
        cta={
          <Action
            asChild
            size="sm"
            variant="glass"
            className="gap-2"
          >
            <a href="https://github.com/sahilv04/glassforge-ui" target="_blank" rel="noreferrer">
              <Github size={14} /> Star
            </a>
          </Action>
        }
      />

      <Hero
        eyebrow="v0.1 — open source"
        title={
          <>
            Themeable React UI blocks
            <br />
            for modern products
          </>
        }
        description="Start with glass. Customize everything. Drop-in components and blocks for dashboards, SaaS apps, and portfolios."
        primaryCta={
          <Action variant="glow" rightIcon={<ArrowRight size={16} />}>
            Get started
          </Action>
        }
        secondaryCta={<Action variant="ghost">Read the docs</Action>}
        background={<AuroraBackground />}
      />

      <section id="dashboard" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Dashboard-ready blocks</h2>
            <p className="text-[rgb(var(--gf-muted))] mt-1">
              StatsGrid + MetricCard built on the same themeable surface.
            </p>
          </div>
        </div>
        <StatsGrid
          columns={4}
          items={[
            { label: "Users", value: "12,840", icon: <Users size={16} />, trend: { direction: "up", label: "+8% this week" } },
            { label: "Revenue", value: "$48.2k", icon: <DollarSign size={16} />, trend: { direction: "up", label: "+12%" } },
            { label: "Active", value: "3,201", icon: <Activity size={16} />, trend: { direction: "flat", label: "0%" } },
            { label: "Latency", value: "184ms", icon: <Zap size={16} />, trend: { direction: "down", label: "-22ms" } },
          ]}
        />
      </section>

      <section id="components" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-6">
          <Panel
            title="Glass surface"
            description="Frosted, layered, premium by default."
            variant="glass"
          >
            <div className="text-sm opacity-80">
              <code className="text-xs px-2 py-1 rounded bg-black/30">variant=&quot;glass&quot;</code>
            </div>
          </Panel>
          <Panel
            title="Solid surface"
            description="Clean app UI when glass isn&apos;t the vibe."
            variant="solid"
          >
            <div className="text-sm opacity-80">
              <code className="text-xs px-2 py-1 rounded bg-black/10">variant=&quot;solid&quot;</code>
            </div>
          </Panel>
          <Panel
            title="Soft surface"
            description="Tinted by the active primary color."
            variant="soft"
            tone="violet"
          >
            <div className="text-sm opacity-80">
              <code className="text-xs px-2 py-1 rounded bg-black/20">variant=&quot;soft&quot;</code>
            </div>
          </Panel>
        </div>
      </section>

      <section id="auth" className="mx-auto max-w-6xl px-6 pb-32 grid place-items-center">
        <LoginPanel
          social={
            <>
              <Action variant="outline" leftIcon={<Github size={16} />}>
                Continue with GitHub
              </Action>
            </>
          }
          footer={
            <>
              Don&apos;t have an account?{" "}
              <a className="underline text-[rgb(var(--gf-foreground))]" href="#">
                Sign up
              </a>
            </>
          }
        >
          <input
            className="h-10 px-3 rounded-lg bg-[rgb(var(--gf-background)/0.4)] border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] text-sm placeholder:text-[rgb(var(--gf-muted))]"
            placeholder="Email"
          />
          <input
            className="h-10 px-3 rounded-lg bg-[rgb(var(--gf-background)/0.4)] border border-[rgb(var(--gf-border)/var(--gf-border-alpha))] text-sm placeholder:text-[rgb(var(--gf-muted))]"
            placeholder="Password"
            type="password"
          />
          <Action variant="glow">Sign in</Action>
        </LoginPanel>
      </section>

      <footer className="border-t border-[rgb(var(--gf-border)/var(--gf-border-alpha))]">
        <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-[rgb(var(--gf-muted))]">
          <Surface variant="ghost" className="border-0 p-0">
            Built with <span className="text-[rgb(var(--gf-foreground))]">@glassforge/ui</span>.
          </Surface>
          <span>MIT © 2026 GlassForge UI contributors</span>
        </div>
      </footer>
    </>
  );
}
