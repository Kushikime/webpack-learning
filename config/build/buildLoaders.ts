import webpack from "webpack";

const buildLoaders = (): webpack.RuleSetRule[] => {
  const TSLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const CSSLoader = {
    test: /\.css$/i,
    use: ["style-loader", "css-loader"],
  };

  return [TSLoader, CSSLoader];
};

export default buildLoaders;
