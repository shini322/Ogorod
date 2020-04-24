const gulp = require("gulp");
const sass = require("gulp-sass");
const souremaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");
const browserSync = require("browser-sync");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");



gulp.task("sass", function(){
    return gulp.src("app/catalog/view/theme/default/scss/**/*.scss")
    .pipe(souremaps.init())
    .pipe(sass({outputStyle:"expanded"}).on("error", sass.logError))
    .pipe(autoprefixer({
        browsers:["last 2 versions"]
    }))
    .pipe(gulp.dest("app/catalog/view/theme/default/css/"))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task("html",function(){
   return gulp.src("app/*.html")
   .pipe(browserSync.reload({stream: true}))
});


gulp.task("js", function(){
    return gulp.src("app/catalog/view/theme/default/js/*.js")
    .pipe(browserSync.reload({stream: true}))
 });


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});


gulp.task("watch",function(){
    gulp.watch("app/catalog/view/theme/default/scss/**/*.scss", gulp.parallel("sass"))
    gulp.watch("app/*.html", gulp.parallel("html"))
    gulp.watch("app/catalog/view/theme/default/js/*.js", gulp.parallel("js"))
});

gulp.task("default", gulp.parallel("sass", "js", "browser-sync","watch"));