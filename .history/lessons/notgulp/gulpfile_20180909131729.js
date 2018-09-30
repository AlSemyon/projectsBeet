var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var pathJs = ['js/*.js'];
var pathCss = ['less/*.less'];


gulp.task('js-min', function() {
    gulp.src(pathJs)
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('static/js/'));
  });

  gulp.task('js', function() {
    gulp.src(pathJs)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('static/js/'));
  });

  gulp.task('watch-js', function() {
    gulp.watch(pathJs, ['js'])
  });

  gulp.task('less', function() {
    gulp.src(pathCss)
      .pipe(concat('style.css'))
      .pipe(gulp.dest('static/css/'));
  });
