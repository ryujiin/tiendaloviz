# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0005_bloque_seccion'),
    ]

    operations = [
        migrations.AddField(
            model_name='bloque',
            name='nombre_interno',
            field=models.CharField(max_length=120, unique=True, null=True, blank=True),
            preserve_default=True,
        ),
    ]
