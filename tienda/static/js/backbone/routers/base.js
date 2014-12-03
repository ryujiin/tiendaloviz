Loviz.Routers.Base = Backbone.Router.extend({
	routes : {
		"" : "root",
		'carro/':'carro',
		'pagina/:slug/':'pagina',
		'user/:slug/':'usuario',
		'catalogo/:slug/':'catalogo',
		'producto/:slug/':'producto',
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
	},
	producto : function () {
	},
	notFound:function () {
		console.log('no hay pagina')
	},
})