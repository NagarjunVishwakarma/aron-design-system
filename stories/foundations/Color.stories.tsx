import type { Meta, StoryObj } from "@storybook/react";
import { ColorBaseView, ColorSemanticView } from "@/components/docs/Foundations";

const meta: Meta = { title: "Foundations/Color", parameters: { layout: "fullscreen" } };
export default meta;

export const Base: StoryObj = { render: () => <div className="d-sb"><ColorBaseView /></div> };
export const Semantic: StoryObj = { render: () => <div className="d-sb"><ColorSemanticView /></div> };
