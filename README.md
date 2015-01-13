# Haml-Coffee (Hamlc) Loader for Webpack

Import haml-coffee files as modules in your webpack project. Returns a template that can be accessed in a global namespace (_window.HAML_ by default): `window.HAML['templates/my_template']`.

## Setup

Add to your webpack config module.loaders:

````
{ test: /\.hamlc$/, loader: "hamlc-loader" }
````

## Including templates in modules

### webpack/assets/javascripts/templates/my_template.hamlc

````javascript
.template
  %h1= @title
````

### webpack/assets/javascripts/modules/my_module.js

````javascript
MyTemplate = require("templates/my_template.hamlc")
MyTemplate({title: 'Go Boundless!'})
````

will return the HTML:

````html
<div class="template">
  <h1>Go Boundless!</h1>
</div>
````
