Loviz.Views.Filtro_bloque = Backbone.View.extend({
    className: 'bloque_filtro',
    events: {
        'click input' : 'listaFiltros',
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
    listaFiltros:function () {
        window.views.catalogo.$('.productos').empty();
        var num = 0
        this.$('input:checked').each(function( index,value ) {
            var nombre = $(value).data('nombre');
            var valor = $(value).data('valor');
            window.views.catalogo.filtro[nombre] = valor;            
            num = num+1;
            window.views.catalogo.mostrar_productos();
        });
        if (num===0) {
            delete window.views.catalogo.filtro.color;
            delete window.views.catalogo.filtro.estilo;
            window.views.catalogo.mostrar_productos();
        };
        
    }
});