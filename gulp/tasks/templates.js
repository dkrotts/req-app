/**
 * Copies the src templates to the dist folder
 */
var gulp = require('gulp');
var flatten = require('gulp-flatten');
var rename = require('gulp-rename');
var config = require('../config');

gulp.task('templates', function() {
  var src = config.paths.src.root + '/**/*.tpl';
  var dest = config.paths.dist.templates;

  return gulp.src(src)
    .pipe(flatten())
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    .pipe(gulp.dest(dest));
});