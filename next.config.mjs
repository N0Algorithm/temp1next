/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  output: 'export',

  // 👇 Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
