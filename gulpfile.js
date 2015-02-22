var gulp = require('gulp');
var karma = require('karma').server;
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var server = require('gulp-express');


/*
  #browserify
  Browserifies from the Document_Run file and builds it to build.js in public.
*/
gulp.task('browserify', function() {
  return browserify({
    entries: ['./index.js'],
    debug: true
  })
  .bundle()
  //Pass desired output filename to vinyl-source-stream
  .pipe(source('build.js'))
  // Start piping stream to tasks!
  .pipe(gulp.dest('./public/'));
});

/*
  #karma
  Runs the karma to tests on the chrome browser.
*/
gulp.task('karma', function(done){
  karma.start({
    configFile: __dirname + '/my.conf.js',
    browsers: ["Chrome"]
  }, done);
});
