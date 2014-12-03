# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import tienda.models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0006_bloque_nombre_interno'),
    ]

    operations = [
        migrations.CreateModel(
            name='BloqueImagen',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('tagname', models.CharField(max_length=120, null=True, blank=True)),
                ('foto', models.ImageField(upload_to=tienda.models.url_imagen_pr)),
                ('creado', models.DateTimeField(auto_now_add=True)),
                ('actualizado', models.DateTimeField(auto_now=True)),
                ('bloque', models.ForeignKey(related_name='imagenes_bloque', to='tienda.Bloque')),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
