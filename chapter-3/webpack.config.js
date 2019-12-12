const path = require("path");
const HWP = require("html-webpack-plugin");
module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    filename: "main.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        include: path.join(__dirname, "src"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 30000,
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [new HWP({ template: path.join(__dirname, "/src/index.html") })],
  watch: true,
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: "errors-only",

    // Parse host and port from env to allow customization.
    //
    // If you use Docker, Vagrant or Cloud9, set
    // host: "0.0.0.0";
    //
    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true // Open the page in browser
  }
};
