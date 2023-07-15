import { ResolveOptions } from "webpack";

const buildResolvers = (): ResolveOptions => {
  return {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
  };
};

export default buildResolvers;
