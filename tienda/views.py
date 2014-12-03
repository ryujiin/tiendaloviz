from django.shortcuts import render
from django.views.generic import TemplateView
from models import *

class HomeView(TemplateView):
	template_name = "layout.html"


from rest_framework import viewsets
from django.http import HttpResponse, Http404
from serializers import *

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class PaginaViewsets(viewsets.ReadOnlyModelViewSet):
	serializer_class = PaginaSerializer

	def get_queryset(self):
		queryset = Pagina.objects.all()
		return queryset

class PaginaViewsApi(APIView):
	def get_object(self):
		slug = self.request.QUERY_PARAMS.get('slug', None)
		try:
			return Pagina.objects.get(slug=slug)
		except Pagina.DoesNotExist:
			raise Http404

	def get(self,request,format=None):
		pagina = self.get_object()
		serializer = PaginaSerializer(pagina)
		return Response(serializer.data,status=status.HTTP_200_OK)

class PaginaDetailViews(APIView):
	def get_object(self,pk):
		try:
			return Carro.objects.get(pk=pk)
		except Carro.DoesNotExist:
			raise Http404

	def get(self, request, pk, format=None):
		carro = self.get_object(pk)
		serializer = CarroSerializer(carro)
		return Response(serializer.data)

	def put(self, request, pk, format=None):
		carro = self.get_object(pk)
		serializer = CarroSerializer(carro,data=request.DATA)
		if serializer.is_valid():
			serializer.save()
			return Response (serializer.data)
		return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
