Loviz.Views.Catalogo = Backbone.View.extend({
	className: 'cotenedor',
	el:$('#contenido'),
	
    template: swig.compile($("#catalogo_template").html()),

	events: {
	},
	initialize : function () {
		var self = this;
    	
    	//this.listenTo(this.collection, "add", this.addOne, this);
        
	},
	render:function () {
		var html = this.template();
        this.$el.html(html);
        this.collection.forEach(this.addOne,this);
	},
	addOne: function (produ) {
		var producto = new Loviz.Views.Producto({ model: produ });
		this.$('.productos').append(producto.render().el);
		producto.$el.addClass('col-md-4')
	}
});