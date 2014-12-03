# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0002_auto_20141203_1648'),
    ]

    operations = [
        migrations.AddField(
            model_name='seccionespagina',
            name='parte',
            field=models.CharField(max_length=120, null=True, blank=True),
            preserve_default=True,
        ),
    ]
