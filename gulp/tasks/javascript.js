/**
 * Main application javascript task
 */
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var exorcist = require('exorcist');
var uglify = require('gulp-uglify');
var config = require('../config');

gulp.task('javascript', function () {
  var src = config.paths.src.root + '/app.js';
  var outputFile = 'app.js';
  var map = 'app.js.map';
  var mapFile = config.paths.dist.js + '/' + map;
  var dest = config.paths.dist.js;

  return browserify(src, { debug: true })
    .bundle()
    .pipe(exorcist(mapFile))
    .pipe(source(outputFile))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(dest));
});