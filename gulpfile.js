var gulp = require('gulp'),
	$ = require('gulp-load-plugins')({
        rename: {
            'gulp-ruby-sass': 'sass'
        }
    });

gulp.task('styles', function() {
    return $.sass('scss/main.scss', {
                style: 'compressed',
                loadPath:[
                    './scss',
                    './node_modules/font-awesome/scss'
                    ]
            }).on('error', $.sass.logError)
            .pipe($.autoprefixer('last 2 version'))
            .pipe($.concatCss("kucf.css"))
            .pipe(gulp.dest('dist/css/'))
            .pipe(gulp.dest('docs/css/'))
            .pipe($.livereload());
});

gulp.task('fonts', function () {
    gulp.src([
            'scss/fonts/*',
            'node_modules/font-awesome/fonts/fontawesome-webfont.*'
            ])
    	.pipe(gulp.dest('dist/fonts'))
        .pipe(gulp.dest('docs/fonts'))
        .pipe($.livereload());
});

gulp.task('assets', function () {
    gulp.src(['assets/**/*'])
        .pipe(gulp.dest('dist/assets'))
        .pipe(gulp.dest('docs/assets'))
        .pipe($.livereload());
})


gulp.task('watch', function() {
    $.livereload.listen();
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('scss/fonts/*', ['fonts']);
    gulp.watch('assets/**/*', ['assets']);
});

gulp.task('build', ['styles', 'fonts', 'assets']);
