# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0008_remove_comentario_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='comentario',
            name='email_invitado',
            field=models.CharField(max_length=100, null=True, blank=True),
            preserve_default=True,
        ),
    ]
