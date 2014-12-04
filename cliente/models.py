from django.db import models
from django.contrib.auth.models import User as User
from catalogo.models import Producto,ProductoVariacion

# Create your models here.
class Cliente(models.Model):
	GENEROS = (('Hombre','hombre'),('Mujer','mujer'),)
	usuario = models.ForeignKey(User,related_name='cliente', null=True,blank=True,unique=True)
	genero = models.CharField(max_length=100,blank=True,null=True,choices=GENEROS)
	dni = models.CharField(max_length=10,blank=True,null=True)
	telefono = models.CharField(max_length=11,blank=True,null=True)
    
class Direccion(models.Model):
	TIPO = (('envio','Direccion de envio'),('facturacion','Direccion de Facturacion'))
	usuario = models.ForeignKey(User,related_name='direcciones', null=True,blank=True)
	tipo = models.CharField(max_length=100,blank=True,null=True,choices=TIPO)
	departamento = models.CharField(max_length=100,blank=True,null=True)
	provincia = models.CharField(max_length=100,blank=True,null=True)
	distrito = models.CharField(max_length=100,blank=True,null=True)
	direccion = models.CharField(max_length=100,blank=True,null=True)
	codigo_postal = models.CharField(max_length=20,blank=True,null=True)

class Comentario(models.Model):
	producto = models.ForeignKey(Producto)
	variacion = models.ForeignKey(ProductoVariacion,blank=True,null=True)
	usuario = models.ForeignKey(User, null=True,blank=True)
	verificado = models.BooleanField(default=False)
	valoracion = models.PositiveIntegerField(default=0)
	comentario = models.TextField()
	creado = models.DateTimeField(auto_now_add=True)
	email_invitado = models.CharField(max_length=100,blank=True,null=True)

	def get_usuario_id(self):
		if self.usuario:
			return self.usuario.pk