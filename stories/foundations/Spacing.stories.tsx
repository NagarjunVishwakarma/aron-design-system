import type { Meta, StoryObj } from "@storybook/react";
import { SpacingView, SizeView } from "@/components/docs/Foundations";

const meta: Meta = { title: "Foundations/Spacing", parameters: { layout: "fullscreen" } };
export default meta;

export const Space: StoryObj = { render: () => <div className="d-sb"><SpacingView /></div> };
export const Size: StoryObj = { render: () => <div className="d-sb"><SizeView /></div> };
