from rest_framework import serializers
from models import *

class BloqueSerializer(serializers.ModelSerializer):
	seccion = serializers.CharField(read_only=True)
	class Meta:
		model = Bloque
		fields = ('id','titulo','cuerpo','foto','template','link','css','pagina','seccion')

class PaginaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pagina
		fields=('id','titulo','slug','activo','cuerpo','menu',)