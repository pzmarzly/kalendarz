let gulp = require('gulp');
let inline = require('gulp-inline-source');
let pug = require('gulp-pug');

gulp.task('build', () => {
    return gulp.src('src/kalendarz.pug')
        .pipe(pug())
        .pipe(inline({ compress: false }))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);