from rest_framework import serializers
from models import *

class PaginaSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pagina