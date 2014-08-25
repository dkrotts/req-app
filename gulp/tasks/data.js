/**
 * Copies the src data to the dist folder
 */
var gulp = require('gulp');
var flatten = require('gulp-flatten');
var markdown = require('gulp-markdown');
var config = require('../config');

gulp.task('data', function() {
  var src = config.paths.src.data + '/md/**/*';
  var dest = config.paths.dist.templates;

  return gulp.src(src)
    .pipe(flatten())
    .pipe(markdown())
    .pipe(gulp.dest(dest));
});