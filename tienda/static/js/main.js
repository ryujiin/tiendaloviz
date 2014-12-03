//Loviz Tienda
$(document).ready(function(){
	console.log('main.js loaded');
    
    //Urls
    window.routers.base = new Loviz.Routers.Base();   

    //Vista Tienda
    window.views.tienda = new Loviz.Views.Tienda( $('body') );

    //Modelos de tienda
    window.models.pagina = new Loviz.Models.Pagina();

    //Colecciones de tienda
    window.collections.bloques = new Loviz.Collections.Bloques();

    //Vistas de pagina
    window.views.pagina = new Loviz.Views.Pagina({
        model:window.models.pagina
    });
    window.views.carro = new Loviz.Views.Carro();

    Backbone.history.start({
        pushState:true,
    });

    //Funcion para el CRF
    function getCookie(name){
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?  
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }    
    $.ajaxSetup({
        beforeSend: function(xhr, settings) {
            if (!(/^http:.*/.test(settings.url) || /^https:.*/.test(settings.url))) {
                // Only send the token to relative URLs i.e. locally.
                xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
            }
        } 
    });
});