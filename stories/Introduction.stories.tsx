import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { registry, normalizeProps } from "@/lib/registry";
import { counts } from "@/lib/tokens";
import { Alert, Avatar, Button, Input, Tag, Toggle } from "@/components/ui";

const meta: Meta = { title: "Introduction", parameters: { layout: "fullscreen", controls: { disable: true } } };
export default meta;

/** Links inside the preview frame must target the top window, and point at Storybook's own URL format. */
const story = (id: string) => `/storybook/?path=/story/${id}`;

const foundations = [
  { t: "Color", d: "Base, semantic and component colours.", id: "foundations-color--base" },
  { t: "Typography", d: "Web and mobile type scales.", id: "foundations-typography--web" },
  { t: "Spacing & Size", d: "The space and size scale.", id: "foundations-spacing--space" },
  { t: "Radius & Border", d: "Corner radius and border widths.", id: "foundations-radius-border--corner-radius" },
  { t: "Grid", d: "Column grids for each breakpoint.", id: "foundations-grid--layouts" },
  { t: "Icons", d: "The icon set.", id: "foundations-icons--all" },
  { t: "Tokens", d: "Every token, across all three tiers.", id: "foundations-tokens--primitive" },
];

const tips = [
  { t: "Playground", d: "Every component has one. Change any prop with the Controls panel and copy the code you need." },
  { t: "Every state", d: "Variants, sizes and states (hover, focus, disabled, error) each have their own story." },
  { t: "Accessibility", d: "Open the Accessibility tab under any story to run contrast and ARIA checks." },
];

export const Welcome: StoryObj = {
  render: () => {
    const total = counts.base + counts.semantic + counts.component;
    return (
      <div className="d-sb d-sb--intro">
        <section className="d-hero">
          <div>
            <p className="d-eyebrow">Design system</p>
            <h1 className="d-hero__title">Aron Design System</h1>
            <p className="d-hero__lead">
              {registry.length} components and {total} design tokens, taken straight from Figma. Try them, break them, and check every state.
            </p>
            <div className="d-hero__actions">
              <a href={story("components-button--playground")} target="_top"><Button>Open the Button playground</Button></a>
              <a href="/" target="_top"><Button variant="primary-outline">Read the docs</Button></a>
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

        <section className="d-stats" aria-label="System at a glance">
          <div className="d-stat"><span className="d-stat__n">{registry.length}</span><span className="d-stat__l">Components</span></div>
          <div className="d-stat"><span className="d-stat__n">{counts.base}</span><span className="d-stat__l">Base tokens</span></div>
          <div className="d-stat"><span className="d-stat__n">{counts.semantic}</span><span className="d-stat__l">Semantic tokens</span></div>
          <div className="d-stat"><span className="d-stat__n">{counts.component}</span><span className="d-stat__l">Component tokens</span></div>
        </section>

        <section className="d-section">
          <h2 className="d-h2">Components</h2>
          <p className="d-lead">Pick one to open its playground.</p>
          <div className="d-cards">
            {registry.map((c) => {
              const C = c.Component;
              const first = "items" in c.sections[0] ? c.sections[0].items[0].props : {};
              return (
                <a key={c.slug} href={story(`components-${c.slug}--playground`)} target="_top" className="d-linkcard">
                  <div className="d-linkcard__stage"><C {...normalizeProps(first)} /></div>
                  <strong>{c.name}</strong>
                  <span>{c.description}</span>
                </a>
              );
            })}
          </div>
        </section>

        <section className="d-section">
          <h2 className="d-h2">Foundations</h2>
          <p className="d-lead">The raw material the components are built from.</p>
          <div className="d-cards">
            {foundations.map((f) => (
              <a key={f.id} href={story(f.id)} target="_top" className="d-linkcard">
                <strong>{f.t}</strong>
                <span>{f.d}</span>
              </a>
            ))}
          </div>
        </section>

        <section className="d-section">
          <h2 className="d-h2">Getting the most out of Storybook</h2>
          <div className="d-tips">
            {tips.map((x, i) => (
              <div key={x.t} className="d-tip">
                <span className="d-tip__n">{i + 1}</span>
                <strong>{x.t}</strong>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  },
};
