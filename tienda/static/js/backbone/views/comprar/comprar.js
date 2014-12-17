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
		this.identificarse();
		this.envio();
		this.resumen();
	},
	identificarse:function  () {
		if (window.models.usuario.id>0) {
			this.$('.seccion.identificar .panel-body').hide();
		};
	},
	envio:function () {
		this.formu_envio = new Loviz.Views.Formu_envio();
	    if (window.models.usuario.direcciones) {
	    	this.formu_envio.model=window.models.usuario.direcciones.first();
	    };
	    this.formu_envio.render();
	    this.$('.envio .panel-body').append(this.formu_envio.$el);
	},
	resumen:function () {
		this.$('.resumen').addClass('carro');
		window.views.carro.addLineas('pagar');
		window.views.carro.addTotal('pagar');
	}
});