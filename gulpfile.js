const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
cssFormat = require('gulp-css-format')

function buildStyles() {
    return src('src/**/*.scss')
        .pipe(sass())
        .pipe(cssFormat({ indent: 1, hasSpace: true }))
        .pipe(dest('dist/css'))
}

function watchTask() {
    watch(['src/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
