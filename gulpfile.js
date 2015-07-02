var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemap = require('gulp-sourcemaps');
var rename = require('gulp-rename');

gulp.task("default", function() {
  var browserifyCustom = browserify({
    entries: 'scripts/entry.js',
    debug: true
  }).transform(babelify.configure({
    stage: 1
  }));

  return browserifyCustom.bundle()
    .pipe(source('scripts'))
    .pipe(buffer())
    .pipe(sourcemap.init({loadMaps: true}))
    .pipe(sourcemap.write(null, {addComment: true}))
    .pipe(rename('scripts.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task("watch", ['default'], function() {
    gulp.watch('scripts/*.js', ['default']);
});