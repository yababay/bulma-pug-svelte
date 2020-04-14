const gulp   = require("gulp")
const pug    = require("gulp-pug")
const rename = require('gulp-rename')
const stylus = require('gulp-stylus')
const locals = require('dotenv').config().parsed

const pugify = () => {
    return gulp.src(".pug")
        .pipe(rename('index.pug'))
        .pipe(pug({locals}))
        .pipe(gulp.dest('../../public'))          
}

const stylify = ()=> {
    return gulp.src('.styl')
        .pipe(rename('index.styl'))
        .pipe(stylus())
        .pipe(gulp.dest('../../public/css'))
}

exports.default = gulp.series(pugify, stylify)
exports.pugify  = gulp.series(pugify)
exports.stylify = gulp.series(stylify)

