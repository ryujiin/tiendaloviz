from django.db import models
from django.template.defaultfilters import slugify
from catalogo.models import Categoria


class Menu(models.Model):
	nombre = models.CharField(max_length=120,blank=True,null=True)
	seccion = models.ForeignKey('SeccionesPagina',blank=True,null=True)

def url_imagen_pr(self,filename):
	url = "bloque/imagen/%s" % (filename)
	return url

class Bloque(models.Model):
	titulo = models.CharField(max_length=120,blank=True,null=True)
	nombre_interno = models.CharField(max_length=120,unique=True,blank=True,null=True)
	pagina = models.ForeignKey('Pagina',blank=True,null=True,related_name='bloques')
	activo = models.BooleanField(default=True)
	cuerpo = models.TextField(blank=True,null=True)
	seccion = models.ForeignKey('SeccionesPagina',blank=True,null=True)
	foto = models.ImageField(upload_to=url_imagen_pr,blank=True,null=True)
	template = models.CharField(max_length=120,blank=True,null=True)
	link = models.CharField(max_length=120,blank=True,null=True)
	css = models.CharField(max_length=120,blank=True,null=True)

	def __unicode__(self):
		return self.nombre_interno

	def save(self, *args, **kwargs):
		self.nombre_interno = slugify(self.nombre_interno)
		super(Bloque, self).save(*args, **kwargs)

class Carrusel(models.Model):
	pagina = models.ForeignKey('Pagina',blank=True,null=True)
	titulo = models.CharField(max_length=120,blank=True,null=True)
	nombre_interno = models.CharField(max_length=120,unique=True,blank=True,null=True)
	activo = models.BooleanField(default=True)
	cuerpo = models.TextField(blank=True,null=True)
	seccion = models.ForeignKey('SeccionesPagina',blank=True,null=True)
	modelo = models.CharField(max_length=120,unique=True,blank=True,null=True)
	filtro1=models.CharField(max_length=120,unique=True,blank=True,null=True)
	filtro2=models.CharField(max_length=120,unique=True,blank=True,null=True)
	filtro3=models.CharField(max_length=120,unique=True,blank=True,null=True)
	css = models.CharField(max_length=120,blank=True,null=True)

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