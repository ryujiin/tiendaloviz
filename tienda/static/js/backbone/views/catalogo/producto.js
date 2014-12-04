Loviz.Views.Producto = Backbone.View.extend({
    tagName: 'article',
    className: 'producto',
    events: {
    },
    template: swig.compile($("#producto_lista_template").html()),
    
    initialize: function () {
        this.quick =false;
    },
    
    render: function () {
        debugger;
        var album = this.model.toJSON()
        var html = this.template(album);
        this.$el.html(html);
        return this;
    },
    quicktime_producto:function  () {
        console.log(this.quick + ' abrir quick');
        this.quick=true;
    },
    navegar_producto : function () {
        if (this.quick = false) {
            window.routers.catalogo.navigate('/producto/'+this.model.toJSON().slug, {trigger:true});
        };
        this.quick = false
    },
});