module.exports = function(gulp, plugins, config){
    
    //variables
    var supported = [
        'last 2 versions',
        'safari >= 8',
        'ie >= 10',
        'ff >= 20',
        'ios 6',
        'android 4'
    ];
    
    var sassDir = config.paths.sass;
    var viewsDir = config.paths.views;
    var cssDir = config.paths.css;
    var clientDir = config.paths.client;
    
  return function(){
    return gulp.src( sassDir + "/**/*.scss")
           .pipe(plugins.sass().on("error", plugins.sass.logError))
           .pipe(plugins.csscomb())
           .pipe(plugins.purifycss([viewsDir + "/**/*.*", clientDir + "/**/*.*"]))
           .pipe(plugins.postcss([
                require('postcss-cssnext'),
                require('postcss-font-magician')({ /* options */ }),
                require('postcss-bem-linter')
            ]))
           .pipe(plugins.sourcemaps.init())
           .pipe(plugins.cssnano({
                discardComments: {removeAll: true},
                autoprefixer: {browsers: supported, add: true}
               
           }))
           .pipe(plugins.rename("style.min.css"))
           
           .pipe(plugins.sourcemaps.write('.'))
           .pipe(gulp.dest(cssDir ));
  }; 
};