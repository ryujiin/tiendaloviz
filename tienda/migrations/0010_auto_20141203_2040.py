# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0009_bloque_link'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bloque',
            old_name='nombre',
            new_name='titulo',
        ),
    ]
