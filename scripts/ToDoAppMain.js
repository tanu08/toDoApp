require.config({
    shim: {
        "backbone": {
            deps: [
                "underscore",
                "jquery"
            ],
            exports: "Backbone"
        },
        "underscore": {
            exports: "_"
        }
    },
    paths: {
        "backbone": "../node_modules/backbone/backbone",
        "underscore": "../node_modules/underscore/underscore",
        "jquery": "../node_modules/jquery/dist/jquery",
        "hbs": "../node_modules/require-handlebars-plugin/hbs"
    }
});

require([
    "backbone",
    "routers/router"
], function(Backbone, Router) {
    Backbone.history.start();
    new Router();
});