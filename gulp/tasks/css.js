var gulp = require('gulp');

gulp.task('css', function () {
  return gulp.src('./css/**/**')
    .pipe(gulp.dest('dist/assets/css'))
});
