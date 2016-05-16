var gulp = require('gulp');
var ejs = require('gulp-ejs');
var config = require('../config');

/**
 * Build the project and copy the index.html file into the resulting directory
 */
gulp.task('build', ['less', 'css', 'js', 'img', 'fonts'], function() {
 return gulp.src([
     './src/**/*.html'
   ])
   .pipe(ejs())
   .pipe(gulp.dest(config.dest));
});
