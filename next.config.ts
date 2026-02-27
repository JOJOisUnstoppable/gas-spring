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
  // 新增两个重定向
  async redirects() {
    return [
      {
        source: '/zh/applications/energy-and-construction',
        destination: '/products/category/gas-spring',
        permanent: true,
      },
      {
        source: '/zh/products',
        destination: '/products/category/gas-spring',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
