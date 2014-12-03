from django.contrib import admin
from models import *
# Register your models here.

class PaginaAdmin(admin.ModelAdmin):
	list_display = ('id','titulo','slug')

admin.site.register(Menu)
admin.site.register(Bloque)
admin.site.register(Pagina,PaginaAdmin)
admin.site.register(SeccionesPagina)
admin.site.register(Carrusel)

