import type { Meta, StoryObj } from "@storybook/react";
import { registry } from "@/lib/registry";
import { counts } from "@/lib/tokens";

const meta: Meta = { title: "Introduction", parameters: { layout: "fullscreen" } };
export default meta;

export const Welcome: StoryObj = {
  render: () => (
    <div className="d-sb" style={{ maxWidth: 720 }}>
      <p className="d-eyebrow">Design system</p>
      <h1 className="d-h1">Aron Design System</h1>
      <p className="d-lead">
        {registry.length} components and {counts.base + counts.semantic + counts.component} design tokens (base → semantic → component), taken straight from Figma.
        Use the sidebar: <strong>Foundations</strong> shows colour, type, spacing, radius, grid, icons and tokens; <strong>Components</strong> shows each component with a
        Playground, and stories for every variant and state.
      </p>
      <p className="d-lead">Looking for the written documentation? <a href="/" target="_top">Open the docs site</a>.</p>
    </div>
  ),
};
