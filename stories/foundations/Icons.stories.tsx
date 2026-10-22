import type { Meta, StoryObj } from "@storybook/react";
import { IconsView } from "@/components/docs/Foundations";

const meta: Meta = { title: "Foundations/Icons", parameters: { layout: "fullscreen" } };
export default meta;

export const All: StoryObj = { render: () => <div className="d-sb"><IconsView /></div> };
