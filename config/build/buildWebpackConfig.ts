import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

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
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(paths.html),
  };
};

export default buildWebpackConfig;
