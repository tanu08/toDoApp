define(["backbone",
    "underscore",
    "jquery",
    "hbs!templates/mainTemplate",
    "hbs!templates/new-row",
], function(Backbone, _, $, mainTemplate, newRow) {
    return Backbone.View.extend({

        el: "div.container",

        events: {
            'click .tick-box': 'mark',
            'click .cross': 'delete',
            'click .add': 'addToDoItem'

        },

        initialize: function() {
            this.count = 0;
        },

        render: function() {
            this.$el.append(mainTemplate());
            return this.el;
        },

        addToDoItem: function() {
            this.count += 1;
            this.name = this.$el.find('.input-item').val();
            this.$el.find('.items-list').append(newRow({ 'number': this.count, 'itemName': this.name }));
            this.$el.find('.input-item').val("");
        },

        mark: function() {

        },

        delete: function(event) {
            var el = $(event.currentTarget).parent().parent();
            $(el).remove();
        }







    });
});