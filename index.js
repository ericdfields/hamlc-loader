var loaderUtils = require("loader-utils");
module.exports = function(source) {
  this.cacheable && this.cacheable(true);
  var hamlc = require("haml-coffee");
  var query = loaderUtils.parseQuery(this.query);
  var req = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
  var name = req.replace(/\/.*scripts\//,"").replace(/(\.html)?.haml[c]?$/,"");
  return hamlc.template(source, name);
}