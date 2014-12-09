Loviz.Views.Estrellas = Backbone.View.extend({
    events: {
    },
    template: swig.compile($("#estrellas_template").html()),
    
    initialize: function () {
        this.listenTo(this.model, "change", this.render, this);
    },
    
    render: function () {
        var album = this.model.toJSON()
        var html = this.template(album);
        this.$el.html(html);
        return this;
    },
});