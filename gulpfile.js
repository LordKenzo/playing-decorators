const gulp = require('gulp');
const { series } = require('gulp');
const del = require('del');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const image = require('gulp-image');

const paths = {
  dist: './build',
  src: './src',
  assets: './src/public',
}

function clean() {
  return del(paths.dist);
}

function assets() {
  return gulp.src(paths.assets + '/**/*')
    .pipe(gulp.dest(paths.dist))
}

function minifyJS() {
  return gulp.src(paths.dist + '/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist));
}

const minifyHTML = () => {
  return gulp.src(paths.dist + '/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.dist));
}

const minifyImage = () => {
  return gulp.src(paths.dist + '/images/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: false // defaults to false
    }))
    .pipe(gulp.dest(paths.dist + '/images'));
}


exports.clean = clean;
exports.assets = assets;
exports.minifyHTML = minifyHTML;

gulp.task('production', series(assets, minifyHTML, minifyImage, minifyJS));
gulp.task('default', series(clean, assets));