import { registry } from "./registry";

export type NavGroup = { title: string; items: { label: string; href: string }[] };
export const nav: NavGroup[] = [
  { title: "Getting started", items: [{ label: "Introduction", href: "/" }] },
  {
    title: "Foundations",
    items: [
      { label: "Color · Base", href: "/foundations/color/base" },
      { label: "Color · Semantic", href: "/foundations/color/semantic" },
      { label: "Color · Component", href: "/foundations/color/component" },
      { label: "Typography", href: "/foundations/typography" },
      { label: "Spacing & Size", href: "/foundations/spacing" },
      { label: "Radius & Border", href: "/foundations/radius" },
      { label: "Grid", href: "/foundations/grid" },
      { label: "Icons", href: "/foundations/icons" },
    ],
  },
  {
    title: "Components",
    items: [{ label: "Overview", href: "/components/overview" }, ...registry.map((c) => ({ label: c.name, href: `/components/${c.slug}` }))],
  },
  {
    title: "Tokens",
    items: [
      { label: "Overview", href: "/tokens/overview" },
      { label: "Primitive (Base)", href: "/tokens/primitive" },
      { label: "Semantic", href: "/tokens/semantic" },
      { label: "Component", href: "/tokens/component" },
    ],
  },
];
export const flat = nav.flatMap((g) => g.items.map((i) => ({ ...i, group: g.title })));
