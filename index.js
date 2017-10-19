const loaderUtils = require('loader-utils');
const hamlc = require('haml-coffee');

module.exports = function(source) {
  this.cacheable && this.cacheable(true);

  const defaultOptions = {
    escapeHtml: false
  };

  const loaderOptions = Object.assign({}, defaultOptions, loaderUtils.getOptions(this));
  const loaderParams = Object.assign({}, defaultOptions,loaderUtils.parseQuery(this.resourceQuery || '?'));

  // query params have priority over loader options as they are more granular
  const options = Object.assign({}, loaderParams, loaderOptions)

  const template = hamlc.template(source, null, null, {
    placement: 'standalone',
    escapeHtml: options.escapeHtml
  });

  return `module.exports = ${template.toString()}`;
}
