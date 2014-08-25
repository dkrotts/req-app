/**
 * Watches src files for changes and runs associated tasks
 */
var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function() {
  var indexSrc = config.paths.src.root + '/index.html';
  var templatesSrc = config.paths.src.root + '/**/*.tpl';
  var lessSrc = config.paths.src.root + '/**/*.less';
  var dataSrc = config.paths.src.data + '/md/**/*';

  gulp.watch(indexSrc, ['index']);
  gulp.watch(templatesSrc, ['templates']);
  gulp.watch(lessSrc, ['less']);
  gulp.watch(dataSrc, ['data']);
});