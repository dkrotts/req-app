/**
 * Copies the required vendor files from the src folder dist vendor folder
 */
var gulp = require('gulp');
var config = require('../config');

gulp.task('vendor', function() {
  var src = [
    'angular/angular.js',
    'angular/angular.min.js',
    'angular/angular.min.js.map',
    'angular-animate/angular-animate.js',
    'angular-animate/angular-animate.min.js',
    'angular-animate/angular-animate.min.js.map',
    'angular-route/angular-route.js',
    'angular-route/angular-route.min.js',
    'angular-route/angular-route.min.js.map',
    'markdown/lib/markdown.js'
  ];
  var dest = config.paths.dist.vendor;

  return gulp.src(src, { cwd: config.paths.src.bower })
    .pipe(gulp.dest(dest));
});