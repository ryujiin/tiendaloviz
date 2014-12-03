# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0003_seccionespagina_parte'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pagina',
            name='menu',
            field=models.ForeignKey(blank=True, to='tienda.Menu', null=True),
            preserve_default=True,
        ),
    ]
