const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/js/index.js',
        output: {
            path: path.resolve(__dirname, 'docs'),
            filename: isProduction ? 'js/[name].[contenthash].js' : 'js/[name].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                api: 'modern',
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'images/[name][ext]',
                    },
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name][ext]',
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: 'index.html',
            }),
            ...(isProduction
                ? [
                      new MiniCssExtractPlugin({
                          filename: 'css/[name].[contenthash].css',
                      }),
                  ]
                : []),
        ],
        devServer: {
            static: {
                directory: path.join(__dirname, 'src'),
            },
            compress: true,
            port: 3000,
            open: false,
            hot: true,
            historyApiFallback: true,
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
    };
};
