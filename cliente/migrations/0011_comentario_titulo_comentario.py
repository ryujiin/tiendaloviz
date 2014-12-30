# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0010_auto_20141216_1638'),
    ]

    operations = [
        migrations.AddField(
            model_name='comentario',
            name='titulo_comentario',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
    ]
