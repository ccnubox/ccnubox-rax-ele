// webpack.config.update.js
module.exports = function update(webpackConfig) {
  webpackConfig.entry["second.bundle"] = [
    "/Users/zindex/Desktop/ccnubox-rax-ele/node_modules/rax-scripts/lib/dev-utils/webpackHotDevClient.js",
    "/Users/zindex/Desktop/ccnubox-rax-ele/node_modules/rax-hot-loader/patch.js",
    "/Users/zindex/Desktop/ccnubox-rax-ele/src/second.js"
  ];
  console.log("here", webpackConfig);
  return webpackConfig;
};
