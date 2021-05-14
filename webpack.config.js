const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const Path = require('path');

module.exports = {
  output: {
    path: Path.resolve(__dirname, 'dist'),
    publicPath: "http://localhost:8080/"
  },

  resolve: {
    extensions: [
      ".ts", ".js", ".json"
    ]
  },

  devServer: {
    contentBase: Path.join(__dirname, "public"),
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    }
  },

  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
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
        test: /\.css$/i,
        include: [
          Path.resolve(__dirname, "dist")
        ],
        loader: 'style-loader'
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "ngx-mfe-main",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {},
      shared: {
        "@angular/core": { singleton: true, strictVersion: true, eager: true },
        "@angular/common": { singleton: true, strictVersion: true, eager: true },
        "@angular/router": { singleton: true, strictVersion: true, eager: true }
      }
    })
  ]
};
