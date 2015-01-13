var loaderUtils = require("loader-utils");
module.exports = function(source) {
  var hamlc, query, req, name, namespace, options, template, result;
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
  // Hamlcoffee compiler options
  // 
  name      = query.name || req.replace(/\/.*scripts\//,"").replace(/(\.html)?.haml[c]?$/,"");
  namespace = query.namespace || null
  options   = {}
  if (query.placement) {
    options['placement'] = query.placement;
  }
  // 
  // Compilation
  // 
  template  = hamlc.template(source, name, namespace, options);
  if (options.placement == 'standalone') {
    result = "module.exports =" + template.toString();
  } else {
    result = template;
  }
  return result;
}