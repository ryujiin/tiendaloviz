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
	},
})
