const {src , dest, task , watch , series , parallel} = require( 'gulp' );
var rename = require( 'gulp-rename' );
var sourcemaps =  require( 'gulp-sourcemaps' );

//scss extensions
var sass =  require( 'gulp-sass' );
var autoprefixer =  require( 'gulp-autoprefixer' );

//js extensions
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var replace = require('gulp-replace');



var styleSRC = 'src/style/style.scss';

var styleWatch = 'src/style/**/*.scss';
var jsWatch = 'src/js/**/*.js';
var jsPages = 'pages.js';
var jsServer = 'server.js';
var styleDIST = 'dist/css/';
var jsFolder = 'src/js/';
var jsDIST = 'dist/js/';


var jsFILES = [jsPages, jsServer];
function style(done){
	src(styleSRC)
		.pipe( sourcemaps.init() )
		.pipe( sass(
		{
			errorLogToConsole : true,
			outputStyle : 'compressed'
		}) )
		.on( 'error', console.error.bind( console ) )
		.pipe( autoprefixer({ overrideBrowserslist : ['last 2 versions'], cascade : false }) )
		.pipe( rename({ suffix : '.min' } ))
		.pipe( sourcemaps.write('./') )
		.pipe( dest(styleDIST) );
		
	done();
};
function js( done )
{
	jsFILES.map( function(jsFile)
	{
		return browserify(
		{
			entries : [jsFolder + jsFile]
		})
		.transform(babelify, {presets : [ '@babel/preset-env' ]})
		.bundle()
		.pipe( source ( jsFile ) )
		.pipe( rename({ extname : '.min.js' } ))
		.pipe( buffer() )
		.pipe( sourcemaps.init({ loadMaps : true }) )
		.pipe( uglify() )
		.pipe( sourcemaps.write('./') )
		.pipe(replace('for(i=0', 'for(var i=0'))
		.pipe( dest(jsDIST) );
	});
	done();
};

task("style", style);
task("js", js);

function watch_files(done)
{
	watch(styleWatch, style);
	//watch(jsWatch, js);
    done();
}
task("watch",watch_files);
