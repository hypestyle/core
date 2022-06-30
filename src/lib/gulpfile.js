/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Hypll. All rights reserved.
 *  Licensed under the MIT License. Read the LICENSE file, for more information.
 *--------------------------------------------------------------------------------------------*/

const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const cssMinify = require('gulp-css-minify')

function buildStyles() {
    return src('sass/**/*.scss')
        .pipe(sass())
        .pipe(cssMinify())
        .pipe(dest('./dist/css'))
}

function watchTask() {
    watch(['sass/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)
