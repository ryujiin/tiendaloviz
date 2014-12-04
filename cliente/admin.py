from django.contrib import admin
from models import *

class ComentarioAdmin(admin.ModelAdmin):
	list_display = ('id','usuario','creado',)

# Register your models here.
admin.site.register(Cliente)
admin.site.register(Direccion)
admin.site.register(Comentario,ComentarioAdmin)