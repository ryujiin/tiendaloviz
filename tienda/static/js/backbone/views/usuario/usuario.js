Loviz.Views.Usuario = Backbone.View.extend({
	el:$('#contenido'),
	template : swig.compile($("#usuario_template").html()),
	events :{
	},
	initialize: function () {
		var self = this;
	},
	render:function () {
		var html = this.template();
	    this.$el.html(html);
	},
})