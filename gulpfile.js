const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');
const minify = require('gulp-minify');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin')
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', function () {
    return gulp.src('lib/pug/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist/assets/pug'))
        .pipe(browserSync.stream());
});

gulp.task('stylus', function () {
    return gulp.src('lib/stylus/!(_*.styl)')
        .pipe(stylus({ compress: true }))
        .pipe(gulp.dest('dist/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('autoprefixer', function () {
    return gulp.src('dist/assets/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/assets/css'))
});
gulp.task('babel', function () {
    return gulp.src('lib/js/*.js')
        .pipe(babel({ presets: ['env'] }))
        .pipe(minify())
        .pipe(gulp.dest('dist/assets/js'));
});
gulp.task('imagemin', () => {
    gulp.src('lib/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/assets/img'))
}
);
gulp.task('serve', ['stylus', 'babel', 'pug', 'imagemin'], function () {
    browserSync.init({
        server: './dist/assets/pug/'
    });
    gulp.watch('lib/stylus/*.styl', ['stylus']);
    gulp.watch('lib/pug/*.pug', ['pug']);
    gulp.watch('lib/js/*.js', ['babel']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);