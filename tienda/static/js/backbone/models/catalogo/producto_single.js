Loviz.Models.Producto_single = Backbone.Model.extend({
	urlRoot : '/api/productoSingle/',
	buscar :function (slug) {
		this.fetch({
			data:$.param({slug:slug})
		})
	}
});