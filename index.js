var loaderUtils = require("loader-utils");
module.exports = function(source) {
  var hamlc, query, req, template, result;
  this.cacheable && this.cacheable(true);
  // 
  // Requires
  // 
  hamlc     = require("haml-coffee");
  // 
  // Loader
  // 
  query     = loaderUtils.parseQuery(this.query);
  req       = loaderUtils.getRemainingRequest(this).replace(/^!/, "");
  // 
  // Compilation
  // 
  template  = hamlc.template(source, null, null, {placement: 'standalone', escapeHtml: false});
  result    = "module.exports =" + template.toString();
  return result;
}