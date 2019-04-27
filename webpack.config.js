const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: __dirname + '/src/index.tsx',
    module: {
        rules: [
            {
                exclude: [
                    /\.html$/,
                    /\.(ts|tsx)$/,
                    /\.css$/,
                    /\.scss$/,
                    /\.sass$/,
                    /\.json$/,
                    /\.bmp$/,
                    /\.gif$/,
                    /\.jpeg$/,
                    /\.png$/,
                ],
            },
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    cacheDirectory: true,
                },
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    'css-loader?sourceMap',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [autoprefixer],
                        },
                    },
                    'resolve-url-loader',
                    'sass-loader?sourceMap',
                ],
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.HotModuleReplacementPlugin(),
    ],
};
