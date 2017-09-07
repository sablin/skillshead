var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel');

gulp.task('sass', function(){
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(autoprefixer(['last 15 versions','> 1%', 'ie 8', 'ie 7'], {cascade : true}))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream : true}))
});

gulp.task('browser-sync', function(){
    browserSync(
        {
            server: {
                baseDir: 'app'
            },
            notify: false  // отключение уведомлений
        }
    );
});
gulp.task('transpil',() =>
gulp.src('app/js/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('app/js/es6'))
    .on('end', browserSync.reload)
);
gulp.task('watch',['browser-sync','transpil','sass'], function(){
    gulp.watch('app/sass/**/*.sass', ['sass']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', ['transpil']);
    gulp.watch('app/js/es6/*.js', browserSync.reload);
});
