import data from "./tokens.json";

export type Token = {
  tier: "base" | "semantic" | "component";
  group: string;
  name: string;
  cssVar: string;
  aliasName: string | null;
  value: string | number;
  kind: "color" | "number" | "string";
};
export const tokens = data as Token[];
export const byTier = (t: Token["tier"]) => tokens.filter((x) => x.tier === t);
export const groupBy = <T,>(arr: T[], key: (x: T) => string) => {
  const m = new Map<string, T[]>();
  for (const x of arr) { const k = key(x); (m.get(k) || m.set(k, []).get(k)!).push(x); }
  return Array.from(m.entries());
};
export const find = (cssVar: string) => tokens.find((t) => t.cssVar === cssVar);
export const displayValue = (t: Token) => (t.kind === "number" ? `${t.value}px` : String(t.value));
export const counts = {
  base: byTier("base").length,
  semantic: byTier("semantic").length,
  component: byTier("component").length,
};
/** pick readable text colour for a swatch */
export const isDark = (hex: string) => {
  const h = hex.replace("#", "");
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16));
  return (0.299 * r + 0.587 * g + 0.114 * b) < 150;
};
