const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成build文件夹及文件：
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const pkg = require('./package.json');

const ROOT_PATH = path.resolve(__dirname);
const SRC_PATH = path.resolve(ROOT_PATH, 'src');
const BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    // devtool: 'eval-source-map',
    mode:'production',
    entry: {
        app: path.resolve(SRC_PATH, 'index.js'),
   
    },
    output: {
        path: BUILD_PATH,
        filename: 'js/[name].[hash:5].js',

    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".scss"],
    },
    optimization: {
        minimize: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: path.resolve(SRC_PATH, 'node_modules'),
            include: SRC_PATH,
            use: {
                loader: 'babel-loader',
                options: {
                   presets: ['@babel/preset-react', '@babel/preset-env']
                }
            }

        },   {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192 // 小于8KB 使用base64格式图片
                }
            }]
        }, {
            test: /\.(css|scss)$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        }, {
            test: /\.(mp3|webm|ogg)/,
            use: {
                loader: 'file-loader',
            }
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    plugins: [
        // webpack 内置的 banner-plugin
        new webpack.BannerPlugin("Copyright by https://github.com/chenjun1127"),

       
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new HtmlWebpackPlugin({
            title: 'test',
            template: './templates/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
     
    ]
}