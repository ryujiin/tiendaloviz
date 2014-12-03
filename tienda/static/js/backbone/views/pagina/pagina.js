Loviz.Views.Pagina = Backbone.View.extend({
	el:$('#contenido'),
	template : swig.compile($("#pagina_template").html()),
	events :{
	},
	initialize: function () {
		var self = this;
		//this.listenTo(this.model, "change", this.render, this);
	},
	render:function () {
		var modelo = this.model.toJSON();
		var html = this.template(modelo);
	    this.$el.html(html);
	    this.rellenar_pag();
	},
	rellenar_pag:function () {
		this.llenar_bloques();
	},
	llenar_bloques:function () {
		var self=this;
		var id = this.model.toJSON().id
		this.coleccion_bloques = new Loviz.Collections.Bloques()
		this.coleccion_bloques.fetch({
			data:$.param({pagina:id})
		}).done(function () {
			self.coleccion_bloques.forEach(self.addbloque,self);
		});
	},
	addbloque:function (bloque) {
		var views_bloque = new Loviz.Views.Bloque({model:bloque});
	}
})
