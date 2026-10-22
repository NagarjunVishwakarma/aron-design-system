import type { Meta, StoryObj } from "@storybook/react";
import { GridView } from "@/components/docs/Foundations";

const meta: Meta = { title: "Foundations/Grid", parameters: { layout: "fullscreen" } };
export default meta;

export const Layouts: StoryObj = { render: () => <div className="d-sb"><GridView /></div> };
