import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trae-api-sg.mchost.guru',
        port: '',
        pathname: '/api/ide/v1/text_to_image**',
      },
    ],
  },
};

export default nextConfig;
