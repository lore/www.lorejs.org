var gulp = require('gulp');
var ejs = require('gulp-ejs');
var gutil = require('gulp-util');
var config = require('../config');
var child = require('child_process');

/**
 * Have Jekyll build the project as it normally would
 */
gulp.task('jekyll', function(cb) {

  var jekyll = child.spawn('jekyll', [
    'build'
    // '--watch',
    // '--incremental'
    //'--drafts'
  // ]);
  ], {
    stdio: 'inherit'
  });

  jekyll.on('exit', function(code) {
    if (code === 0) {
      cb();
    } else {
      cb('ERROR: Jekyll process exited with code: ' + code);
    }
  });

  // const jekyllLogger = function(buffer) {
  //   buffer.toString()
  //     .split(/\n/)
  //     .forEach(function(message) {
  //       gutil.log('Jekyll: ' + message)
  //     });
  // };
  //
  // jekyll.stdout.on('data', jekyllLogger);
  // jekyll.stderr.on('data', jekyllLogger);

});
