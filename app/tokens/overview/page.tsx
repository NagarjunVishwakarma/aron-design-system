import Link from "next/link";
import { PageHeader } from "@/components/docs/PageHeader";
import { counts } from "@/lib/tokens";
export const metadata = { title: "Tokens" };
export default function Page() {
  const tiers = [
    { href: "/tokens/primitive", t: "Primitive (Base)", n: counts.base, d: "Colour ramps, numbers, font family and weights." },
    { href: "/tokens/semantic", t: "Semantic", n: counts.semantic, d: "Surface, text, border and icon colours; space, size, radius, border width." },
    { href: "/tokens/component", t: "Component", n: counts.component, d: "Per-component, per-state values for Alert, Button, Input, Tag and Tooltip." },
  ];
  return (
    <>
      <PageHeader eyebrow="Tokens" title="Design tokens" description="Three tiers, exactly as in the Figma variable collections: Base → Semantics → Components. Change a base value once and everything that points at it updates." />
      <div className="d-cards d-cards--lg">
        {tiers.map((x) => (
          <Link key={x.href} href={x.href} className="d-linkcard"><span className="d-tier__n">{x.n}</span><strong>{x.t}</strong><span>{x.d}</span></Link>
        ))}
      </div>
      <section className="d-section">
        <h2 className="d-h2">How to use them</h2>
        <pre className="d-code"><code>{`.my-card {
  background: var(--color-surface-neutral-2-subtle);
  border: var(--border-size-1) solid var(--color-border-neutral-3-solid);
  border-radius: var(--corner-radius-8);
  padding: var(--space-16);
}`}</code></pre>
      </section>
    </>
  );
}
