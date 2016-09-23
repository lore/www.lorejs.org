var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps   = require('gulp-sourcemaps');
var less = require('gulp-less');
var config = require('../config');

/**
 * Transpile the LESS files to CSS
 */
// gulp.task('less', function () {
//   return gulp.src('./src/less/styles.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ]
//     }))
//     .pipe(gulp.dest('./dist/css'));
// });

gulp.task('less:docs', function () {
  return gulp.src(config.LESS_DOC_SOURCES)
    // .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    // .pipe(sourcemaps.write(config.HERE))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('less:toolkit', function () {
  return gulp.src(config.LESS_TOOLKIT_SOURCES)
    // .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    // .pipe(sourcemaps.write(config.HERE))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('less:main', function () {
  return gulp.src(config.LESS_MAIN_SOURCES)
  // .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(autoprefixer())
    // .pipe(sourcemaps.write(config.HERE))
    .pipe(gulp.dest('_site/assets/css'));
});

gulp.task('less', [
  'less:toolkit',
  'less:docs',
  'less:main'
]);


