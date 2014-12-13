Loviz.Views.Filtro_link = Backbone.View.extend({
    tagName: 'li',
    className: 'filtro',
    events: {
        'click .link_filtro' : 'filtrar',
    },
    template: swig.compile($("#filtro_link_template").html()),
    
    initialize: function () {
        this.quick =false;
    },
    
    render: function () {
        var album = this.model.toJSON();
        var html = this.template(album);
        this.$el.html(html);
        return this;
    },
    filtrar:function (e) {
        e.preventDefault();
        var nombre = this.$('a').data('nombre');
        var valor = this.$('a').data('valor');
        window.views.catalogo.filtro[nombre] = valor;
        window.views.catalogo.$('.productos').empty().fadeIn();
        window.views.catalogo.mostrar_productos();
    }
});