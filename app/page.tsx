import Link from "next/link";
import { registry } from "@/lib/registry";
import { counts } from "@/lib/tokens";
import { Button, Input, Tag, Avatar, Alert, Toggle } from "@/components/ui";

export default function Home() {
  const total = counts.base + counts.semantic + counts.component;
  const cards = [
    { href: "/foundations/color/base", t: "Foundations", d: "Color, typography, spacing, radius, grid and icons." },
    { href: "/components/overview", t: "Components", d: `${registry.length} components, every state, with a live playground.` },
    { href: "/tokens/overview", t: "Tokens", d: `${total} tokens in three tiers: base → semantic → component.` },
    { href: "/storybook/", t: "Storybook", d: "The same components in isolation, with controls and accessibility checks.", external: true },
  ];

  return (
    <>
      <section className="d-hero">
        <div>
          <p className="d-eyebrow">Design system</p>
          <h1 className="d-hero__title">Aron Design System</h1>
          <p className="d-hero__lead">One source of truth for colour, type, spacing and components — designed in Figma, shipped as code.</p>
          <div className="d-hero__actions">
            <Link href="/components/button"><Button>Browse components</Button></Link>
            <a href="/storybook/"><Button variant="primary-outline">Open Storybook</Button></a>
          </div>
        </div>

        <div className="d-live" role="group" aria-label="Live components from the system">
          <p className="d-live__label"><span className="d-live__dot" />Live from the system</p>
          <div className="d-live__row d-live__row--split">
            <Avatar initials="NV" size="lg" status="online" />
            <div className="d-live__row">
              <Tag>Design</Tag>
              <Tag type="success">Shipped</Tag>
              <Tag type="warning">Review</Tag>
            </div>
          </div>
          <Input label="Email" placeholder="you@company.com" leadIcon="mail" />
          <div className="d-live__row">
            <Button leadIcon="plus">Create</Button>
            <Button variant="primary-outline">Cancel</Button>
            <Button variant="ghost">Skip</Button>
          </div>
          <Alert type="success" title="Tokens synced" subtitle={`${total} tokens, straight from Figma.`} />
          <Toggle label="Email notifications" defaultChecked />
        </div>
      </section>

      <div className="d-cards d-cards--4">
        {cards.map((c) => (
          <a key={c.href} href={c.href} className="d-linkcard">
            <strong>{c.t}{c.external ? " ↗" : ""}</strong>
            <span>{c.d}</span>
          </a>
        ))}
      </div>

      <section className="d-section">
        <h2 className="d-h2">One colour, three tiers</h2>
        <p className="d-lead">Follow a single violet from a raw value to a button. Change the base colour and everything downstream updates.</p>
        <div className="d-chain">
          <div className="d-chain__step">
            <p className="d-chain__tier">1 · Base</p>
            <p className="d-chain__count">{counts.base} tokens · the raw value</p>
            <p className="d-chain__desc">Every colour ramp, number and font. Never used directly in components.</p>
            <code>--base-color-violet-500</code>
          </div>
          <div className="d-chain__arrow" aria-hidden="true">→</div>
          <div className="d-chain__step">
            <p className="d-chain__tier">2 · Semantic</p>
            <p className="d-chain__count">{counts.semantic} tokens · the meaning</p>
            <p className="d-chain__desc">Says what the colour is for: here, the strong brand surface.</p>
            <code>--color-surface-brand-strong</code>
          </div>
          <div className="d-chain__arrow" aria-hidden="true">→</div>
          <div className="d-chain__step">
            <p className="d-chain__tier">3 · Component</p>
            <p className="d-chain__count">{counts.component} tokens · the use</p>
            <p className="d-chain__desc">Per component and per state, like the primary button&apos;s default fill.</p>
            <code>--button-primary-default-bg</code>
          </div>
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
