// webpack.config.update.js
const path = require("path");

module.exports = function update(webpackConfig) {
  webpackConfig.entry["com.muxistudio.ele.main"] = [
    path.resolve(__dirname, "./src/index.js")
  ];
  webpackConfig.entry["com.muxistudio.ele.result"] = [
    path.resolve(__dirname, "./src/second.js")
  ];
  console.log("current env", process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    webpackConfig.plugins[7].options.include = /\.js$/;
  }

  return webpackConfig;
};
