Loviz.Routers.Base = Backbone.Router.extend({
	routes : {
		"" : "root",
		'carro/':'carro',
		'pagina/:slug/':'pagina',
		'user/:slug/':'usuario',
		'catalogo/:slug/':'catalogo',
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
	catalogo : function () {
		window.views.catalogo.render();
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
})