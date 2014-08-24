/**
 * Compiles the main less file to the dist css folder
 */
var gulp = require('gulp');
var frep = require('gulp-frep');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../config');

gulp.task('less', function () {
  var src = config.paths.src.root + '/styles.less';
  var dest = config.paths.dist.css;

  return gulp.src(src)
    .pipe(frep(config.replacements))
    .pipe(sourcemaps.init())
    .pipe(less({
      compress: true
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest));
});