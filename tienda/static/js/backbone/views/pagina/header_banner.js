Loviz.Views.Header_banner = Backbone.View.extend({
	el:$('banner_header'),
	
    template: swig.compile($("#bloque_limpio").html()),

	events: {
	},
	initialize : function () {
		var self = this;
		this.render();
	},
	render:function () {
		var html = this.template();
        this.$el.html(html);
	},
});