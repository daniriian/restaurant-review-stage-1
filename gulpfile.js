var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

gulp.task('styles', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('webserver', function () {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('watch', function () {
    gulp.watch('./scss/*.scss', ['styles']);
});

// gulp.task('default', ['watch']);
gulp.task('default', ['watch', 'webserver']);
