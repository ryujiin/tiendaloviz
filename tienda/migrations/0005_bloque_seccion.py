# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0004_auto_20141203_1658'),
    ]

    operations = [
        migrations.AddField(
            model_name='bloque',
            name='seccion',
            field=models.ForeignKey(blank=True, to='tienda.SeccionesPagina', null=True),
            preserve_default=True,
        ),
    ]
