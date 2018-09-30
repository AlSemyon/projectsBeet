var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('js', function() {
    gulp.src(['js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('static/js/'));
});

gulp.task('less', function() {
    console.log(2)
})