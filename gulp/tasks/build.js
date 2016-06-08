module.exports = function(gulp, plugins, config){
    return function(){
        return plugins.runSequence("build-styles","build-inject", "build-scripts");
    };
};