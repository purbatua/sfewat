sfewat
======

simple front-end web app template (sfewat) is a simple template generator for front-end web app for faster and easier web development, its run through node.js with execute gulp file.

## Usage

For use this generator you need to install:

1. Node.js

	Download and install [Node.js](http://nodejs.org/download/), node have package manager called `npm`

2. Bower package manager

	To add html, css, or js framework and its depedencies to your project you can use [Bower package manager](http:bower.io) by following this step:

	```
	npm install bower
	```

	and install some component with:

	```
	bower install --save <package_name>
	```

3. Gulp tasks runner

	[Gulp tasks runner](gulpjs.com) will build your bower components and move it to specific directory, following this step to install gulp and gulp plugin:

	```
	npm install glub
	```
	
	to install some gulp plugin:

	```
	npm install --save <gulp_plugin_name>
	```

4. Run the task
	run the task in the gulpfile.js just with write:
	```
	gulp
	```

## Example

On the example i use [Html5-boilerplate](html5boilerplate.com) and [Foundation](foundation.zurb.com) framework that have dependencies: jQuery, jQuery cookie, jQUery placeholder, fastclick.js, modernizr.js, and normalize.css. The result app structure will show like this:


```
app/
├── public/
│	│
│	├── css/
│	│	├── vendor/
│	│	│	└── file-1.css
│	│	│	└──	file-n.css
│	│	└── main.css	
│	└── js/
│		├── vendor/
│		│	├── file-1.js
│		│	└── file-n.js
│		├── main.js
│		└── plugins.js
│
├── .htaccess
├── 404.html
├── crossdomain.html
├── humans.txt
├── index.html
└── robots.txt
```

## Support

* Any bugs about 'sfewat' please fell free to report [here](https://github.com/purbatua/sfewat/issues).
* Thanks for use this generator, you are welcome to fork and submit the pull request.

## License

This code is available at github [project](https://github.com/purbatua/sfewat) under <span>[creative commons - attribution](http://creativecommons.org/licenses/)</span>.
