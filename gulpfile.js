const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("src/**/*.scss").pipe(sass()).pipe(dest("dist"));
}

function watchTask() {
  watch(["src/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
