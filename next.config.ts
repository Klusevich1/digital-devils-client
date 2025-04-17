import { NextConfig } from "next";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|woff2|woff|ttf|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
      {
        source: "/_next/image",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
          {
            key: "Content-Disposition",
            value: "inline",
          },
        ],
      },
    ];
  },
  
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      console.log("Optimizing assets for production");
      if (config.output) {
        config.output.filename = "static/js/[name].[contenthash].js";
        config.output.chunkFilename = "static/js/[name].[contenthash].js";
      }

      config.plugins = config.plugins?.map((plugin) => {
        if (plugin instanceof MiniCssExtractPlugin) {
          return new MiniCssExtractPlugin({
            filename: "static/css/[name].[contenthash].css",
            chunkFilename: "static/css/[name].[contenthash].css",
          });
        }
        return plugin;
      });

      if (config.module) {
        config.module.rules?.push({
          test: /\.(png|jpg|jpeg|gif|svg|webp|eot|ttf|woff|woff2)$/i,
          type: "asset/resource",
          generator: {
            filename: "static/media/[name].[contenthash][ext]",
          },
        });
      }
    }
    return config;
  },

  images: {
    domains: ['digitaldevils.by'],
    formats: ['image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  compress: true,

  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  
  trailingSlash: true,
};

export default nextConfig;