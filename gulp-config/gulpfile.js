const del       = require("del");
const gulp      = require("gulp");
const clean     = require("gulp-clean-css");
const babel     = require("gulp-babel");
const concat    = require("gulp-concat");
const uglify    = require("gulp-uglify");
const autopref  = require("gulp-autoprefixer");


gulp.task("css", () => {
    return gulp.src("src/**/*.css")
        .pipe(autopref({
                browsers: ["last 3 versions"]
            }))
        .pipe(concat("app.css"))
        .pipe(clean())
        .pipe(gulp.dest("dest/styles/"));
})

gulp.task("js", () => {
    return gulp.src("src/**/*.js")
        .pipe(babel({presets: ["es2015"]}))
        .pipe(uglify())
        .pipe(concat("app.js"))
        .pipe(gulp.dest("dest/js/"));
})

gulp.task("del", () => {
    return del("dest/js/*","dest/styles/*");
})

gulp.task("build", gulp.series("del", gulp.parallel("css","js")));