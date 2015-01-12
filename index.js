var loaderUtils = require("loader-utils");
module.exports = function(source) {
  this.cacheable && this.cacheable(true);
  var hamlc = require("haml-coffee");
  var query = loaderUtils.parseQuery(this.query);
  var req = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
  var tmplFunc = hamlc.compile(source);

  return tmplFunc(query);
}