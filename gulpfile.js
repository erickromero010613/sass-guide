"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");

var paths = {
    sass: {
        src: "src/scss/**/*.scss",
        dest: "public/assets/css",
    },
};

sass.compiler = require("node-sass");

gulp.task("sass", function () {
    return gulp
        .src(paths.sass.src)
        .pipe(sass().on("error", sass.logError))
        .pipe(gulp.dest(paths.sass.dest));
});

gulp.task("watch", function () {
    gulp.watch(paths.sass.src, gulp.series("sass"));
});
