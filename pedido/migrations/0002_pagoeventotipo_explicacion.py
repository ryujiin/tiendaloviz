# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pedido', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='pagoeventotipo',
            name='explicacion',
            field=models.TextField(default='', verbose_name=b'Explicacion'),
            preserve_default=False,
        ),
    ]
