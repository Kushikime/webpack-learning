import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildPaths } from "./types/config";

const buildPlugins = ({
  build,
  html,
}: BuildPaths): webpack.WebpackPluginInstance[] => [
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: "css/[name].[contenthash:8].css",
    chunkFilename: "css/[name].[contenthash:8].css",
  }),
  new HtmlWebpackPlugin({
    template: html,
  }),
];

export default buildPlugins;
