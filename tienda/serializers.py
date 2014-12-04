from rest_framework import serializers
from models import *

class BloqueSerializer(serializers.ModelSerializer):
	seccion = serializers.CharField(read_only=True)
	class Meta:
		model = Bloque
		fields = ('id','nombre_interno','titulo','cuerpo','foto','template','link','css','pagina','seccion',)

class CarruselSerializer(serializers.ModelSerializer):
	seccion = serializers.CharField(read_only=True)
	class Meta:
		model = Carrusel
		fields = ('id','pagina','nombre_interno','cuerpo','seccion','css','template','modelo','filtro1','filtro2','filtro3')

class PaginaSerializer(serializers.ModelSerializer):
	bloques = BloqueSerializer(many=True)
	class Meta:
		model = Pagina
		fields=('id','titulo','slug','activo','cuerpo','menu','bloques')