const path = require("path");

module.exports = {
  entry: "./src/main.js", // Entry point in /src
  output: {
    path: path.resolve(__dirname, "dist"), // Output to /dist
    filename: "bundle.js",
  },
  module: {
    rules: [
      // Loaders for handling different file types
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  mode: "development",
  devtool: "source-map", // Enable source maps
  watch: true, // Enable watch mode
};
