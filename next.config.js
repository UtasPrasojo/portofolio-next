const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// Keep production builds from overwriting a running development server's chunks.
module.exports = (phase) => ({
  ...nextConfig,
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? ".next-dev" : ".next",
});
