/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  // images: { unoptimized: true }
  reactStrictMode: false, // React Strict Mode is off
};

export default nextConfig;
