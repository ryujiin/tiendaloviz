# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0005_auto_20141103_1859'),
    ]

    operations = [
        migrations.AlterField(
            model_name='direccion',
            name='usuario',
            field=models.ForeignKey(related_name=b'direcciones', blank=True, to=settings.AUTH_USER_MODEL, null=True),
        ),
    ]
