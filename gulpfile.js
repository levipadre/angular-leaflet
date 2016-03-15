var gulp = require('gulp');
var webserver = require('gulp-webserver');
var $ = require('gulp-load-plugins')();

var conf = {
    app: 'app',
    src: 'src',
    dist: 'dist'
};

gulp.task('scripts:app', function() {
    var files = [
        conf.app + '/scripts/app.js',
        conf.app + '/scripts/controllers/*.js'
    ];

    return gulp.src(files)
        .pipe($.plumber())
        .pipe($.expectFile.real(files))
        .pipe($.concat('app.min.js'))
        .pipe(gulp.dest(conf.app + '/scripts/min'));
});

gulp.task('scripts:directive', function() {
    var files = [
        conf.src + '/directives/*.js'
    ];

    return gulp.src(files)
        .pipe($.plumber())
        .pipe($.expectFile.real(files))
        .pipe($.concat('angular-leaflet.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(conf.dist));
});

gulp.task('watch', function() {
    gulp.watch(conf.src + '/directives/*.js', ['scripts:directive']);
    gulp.watch(conf.app + '/scripts/**/*.js', ['scripts:app']);
});

gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            port: 12345,
            directoryListing: false,
            open: true
        }));
});

gulp.task('bower:install', function() {
    return $.bower();
});

gulp.task('default', ['webserver', 'bower:install', 'scripts:directive', 'scripts:app', 'watch'], function() {

});