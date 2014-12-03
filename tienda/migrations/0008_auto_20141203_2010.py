# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
import tienda.models


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0007_bloqueimagen'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='bloqueimagen',
            name='bloque',
        ),
        migrations.DeleteModel(
            name='BloqueImagen',
        ),
        migrations.AddField(
            model_name='bloque',
            name='foto',
            field=models.ImageField(null=True, upload_to=tienda.models.url_imagen_pr, blank=True),
            preserve_default=True,
        ),
        migrations.AddField(
            model_name='bloque',
            name='template',
            field=models.CharField(max_length=120, null=True, blank=True),
            preserve_default=True,
        ),
    ]
