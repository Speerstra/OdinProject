const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "source-map", // Enable source maps
  watch: true, // Enable watch mode
};
