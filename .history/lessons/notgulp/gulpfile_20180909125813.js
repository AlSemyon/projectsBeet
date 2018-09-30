var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


var pathjs = ['js/*.js', 'js2/*.js'];

gulp.task('js', function() {
    gulp.src(pathjs)
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('static/js/'));
});

gulp.task('watchjs', function() {
    gulp.watch(pathjs, ['js'])
});

gulp.task('less', function() {
    console.log(2)
})