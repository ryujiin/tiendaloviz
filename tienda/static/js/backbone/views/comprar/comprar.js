Loviz.Views.Comprar = Backbone.View.extend({
	el:$('#contenido'),
	template : swig.compile($("#comprar_template").html()),
	events :{
	},
	initialize: function () {
		var self = this;
		this.render();
	},
	render:function () {		
		var html = this.template();
		this.$el.html(html);
		this.rellenar();
	},
	rellenar:function () {
		//this.cheackout_login = new Loviz.Views.Comprar_bloque();
		//this.cheackout_login.titulo = 'Identificar Cliente'
		//this.$('.bloques').append(this.cheackout_login.render().el)
	}
});