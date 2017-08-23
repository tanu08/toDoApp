define(["backbone",
    "underscore",
    "jquery",
    "views/mainView"
], function(Backbone, _, $, mainView) {

    return Backbone.Router.extend({
        "routes": {
            "(/)": "loadMainPage"
        },
        initialize: function() {
            this.main = new mainView();
        },
        loadMainPage: function() {
            this.main.render();
        }
    });
});