import { loader as MiniCssExtractPluginLoader } from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const TSLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const SASSLoader = {
    test: /\.s[ac]ss$/i,
    exclude: /node_modules/,
    use: [
      isDev ? "style-loader" : MiniCssExtractPluginLoader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resourcePath: string) =>
              Boolean(resourcePath.includes(".module.")),
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [TSLoader, SASSLoader];
};

export default buildLoaders;
