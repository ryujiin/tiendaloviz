Loviz.Views.Filtro_link = Backbone.View.extend({
    tagName: 'li',
    className: 'filtro',
    events: {
        'click .link_filtro' : 'filtrar',
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
        
        this.etiqueta = new Loviz.Views.Etiqueta_filtro({model:this.model});

        var nombre = this.$('a').data('nombre');
        var valor = this.$('a').data('valor');

        
        window.views.catalogo.$('#filtros').append(this.etiqueta.render().el)

        window.views.catalogo.filtro[nombre] = valor;
        window.views.catalogo.$('.productos').empty().fadeIn();
        window.views.catalogo.mostrar_productos();

        window.views.catalogo.filtros_link.forEach(function(link){
            link.get_numero_items(true);
        })

        var url = e.currentTarget.pathname+'?'+nombre+'='+valor
        Backbone.history.navigate(url);
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
});