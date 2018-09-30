var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('js', function() {
    gulp.src(['lib/*.js', 'lib/*.mjs'])
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});

gulp.task('less', function() {
    console.log(2)
})