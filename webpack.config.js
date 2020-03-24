const path = require('path');
const getMode = require('./webpack/mode');
const getPlugins = require('./webpack/plugins');
const getModules = require('./webpack/modules');
const getResolve = require('./webpack/resolve');
const getEntryFile = require('./webpack/entry');
const PUBLIC_PATH = require('./webpack/constants').PUBLIC_PATH;

const environment = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
const port = process.env.PORT ? process.env.PORT : 9001;

module.exports = () => {
  return {
    mode: getMode(environment),
    entry: getEntryFile(),
    output: {
      filename: (() => {
        if (environment === 'production' || environment === 'uat') {
          return '[name].[hash].js';
        } else {
          return '[name].js';
        }
      })(),
      chunkFilename: '[name].bundle.[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: PUBLIC_PATH
    },
    devServer: {
      contentBase: path.resolve(__dirname),
      publicPath: PUBLIC_PATH,
      port: port,
      historyApiFallback: true,
      host: 'localhost'
    },
    module: getModules(),
    resolve: getResolve(),
    plugins: getPlugins(environment),
    watchOptions: {
      ignored: ['node_modules', 'dist'],
      poll: true
    }
  };
};
