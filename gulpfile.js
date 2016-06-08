var config = require("./config/app");
var gulp = require("gulp");

var plugins = require("gulp-load-plugins")({
	rename : {},
	pattern : ["*"]
});

var browserSync = require("browser-sync");

//tasks
gulp.task("build-styles",   require(config.paths.gulp.tasks + "/build-styles")(gulp, plugins, config));
gulp.task("build-inject",   require(config.paths.gulp.tasks + "/build-inject")(gulp, plugins, config));
gulp.task("build-scripts",  require(config.paths.gulp.tasks + "/build-scripts")(gulp, plugins, config));
gulp.task("build-fonts", require(config.paths.gulp.tasks + "/build-fonts")(gulp, plugins, config));
gulp.task("build",          require(config.paths.gulp.tasks + "/build")(gulp, plugins, config));
gulp.task('browsersync', require('./gulp/tasks/browsersync')(gulp, browserSync, config));

gulp.task("serve", function(){
   gulp.watch([
        config.paths.client + "/**/*.*", 
        config.paths.views + "/**/*.*", 
        config.paths.sass + "/**/*.*", 
        config.paths.lib + "/**/*.*"
        ], 
        ["build"]); 
});
