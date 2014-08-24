/**
 * Watches src files for changes and runs associated tasks
 */
var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  var indexSrc = config.paths.src.root + '/index.html';
  var lessSrc = config.paths.src.root + '/**/*.less';

  gulp.watch(indexSrc, ['index']);
  gulp.watch(lessSrc, ['less']);
});