# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0014_carrusel_template'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carrusel',
            name='pagina',
            field=models.ForeignKey(related_name='carruseles', blank=True, to='tienda.Pagina', null=True),
            preserve_default=True,
        ),
    ]
