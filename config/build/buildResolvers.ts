import { ResolveOptions } from "webpack";

const buildResolvers = (): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts"],
  };
};

export default buildResolvers;
