var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var PATHS = {
  WATCH: { SCSS: 'src/*.scss' },
  SRC: { SCSS: 'src/main.scss' },
  DEST: 'dist/'
};


gulp.task('watch', function() {
  gulp.watch(PATHS.WATCH.SCSS, ['scss']);
});



/**
 * Transpile SCSS to CSS.
 */
gulp.task('scss', function() {
  gulp
    .src(PATHS.SRC.SCSS)
    .pipe(plugins.sass().on('error', plugins.sass.logError))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(PATHS.DEST));
});
