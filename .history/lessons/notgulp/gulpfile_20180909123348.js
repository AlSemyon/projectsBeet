var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('js', function() {
    gulp.src(['js/*.js'])
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('static/js/'));
});

gulp.task('less', function() {
    console.log(2)
})