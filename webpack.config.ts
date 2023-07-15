import path from "path";
import webpack from "webpack";
import { BuildMode, BuildOptions } from "./config/build/types/config";
import buildWebpackConfig from "./config/build/buildWebpackConfig";

const mode: BuildMode = "development";
const isDev = mode === "development" ? true : false;

const options: BuildOptions = {
  isDev,
  mode,
  paths: {
    build: path.resolve(__dirname, "dist"),
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, "public", "index.html"),
  },
};

const config: webpack.Configuration = buildWebpackConfig(options);

export default config;
