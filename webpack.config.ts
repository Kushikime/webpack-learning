import path from "path";
import webpack from "webpack";
import { BuildEnv, BuildMode, BuildOptions } from "./config/build/types/config";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

export default (env: BuildEnv) => {
  const mode: BuildMode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    isDev,
    mode,
    paths: {
      build: path.resolve(__dirname, "dist"),
      entry: path.resolve(__dirname, "src", "index.ts"),
      html: path.resolve(__dirname, "public", "index.html"),
    },
    port: PORT,
  });
  return config;
};
