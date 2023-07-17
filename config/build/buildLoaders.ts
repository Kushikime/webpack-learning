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

  const SASSLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  return [TSLoader, CSSLoader, SASSLoader];
};

export default buildLoaders;
