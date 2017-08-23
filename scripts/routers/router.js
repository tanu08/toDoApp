define(["backbone",
    "underscore",
    "jquery",
    "views/mainView"
], function(Backbone, _, $, mainView) {

    return Backbone.Router.extend({
        "routes": {
            "/": "loadMainPage"
        },
        initialize: function() {
            this.main = new mainView();
            this.loadMainPage();
        },
        loadMainPage: function() {
            this.main.render();
        }
    });
});