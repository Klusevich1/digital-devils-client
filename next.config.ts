import { NextConfig } from "next";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const nextConfig: NextConfig = {
  webpack: (config: Configuration, { isServer }: { isServer: boolean }) => {
    if (!isServer) {
      console.log("Fixing CSS and JS filenames for Tailwind CSS.");

      // Настройка JS файлов
      if (config.output) {
        config.output.filename = "static/js/[name].js";
        config.output.chunkFilename = "static/js/[name].js";
      }

      // Настройка MiniCssExtractPlugin для фиксированного имени CSS файла
      config.plugins = config.plugins?.map((plugin) => {
        if (plugin instanceof MiniCssExtractPlugin) {
          return new MiniCssExtractPlugin({
            filename: "static/css/tailwind.css", // Фиксированное название для Tailwind CSS
            chunkFilename: "static/css/tailwind.css",
          });
        }
        return plugin;
      });

      // Настройка для статических ресурсов (изображения, шрифты и т.д.)
      if (config.module) {
        config.module.rules?.push({
          test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/,
          type: "asset/resource",
          generator: {
            filename: "static/media/[name][ext]",
          },
        });
      }
    }
    return config;
  },
  reactStrictMode: true
};

export default nextConfig;
