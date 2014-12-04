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
		this.llenar_carruseles();
	},
	llenar_bloques:function () {
		var self=this;
		var id = this.model.toJSON().id
		this.model.toJSON().bloques.forEach(self.addbloque,self);
	},
	addbloque:function (bloque) {
		var modelo = new Loviz.Models.Bloque();
		modelo.set(bloque)
		var views_bloque = new Loviz.Views.Bloque({model:modelo});
	},
})
