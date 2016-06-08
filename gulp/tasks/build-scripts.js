module.exports = function(gulp, plugins, config){
    return function(){
      return gulp.src([
                config.paths.lib + "/angular/angular.min.js",
                config.paths.lib + "/angular-*/**/*.min.js",
                config.paths.client + "/app/app.module.js",
                config.paths.client + "/app/app.config.js",
                config.paths.client + "/**/*.module.js",
                config.paths.client + "/**/*.js"
          ])
        .pipe(plugins.concat('script.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(config.paths.js));
    };
};