# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tienda', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SeccionesPagina',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('nombre', models.CharField(max_length=120)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
        migrations.RemoveField(
            model_name='menu',
            name='bloque',
        ),
        migrations.AddField(
            model_name='menu',
            name='seccion',
            field=models.ForeignKey(blank=True, to='tienda.SeccionesPagina', null=True),
            preserve_default=True,
        ),
    ]
