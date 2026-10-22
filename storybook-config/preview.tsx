import type { Preview } from "@storybook/react";
import "../styles/aron.css";
import "../styles/docs.css";

const preview: Preview = {
  parameters: {
    layout: "padded",
    controls: { expanded: true },
    options: { storySort: { order: ["Introduction", "Foundations", "Components"] } },
    backgrounds: { default: "white", values: [{ name: "white", value: "#ffffff" }, { name: "grey", value: "#f7f7f7" }] },
  },
};
export default preview;
