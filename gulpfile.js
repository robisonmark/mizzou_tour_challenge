const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const autoprefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');

// File Dir Variables
var sassDir = './src/scss/**/*.scss'
var targetCSS = './dist/css'
var jsDir = './src/js'
var targetJs = './dist/js'


function css() {
    return src(sassDir)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefix())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(targetCSS))
        .pipe(notify('CSS Updated'))
}

function js() {
    return src(jsDir)
        .pipe(sourcemaps.init())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(targetJs))
}

exports.default = () => {
    gulp.watch(sassDir, css);
    gulp.watch(jsDir, js)
}