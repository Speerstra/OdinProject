const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
        entry: './src/pages/index.js',
        output: {
                path: path.resolve(__dirname, 'dist'),
                filename: './dist/main.js',
        },
        mode: 'development',
        devtool: 'inline-source-map',
        plugins: [
                new HtmlWebPackPlugin({
                        template: "./src/index.html"
                })
        ],
        module: {
                rules: [
                        {
                                test: /\.css$/i,
                                use: ['style-loader', 'css-loader'],
                        },
                        {
                                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                                type: 'asset/resource',
                        },
                        {
                                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                                type: 'asset/resource',
                        },
                ]
        }
};

