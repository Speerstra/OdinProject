const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");


module.exports = {
        entry: './src/index.js',
        output: {
                path: path.resolve(__dirname, 'dist'),
                filename: './dist/main.js',
        },
        devtool: 'inline-source-map',
        plugins: [
                new HtmlWebPackPlugin({
                template: "./src/index.html"
              })
        ],
};

