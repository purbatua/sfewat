/* gulpfile.js */


/* -------- define all gulp plugin -------- */
var gulp 		= require('gulp'),
	Q			= require('q'),
	runSequence = require('run-sequence'),
	watcher     = require('gulp-watch'),
	wait		= require('gulp-wait'),
	ignore 		= require('gulp-ignore'),
	fs 			= require('fs'),
	multimatch 	= require('multimatch'),
	using    	= require('gulp-using'),
	main_bower  = require('main-bower-files'),
	html_rplc	= require('gulp-html-replace'),
	inject      = require('gulp-inject'),
	str_inject  = require('gulp-inject-string'),
	flatten     = require('gulp-flatten');


/* --------- define all variables --------- */

var base = {
	src:  './public/assets/bower/',
	dest: './public/assets/main-bower/'
}

var src = {
	html : [base.dest + '**/html5-boilerplate/{.*,*.*}'],
	js 	 :  [base.dest + '**/*.js'],
	css  : [base.dest + '**/*.css']
}

var dest = {
	html 	: './app/',
	js_main	: './app/public/js/',
	css_main: './app/public/css/',
	js 		: './app/public/js/vendor/',
	css 	: './app/public/css/vendor/'
}

var filter = {
	js 	: ['**/main.js', '**/plugins.js'],
	css : '**/main.css'
}


/* -------------- gulp task -------------- */

	// Gulp main task
	gulp.task('default', ['build-template']);


	gulp.task('main-bower', function(){
		
		return gulp.src(main_bower(), {base: base.src})
			.pipe(gulp.dest(base.dest));
	});


	gulp.task('scripts', ['main-bower'], function(){

		gulp.src(src.js)
			.pipe(ignore.exclude(filter.js))
			.pipe(flatten())
			.pipe(gulp.dest(dest.js));

		gulp.src(src.js)
			.pipe(ignore.include(filter.js))
			.pipe(flatten())
			.pipe(gulp.dest(dest.js_main));
	});


	gulp.task('styles', ['scripts'], function(){

		gulp.src(src.css)
			.pipe(ignore.exclude(filter.css))
			.pipe(flatten())
			.pipe(gulp.dest(dest.css));

		gulp.src(src.css)
			.pipe(ignore.include(filter.css))
			.pipe(flatten())
			.pipe(gulp.dest(dest.css_main));
	});


	gulp.task('string-inject', ['styles'], function(){

		return gulp.src(base.dest + 'html5-boilerplate/index.html')
			.pipe(str_inject.before('</head>', '\n\t\t<!-- inject:css -->\n \t\t<!-- endinject -->\n'))
			.pipe(str_inject.before('</body>', '\n\t\t<!-- inject:js -->\n \t\t<!-- endinject -->\n'))
			.pipe(gulp.dest(base.dest + 'html5-boilerplate/'));

	});


	gulp.task('injects', ['string-inject'], function(done){

	        gulp.src(base.dest + 'html5-boilerplate/index.html')
				.pipe(inject(gulp.src(['app/public/js/**/*.js', 'app/public/css/**/*.css'], {read: false}), {addRootSlash: false, ignorePath: 'app'}))
				.pipe(gulp.dest(base.dest + 'html5-boilerplate/'))
				.on('end', done);
	});


	gulp.task('htmls', ['injects'], function(){

		return gulp.src(src.html)
			.pipe(flatten())
			.pipe(gulp.dest(dest.html));
	});


	gulp.task('build-template', ['htmls'], function(callback){
		
		var cwd = process.cwd();

		fs.readFile(cwd + './app/public/js/vendor/jquery.js', "utf-8", function (err, _data) {
	        if (err) 
	        	runSequence('htmls', callback);
		});

	});



/* ---------                      --------- */



		// gulp.src(base.dest + 'html5-boilerplate/index.html')
		// 	.pipe(inject(gulp.src(['app/public/js/**/*.js', 'app/public/css/**/*.css'], {read: false}), {addRootSlash: false, ignorePath: 'app'}))
		// 	.pipe(gulp.dest(base.dest + 'html5-boilerplate/'))
		// 	.on('end', function() {
		// 			deffered.resolve();
		// 	});

		// return deffered.promise;


		// vendor JS to compile (get manifest of files to bring in)
    	// fs.readFile('./app/public/js/main.js', "utf-8", function (err, _data) {
	    //     if (err) {
	    //         //console.log("Error: " + err);
	    //         //return;

	    //         runSequence(['scripts', 'styles', 'string-inject'], 'injects', '');
	    //     }




    	// });

	        // ... etc ...
		// 	gulp.src(base.dest + 'html5-boilerplate/index.html')
		// 		.pipe(inject(gulp.src(['app/public/js/**/*.js', 'app/public/css/**/*.css'], {read: false}), {addRootSlash: false, ignorePath: 'app'}))
		// 		.pipe(gulp.dest(base.dest + 'html5-boilerplate/'))
		// 		.on('end', function() {
		// 			deffered.resolve();
		// 		});

		// return deffered.promise;
		// // });

    //     gulp.src(filesToCopy)
    //         .pipe($.concat("shared.min.js"))
    //         // .pipe($.uglify())
    //         .pipe(gulp.dest("./dist/javascripts/"))

    //         // when stream ends, call callback
    //         .on('end', function () {
    //              deferred.resolve();
    //         }); 
    // });
    // return deferred.promise;



		// gulp.src(base.dest + 'html5-boilerplate/index.html')
		// 	.pipe(inject(gulp.src(['app/public/js/**/*.js', 'app/public/css/**/*.css'], {read: false}), {addRootSlash: false, ignorePath: 'app'}))
		// 	.pipe(gulp.dest(base.dest + 'html5-boilerplate/'));



			// .pipe(html_rplc({
			// 	css: {
			// 		src: [[css_src]],
			// 		tpl: '<link rel="stylesheet" href="%s">'
			// 	},
			// 	js: {
			// 		src: [['app/public/js/**/*.js', 'app/public/appaan/tu']],
			// 		tpl: '<script src="%s"></script>'
			// 	}
			// }, {resolvePaths: true, keepUnassigned: true, keepBlockTags: true}))