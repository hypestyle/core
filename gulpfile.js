const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssMinify = require('gulp-css-minify')

function buildStyles() {
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(cssMinify())
        .pipe(dest('dist/css'))
}

function watchTask() {
    watch(['src/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
