const path = require("path");
const getMode = require("./webpack/mode");
const getPlugins = require("./webpack/plugins");
const getModules = require("./webpack/modules");
const getResolve = require("./webpack/resolve");
const getEntryFile = require("./webpack/entry");
const PUBLIC_PATH = require("./webpack/constants").PUBLIC_PATH;

module.exports = (env = {}) => {
  let { environment = "development", port = "9001" } = env;
  const target = "web";
  return {
    mode: getMode(environment),
    entry: getEntryFile(),
    output: {
      filename: (() => {
        if (environment === "production" || environment === "uat") {
          return "[name].[hash].js";
        } else {
          return "[name].js";
        }
      })(),
      chunkFilename: "[name].bundle.[hash].js",
      path: path.resolve(__dirname, "dist"),
      publicPath: PUBLIC_PATH
    },
    devServer: {
      contentBase: path.resolve(__dirname),
      publicPath: PUBLIC_PATH,
      port: port,
      historyApiFallback: true,
      host: "0.0.0.0"
    },
    module: getModules(),
    resolve: getResolve(),
    plugins: getPlugins(environment, target),
    watchOptions: {
      ignored: ["node_modules", "dist"],
      poll: true
    }
  };
};