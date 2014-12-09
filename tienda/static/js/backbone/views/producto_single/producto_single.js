Loviz.Views.Producto_single = Backbone.View.extend({
	el:$("#contenido"),
	events: {
		'click .thum_gale a' : 'nuevo_galeria',
		'click .addcart' : 'add_to_cart',
		'change .talla' : 'talla_seleccionada',
	},
	template: swig.compile($("#producto_single_template").html()),

	initialize: function () {
	    var self = this;
	    this.listenTo(this.model, "change", this.render, this);
	},
	render: function () {
	    var producto = this.model.toJSON();
	    var html = this.template(producto);
	    this.$el.html(html);
	    this.generar_galeria();
	    //this.crear_relacionados();
	},
	generar_galeria:function () {
		var galeria = new Loviz.Views.Galeria_producto_single({
			model:this.model
		});
	},
	aparecer:function (e) {
		if (e==='producto_single') {
			this.$el.show();
		}else{
			this.$el.hide();
		}
	},
	add_to_cart:function () {
		var linea = new Loviz.Models.Linea();
		var produ = this.model.toJSON().id;
		var varia = this.$('.formulario_producto .talla').val();
		if (varia !=='') {
			var carro = window.models.carro.toJSON().id;
			if (carro ===undefined) {
				debugger;
				window.models.carro.save()
				.done(function (data) {
					debugger
					linea.set({carro:data.id,producto:produ,variacion:varia,cantidad:1});
					linea.save().done(function () {
						var miniline = new Loviz.Views.Linea_addcart({model:linea})
						window.models.carro.fetch().done(function (data) {
							debugger;
						})
					})	
				})
			}else{
				linea.set({carro:carro,producto:produ,variacion:varia,cantidad:1});
				linea.save().done(function () {
					var miniline = new Loviz.Views.Linea_addcart({model:linea})
					window.models.carro.fetch();
				})
			}
		}else{
			this.elige_talla();
		}
	},
	elige_talla:function () {
		this.$('.formulario_producto .talla').addClass('no_seleccionado');
	},
	talla_seleccionada:function () {
		this.$('.formulario_producto .talla').removeClass('no_seleccionado');
		this.$('.precios .visible').removeClass('visible');
		var varia = this.$('.formulario_producto .talla').val();
		this.$('.precios .'+varia).addClass('visible');
	},
	crear_relacionados:function () {
		var self = this;
		if (window.collections.catalogo.length===0) {
			window.collections.catalogo.fetch().done(function() {
				self.agregar_relacionados();
			})
		}else{
			self.agregar_relacionados();
		}
	},
	agregar_relacionados:function () {
		var self = this;
		window.collections.catalogo.forEach(function(modelo){
			if (modelo.toJSON().id!==self.model.toJSON().id) {
				var pro_rela = new Loviz.Views.ProductoLista({model:modelo});
				self.$('.productos').append(pro_rela.render().el);	
			};			
		});
	}
});