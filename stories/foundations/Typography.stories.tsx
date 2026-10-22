import type { Meta, StoryObj } from "@storybook/react";
import { TypographyView } from "@/components/docs/Foundations";

const meta: Meta = { title: "Foundations/Typography", parameters: { layout: "fullscreen" } };
export default meta;

export const Web: StoryObj = { render: () => <div className="d-sb"><TypographyView platform="web" /></div> };
export const Mobile: StoryObj = { render: () => <div className="d-sb"><TypographyView platform="mobile" /></div> };
