var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var LessAutoprefix = require('less-plugin-autoprefix');
// var minifycss = require('minifycss');
var gulpLess = require('gulp-less');
livereload = require('gulp-livereload');

var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

var pathJs = ['js/*.js'];
var pathCss = ['less/*.less'];

gulp.task('js-min', function() {
    gulp.src(pathJs)
      .pipe(uglify())
      .pipe(concat('app.js'))
      .pipe(gulp.dest('static/js/'))
      .pipe(livereload());;
  });

  gulp.task('js', function() {
    gulp.src(pathJs)
      .pipe(concat('app.js'))
      .pipe(gulp.dest('static/js/'))
      .pipe(livereload());;
  });

  gulp.task('watch-js', function() {
    gulp.watch(pathJs, ['js'])
  });

  gulp.task('less', function() {
    gulp.src(pathCss)
      .pipe(gulpLess({plugins: [autoprefix]}))
      .pipe(concat('style.css'))
    //   .pipe(minifycss())
      .pipe(gulp.dest('static/css/'))
      .pipe(livereload());;
  });

  gulp.task('watch-less', function() {
    gulp.watch(pathCss, ['less'])
  });

  gulp.task('watch', function() {
    gulp.watch(pathJs, ['js']);
    gulp.watch(pathCss, ['less']);

  });