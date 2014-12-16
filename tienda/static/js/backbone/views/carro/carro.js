Loviz.Views.Carro = Backbone.View.extend({
	el:$('#contenido'),
	template : swig.compile($("#carro_template").html()),
	events :{
		'click .procesar':'go_procesar',
	},
	initialize: function () {
		var self = this;
	    this.listenTo(this.model, "change", this.verificar, this);
	},
	render:function () {
		var modelo = this.model.toJSON();
		var html = this.template(modelo);
	    this.$el.html(html);
	    this.addLineas();
	    this.addTotal();
	    this.$el.addClass('carro');	    
	    var num_lineas = new Loviz.Views.Num_lineas_carro({model:this.model});
	    var formu_envio = new Loviz.Views.Formu_envio();
	    if (window.models.usuario.direcciones) {
	    	formu_envio.model=window.models.usuario.direcciones.first();
	    };
	},
	verificar:function () {
		if (this.model.toJSON().lineas===0) {
			this.render();
		};
	},
	addLineas:function () {
		var lineas = this.model.toJSON().lineas;
		var self = this;
		if (lineas > 0) {
			var colecion = new Loviz.Collections.Lineas();
			colecion.fetch({
				data:$.param({carro:this.model.id})
			}).done(function () {
				colecion.forEach(self.addLinea,self);
			})
		};
	},
	addLinea:function (linea) {
		var viewLinea = new Loviz.Views.Linea_carro({model:linea});
		this.$('#lineas_carro').append(viewLinea.render().el)
	},
	addTotal:function(){
		var viewTotal = new Loviz.Views.Carro_total({model:this.model});
	},
	go_procesar:function () {
		window.routers.base.navigate('/comprar/', {trigger:true});
	}
})
