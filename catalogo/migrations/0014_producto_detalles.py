# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('catalogo', '0013_material_materialesproductos'),
    ]

    operations = [
        migrations.AddField(
            model_name='producto',
            name='detalles',
            field=models.TextField(null=True, blank=True),
            preserve_default=True,
        ),
    ]
