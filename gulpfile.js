var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('slim', function () {
  return gulp.src('./index.slim')
    .pipe($.slim())
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function () {
  return gulp.src('./main.sass')
    .pipe($.sass({ indentedSyntax: true }))
    .pipe($.autoprefixer())
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  return gulp.src('./main.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch(['index.slim'], ['slim']);
  gulp.watch(['main.sass'], ['sass']);
  gulp.watch(['main.js'], ['js']);
});

gulp.task('webserver', function () {
  return gulp.src('./dist')
    .pipe($.webserver({
      host: 'localhost',
      livereload: true,
      open: true
    }));
});

gulp.task('deploy', function () {
  return gulp.src('dist/**/*')
    .pipe($.ghPages('https://github.com/rileyjshaw/earage.git', 'origin'));
});

gulp.task('default', ['slim', 'sass', 'js', 'webserver', 'watch']);
