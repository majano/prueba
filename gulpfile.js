'use strict';

var gulp = require('gulp');

// SCSS
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

sass.compiler =  require('node-sass');

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('minify-css', function() {
    return gulp.src('./assets/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('build-css', gulp.series('sass', 'minify-css'));

// Default
gulp.task('default', function() {
    gulp.watch('./scss/**/*.scss', gulp.series('build-css'));
});