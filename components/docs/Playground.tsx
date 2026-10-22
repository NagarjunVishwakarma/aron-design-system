"use client";
import React, { useState } from "react";
import { defaultsOf, getDoc, normalizeProps, Props } from "@/lib/registry";

/** Interactive preview with a control for every prop, plus the code you would write. */
export function Playground({ slug, bare }: { slug: string; bare?: boolean }) {
  const doc = getDoc(slug)!;
  const defaults = defaultsOf(doc);
  const [values, setValues] = useState<Props>(defaults);
  const C = doc.Component;
  const set = (k: string, v: any) => setValues((p) => ({ ...p, [k]: v }));
  // `key` forces a remount when state-like props change so uncontrolled inputs reset
  const key = JSON.stringify(values);
  const { children, ...rest } = normalizeProps(values);
  const code = toCode(doc.name, values, defaults);

  return (
    <div className="d-play">
      <div className="d-play__stage">
        <C key={key} {...rest}>{children}</C>
      </div>
      {bare ? null : (
        <>
          <div className="d-play__controls">
            {doc.controls.map((c) => (
              <label key={c.name} className="d-ctl">
                <span className="d-ctl__name">{c.name}</span>
                {c.type === "select" ? (
                  <select value={String(values[c.name])} onChange={(e) => set(c.name, e.target.value)}>
                    {c.options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                ) : c.type === "boolean" ? (
                  <input type="checkbox" checked={!!values[c.name]} onChange={(e) => set(c.name, e.target.checked)} />
                ) : (
                  <input type="text" value={String(values[c.name] ?? "")} onChange={(e) => set(c.name, e.target.value)} />
                )}
              </label>
            ))}
            <button type="button" className="d-ctl__reset" onClick={() => setValues(defaults)}>Reset</button>
          </div>
          <pre className="d-code"><code>{code}</code></pre>
        </>
      )}
    </div>
  );
}

function toCode(name: string, values: Props, defaults: Props) {
  const attrs: string[] = [];
  let children = "";
  for (const [k, v] of Object.entries(values)) {
    if (k === "children") { children = String(v); continue; }
    if (v === defaults[k] && !(k === "closable" && v === true)) continue;
    if (v === "none" || v === false || v === "") continue;
    attrs.push(v === true ? k : `${k}="${v}"`);
  }
  const a = attrs.length ? " " + attrs.join(" ") : "";
  return children ? `<${name}${a}>${children}</${name}>` : `<${name}${a} />`;
}
