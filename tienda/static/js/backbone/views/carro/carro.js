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
	    this.addLineas();
	    this.addTotal();
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
	}
})
