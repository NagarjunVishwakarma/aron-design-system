import type { Meta, StoryObj } from "@storybook/react";
import { RadiusView, BorderView } from "@/components/docs/Foundations";

const meta: Meta = { title: "Foundations/Radius & Border", parameters: { layout: "fullscreen" } };
export default meta;

export const CornerRadius: StoryObj = { render: () => <div className="d-sb"><RadiusView /></div> };
export const BorderSize: StoryObj = { render: () => <div className="d-sb"><BorderView /></div> };
