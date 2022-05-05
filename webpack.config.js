const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { EnvironmentPlugin } = require('webpack');

const htmlPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
});

const environmentPlugin = new EnvironmentPlugin({
    'BACKEND_GRAPHQL_URL': undefined
});

module.exports = {
    entry: ['./src/App.js'],
    mode: 'production',
     devServer: {
        static: 'dist/',
        port: 8080,
        client: {
            logging: 'info',
            progress: true,
        },
         historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/preset-react',
                            ].map(require.resolve),
                        },
                    },
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.js$/,
                enforce: "pre",
                use: ["source-map-loader"],
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: 'images/[hash][ext][query]',
        clean: true,
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [htmlPlugin, environmentPlugin],
};
