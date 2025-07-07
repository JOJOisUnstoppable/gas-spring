import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  locales: ['en', 'zh', 'es', 'de'],  // 英文放在第一位
    defaultLocale: 'en', 
  output: "standalone",
};

export default nextConfig;
