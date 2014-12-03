# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0011_bloque_css'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bloque',
            name='pagina',
            field=models.ForeignKey(related_name='bloques', blank=True, to='tienda.Pagina', null=True),
            preserve_default=True,
        ),
    ]
