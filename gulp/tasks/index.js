/**
 * Copies the src index.html to the dist folder
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var config = require('../config');

gulp.task('index', function() {
  var src = config.paths.src.root + '/index.html';
  var sources = gulp.src(config.inject, { read: false });
  var dest = config.paths.dist.root;

  return gulp.src(src)
    .pipe(gulp.dest(dest))
    .pipe(inject(sources, { relative: true }))
    .pipe(gulp.dest(dest));
});