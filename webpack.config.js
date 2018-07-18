const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
    {
        test: /\.min.css$/, use: ["style-loader", "css-loader"]
    },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.css$/,
          exclude: /\.min.css$/,
          use: [
            {
                loader: "style-loader"
            },
            {
                loader: "css-loader",
                options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]_[local]_[hash:base64]",
                    sourceMap: true,
                    minimize: true
                }
            }
        ]
      },
        {
          test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
          use: {loader: 'url-loader'}
        }
    ]
  },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
      new HtmlWebpackPlugin({
          filename: 'index2.html',
          template: './src/index2.html',
          chunks: ['vendors']
      })
  ]
};
