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
		var modelo = this.model.toJSON().modelo;
		var filtro = this.model.toJSON().filtro1; 
		if (modelo = 'Producto') {
			var coleccion = window.collections.productos
			if (filtro!=='') {
				if (filtro==='oferta') {
					coleccion = coleccion.where({en_oferta:true})
				};
			}
			coleccion.forEach(this.addproducto,this);			
		};
		this.poner_carrusel();
	},
	addproducto:function (produ) {
		if (this.num_carrusel<6) {
			var producto = new Loviz.Views.Producto({ model: produ });
			this.$('.lista').append(producto.render().el);
			this.num_carrusel++
		};
	},
	poner_carrusel:function () {
		this.$('.lista').owlCarousel({
			items:3,
		});
	}
})