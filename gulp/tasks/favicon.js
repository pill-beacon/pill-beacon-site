var gulp              = require('gulp'),
    paths             = require('../config').paths;

gulp.task('favicon', function() {
  gulp.src(paths.src.favicon + "/**/*.{png,svg,ico}")
    .pipe(gulp.dest(paths.dist.favicon));
});
