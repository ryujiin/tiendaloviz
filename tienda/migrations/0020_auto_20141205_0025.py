# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import tienda.models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0019_auto_20141205_0005'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImagenesWeb',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=120)),
                ('imagen', models.ImageField(null=True, upload_to=tienda.models.url_imagen_pr, blank=True)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='bloque',
            name='pagina',
        ),
        migrations.RemoveField(
            model_name='bloque',
            name='seccion',
        ),
        migrations.RemoveField(
            model_name='bloque',
            name='template',
        ),
        migrations.DeleteModel(
            name='Bloque',
        ),
        migrations.RemoveField(
            model_name='carrusel',
            name='pagina',
        ),
        migrations.RemoveField(
            model_name='carrusel',
            name='seccion',
        ),
        migrations.RemoveField(
            model_name='carrusel',
            name='template',
        ),
        migrations.DeleteModel(
            name='Carrusel',
        ),
        migrations.RemoveField(
            model_name='menu',
            name='pagina',
        ),
        migrations.RemoveField(
            model_name='menu',
            name='seccion',
        ),
        migrations.RemoveField(
            model_name='menu',
            name='template',
        ),
        migrations.DeleteModel(
            name='Menu',
        ),
        migrations.RemoveField(
            model_name='pagina',
            name='template',
        ),
        migrations.DeleteModel(
            name='Pagina',
        ),
        migrations.DeleteModel(
            name='SeccionesPagina',
        ),
        migrations.DeleteModel(
            name='TemplatePagina',
        ),
    ]
