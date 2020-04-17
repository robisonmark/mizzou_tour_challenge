const gulp = require('gulp')
const sass = require('gulp-sass')
const notify = require('gulp-notify')
const rename = require('gulp-rename')
const autoprefix = require('gulp-autoprefixer')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const eslint = require('gulp-eslint')
const connect = require('gulp-connect')

// File Dir Variables
var htmlDir = './src/**/*.html'
var targetHtml = './dist/'

// images
var imageDir = './src/images/*'
var targetImage = './dist/images/'

// Styles
var sassSource = './src/scss/main.scss'
var sassDir = './src/scss/**/*.scss'
var targetCSS = './dist/css/'

// javascript
var jsSource = './src/js/main.js'
var jsDir = './src/js'
var targetJs = './dist/js'

function server () {
  return connect.server({
    root: 'dist',
    port: 8888,
    livereload: true
  })
}

function html () {
  return gulp.src(htmlDir)
    .pipe(gulp.dest(targetHtml))
    .pipe(connect.reload())
}

function images () {
  return gulp.src(imageDir)
    .pipe(gulp.dest(targetImage))
    .pipe(connect.reload())
}

function css () {
  return gulp.src(sassSource)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefix())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest(targetCSS, { overwrite: true, sourcemaps: true }))
    .pipe(notify('CSS Updated'))
    .pipe(connect.reload())
}

function js () {
  return gulp.src(jsSource)
    .pipe(sourcemaps.init())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(targetJs))
    .pipe(connect.reload())
}

exports.default = () => {
  server()
  gulp.watch(htmlDir, html)
  gulp.watch(imageDir, images)
  gulp.watch(sassDir, css)
  gulp.watch(jsDir, js)
}
