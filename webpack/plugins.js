const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const dotEnv = require('../env/dot-env');

module.exports = function generateWebpackPlugins(environment) {
  const plugins = [
    new HTMLWebpackPlugin({
      template: './index.html'
    }),
    new webpack.DefinePlugin({
      environment: JSON.stringify(environment),
      envConfig: JSON.stringify(dotEnv.getEnvConfig(environment))
    }),
    new ExtractTextPlugin({
      filename: 'public/assets/stylesheets/styles.min.css',
      publicPath: '/public/assets/stylesheets/'
    })
  ];
  if (environment === 'production' || environment === 'uat') {
    plugins.push(
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        algorithm: 'gzip'
      })
    );
  }
  return plugins;
};
