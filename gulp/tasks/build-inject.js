module.exports = function(gulp, plugins, config){
    return function(){
        return gulp.src(config.paths.views + "/**/*.*")
        .pipe(plugins.inject(gulp.src([config.paths.css + "/style.min.css"],{read:false}), {starttag: '<!-- head:{{ext}} -->'}))
        .pipe(plugins.inject(gulp.src([config.paths.js + "/*.min.js"],{read:false}), {starttag: '<!-- main-scripts:{{ext}} -->'}))
        .pipe(plugins.inject(gulp.src([config.paths.lib + "/**/*angular.min.js"],{read:false}), {starttag: '<!-- angular:{{ext}} -->'}))
        .pipe(plugins.inject(gulp.src(["!" + config.paths.lib + "/**/*angular.min.js", config.paths.lib + "/**/*angular-*.min.js"],{read:false}), {starttag: '<!-- angularNPMMods:{{ext}} -->'}))
        .pipe(plugins.inject(gulp.src([config.paths.client + "/**/*.module.js"],{read:false}), {starttag: '<!-- angularClientMods:{{ext}} -->'}))
        .pipe(plugins.inject(gulp.src(["!" + config.paths.client + "/**/*.module.js",config.paths.client + "/**/*.js"],{read:false}), {starttag: '<!-- angularClient:{{ext}} -->'}))
        .pipe( gulp.dest(config.paths.views));
    };
};