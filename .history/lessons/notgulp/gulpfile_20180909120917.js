var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
    gulp.src(['js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest('static/js/'));
});

gulp.task('less', function() {
    console.log(2)
})