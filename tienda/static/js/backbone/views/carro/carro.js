Loviz.Views.Carro = Backbone.View.extend({
	el:$('#contenido'),
	template : swig.compile($("#carro_template").html()),
	events :{
	},
	initialize: function () {
		var self = this;
	},
	render:function () {
		var modelo = this.model.toJSON();
		var html = this.template(modelo);
	    this.$el.html(html);
	},
})
