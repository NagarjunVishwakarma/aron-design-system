import React from "react";
import { ComponentDoc } from "@/lib/registry";
import { byTier, find, groupBy } from "@/lib/tokens";
import { ComponentSections } from "./Preview";
import { Playground } from "./Playground";
import { PageHeader } from "./PageHeader";
import { TokenTable } from "./TokenTable";

export function ComponentPage({ doc }: { doc: ComponentDoc }) {
  const compTokens = doc.tokenPrefix ? byTier("component").filter((t) => t.cssVar.startsWith(doc.tokenPrefix!)) : [];
  const semTokens = (doc.semanticTokens || []).map(find).filter(Boolean) as NonNullable<ReturnType<typeof find>>[];
  return (
    <>
      <PageHeader eyebrow="Components" title={doc.name} description={doc.description} />

      <section className="d-section">
        <h2 className="d-h2">Playground</h2>
        <p className="d-lead">Change any prop and the preview and code update live.</p>
        <Playground slug={doc.slug} />
      </section>

      <ComponentSections doc={doc} />

      <section className="d-section">
        <h2 className="d-h2">Specs</h2>
        <div className="d-specs">
          {doc.specs.map((s) => (
            <div key={s.label} className="d-spec"><span className="d-muted">{s.label}</span><strong>{s.value}</strong></div>
          ))}
        </div>
      </section>

      <section className="d-section">
        <h2 className="d-h2">Props</h2>
        <div className="d-table-wrap">
          <table className="d-table">
            <thead><tr><th>Prop</th><th>Type</th><th>Default</th><th>Description</th></tr></thead>
            <tbody>
              {doc.props.map((p) => (
                <tr key={p.name}><td><code>{p.name}</code></td><td><code>{p.type}</code></td><td><code>{p.default}</code></td><td>{p.description}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="d-section">
        <h2 className="d-h2">Tokens used</h2>
        {compTokens.length ? (
          <>
            <p className="d-lead">{compTokens.length} component tokens, straight from the Components collection in Figma. Each one points to a semantic token, which points to a base token.</p>
            {groupBy(compTokens, (t) => t.name.split("/").slice(0, -1).join(" / ")).map(([g, ts]) => (
              <div key={g} className="d-tokgroup"><h3 className="d-h3">{g}</h3><TokenTable tokens={ts} /></div>
            ))}
          </>
        ) : (
          <>
            <p className="d-lead">This component has no dedicated tokens in Figma yet, so it uses semantic tokens directly.</p>
            <TokenTable tokens={semTokens} />
          </>
        )}
      </section>

      <section className="d-section d-two">
        <div>
          <h2 className="d-h2">Usage</h2>
          <h3 className="d-h3 d-do">Do</h3>
          <ul className="d-list">{doc.usage.do.map((x) => <li key={x}>{x}</li>)}</ul>
          <h3 className="d-h3 d-dont">Don&apos;t</h3>
          <ul className="d-list">{doc.usage.dont.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <div>
          <h2 className="d-h2">Accessibility</h2>
          <ul className="d-list">{doc.a11y.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
      </section>
    </>
  );
}
