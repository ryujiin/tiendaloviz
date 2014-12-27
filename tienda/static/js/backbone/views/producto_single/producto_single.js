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
	    this.add_comentarios();
	    this.$el.removeClass();	    
	    this.$el.addClass('producto_single');
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
				debugger;
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
	},
	add_comentarios:function () {
		var self = this;
		var coleccion = new Loviz.Collections.Comentarios();
		coleccion.fetch({
			data:$.param({producto:this.model.id})
		}).done(function () {
			self.add_estrellas(coleccion);
		})
	},
	add_estrellas:function (coleccion) {
		var num = coleccion.length;
		var valor = 0;
		coleccion.forEach(function (modelo) {
			valor = valor + modelo.toJSON().valoracion;
		});
		var estrellas = Math.round(valor/num)
		var model_estrella = new Loviz.Models.Estrellas();
		var view_estrella = new Loviz.Views.Estrellas({model:model_estrella});
		var estre_array = {};
		for (var i = 0; i < 5; i++) {
			if (estrellas>i) {
				estre_array['estrella'+i]=true;
			}else{
				estre_array['estrella'+i]=false;
			}
		};
		model_estrella.set({num_coment : num,valor_coment : valor , estrellas : estre_array});
		this.$(".reviews").append(view_estrella.$el);
	}
});