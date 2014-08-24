/**
 *
 */
var gulp = require('gulp');
var browserify = require('browserify');
var config = require('../config');

gulp.task('browserify', function() {
  var src = config.paths.src.modules + '/app.js';
  var outputFile = 'app.js';
  var dest = config.paths.dist.js;

  return browserify(src)
    .bundle()
    .pipe(source(outputFile))
    .pipe(gulp.dest(dest));
});