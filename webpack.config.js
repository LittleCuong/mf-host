const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const Dotenv = require('dotenv-webpack');
const deps = require("./package.json").dependencies;

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (_, argv) => ({
  output: {
    // publicPath: "http://localhost:3000/",
    publicPath: "https://main.d36ham560eqwh1.amplifyapp.com/"
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.json$/, type: 'json' },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        // layout: "layouts@http://localhost:3002/remoteEntry.js",
        // pages: "pages@http://localhost:3003/remoteEntry.js"
        layout: "layouts@https://main.doxxr994hjh.amplifyapp.com/remoteEntry.js",
        pages: "pages@https://main.d2y7ztxbftcgjk.amplifyapp.com/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...deps,
        // react: {
        //   singleton: true,
        //   requiredVersion: deps.react,
        // },
        // "react-dom": {
        //   singleton: true,
        //   requiredVersion: deps["react-dom"],
        // },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new Dotenv(),
  ],
  optimization: {
    // runtimeChunk: 'single'
  }
});
