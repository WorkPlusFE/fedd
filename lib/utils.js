exports.openUrlAndExit = function(url) {
  require("openurl").open(url);
  process.exit();
};
