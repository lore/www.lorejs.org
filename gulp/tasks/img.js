var gulp = require('gulp');

gulp.task('img', function () {
  return gulp.src('./img/**/**')
    .pipe(gulp.dest('dist/assets/img'))
});
