var hamlc = require("haml-coffee");
var loaderUtils = require("loader-utils");

module.exports = function (source) {
  var result = hamlc.compile(source);
  return result();
}