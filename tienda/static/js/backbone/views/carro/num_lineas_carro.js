Loviz.Views.Num_lineas_carro = Backbone.View.extend({
	template : swig.compile($("#num_lineas_carro_template").html()),
	events: {
	},
	initialize : function () {
		this.$el = $(".carro .subtitulo");
	    this.listenTo(this.model, "change", this.render, this);
		this.render();
		debugger;
	},
	render:function () {
		var carro = this.model.toJSON()
	    var html = this.template(carro);
	    this.$el.html(html);
	}
});