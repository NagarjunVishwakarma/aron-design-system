import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-webpack5", options: {} },
  core: { disableTelemetry: true },
  swc: () => ({ jsc: { transform: { react: { runtime: "automatic" } } } }),
  webpackFinal: async (cfg) => {
    cfg.resolve = cfg.resolve || {};
    cfg.resolve.alias = { ...(cfg.resolve.alias || {}), "@": path.resolve(__dirname, "..") };
    return cfg;
  },
};
export default config;
