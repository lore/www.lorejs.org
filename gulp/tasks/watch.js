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
      baseDir: './dist'
    },
    ui: {
      port: 8080
    }
  });

  return gulp.watch([
    'src/**/**',
    'css/**/*.css',
    'less/**/*.less',
    'js/**/*.js'
  ], ['rebuild']);
});
