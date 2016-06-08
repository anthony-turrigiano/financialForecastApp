module.exports = {
    host : process.env.IP || '0.0.0.0',
    port : process.env.PORT || 8080,
    browsersync : {
        port : 8081,
        ui : {
            port : 8082
        }
    },
    paths : {
        views : "./views",
        config : "./config",
        sass : "./sass",
        lib : "./public/lib",
        css : "./public/css",
        js : "./public/js",
        img : "./public/img",
        fontAwesome : {
            fonts : "./node_modules/font-awesome/fonts"
        },
        fonts : "./public/fonts",
        client : "./client",
        public : "./public",
        server : "./server",
        gulp : {
            tasks : "./gulp/tasks"
        }
    }
};