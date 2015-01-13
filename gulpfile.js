var gulp = require('gulp');
var html2js = require('gulp-html2js');
var concat = require('gulp-concat');

// collect the html templates and populate the angular $template cache
gulp.task('cache-templates', function () {
    gulp.src('src/**/*.tmpl.html')
        .pipe(html2js({
            outputModuleName: 'templates',
            useStrict: true,
            base: 'src/'
        }))
        .pipe(concat('templates.js'))
        .pipe(gulp.dest('dist'))
});


gulp.task('default',['cache-templates']);