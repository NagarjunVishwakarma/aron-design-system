import type { Meta, StoryObj } from "@storybook/react";
import { PrimitiveTokensView, SemanticTokensView, ComponentTokensView } from "@/components/docs/Foundations";

const meta: Meta = { title: "Foundations/Tokens", parameters: { layout: "fullscreen" } };
export default meta;

export const Primitive: StoryObj = { render: () => <div className="d-sb"><PrimitiveTokensView /></div> };
export const Semantic: StoryObj = { render: () => <div className="d-sb"><SemanticTokensView /></div> };
export const Component: StoryObj = { render: () => <div className="d-sb"><ComponentTokensView /></div> };
