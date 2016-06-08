module.exports = function(gulp,browserSync, config){
  return function(){
    browserSync.init({
       proxy : process.env.C9_HOSTNAME,
       port : config.browsersync.port,
       ui : {
           port : config.browsersync.ui.port
       },
       files : "*.*",
    });  
  };
};