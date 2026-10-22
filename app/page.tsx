import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { registry } from "@/lib/registry";
import { counts } from "@/lib/tokens";
import { Button } from "@/components/ui";

export default function Home() {
  const cards = [
    { href: "/foundations/color/base", t: "Foundations", d: "Color, typography, spacing, radius, grid and icons." },
    { href: "/components/overview", t: "Components", d: `${registry.length} components, every state, with a live playground.` },
    { href: "/tokens/overview", t: "Tokens", d: `${counts.base + counts.semantic + counts.component} tokens in three tiers: base → semantic → component.` },
    { href: "/storybook/", t: "Storybook", d: "The same components in isolation, with controls and accessibility checks.", external: true },
  ];
  return (
    <>
      <PageHeader eyebrow="Design system" title="Aron Design System" description="One source of truth for colour, type, spacing and components — designed in Figma, shipped as code." />
      <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
        <Link href="/components/button"><Button>Browse components</Button></Link>
        <a href="/storybook/"><Button variant="primary-outline">Open Storybook</Button></a>
      </div>
      <div className="d-cards d-cards--lg">
        {cards.map((c) => (
          <a key={c.href} href={c.href} className="d-linkcard">
            <strong>{c.t}{c.external ? " ↗" : ""}</strong>
            <span>{c.d}</span>
          </a>
        ))}
      </div>
      <section className="d-section">
        <h2 className="d-h2">How the tokens work</h2>
        <div className="d-tiers">
          <div className="d-tier"><span className="d-tier__n">{counts.base}</span><strong>Base</strong><p>Raw values: every colour ramp, number and font. Never used directly in components.</p></div>
          <div className="d-arrow">→</div>
          <div className="d-tier"><span className="d-tier__n">{counts.semantic}</span><strong>Semantic</strong><p>Meaning: surface, text, border, icon, space, size, radius. Point at base tokens.</p></div>
          <div className="d-arrow">→</div>
          <div className="d-tier"><span className="d-tier__n">{counts.component}</span><strong>Component</strong><p>Per-component, per-state values like <code>--button-primary-hover-bg</code>.</p></div>
        </div>
      </section>
      <section className="d-section">
        <h2 className="d-h2">Use it in code</h2>
        <pre className="d-code"><code>{`import "@/styles/aron.css";           // tokens + component styles
import { Button, Input } from "@/components/ui";

<Button variant="primary" leadIcon="plus">Create</Button>`}</code></pre>
      </section>
    </>
  );
}
