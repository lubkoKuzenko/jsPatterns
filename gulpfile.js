const gulp = require('gulp');
const concat = require('gulp-concat');
const jsmin = require('gulp-jsmin');

gulp.task('scripts', function() {
  gulp.src(['./*.js'])
    .pipe(concat('all.js'))
    .pipe(jsmin())
    .pipe(gulp.dest('./dist/'))
});

gulp.task('default', ['scripts']);