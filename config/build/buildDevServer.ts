import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    // auto open in browser
    open: true,
    historyApiFallback: true,
  };
};

export default buildDevServer;
