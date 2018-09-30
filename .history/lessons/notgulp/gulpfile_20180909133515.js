var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var LessAutoprefix = require('less-plugin-autoprefix');
var minifycss = require('minifycss');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

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
      .pipe(less({plugins: [autoprefix]}))
      .pipe(concat('style.css'))
      .pipe(minifycss())
      .pipe(gulp.dest('static/css/'));
  });
