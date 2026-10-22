/** @type {import('next').NextConfig} */
const nextConfig = {
  // Storybook is built as static files into /public/storybook.
  // These rewrites make /storybook and /storybook/ open its index.html.
  skipTrailingSlashRedirect: true,
  async rewrites() {
    return [
      { source: "/storybook", destination: "/storybook/index.html" },
      { source: "/storybook/", destination: "/storybook/index.html" },
    ];
  },
};
export default nextConfig;
