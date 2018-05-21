const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = env => {
    if (!env) {
        env = {}
    }

    let plugins = [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './app/views/index.html'
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: env.production ? '"production"' : '"development"'
            }
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ];

    if (env.production) {
        plugins.push(
            new ExtractTextPlugin("style.css", {
                ignoreOrder: true
            }),
            new UglifyJsPlugin({
                sourceMap: true
            })
        )
    }

    return {
        entry: ['./app/js/main.js', './app/js/viewport.js'],
        devServer: {
            contentBase: path.join(__dirname, "dist"),
            hot: true,
            compress: true,
            port: 9000,
            clientLogLevel: "none",
            quiet: true
        },
        module: {
            rules: [{
                    test: /\.html$/,
                    loader: 'html-loader'
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        cssModules: {
                            localIdentName: '[path][name]---[local]---[hash:base64:5]',
                            camelCase: true
                        },
                        extractCSS: true,
                        loaders: env.production ? {
                            css: ExtractTextPlugin.extract({
                                use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8',
                                fallback: 'vue-style-loader'
                            }),
                            scss: ExtractTextPlugin.extract({
                                use: 'css-loader?minimize!px2rem-loader?remUnit=40&remPrecision=8!sass-loader',
                                fallback: 'vue-style-loader'
                            })
                        } : {
                            css: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8',
                            scss: 'vue-style-loader!css-loader!px2rem-loader?remUnit=40&remPrecision=8!sass-loader'
                        }
                    }
                },
                {
                    test: /\.scss$/,
                    loader: 'style-loader!css-loader!sass-loader'
                },
                {
                    test: /\.(jpg|png|jpeg|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[ext]'
                        }
                    }]
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'font/[name].[ext]'
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        devtool: 'source-map',
        plugins,
        output: {
            filename: '[name].min.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
}
