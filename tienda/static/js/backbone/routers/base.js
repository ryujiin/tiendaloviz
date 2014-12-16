Loviz.Routers.Base = Backbone.Router.extend({
	routes : {
		"" : "root",
		'carro/':'carro',
		'pagina/:slug/':'pagina',
		'user/:slug/':'usuario',
		'catalogo/':'catalogo',
		'catalogo/:slug/':'catalogo',
		'categoria/:slug/':'catalogo_categoria',
		'productos/:slug/':'catalogo_seccion',
		'producto/:slug/':'producto_single',
		'*notFound': 'notFound',
	},
	initialize : function () {
		this.collection_pagina=new Loviz.Collections.Paginas()
  	},
	root : function () {
		var self = this;
		var slug = 'home'
		var modelo = this.collection_pagina.findWhere({slug:slug})
		if (modelo===undefined) {
			window.models.pagina.fetch({
				data:$.param({slug:slug})
			}).done(function () {
				window.views.pagina.render();
			});	
		}else{
			window.views.pagina.render();
		}
		this.collection_pagina.add([window.models.pagina])
	},
	carro : function () {
		window.views.carro.render()
	},
	pagina: function () {
	},
	usuario : function () {		
	},
	catalogo : function (slug) {
		window.views.catalogo.render();
		window.views.catalogo.mostrar_productos(slug);
		window.views.catalogo.crear_filtro_categoria(slug);
		window.views.catalogo.crear_filtros(slug);
	},
	catalogo_categoria:function (slug) {
		window.views.catalogo.render();
		window.views.catalogo.mostrar_productos(slug);
		window.views.catalogo.crear_filtros(slug);
		//console.log('categoria '+ categoria)
	},
	catalogo_seccion:function (slug) {
		window.views.catalogo.render();
		window.views.catalogo.mostrar_productos(slug);
		window.views.catalogo.crear_filtros();	
	},
	producto_single : function (slug) {
		var modelo = window.collections.productos_single.findWhere({slug:slug})
		var	model_producto_single = new Loviz.Models.Producto_single();

		window.views.producto_single = new Loviz.Views.Producto_single({
    		model : model_producto_single
    	});
		if (modelo===undefined) {
    		model_producto_single.buscar(slug);
    		window.collections.productos_single.add(model_producto_single);
		}else{
			model_producto_single.set(modelo.toJSON())
		}
	},
	notFound:function () {
		console.log('no hay pagina')
	},
});