import webpack from "webpack";

const buildLoaders = (): webpack.RuleSetRule[] => {
  const TSLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [TSLoader];
};

export default buildLoaders;
