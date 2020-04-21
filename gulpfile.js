const  gulp = require("gulp");
const  sass = require("gulp-sass");

gulp.task("sass", function () {
  return gulp.src("scss/main.scss")
      .pipe(sass({
          outputStyle: 'expanded',
          sourceComments: 'map'
      }).on("error", sass.logError))
      .pipe(gulp.dest("css"))
});
  gulp.task("watch", function(){
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
  });
  
  gulp.task("default", gulp.series("sass", "watch",));