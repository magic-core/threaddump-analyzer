var gulp = require("gulp");
var qunit = require("gulp-qunit");
var eslint = require("gulp-eslint");
var htmlhint = require("gulp-htmlhint");
var csslint = require("gulp-csslint");

gulp.task("test", function() {
  return gulp
    .src("./test.html")
    .pipe(qunit({ "phantomjs-options": ["--ignore-ssl-errors=true"] }));
});

gulp.task("eslint", function() {
  return gulp
    .src("*.js")
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task("htmllint", function() {
  return gulp
    .src(["*.html"])
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter());
});

gulp.task("csslint", function() {
  return gulp
    .src("*.css")
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(csslint.failFormatter());
});
