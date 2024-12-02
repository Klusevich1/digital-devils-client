import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "/404",
  //     },
  //   ];
  // },
  reactStrictMode: true,
};

export default nextConfig;
