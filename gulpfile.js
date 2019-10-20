var {src, dest, watch, series, parallel} = require('gulp')
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-csso');
var jsmin = require('gulp-jsmin');
var jsonmin = require('gulp-jsonminify');
var zip = require('gulp-zip');

function move() {
   return src('src/**/*')
      .pipe(dest('dist'))
}
function minjson() {
   return src(['src/manifest.json'])
      .pipe(jsonmin())
      .pipe(dest('dist'));
}
function minhtml() {
   return src('src/**/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(dest('dist'));
}
function mincss() {
   return src('src/**/*.css')
   .pipe(cssmin())
   .pipe(dest('dist'));
}
function minjs() {
   return src('src/**/*.js')
      .pipe(jsmin())
      .pipe(dest('dist'));
}
function zipdist() {
   return src('dist')
      .pipe(zip('VIT Wifi.zip'))
      .pipe(dest('.'))
}

exports.default = series(
   move,
   parallel(
      minjson,
      minhtml,
      mincss,
      minjs
   ),
   zipdist
)