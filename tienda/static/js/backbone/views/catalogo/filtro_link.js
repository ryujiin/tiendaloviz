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
        this.get_numero_items();
        var album = this.model.toJSON();
        var html = this.template(album);
        this.$el.html(html);
        return this;
    },
    filtrar:function (e) {
        e.preventDefault();
        
        this.etiqueta = new Loviz.Views.Etiqueta_filtro({model:this.model});

        var nombre = this.$('a').data('nombre');
        var valor = this.$('a').data('valor');
        
        window.views.catalogo.$('#filtros').append(this.etiqueta.render().el)

        window.views.catalogo.filtro[nombre] = valor;
        window.views.catalogo.$('.productos').empty().fadeIn();
        window.views.catalogo.mostrar_productos();
    },
    get_numero_items:function () {
        var filtro = $.extend({},window.views.catalogo.filtro)
        var num;
        if (this.model.toJSON().filtro===true) {
            filtro['categoria_slug']=this.model.toJSON().slug;
            num = window.views.catalogo.collection.where(filtro).length
            debugger;
        }else{
            filtro[this.model.toJSON().filtro]=this.model.toJSON().nombre
            num = window.views.catalogo.collection.where(filtro).length
        }
        this.model.set('num',num);
    }
});