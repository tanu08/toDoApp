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
        "jquery": "../node_modules/jquery/dist/jquery"
    }
});

require([
    "backbone",
    "views/main-application",
    "routers/router"
], function(Backbone, AppView, Router) {
    new AppView();
    Backbone.history.start();
    new Router();
});