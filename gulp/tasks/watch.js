var gulp = require('gulp');
var browserSync = require('browser-sync').create();

/**
 * Reload the browser to show changes
 */
gulp.task('reload', function(cb) {
  browserSync.reload();
  cb();
});

/**
 * Watch for file changes and rebuild
 */
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: './_site'
    },
    port: 4000,
    ui: {
      port: 8080
    }
  });

  return gulp.watch([
    '_includes/**/**',
    '_layouts/**/**',
    '_less/**/**',
    'assets/**/**',
    'css/**/**',
    'fonts/**/**',
    'js/**/**',
    'pages/**/**',
    'index.html'
  ], ['rebuild']);
});
