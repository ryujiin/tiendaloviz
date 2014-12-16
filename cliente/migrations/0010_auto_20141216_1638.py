# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0009_comentario_email_invitado'),
    ]

    operations = [
        migrations.AlterField(
            model_name='direccion',
            name='departamento',
            field=models.ForeignKey(related_name='departamento', blank=True, to='ubigeo.Ubigeo', max_length=100, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='direccion',
            name='distrito',
            field=models.ForeignKey(related_name='direccion', blank=True, to='ubigeo.Ubigeo', max_length=100, null=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='direccion',
            name='provincia',
            field=models.ForeignKey(related_name='provincia', blank=True, to='ubigeo.Ubigeo', max_length=100, null=True),
            preserve_default=True,
        ),
    ]
