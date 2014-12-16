Loviz.Views.Filtro_link = Backbone.View.extend({
    tagName: 'div',
    className: 'checkbox',
    events: {
        'click .link_filtro.sin_activo' : 'filtrar',
        'click .link_filtro.activo' : 'no_filtrar',
        //'click input' : 'nuevoFiltro',
    },
    template: swig.compile($("#filtro_link_template").html()),
    
    initialize: function () {
        this.get_numero_items();

        this.listenTo(this.model, "change", this.render, this);
    },
    
    render: function () {
        var album = this.model.toJSON();
        var html = this.template(album);
        this.$el.html(html);
        if (this.model.toJSON().num===0) {
            this.$el.hide();
        };
        return this;
    },
    filtrar:function (e) {
        e.preventDefault();
    
        var nombre = this.$('a').data('nombre');
        var valor = this.$('a').data('valor');

        window.views.catalogo.filtro[nombre] = valor;
        window.views.catalogo.$('.productos').empty().fadeIn();
        debugger;
        window.views.catalogo.mostrar_productos();

        window.views.catalogo.filtros_link.forEach(function(link){
            link.get_numero_items(true);
        })

        var url = e.currentTarget.pathname+'?'+nombre+'='+valor
        Backbone.history.navigate(url);
        this.efecto_activo();
    },
    get_numero_items:function (repaso) {
        var filtro = $.extend({},window.views.catalogo.filtro)
        var num;
        if (repaso===true) {
            filtro[this.model.toJSON().filtro]=this.model.toJSON().nombre
            num = window.views.catalogo.collection.where(filtro).length
        }else{
            if (this.model.toJSON().categoria===true) {
                filtro[this.model.toJSON().filtro]=this.model.toJSON().slug
                num = window.views.catalogo.collection.where(filtro).length
            }else{
                filtro[this.model.toJSON().filtro]=this.model.toJSON().nombre
                num = window.views.catalogo.collection.where(filtro).length
            }
        }

        this.model.set('num',num);
    },
    efecto_activo:function (e) {
        this.$('a').removeClass('sin_activo');
        this.$('a').addClass('activo');
        this.$('.icono').removeClass('icon-stop').addClass('icon-square-check');
    },
    no_filtrar:function (e) {
        e.preventDefault();
    },
    nuevoFiltro:function () {
        var nombre = this.$('input').data('nombre');
        var valor = this.$('input').data('valor');

        window.views.catalogo.filtro[nombre] = valor;
        window.views.catalogo.$('.productos').empty();
        window.views.catalogo.mostrar_productos();
    }
});