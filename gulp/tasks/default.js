/**
 * Standard development task
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
  return runSequence(
    'rimraf',
    'vendor',
    ['index', 'templates', 'less', 'watchify'],
    ['webserver', 'watch']
  );
});