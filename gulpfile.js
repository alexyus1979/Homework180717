var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename');

gulp.task('do-it-css', function () {
    gulp.src('assets/css/*.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));
});


gulp.task('do-it-js', function() {
    gulp.src('assets/js/*.js')
        .pipe(concat('dist.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

