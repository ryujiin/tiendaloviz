# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0012_auto_20141203_2059'),
    ]

    operations = [
        migrations.CreateModel(
            name='Carrusel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('titulo', models.CharField(max_length=120, null=True, blank=True)),
                ('nombre_interno', models.CharField(max_length=120, unique=True, null=True, blank=True)),
                ('activo', models.BooleanField(default=True)),
                ('cuerpo', models.TextField(null=True, blank=True)),
                ('modelo', models.CharField(max_length=120, unique=True, null=True, blank=True)),
                ('filtro1', models.CharField(max_length=120, unique=True, null=True, blank=True)),
                ('filtro2', models.CharField(max_length=120, unique=True, null=True, blank=True)),
                ('filtro3', models.CharField(max_length=120, unique=True, null=True, blank=True)),
                ('css', models.CharField(max_length=120, null=True, blank=True)),
                ('pagina', models.ForeignKey(blank=True, to='tienda.Pagina', null=True)),
                ('seccion', models.ForeignKey(blank=True, to='tienda.SeccionesPagina', null=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
