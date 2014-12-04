# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0016_auto_20141204_1236'),
    ]

    operations = [
        migrations.RenameField(
            model_name='carrusel',
            old_name='filtro1',
            new_name='filtro',
        ),
        migrations.RenameField(
            model_name='carrusel',
            old_name='filtro2',
            new_name='items_mostrar',
        ),
        migrations.RemoveField(
            model_name='carrusel',
            name='filtro3',
        ),
    ]
