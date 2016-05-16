var gulp = require('gulp');

gulp.task('fonts', function () {
  return gulp.src('./fonts/**/**')
    .pipe(gulp.dest('dist/assets/fonts'))
});
