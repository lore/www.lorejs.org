var gulp = require('gulp');
var runSequence = require('run-sequence');

/**
 * Build the project and copy the index.html file into the resulting directory
 */
gulp.task('build', function(cb) {
  runSequence(
    'jekyll',
    'less',
    cb
  );
});
