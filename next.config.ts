import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

// Link next-intl to the request config at src/i18n/request.ts
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
