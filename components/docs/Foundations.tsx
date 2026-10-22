import React from "react";
import { Icon, iconNames } from "@/components/ui";
import { byTier, displayValue, groupBy, isDark, tokens, Token } from "@/lib/tokens";
import { grids, mobileType, TypeStyle, webType, weightValue } from "@/lib/foundations";
import { TokenTable } from "./TokenTable";

/* ---------- Color: base ---------- */
export function ColorBaseView() {
  const colors = byTier("base").filter((t) => t.kind === "color");
  const families = groupBy(colors, (t) => t.group.replace("Color/", ""));
  return (
    <div className="d-stack">
      {families.map(([family, list]) => (
        <section key={family}>
          <h3 className="d-h3">{family}</h3>
          <div className="d-ramp">
            {list.map((t) => (
              <div key={t.cssVar} className="d-chip" style={{ background: String(t.value), color: isDark(String(t.value)) ? "#fff" : "#111" }} title={t.cssVar}>
                <strong>{t.name.split("/").pop()}</strong>
                <span>{String(t.value)}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/* ---------- Color: semantic ---------- */
export function ColorSemanticView() {
  const sem = byTier("semantic").filter((t) => t.kind === "color");
  const sections = groupBy(sem, (t) => t.name.split("/")[1].toLowerCase());
  const order = ["surface", "text", "border", "icon"];
  sections.sort((a, b) => order.indexOf(a[0]) - order.indexOf(b[0]));
  return (
    <div className="d-stack">
      {sections.map(([group, list]) => (
        <section key={group}>
          <h3 className="d-h3" style={{ textTransform: "capitalize" }}>{group}</h3>
          <div className="d-cards">
            {list.map((t) => (
              <div key={t.cssVar} className="d-card">
                <div className="d-card__color" style={{ background: String(t.value) }} />
                <div className="d-card__body">
                  <strong>{t.name.replace(/^color\//, "")}</strong>
                  <code>{t.cssVar}</code>
                  <span className="d-muted">{t.aliasName ? `→ ${t.aliasName.replace("Color/", "")}` : ""} · {String(t.value)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

/* ---------- Typography ---------- */
function TypeList({ styles }: { styles: TypeStyle[] }) {
  return (
    <div className="d-table-wrap">
      <table className="d-table d-type">
        <thead><tr><th>Style</th><th>Size / line</th><th>Sample</th></tr></thead>
        <tbody>
          {styles.map((s) => (
            <tr key={s.name}>
              <td><strong>{s.name}</strong></td>
              <td><code>{s.size}px / {s.line}px</code></td>
              <td>
                {s.weights.map((w) => (
                  <div key={w} className="d-type__row">
                    <span className="d-type__w">{w} · {weightValue[w]}</span>
                    <span style={{ fontSize: s.size, lineHeight: `${s.line}px`, fontWeight: weightValue[w] }}>The quick brown fox</span>
                  </div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export function TypographyView({ platform }: { platform?: "web" | "mobile" }) {
  return (
    <div className="d-stack">
      <section>
        <h3 className="d-h3">Typeface</h3>
        <p className="d-lead" style={{ fontSize: 28, fontWeight: 600 }}>Inter</p>
        <p className="d-muted">Weights: Regular 400 · Medium 500 · Semi-bold 600 (Bold 700 for Mobile Label 3). Token: <code>--base-font-family-primary</code></p>
      </section>
      {platform !== "mobile" ? <section><h3 className="d-h3">Web</h3><TypeList styles={webType} /></section> : null}
      {platform !== "web" ? <section><h3 className="d-h3">Mobile</h3><TypeList styles={mobileType} /></section> : null}
    </div>
  );
}

/* ---------- Spacing / size / radius / border ---------- */
export function SpacingView() {
  const list = byTier("semantic").filter((t) => t.name.startsWith("space/"));
  return (
    <div className="d-bars">
      {list.map((t) => (
        <div key={t.cssVar} className="d-bar">
          <code className="d-bar__name">{t.name}</code>
          <span className="d-bar__fill" style={{ width: Math.max(Number(t.value), 1) * 2 }} />
          <span className="d-muted">{displayValue(t)} · <code>{t.cssVar}</code></span>
        </div>
      ))}
    </div>
  );
}
export function SizeView() {
  const list = byTier("semantic").filter((t) => t.name.startsWith("size/"));
  return (
    <div className="d-bars">
      {list.map((t) => (
        <div key={t.cssVar} className="d-bar">
          <code className="d-bar__name">{t.name}</code>
          <span className="d-square" style={{ width: Math.min(Number(t.value), 160), height: Math.min(Number(t.value), 160) }} />
          <span className="d-muted">{displayValue(t)} · <code>{t.cssVar}</code>{t.aliasName ? ` → ${t.aliasName}` : ""}</span>
        </div>
      ))}
    </div>
  );
}
export function RadiusView() {
  const list = byTier("semantic").filter((t) => t.name.startsWith("corner-radius/"));
  return (
    <div className="d-cards">
      {list.map((t) => (
        <div key={t.cssVar} className="d-card">
          <div className="d-card__color" style={{ display: "grid", placeItems: "center", background: "var(--base-color-grey-50)" }}>
            <span style={{ width: 72, height: 72, background: "var(--base-color-violet-500)", borderRadius: Number(t.value) > 36 ? 36 : Number(t.value) }} />
          </div>
          <div className="d-card__body"><strong>{t.name}</strong><code>{t.cssVar}</code><span className="d-muted">{displayValue(t)}</span></div>
        </div>
      ))}
    </div>
  );
}
export function BorderView() {
  const list = byTier("semantic").filter((t) => t.name.startsWith("border-size/"));
  return (
    <div className="d-cards">
      {list.map((t) => (
        <div key={t.cssVar} className="d-card">
          <div className="d-card__color" style={{ display: "grid", placeItems: "center", background: "var(--base-color-grey-50)" }}>
            <span style={{ width: 96, height: 56, border: `${t.value}px solid var(--base-color-violet-500)`, borderRadius: 8, background: "#fff" }} />
          </div>
          <div className="d-card__body"><strong>{t.name}</strong><code>{t.cssVar}</code><span className="d-muted">{displayValue(t)}</span></div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Grid ---------- */
export function GridView() {
  return (
    <div className="d-stack">
      {grids.map((g) => (
        <section key={g.name}>
          <h3 className="d-h3">{g.name}</h3>
          <p className="d-muted">{g.columns} columns · {g.gutter}px gutter · {g.margin}px margin</p>
          <div className="d-grid" style={{ padding: `0 ${g.margin / 2}px`, gap: g.gutter / 2 }}>
            {Array.from({ length: g.columns }).map((_, i) => <span key={i} className="d-grid__col" />)}
          </div>
        </section>
      ))}
    </div>
  );
}

/* ---------- Icons ---------- */
export function IconsView() {
  return (
    <div className="d-icons">
      {iconNames.map((n) => (
        <div key={n} className="d-icon">
          <Icon name={n} size={24} />
          <code>{n}</code>
        </div>
      ))}
    </div>
  );
}

/* ---------- Token tables ---------- */
export function PrimitiveTokensView() {
  const list = byTier("base");
  return <div className="d-stack">{groupBy(list, (t) => t.group).map(([g, ts]) => (
    <section key={g}><h3 className="d-h3">{g}</h3><TokenTable tokens={ts} showRef={false} /></section>
  ))}</div>;
}
export function SemanticTokensView() {
  const list = byTier("semantic");
  return <div className="d-stack">{groupBy(list, (t) => t.group).map(([g, ts]) => (
    <section key={g}><h3 className="d-h3">{g}</h3><TokenTable tokens={ts} /></section>
  ))}</div>;
}
export function ComponentTokensView() {
  const list = byTier("component");
  return <div className="d-stack">{groupBy(list, (t) => t.group).map(([g, ts]) => (
    <section key={g}><h3 className="d-h3">{g}</h3><TokenTable tokens={ts} /></section>
  ))}</div>;
}
export type { Token };
export { tokens };
