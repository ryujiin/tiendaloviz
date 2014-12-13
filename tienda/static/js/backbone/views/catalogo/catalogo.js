Loviz.Views.Catalogo = Backbone.View.extend({
	className: 'cotenedor',
	el:$('#contenido'),
	
    template: swig.compile($("#catalogo_template").html()),

	events: {
	},
	initialize : function () {
		var self = this;
		this.categorias = new Loviz.Collections.Categorias();
	},
	render:function () {
		var html = this.template();
        this.$el.html(html);
	},
	mostrar_productos:function (slug) {
		var coleccion = this.collection;
		if (slug==='ofertas') {
			this.filtro={en_oferta:true}
		}else if(slug==='hombres'){
			this.filtro = {genero:'hombres'};
		}else if (slug==='mujeres') {
			this.filtro = {genero:'mujeres'};
		}else if(slug !==undefined){
			this.filtro = {categoria_slug:slug};
		}
		coleccion = coleccion.where(this.filtro)
		coleccion.forEach(this.addOne,this);
	},
	addOne: function (produ) {
		var producto = new Loviz.Views.Producto({ model: produ });
		this.$('.productos').append(producto.render().el);
		producto.$el.addClass('col-md-4')
	},
	crear_filtros:function (slug) {
		if (slug==='ofertas') {
			this.filtro_categoria('mujeres');
			this.filtro_categoria('hombres');
		}else if (slug === 'hombres') {
			this.filtro_categoria('hombres');			
		}else if (slug === 'mujeres') {
			this.filtro_categoria('mujeres');			
		}
		this.filtro_add('Estilos');		
		this.filtro_add('Colores');
		this.filtro_add('Tallas');
	},
	filtro_categoria:function (genero) {
		var categoria = new Loviz.Views.Categoria_filtros({collection:this.categorias});
		categoria.genero=genero;
		categoria.render();
		this.$('.lateral').append(categoria.$el);
	},
	filtro_add:function (filtro) {
		var coleccion = new Loviz.Collections.Filtros();
		coleccion.filtro = filtro
		var filtro = new Loviz.Views.Filtro_bloque({collection:coleccion});
		coleccion.fetch();
		this.$('.lateral').append(filtro.$el);
	}
});