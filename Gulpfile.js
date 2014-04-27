var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

var paths = {
  scripts: [
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/fries/lib/js/*.js',
    '!bower_components/fries/lib/js/stack.js',
    'bower_components/hammerjs/hammer.min.js',
    'bower_components/gmaps/gmaps.js',
    'js/**/*.js',
  ],
  styles: [
    'bower_components/fries/dist/css/holo-dark/*.css',
    'scss/**/*.scss',
  ]
};

gulp.task('scripts', function() {
  // Minify and copy all JavaScript
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('styles', function() {
  // Minify and copy all CSS
  return gulp.src(paths.styles)
    .pipe(sass({style: 'compressed', errLogToConsole: true}))
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest('build/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.styles, ['styles']);
});

gulp.task('livereload', function() {
  var lr = require('gulp-livereload')();
  // Watch for changes in compiled files
   gulp.watch('/build/**', function (file) {
     lr.changed(file.path);
   });
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['scripts', 'styles']);
