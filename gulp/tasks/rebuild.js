var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Rebuild the project, including reloading the browser
 */
gulp.task('rebuild', function(cb) {
  runSequence(
    'build',
    'reload',
    cb
  );
});
