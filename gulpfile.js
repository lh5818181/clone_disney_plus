const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');


function Styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

function images() {
    return gulp.src('./src/imagens/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(Styles, images);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(Styles));
    gulp.watch('./src/imagens/**/*', gulp.parallel(images));
}
