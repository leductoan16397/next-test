import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Static HTML export to ./out — served by nginx in the Docker image.
  output: 'export',
};

export default nextConfig;
