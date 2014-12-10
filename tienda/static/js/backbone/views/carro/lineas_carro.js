Loviz.Views.Linea_carro = Backbone.View.extend({
    tagName: 'tr',
    className: 'linea',
    events: {
    },
    template: swig.compile($("#carro_linea_template").html()),
    
    initialize: function () {
        this.quick =false;
    },
    
    render: function () {
        var album = this.model.toJSON()
        var html = this.template(album);
        this.$el.html(html);
        return this;
    },
});