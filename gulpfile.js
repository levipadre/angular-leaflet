var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var $ = require('gulp-load-plugins')();

var conf = {
    app: 'app',
    src: 'src',
    dist: 'dist'
};

gulp.task('browser-sync', function() {
    browserSync.init({
        port: 54321,
        server: {
            baseDir: "app",
            routes:  {
                '/bower_components': 'bower_components',
                '/dist': 'dist'
            },
            open: true,
            notify: true
        }
    });
});

gulp.task('scripts:app', function() {
    var files = [
        conf.app + '/scripts/app.js',
        conf.app + '/scripts/controllers/*.js'
    ];

    return gulp.src(files)
        .pipe($.plumber())
        .pipe($.expectFile.real(files))
        .pipe($.concat('app.min.js'))
        .pipe(gulp.dest(conf.app + '/scripts/min'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts:directive', function() {
    var files = [
        conf.src + '/directives/*.js',
        conf.src + '/services/*.js'
    ];

    return gulp.src(files)
        .pipe($.plumber())
        .pipe($.expectFile.real(files))
        .pipe($.concat('angular-leaflet.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(conf.dist))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('watch:app', function() {
    gulp.watch(conf.app + '/scripts/**/*.js', ['scripts:app']);
    gulp.watch(conf.app + '/**/*.html', browserSync.reload);
});

gulp.task('watch:directive', function() {
    gulp.watch(conf.src + '/**/*.js', ['scripts:directive']);
    gulp.watch(conf.app + '/scripts/**/*.js', ['scripts:app']);
    gulp.watch(conf.app + '/**/*.html', browserSync.reload);
});

gulp.task('bower:install', function() {
    return $.bower();
});

gulp.task('default', ['browser-sync', 'bower:install', 'scripts:app', 'watch:app'], function() {});
gulp.task('source', ['browser-sync', 'bower:install', 'scripts:directive', 'scripts:app', 'watch:directive', 'watch:app'], function() {});