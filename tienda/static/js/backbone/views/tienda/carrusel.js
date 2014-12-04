Loviz.Views.Carrusel = Backbone.View.extend({
	events :{
	},
	initialize: function () {
		var self = this;
		this.sacar_datos();
	},
	render:function () {
		var css = this.model.toJSON().css;
		var contenedor = this.model.toJSON().seccion;
		var modelo = this.model.toJSON();		
		var html = this.template(modelo);
	    this.$el.html(html);
	    this.$el.addClass(css);
	    $(contenedor).append(this.$el)
	    this.llenar_carrusel();
	},
	sacar_datos:function () {
		var teme = this.model.toJSON().template;
		this.template = swig.compile($(teme).html());
		this.render();
	},
	llenar_carrusel:function () {
		this.num_carrusel = 0
		if (this.model.toJSON().modelo = 'Producto') {
			window.collections.productos.forEach(this.addproducto,this);
		};
	},
	addproducto:function (produ) {
		if (this.num_carrusel<6) {
			var producto = new Loviz.Views.Producto({ model: produ });
			this.$('.lista').append(producto.render().el);
			producto.$el.addClass('col-md-4')
			this.num_carrusel++
		};
	}
})