sfewat
======

simple front-end web app template (sfewat) is a simple template and you can use for generate your own template by build html, css, and js file for faster and easier web development, its run through node.js with execute gulp file.

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

	run the task in the `gulpfile.js` simply by writing the command below:

	```
	gulp
	```

## Example

On the example i use [Html5-boilerplate](html5boilerplate.com) and [Foundation](foundation.zurb.com) framework that have dependencies: `jquery.js`, `jquery.cookie.js`, `jquery.placeholder.js`, `fastclick.js`, `modernizr.js`, and `normalize.css`. The result app structure will show like this:


```
app/
├── public/
│	│
│	├── css/
│	│	├── vendor/
│	│	│	└── foundation.css
│	│	│	└──	normalize.css
│	│	└── main.css	
│	└── js/
│		├── vendor/
│		│	├── fastclick.js
│		│	├── foundation.js
│		│	├── jquery.cookie.js
│		│	├── jquery.js
│		│	├── jquery.placeholder.js
│		│	└── modernizr.js
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

This code is available at github [project](https://github.com/purbatua/sfewat) under [creative commons - attribution](http://creativecommons.org/licenses/).
