from django.db import models
from django.template.defaultfilters import slugify
from catalogo.models import Categoria


class Menu(models.Model):
	nombre = models.CharField(max_length=120,blank=True,null=True)
	seccion = models.ForeignKey('SeccionesPagina',blank=True,null=True)

class Bloque(models.Model):
	nombre = models.CharField(max_length=120,blank=True,null=True)
	nombre_interno = models.CharField(max_length=120,unique=True,blank=True,null=True)
	pagina = models.ForeignKey('Pagina',blank=True,null=True)
	activo = models.BooleanField(default=True)
	cuerpo = models.TextField(blank=True,null=True)
	seccion = models.ForeignKey('SeccionesPagina',blank=True,null=True)

	def __unicode__(self):
		return self.nombre_interno

class Pagina(models.Model):
	titulo = models.CharField(max_length=120,blank=True,null=True)
	slug = models.CharField(max_length=120,unique=True,blank=True,null=True)
	menu = models.ForeignKey('Menu',blank=True,null=True)
	activo = models.BooleanField(default=True)
	cuerpo = models.TextField(blank=True,null=True)

	def save(self, *args, **kwargs):
		self.slug = slugify(self.slug)
		super(Pagina, self).save(*args, **kwargs)

	def __unicode__(self):
		return "%s - %s" %(self.titulo,self.slug)

class SeccionesPagina(models.Model):
	nombre = models.CharField(max_length=120)
	parte = models.CharField(max_length=120,blank=True,null=True)

	def __unicode__(self):
		return self.nombre