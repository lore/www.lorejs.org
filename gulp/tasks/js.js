var gulp = require('gulp');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('js', ['js:application','js:toolkit']);

gulp.task('js:application', function () {
  return gulp.src(config.JS)
    .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('js:toolkit', function () {
  return gulp.src(config.JS_TOOLKIT)
    .pipe(concat('toolkit.js'))
    .pipe(gulp.dest('dist/assets/js'))
});
