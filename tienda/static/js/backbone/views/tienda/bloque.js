Loviz.Views.Bloque = Backbone.View.extend({
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
	},
	sacar_datos:function () {
		var teme = this.model.toJSON().template;
		this.template = swig.compile($(teme).html());
		this.render();
	}
})