const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function Styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = Styles;
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(Styles))
}