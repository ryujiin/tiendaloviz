Loviz.Views.Formu_envio = Backbone.View.extend({
  template: swig.compile($("#formulario_envio_template").html()),
  events:{
    'change #departamento_envio':'seleccionar_provincia',
    'change #provincia_envio':'seleccionar_distrito',
    'change #distrito_envio':'enviar_formu',

  },
  initialize: function () {
    this.$el = $('#formu_envio');
    this.render();
    this.buscar_region();
    this.mostrarse();
    this.listenTo(window.models.carro, "change", this.mostrarse, this);
  },

  render: function () {
    var modelo = this.model.toJSON();
    var html = this.template(modelo);
    this.$el.html(html);
    this.mostrarse();
  },
  buscar_region:function () {
    $.get('/api/ubigeo/').done(function (data) {
      $.each(data,function(i,item){
        self.$("#departamento_envio").append("<option value='"+item.id+"'>"+item.name+"</option>")
      })
    })
  },
  seleccionar_provincia:function () {
    $('#provincia_envio').empty();
    $('#distrito_envio').empty();

    var region = this.$('#departamento_envio').val()
    var self = this;
    $.get('/api/ubigeo/?region='+region).done(function (data) {
      $("#provincia_envio").append("<option>Por favor seleccione</option>")
      $.each(data,function(i,item){
        self.$("#provincia_envio").append("<option value='"+item.id+"'>"+item.name+"</option>")
      })
    })
  },
  seleccionar_distrito:function () {
    $('#distrito_envio').empty();
    var region = this.$('#provincia_envio').val()
    var self = this;
    $.get('/api/ubigeo/?region='+region).done(function (data) {
      $("#distrito_envio").append("<option>Por favor seleccione</option>")
      $.each(data,function(i,item){
        self.$("#distrito_envio").append("<option value='"+item.id+"'>"+item.name+"</option>");
      });
    })
  },
  enviar_formu:function () {
    var departamento = $('#departamento_envio').val()
    var provincia = $('#provincia_envio').val()
    var distrito = $('#distrito_envio').val()
    if (window.models.usuario.toJSON().id>0) {
      var model_direccion = new Loviz.Models.Direccion();
      model_direccion.set({
        tipo:'envio',
        departamento:departamento,
        provincia:provincia,
        distrito:distrito,
        usuario:window.models.usuario.toJSON().id
      });
      model_direccion.save();
      debugger;
    }else{
      debugger;
    }
  },
  mostrarse:function() {
    var lineas = window.models.carro.toJSON().lineas
    if (lineas===0) {
      this.$el.hide();
    }else{
      this.$el.show()
    }
  }
});