Loviz.Views.Filtro_bloque = Backbone.View.extend({
    className: 'bloque',
    events: {
    },
    template: swig.compile($("#filtro_template").html()),
    
    initialize: function () {
        this.listenTo(this.collection, "add", this.add_filtro, this);
        this.render();
    },
    render: function () {
        var json_filtro = {'titulo': this.collection.filtro}
        var html = this.template(json_filtro);
        this.$el.html(html);
    },
    add_filtro:function (filtro) {
        var link = new Loviz.Views.Filtro_link({ model: filtro });
        window.views.catalogo.filtros_link.push(link);
        this.$('.filtros').append(link.render().el);
    },
});