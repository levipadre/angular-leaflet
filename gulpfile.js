var gulp = require('gulp');
var webserver = require('gulp-webserver');
var $ = require('gulp-load-plugins')();

var conf = {
    src: 'src',
    dist: 'dist'
};

//gulp.task('scripts:bower', function() {
//    var files = [
//        'bower_components/angular/angular.min.js',
//        'bower_components/angular-route/angular-route.min.js',
//        'bower_components/angular-sanitize/angular-sanitize.min.js',
//        'bower_components/leaflet/dist/leaflet.js'
//    ];
//
//    return gulp.src(files)
//        .pipe($.plumber())
//        .pipe($.expectFile.real(files))
//        .pipe($.concat('bower.min.js'))
//        .pipe(gulp.dest(conf.path + '/scripts/min'));
//});

gulp.task('scripts', function() {
    var files = [
        conf.src + '/directives/*.js',
        conf.src + '/controllers/*.js'
    ];

    return gulp.src(files)
        .pipe($.plumber())
        .pipe($.expectFile.real(files))
        .pipe($.concat('angular-leaflet.min.js'))
        .pipe($.uglify())
        .pipe(gulp.dest(conf.dist));
});

gulp.task('scripts:concat', ['scripts'], function(callback) {
    var files = [
        conf.dist + '/angular-leaflet.min.js'
    ];

    return gulp.src(files)
        .pipe($.plumber())
        .pipe($.expectFile.real(files))
        .pipe($.concat('angular-leaflet.min'))
        .pipe(gulp.dest(conf.dist));
});

//
//gulp.task('less:dev', function () {
//    return gulp.src(conf.path + '/less/style.less')
//        .pipe($.plumber())
//        .pipe($.less())
//        .pipe(gulp.dest(conf.path + '/css'));
//});
//
//gulp.task('css:less', function () {
//    return gulp.src(conf.path +  '/less/style.less')
//        .pipe($.plumber())
//        .pipe($.less())
//        .pipe(gulp.dest(conf.path + '/css'));
//});
//
//gulp.task('css:concat', ['css:less'], function () {
//    var files = [
//        'bower_components/leaflet/dist/leaflet.css',
//        conf.path + '/css/style.css'
//    ];
//
//    return gulp.src(files)
//        .pipe($.minifyCss())
//        .pipe($.expectFile.real(files))
//        .pipe($.concat('style.min.css'))
//        .pipe(gulp.dest(conf.path + '/css'));
//});

gulp.task('watch', function() {
    gulp.watch(conf.src + '/**/*.js', ['scripts']);
});

gulp.task('webserver', function() {
    gulp.src('app')
        .pipe(webserver({
            livereload: true,
            port: 12345,
            directoryListing: false,
            open: true,
            fallback: 'index.html'
        }));
});

gulp.task('bower:install', function() {
    return $.bower();
});

gulp.task('default', ['webserver', 'bower:install', 'watch'], function() {

});