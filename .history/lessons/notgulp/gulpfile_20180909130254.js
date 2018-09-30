var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var path = ['js/*.js'];
gulp.task('js', function() {
    gulp.src(path)
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('static/js/'));
  });

  gulp.task('watchjs', function() {
    gulp.watch(path, ['js'])
  });