import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import buildDevServer from "./buildDevServer";

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { isDev, mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: "[name][contenthash].js",
      clean: true,
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(paths),
    devServer: isDev ? buildDevServer(options) : undefined,
    devtool: isDev ? "inline-source-map" : undefined,
  };
};

export default buildWebpackConfig;
