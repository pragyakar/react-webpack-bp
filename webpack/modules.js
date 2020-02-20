const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const tslintrc = require(path.resolve(__dirname, "../tslint.json"));

module.exports = function generateWebpackModules() {
  return {
    rules: [
      {
        test: /(src|config|env).*\.tsx?$/,
        use: [
          {
            loader: "ts-loader", 
            options: {
              reportFiles: ["src/**/*.{ts,tsx}", "config/**/*.{ts,tsx}"]
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /(src|config|env).*\.tsx?$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: [
          {
            loader: "tslint-loader",
            options: {
              configuration: tslintrc
            }
          }
        ]
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract(["css-loader", "sass-loader"])
      },
      {
        test: /\.css?$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /public\/assets\/images.*\.(png|svg|jpg|jpeg)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "/public/assets/images/",
              outputPath: "public/assets/images/"
            }
          }
        ]
      },
      {
        test: /public\/assets\/fonts.*\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              publicPath: "/public/assets/fonts/",
              outputPath: "public/assets/fonts/"
            }
          }
        ]
      }
    ]
  };
};