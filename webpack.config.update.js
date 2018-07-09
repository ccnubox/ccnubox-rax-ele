// webpack.config.update.js
module.exports = function update(webpackConfig) {
  webpackConfig.entry["com.muxistudio.ele.main"] = [
    "/Users/zindex/Desktop/ccnubox-rax-ele/src/index.js"
  ];
  webpackConfig.entry["com.muxistudio.ele.result"] = [
    "/Users/zindex/Desktop/ccnubox-rax-ele/src/second.js"
  ];
  console.log("here", webpackConfig);
  return webpackConfig;
};
