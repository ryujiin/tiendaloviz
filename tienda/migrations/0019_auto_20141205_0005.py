# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0018_auto_20141204_2349'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloque',
            name='nombre_interno',
            field=models.CharField(unique=True, max_length=120),
            preserve_default=True,
        ),
    ]
