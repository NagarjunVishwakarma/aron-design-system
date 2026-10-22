import React from "react";
import { Token, displayValue, isDark } from "@/lib/tokens";

export function Swatch({ t, size = 28 }: { t: Token; size?: number }) {
  if (t.kind !== "color") return null;
  return <span className="d-swatch" style={{ background: String(t.value), width: size, height: size }} />;
}

/** A table of tokens: swatch, Figma name, CSS variable, value, and what it points to. */
export function TokenTable({ tokens, showRef = true }: { tokens: Token[]; showRef?: boolean }) {
  return (
    <div className="d-table-wrap">
      <table className="d-table">
        <thead>
          <tr><th>Token</th><th>CSS variable</th><th>Value</th>{showRef ? <th>Points to</th> : null}</tr>
        </thead>
        <tbody>
          {tokens.map((t) => (
            <tr key={t.cssVar}>
              <td><span className="d-tokname"><Swatch t={t} size={20} />{t.name}</span></td>
              <td><code>{t.cssVar}</code></td>
              <td><code>{displayValue(t)}</code></td>
              {showRef ? <td>{t.aliasName ? <code>{t.aliasName}</code> : <span className="d-muted">—</span>}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export { isDark };
