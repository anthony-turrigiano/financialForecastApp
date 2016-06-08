module.exports = function(gulp, plugins, config){
    return function(){
        return gulp.src(config.paths.fontAwesome.fonts + "/**/*.*")
               .pipe(gulp.dest(config.paths.fonts));
    };
};