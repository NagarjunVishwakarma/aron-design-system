import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Aron Design System",
    brandUrl: "/",
    brandTarget: "_self",
    colorPrimary: "#8224e0",
    colorSecondary: "#8224e0",
    fontBase: '"Inter", system-ui, sans-serif',
  }),
});
