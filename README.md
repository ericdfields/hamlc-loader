# Haml-Coffee (Hamlc) Loader for Webpack

Import haml-coffee files as modules in your webpack project. Returns a template that can be accessed by `window.HAML['templates/my_template']`.

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
require("templates/my_template.hamlc")
````

## Callling template functions

````javascript
var myTemplate = window.HAML["templates/my_template"]
myTemplate({title: 'Go Boundless!'})
````

will return the HTML:

````html
<div class="template">
  <h1>Go Boundless!</h1>
</div>
````

## A quick note on template naming
The loader uses the template file path to determine the name of the function. Borrowing conventions from Rails, it:

* assumes your templates live in a directory in your project named _javascripts_ or _scripts_
* hacks off the path up to and including _javsacripts_ or _scripts_
* uses the remaining file path minus the extension, which assumes _.hamlc_ or _.html.hamlc_

So if your file path is _/Users/ericdfields/webpack/app/assets/javascripts/templates/my_template.hamlc_, your given template name is _templates/my_template_. 

I'll gladly accept pull requests that expose all the [haml-coffee options](https://github.com/netzpirat/haml-coffee/#using-the-cli-tool) as configuration (ex. `require("hamlc-loader?name=someName!templates/my_template.hamlc"`)).